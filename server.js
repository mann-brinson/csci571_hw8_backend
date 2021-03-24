// Import statements
var express = require('express');
var cors = require('cors');
const axios = require('axios');

// Create app
var app = express();
app.use(cors());
app.set('json spaces', 2);

// ROUTES
app.get('/', function(req, res) {

    ////  GOAL: For each list_type, construct url, hit the endpoint and get 20 items
    //// PARAMETERS
    var entity_types = ["movie", "tv"]
    var list_types = ["popular", "top_rated", "trending"]

    var head_el_pair = ["movie", "now_playing"]
    var api_key = "2e510746ca28d7041056c7e57108de4c"
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

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORSenabled for all origins!'})
    });

// LOGGING
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})