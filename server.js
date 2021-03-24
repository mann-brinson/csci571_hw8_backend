// Import statements
var express = require('express');
var cors = require('cors');
const axios = require('axios');

// Create app
var app = express();
app.use(cors());

// ROUTES
app.get('/', function(req, res) {

    ////  GOAL: For each list_type, construct url, hit the endpoint and get 30 items
    var movie_lists = ["now_playing", "popular", "top_rated", "trending"]
    var tv_lists = [] //TODO

    ////  FUNCTIONS
    function buildURL(list_type, api_key) {
        //For each list_type, build a url
        if (list_type != "trending") {
            var url_components = ["https://api.themoviedb.org/3/movie/", list_type, "?api_key=", api_key]
        } else {
            var url_components = ["https://api.themoviedb.org/3/", list_type, "/movie/day?api_key=", api_key]
        }
        url_full = url_components.join('')
        return url_full
    }

    function buildReq(url) {
        //Construct a request object for each url
        const req = axios.get(url);
        return req
    }

    function extract_details(movie_obj, list_type) {
        //Extract only necessary features from movie_obj
        var result = {}
        result["id"] = movie_obj.id
        result["name"] = movie_obj.original_title

        //Extract backdrop_path for the "now_playing" movies
        if (list_type == "now_playing") {
            result["backdrop_path"] = "https://image.tmdb.org/t/p/original" + movie_obj.backdrop_path
        } else {
            result["poster_path"] = "https://image.tmdb.org/t/p/w500" + movie_obj.poster_path
        }
        return result
    }

    //// DRIVER
    //Create a list of request for each API endpoint
    var api_key = "2e510746ca28d7041056c7e57108de4c";
    requests = movie_lists.map(list_type => {
        return buildURL(list_type, api_key)
    }).map(url => {
        return buildReq(url)
    })

    //Send requests asynchronously, then process all responses
    axios.all(requests).then(axios.spread((...responses) => {

        //For each response, for each movie object, parse out the desired features
        // based on list_type (ex: "now_playing", "trending", ...)
        var output = {}
        responses.forEach((response, i) => {
            
            list_type = movie_lists[i]
            const movie_list_extracted = []
            //INNER LOOP
            response.data.results.forEach((movie_obj, j) => {
                // console.log({j: list_type}) //Works

                result = extract_details(movie_obj, list_type)
                // console.log(result) //Works

                movie_list_extracted.push(result)
            })
            console.log(movie_list_extracted) //Test
            output[list_type] = movie_list_extracted
        })
        res.send(output)

      })).catch(errors => {
        // react on errors.
      })

    //   axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    //     const responseOne = responses[0]
    //     const responseTwo = responses[1]

    //     // use/access the results 
    //     // console.log(responseOne.data.results[0])
    //     // console.log(responseOne.data.results[0])
    //     console.log(buildURL("now_playing", "2e510746ca28d7041056c7e57108de4c"))

    //     bundle['now_playing'] = responseOne.data.results[0];
    //     bundle['popular'] = responseTwo.data.results[0];
    //     // res.send("Working. Check console")
    //     res.send(bundle)


    //   })).catch(errors => {
    //     // react on errors.
    //   })
    



})

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORSenabled for all origins!'})
    });

// LOGGING
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})