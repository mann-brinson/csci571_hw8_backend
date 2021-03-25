// Import statements
var express = require('express');
var cors = require('cors');
const axios = require('axios');

// Create app
var app = express();
app.use(cors());
app.set('json spaces', 2);

//GLOBAL PARAMETERS
var api_key = "2e510746ca28d7041056c7e57108de4c"

// GLOBAL FUNCTIONS
function buildReq(url) {
    //Construct a request object for each url
    const req = axios.get(url);
    return req
}

//////////// ROUTES
//// HOME
app.get('/', function(req, res) {

    ////  GOAL: For each list_type, construct url, hit the endpoint and get 20 items
    //// PARAMETERS
    var entity_types = ["movie", "tv"]
    var list_types = ["popular", "top_rated", "trending"]

    var head_el_pair = ["movie", "now_playing"]
    // var api_key = "2e510746ca28d7041056c7e57108de4c"
    // TODO: Get now_playing separately
    
    //Construct entity_listtype pairs, used in url construction later
    var entity_listtypes = []
    entity_types.forEach((entity) => {
        list_types.forEach((listtype) => {
            entity_listtypes.push([entity, listtype])
        })
    }) 
    console.log(entity_listtypes)

    ////  FUNCTIONS
    function buildURL(api_key, entity_type, list_type) {
        //For each list_type, build a url
        if (list_type != "trending") {
            // var url_components = ["https://api.themoviedb.org/3/movie/", list_type, "?api_key=", api_key]
            var url_full = `https://api.themoviedb.org/3/${entity_type}/${list_type}?api_key=${api_key}`
        } else {
            // var url_components = ["https://api.themoviedb.org/3/", list_type, "/movie/day?api_key=", api_key]
            var url_full = `https://api.themoviedb.org/3/${list_type}/${entity_type}/day?api_key=${api_key}`
        }
        // url_full = url_components.join('')
        return url_full
    }

    function buildReq(url) {
        //Construct a request object for each url
        const req = axios.get(url);
        return req
    }

    function extract_details(obj, entity_type, list_type) {
        //Extract only necessary features from movie_obj
        var result = {}
        result["id"] = obj.id

        if (entity_type == "movie") {
            result["name"] = obj.title
        } else {
            result["name"] = obj.name
        }

        //Extract backdrop_path for the "now_playing" movies
        if (list_type == "now_playing") {
            result["backdrop_path"] = "https://image.tmdb.org/t/p/original" + obj.backdrop_path
        } else {
            result["poster_path"] = "https://image.tmdb.org/t/p/w500" + obj.poster_path
        }
        return result
    }

    //// DRIVER
    //Body lists
    url_list = entity_listtypes.map(el_pair => {
        return buildURL(api_key, el_pair[0], el_pair[1])
    })
    requests = url_list.map(url => {
        return buildReq(url)
    })

    //Head list
    url_head = buildURL(api_key, head_el_pair[0], head_el_pair[1])
    request_head = buildReq(url_head)
    requests.push(request_head) //IMPORTANT: The last request is for head

    //WORKING
    //Send requests asynchronously, then process all responses
    axios.all(requests).then(axios.spread((...responses) => {

        //For each response, for each movie object, parse out the desired features
        // based on list_type (ex: "now_playing", "trending", ...)
        var output = {}

        //// BODY-LISTS
        responses.forEach((response, i) => {
            if (i < responses.length-1) { //Only look at body responses
                entity_type = entity_listtypes[i][0]
                list_type = entity_listtypes[i][1]
                const movie_list_extracted = []
                // console.log([entity_type, list_type]) //Works
    
                //INNER LOOP
                response.data.results.forEach((obj, j) => {
                    if (j < 20) { //Grab the top 20 movies/shows
                        result = extract_details(obj, entity_type, list_type)
                        movie_list_extracted.push(result)
                    }
                })
                
                //Associate the list_type with the extracted movies/tv_shows
                var obj_list = new Object()
                obj_list[list_type] = movie_list_extracted
                if (!(entity_type in output)) {
                    output[entity_type] = [obj_list]
                } else {
                    output[entity_type].push(obj_list)
                }
            }
        //// HEAD-LIST
        head_resp = responses[responses.length-1]

        //Extract movie features
        const movie_list_extracted = []
        response.data.results.forEach((obj, i) => {
            if (i < 5) { //Grab the top 5 movies/shows
                entity_type = head_el_pair[0]
                list_type = head_el_pair[1]
                result = extract_details(obj, entity_type, list_type)
                movie_list_extracted.push(result)
            }
        })

        //Associate list_type with extracted movies
        var obj_list = new Object()
        obj_list[list_type] = movie_list_extracted
        output["head"] = obj_list

        })
        res.send(output)

      })).catch(errors => {
        // react on errors.
      })
})

