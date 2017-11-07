
//this key is working https://api.giphy.com/v1/gifs/search?q=cats&api_key=uTMqATcVmg0xGsWfo44I5hstyO0P39Gv&rating=G&limit=10






var instrumentData = ["Guitar", "Banjo", "Tuba", "Piano"];

function displayInstrument() {
// 
// $("button").on("click", function(){
    var instInput = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instInput + "&api_key=uTMqATcVmg0xGsWfo44I5hstyO0P39Gv&rating=G&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET",
    }).done(function (response) {
        

        var result = response.data;
        for (i = 0; i < result.length; i++){
        console.log(i);
        console.log(result[i]);
        // var instrumentDiv = $("<div class='instr-container'>");

        var rating = response.rating; //may need to change this destination

        var instrumentStill = result[i].images.fixed_width.url; //still image

        var instrumentAnimated = result[i].images.fixed_width.mp4; //animated gif

        var instrumentImage = $("<img>").attr("src", instrumentStill);

        // instrumentDiv.append(instrumentImage);
        // instrumentDiv.append(instrumentAnimated);

        var instrumentDiv = $("<div>");

        var p = $("<p>").text("Rating = " + result[i].rating);
        instrumentDiv.append(p);

        instrumentImage.attr("src", result[i].images.fixed_width.url);

        instrumentDiv.append(instrumentImage);

        $("#gif-images").append(instrumentDiv);
        }
    });
};

function renderButtons() {

    $("#instrButton").empty();

    for (var i = 0; i < instrumentData.length; i++) {

        var a = $("<button>");
        a.addClass("instrument");
        a.attr("data-name", instrumentData[i]);
        a.text(instrumentData[i]);
        $("#instrButton").append(a);

    // renderButtons();
    }
}
    //button functions below

    $("#add-instr").on("click", function (event) {
        event.preventDefault();
        var newInstrument = $("#instr-input").val().trim();
        instrumentData.push(newInstrument);

        renderButtons();
    });

    $(document).on("click", ".instrument", displayInstrument);

    renderButtons();




























// $("button").on("click", function () {

//     var instInput = $(this).data("instrument");

//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instInput + "&api_key=uTMqATcVmg0xGsWfo44I5hstyO0P39Gv&rating=G&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET",
//     }).done(function (response) {

//         var instrumentDiv = $("<div class='gif-images'>");

//         // Storing the rating data
//         var rating = response.Rated;

//         // Creating an element to have the rating displayed
//         var ratingElem = $("<p>").text("Rating: " + rating);

//         // Displaying the rating
//        instrumentDiv.append(ratingElem);

// Storing the release year
// var released = response.Released;

// Creating an element to hold the release year
// var releasedElem = $("<p>").text("Released: " + released);

// Displaying the release year
// movieDiv.append(releasedElem);

// Storing the plot
// var plot = response.Plot;

// Creating an element to hold the plot
// var plotElem = $("<p>").text("Plot: " + plot);

// Appending the plot
// movieDiv.append(plotElem);

// Retrieving the URL for the image
//         var imgURL = response.imgaes.full_width.url;

//         // Creating an element to hold the image
//         var image = $("<img>").attr("src", imgURL);

//         // Appending the image
//         instrumentDiv.append(image);

//         // Putting the entire movie above the previous movies
//         $(".gif-images").html(instrumentDiv);
//     });

// });

//         var instrumentData = response.data;
//         for (i = 0; i < instrumentData.length; i++);

//         var instrumentDiv = $("<div>");
//         var rating = instrumentData[i].rating;
//         var p = $("<p>").text("Rating = " + rating);
//         var instrumentImage = $("<img>");
//         instrumentImage.attr("src", instrumentData[i].images.fixed_height.url);

//         instrumentDiv.append(p);
//         instrumentDiv.append(instrumentImage);

//         $(".gif-images").prepend(instrumentDiv);


//     })
//     console.log(queryURL);
// })



// function renderButtons() {

//         $("#instrButton").empty();

//         for (var i = 0; i < instrumentData.length; i++) {

//             var a = $("<button>");
//             a.addClass("instrument");
//             a.attr("data-name", instrumentData[i]);
//             a.text(instrumentData[i]);
//             $("#instrButton").append(a);

//             console.log(instrumentData[i]);
//         }

//     }
// renderButtons();


  // Adding a click event listener to all elements with a class of "movie"
//   $(document).on("click", "#instrButton", displayNewInstrument);


























