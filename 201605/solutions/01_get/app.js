// Exercise 1
// Using API data
// Use the "value" array from the API response to log each joke
// with it's own console.log();

$(document).ready(function() {
  $.get(
    // 3 in the url is the number of jokes we're getting, try getting more :)
    'http://api.icndb.com/jokes/random/10'
  )
  .done(function(data) {
    // API Documentation: http://www.icndb.com/api/
    for(var i = 0; i < data.value.length; i++) {
      console.log(data.value[i].joke);
    }
  })
  .fail(function(xhr, status, error) {
    console.log('Oops, something went wrong!');
  });
});
