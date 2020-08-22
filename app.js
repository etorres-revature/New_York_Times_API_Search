var apiKey = "1Y1w9yctnCuWpZljCPIwpQAXB3CLCw7z"
var beginDate = "1851";
var endDate = "2020";
var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${beginDate}0101&end_date=${endDate}0101&q=trump&api-key=${apiKey}`;

$("#search").on("click", function(){
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response){
        console.log(response);

        // let results = response.docs;
        // console.log(results);

        for (var i = 0; i < response.docs.length; i++) {
            console.log("in the for loop")
            var articleDiv = $("<div>");

            var headline = response.docs[i].headline.main;

            var abstract = response.docs[i].abstract;

            var pHeadline = $("<p>").text(headline);
            var pAbstract = $("<p>").text(abstract);

            articleDiv.append(pHeadline);
            articleDiv.append(pAbstract);

            $(".card-body").append(articleDev);
        }
    });

});