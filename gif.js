
//this key is working https://api.giphy.com/v1/gifs/search?q=cats&api_key=uTMqATcVmg0xGsWfo44I5hstyO0P39Gv&rating=G&limit=10


var instrumentData = ["Guitar", "Banjo", "Tuba", "Piano"];

$("button").click(function(){
    var instInput = $(this).data("instrument");
    console.log(instInput);
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instInput + "&api_key=uTMqATcVmg0xGsWfo44I5hstyO0P39Gv&rating=G&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function(response){
            var instrumentData = response.data;
            for (i = 0; i < instrumentData.length; i++);
            console.log(response);

            $()

            
        })
})





// $(".btn").click(function () {
//     var a = $(this).data("instrumentName");
//     console.log(a);
//     console.log("clicked");

//     var userInput = $(this).attr("userInput");


//     console.log(userInput);

//     $.ajax({
//         url: queryURL,
//         method: "GET",
//     })
// });



    // $("#submit").click(function () {
    //     console.log("submit");
    // })

























