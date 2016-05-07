// $(document).ready() is a handy function that ensures your script will only
// be executed when the page has finished loading
// https://api.jquery.com/ready/
$(document).ready(function() {
  // AJAX stands for Asynchronous Javascript And XML
  // It powers most of the current state of web interactivity
  // http://api.jquery.com/jquery.get/
  console.log('We are going to get some Chuck Norris jokes');
  $.get(
    // The url you want to query
    'http://api.icndb.com/jokes/random/3'
  )
  // Use .done() to tell javascript what to do when everything goes right
  .done(function(data) {
    // We need to know how "data" will look like before we do stuff with it
    // Each API will have a different response format.
    // Read their documentation!
    // http://www.icndb.com/api/
    console.table(data.value);
  })
  // Use .fail() to tell javascript what to do when something goes wrong
  .fail(function(xhr, status, error) {
    console.log('Oops, something went wrong!');
  })
  // Use .always() to tell javascript what to do when the ajax request is done
  // regardless of it's result.
  .always(function() {
    console.log('I don\'t know if this went right or wrong, but we\'re done');
  });
});
