// Go to https://api.nasa.gov/index.html#apply-for-an-api-key and get
// your own API key, replace the value of key with it
// TODO: Get your own API Key
var key = 'DEMO_KEY';

function fetchAPOD(date) {
  $('.apod-error').text('').addClass('hidden');
  $('.image-container').addClass('hidden');
  $.get('https://api.nasa.gov/planetary/apod',
    // This object we pass as a second parameter to $.get() contains all the data
    // we want to submit to the API.
    {
      api_key: key,
      date: date,
      hd: true
    })
  .done(function(data) {
    $('.apod').attr('src', data.url).attr('alt', data.title);
    $('.apod-caption').html(data.explanation);
    $('.image-container').removeClass('hidden');
  })
  .fail( function(xhr, status, error) {
    $('.apod-error').text(error).removeClass('hidden');
  });
}


$(document).ready(function() {
  $('.apod-form').submit(function(e) {
    e.preventDefault();
    var date = $('.user-input').val();
    fetchAPOD(date);
  });
});
