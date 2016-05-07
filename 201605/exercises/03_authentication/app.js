// Go to https://api.nasa.gov/index.html#apply-for-an-api-key and get
// your own API key, replace the value of key with it
// TODO: Get your own API Key
var key = 'DrSG4VuHXtHuOC1oOQoE6mmvQ2NOI4481j3vZE7c';

function fetchAPOD(number) {
  $('.apod-error').text('').addClass('hidden');
  $('.image-container').addClass('hidden');

  $.get('https://pixabay.com/api/?key=2527456-416619c6ac56ec9a5eada5c03&image_type=photo',
    // This object we pass as a second parameter to $.get() contains all the data
    // we want to submit to the API.
    {
      // likes: likes,
      // hd: true
    })
  .done(function(data) {
    if (number < 20){
      $('.apod').attr('src', data.hits[number].userImageURL);
      // debugger;
      $('.image-container').removeClass('hidden');
    }
  })
  .fail( function(xhr, status, error) {
    $('.apod-error').text(error).removeClass('hidden');
    
  });
}

function loadMovies() {
      $.ajax({
            url: 'http://swapi.co/api/films/'
      }).done(function(response){
          insertContent(response.results)
     }).fail(function(error) {
         console.log(error)
     })
}


function insertContent(movies) {
  // $('.apod-caption').html("");
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  $.each(movies, function(indexMovie, movie) {
    $('.apod-caption').html("");

      var li = $('<li>');
      var h3 = $('<h3>').text(movies[randomNumber].title);
      var p = $('<p>').text(movies[randomNumber].opening_crawl);

      li.append(h3);
      li.append(p);

      $('.apod-caption').append(li);
  });
}

$(document).ready(function() {
  $('.apod-form').submit(function(e) {
    e.preventDefault();
    var number = $('.user-input').val();

    fetchAPOD(number);
    insertContent();
    loadMovies();
  });
});