//// DETAILS PAGE
app.get('/watch/:entity/:tmdb_id', function (req, res) {

    // res.send(req.params.entity) //TEST: Show the url params
    //Get query parameters
    entity = req.params.entity
    tmdb_id = req.params.tmdb_id

    //Build requests
    url_detail = `https://api.themoviedb.org/3/${entity}/${tmdb_id}?api_key=${api_key}`
    url_video = `https://api.themoviedb.org/3/${entity}/${tmdb_id}/videos?api_key=${api_key}`
    url_credits = `https://api.themoviedb.org/3/${entity}/${tmdb_id}/credits?api_key=${api_key}`
    url_reviews = `https://api.themoviedb.org/3/${entity}/${tmdb_id}/reviews?api_key=${api_key}`
    urls = [["detail", url_detail], ["video", url_video],
            ["credits", url_credits], ["reviews", url_reviews]]
    // console.log(urls)

    requests = []
    urls.forEach((url) => {
        req = buildReq(url[1])
        requests.push(req)
    })

    // console.log("made it here")
    // res.send("made it here")
    
    //// PARSING FUNCTIONS
    // DETAIL 
    function parseDetail(obj, entity) {
        var result = {}
        if (entity == "movie") {
            result["name"] = obj.title
            result["release_date"] = obj.release_date
            result["runtime"] = obj.runtime
        } 
        else {
            result["name"] = obj.name
            result["first_air_date"] = obj.first_air_date
            result["runtime"] = obj.episode_run_time[0]
        }
        result["genres"] = obj.genres.map(item => item.name)
        result["spoken_languages"] = obj.spoken_languages.map(item => item.english_name)
        result["overview"] = obj.overview
        result["tagline"] = obj.tagline
        result["vote_average"] = obj.vote_average
        return result
    }

    // VIDEO
    function parseVideo(obj, entity) {
        var trailers = []
        var teasers = []
        obj.results.forEach((video) => {
            if (video.site == "YouTube") {
                if (video.type == "Trailer") {trailers.push(video)}
                else if (video.type == "Teaser") {teasers.push(video)}
            }
        })

        var result = {}
        if (trailers.length > 0) {
            result["site"] = trailers[0].site
            result["type"] = trailers[0].type
            result["name"] = trailers[0].name
            result["key"] = trailers[0].key
        }
        else if (teasers.length > 0) {
            result["site"] = trailers[0].site
            result["type"] = trailers[0].type
            result["name"] = trailers[0].name
            result["key"] = trailers[0].key
        }
        else {
            result["site"] = "YouTube"
            result["type"] = "Default"
            result["name"] = "No Video Found."
            result["key"] = "tzkWB85ULJY"
        }
        return result
    }
    
    // CREDITS
    function parseCredits(obj) {
        var result = []
        obj.cast.forEach((person) => {
            var record = {}
            record["id"] = person.id
            record["name"] = person.name
            record["character"] = person.character
            if (person.profile_path == null) {
                record["profile_path"] = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png"
            } else {
                record["profile_path"] = `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            }
            result.push(record)
        })
        return result
    }
    // REVIEWS
    function parseReviews(obj) {
        var result = []
        obj.results.forEach((review) => {
            var record = {}
            record["author"] = review.author
            record["content"] = review.content
            record["created_at"] = review.created_at
            record["url"] = review.url

            if (review.author_details.rating == null) {
                record["rating"] = 0
            } else {
                record["rating"] = Math.round(review.author_details.rating)
            }
            if (review.author_details.avatar_path == null) {
                record["avatar_path"] = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW8/ReviewsPlaceholderImage.jpg"
            } else {
                avatar_path = review.author_details.avatar_path
                if (avatar_path.substr(0, 5) == "https") {
                    record["avatar_path"] = avatar_path
                } else {
                    record["avatar_path"] = `https://image.tmdb.org/t/p/original${avatar_path}`
                }
            }
            result.push(record)
        })
        return result
    }

    axios.all(requests).then(axios.spread((...responses) => {
        //Parse desired features from each response,
        // based on the response type (ex: "detail", "credits", "reviews")
        var output = {}

        //// DETAIL
        obj = responses[0].data
        detail = parseDetail(obj, entity)
        output["detail"] = detail

        //// VIDEO
        obj = responses[1].data
        video = parseVideo(obj, entity)
        output["video"] = video

        //// CREDITS
        obj = responses[2].data
        credits = parseCredits(obj)
        output["credits"] = credits

        //// REVIEWS
        obj = responses[3].data
        reviews = parseReviews(obj)
        output["reviews"] = reviews

        // res.send("made it")
        res.send(output)

      })).catch(errors => {
        // react on errors.
      })

  })

