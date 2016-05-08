$(function() {

  //variables for main ul list
  var movieLists = $(".repertuar");
  //variables for url
  var movieUrl = 'http://api.coderslab.pl/movies';

function loadMovies(){ //tutaj łączę się z zewnetrznym plikiem JSON
  movieLists.empty();
  $.ajax({
    url: movieUrl,
    type: "GET"
  }).done(function(cokolwiek){
    console.log(cokolwiek[0].title);
    insertContent(cokolwiek)
  }).fail(function(error){
    console.log(error);
  });
}

loadMovies();

function insertContent(movies) {
  console.log("przeszedlem do funkcji");
  $.each(movies, function(indexMovie, movie) {
      console.log(movie.id);
      var li = $('<li>', {class: "movie", id: movie.id});
      var title = $('<h3>').text(movie.title);
      var description = $("<h5>").text(movie.description);
      // var screeningsArray = [];
      // $.each(movie, function(screenings, movie)
      // for(var i=0; i<movie.screenings.length; i++){
      //   // for(var j=0; j<movie.screenings[i].length; j++){
      //     var iScreening = movie.screenings[i].screening_date;
      //     screeningsArray.push([iScreening]);
        // }
      // }
      var ulScreenings = $("<ul>"); //dodawanie listy seansow
      $.each(movie.screenings, function(screening, i){
        var newScreeningLi = $("<li>").text(i.screening_date);
        ulScreenings.append(newScreeningLi);
      });

      // console.log(screeningsArray);
      // var screenings = $("<h6>").text(screeningsArray);
      var buttonUsun = $("<button>", {class: "buttonUsunKlasa"}).text("Usuń");
      var buttonModify = $("<button>", {class: "buttonModifyKlasa"}).text("Zmodyfikuj");


      li.append(title).append(description).append(ulScreenings).append(buttonUsun).append(buttonModify);

      movieLists.append(li)
  });
}



function addMovie(movie){
  $("#addMovie").on("click", function(event){
    var getTitle = $(".get_title").val();
    var getDescription = $(".get_description").val();
    var getScreening = $(".get_screening").val();
    // var getScreeningArray = getScreening.split(",");

    console.log(getScreening);
    // console.log(getScreeningArray);

    var newMovie = {
      title: getTitle,
      description: getDescription,
      screenings: [getScreening]
    }
// var arraySplit = stringToCheck.split(","); - rozdziela text po np przecinku
      console.log(newMovie);
    $.ajax({
      url: movieUrl,
      type: "POST",
      data: JSON.stringify(newMovie)
    }).done(function(newMowie){
      console.log("udalo sie dodac nowy film");
    }).fail(function(error){
      console.log(error);
    })
  });
};

addMovie();
//JSON stringify function - zamienia wartość w string

console.log("ZADANIE 3");

function removeMovie(movieToRemove){
  $("body").on("click", ".buttonUsunKlasa", function(){ //klikanie na buttony, ktore nie istnialy, a zostaly stworzone
    console.log("klikam i usuwa");

    var movieToRemove = $(this).parent();
    var id = $(this).parent().attr("id");
    var movieUrlToRemove = "http://api.coderslab.pl/movies/" + id;

    console.log(movieToRemove);
    console.log(id);
    console.log(movieUrlToRemove);

    $.ajax({
      url: movieUrlToRemove,
      type: "DELETE"
    }).done(function(removedMovie){
      console.log(removedMovie);
      loadMovies();
    }).fail(function(error){
      console.log(error);
    });
});
}
removeMovie();


console.log("ZADANIE 4");

function updateMovie(movieToRemove){
  $("body").on("click", ".buttonModifyKlasa", function(){ //klikanie na buttony, ktore nie istnialy, a zostaly stworzone
    console.log("klikam i modyfikuje");

    $(this).parent().attr("contenteditable", "true");
    $(this).parent().css("border", "2px solid pink");
    $(this).parent().css("backgroundColor", "white");
    $(this).parent().css("margin", "10px");
    $(this).text("Zatwierdź");

    $(this).on("click", function(){

          var movieToModify = $(this).parent();
          var id = $(this).parent().attr("id");
          var movieUrlToModify = "http://api.coderslab.pl/movies/" + id;
          var newMovieTitle = $(this).parent().find("h3").text();
          var newMovieDescription = $(this).parent().find("h5").text();

          console.log(movieToModify);
          console.log(id);
          console.log(movieUrlToModify);
          console.log(newMovieTitle);
          console.log(newMovieDescription);

          var newJSONMovie = {
            title: newMovieTitle,
            description: newMovieDescription,
            screenings: []
          }

          $.ajax({
            url: movieUrlToModify,
            type: "PUT",
            data: JSON.stringify(newJSONMovie)
          }).done(function(modifiedMovie){
            console.log(modifiedMovie);
            loadMovies();
          }).fail(function(error){
            console.log(error);
          });


    })

});
}

updateMovie();



});