//// PERSON PAGE
app.get('/person/:person_id', function (req, res) {
    // res.send(req.params.person_id) //TEST: Show the url params

    //Get query params
    person_id = req.params.person_id

    //Build requests
    url_person = `https://api.themoviedb.org/3/person/${person_id}?api_key=${api_key}`
    url_externalIds = `https://api.themoviedb.org/3/person/${person_id}/external_ids?api_key=${api_key}`
    urls = [["person", url_person], ["externalIds", url_externalIds]]

    requests = []
    urls.forEach((url) => {
        req = buildReq(url[1])
        requests.push(req)
    })

    //// PARSING FUNCTIONS
    function parsePerson(obj) {
        var result = {}

        if (obj["gender"] == 1) {result["gender"] = "female"}
        else if (obj["gender"] == 2) {result["gender"] = "male"}
        else {result["gender"] = "undefined"}

        if (obj.profile_path == null) {
            result["profile_path"] = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png"
        } else {
            result["profile_path"] = `https://image.tmdb.org/t/p/w500${obj.profile_path}`
        }

        result["birthday"] = obj.birthday
        result["name"] = obj.name
        result["homepage"] = obj.homepage
        result["also_known_as"] = obj.also_known_as
        result["known_for"] = obj.known_for_department
        result["biography"] = obj.biography
        return result
    }

    function parseExternalIds(obj) {
        var result = {}
        if (obj.imdb_id != null) {
            result.imdb_id = `https://www.imdb.com/name/${obj.imdb_id}`
        }
        if (obj.facebook_id != null) {
            result.facebook_id = `https://www.facebook.com/${obj.facebook_id}`
        }
        if (obj.instagram_id != null) {
            result.instagram_id = `https://www.instagram.com/${obj.instagram_id}`
        }
        if (obj.twitter_id != null) {
            result.instagram_id = `https://www.twitter.com/${obj.twitter_id}`
        }
        return result
    }

    axios.all(requests).then(axios.spread((...responses) => {
        //Parse desired features from each response,
        // based on the response type (ex: "person", "externalIds")
        var output = {}

        //// PERSON
        obj = responses[0].data
        person = parsePerson(obj)
        output["person"] = person

        //// EXTERNALIDS
        obj = responses[1].data
        externalIds = parseExternalIds(obj)
        output["externalIds"] = externalIds

        // res.send("made it")
        res.send(output)

      })).catch(errors => {
        // react on errors.
      })
})

// LOGGING
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})