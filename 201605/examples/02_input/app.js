// Let's make a function that gets a fact for a given number
// Remember: functions are pieces of reusable code, this won't be executed
// until we call it later on.
function fetchNumberFact(number) {
  // Let's clear and hide our number fact and error divs so they are reusable
  $('.number-fact').html('').addClass('hidden');
  $('.number-error').html('').addClass('hidden');

  // Documentation: http://numbersapi.com/
  $.get('http://numbersapi.com/' + number + '/trivia')
  .done(function(data) {
    // Replace .number-fact's html with the response of the API (data)
    // Note how this API doesn't have a value array in the respone like the
    // previous one, each API will be different - that's why documentation
    // is important
    $('.number-fact').html(data).removeClass('hidden');
  })
  .fail(function(xhr, status, error) {
    // Replace .number-error's html with the content of the error we received
    $('.number-error').html(error).removeClass('hidden');
  });
}

// We use $(document).ready() to make sure that all our html has been rendered
// before we try to add behaviour to it
$(document).ready(function() {
  // Let's "bind" some actions to the form "submit" event
  $('.number-form').submit(function(e) {
    // "e" is the click event
    // we use the .preventDefault() method so the normal submit behaviour
    // isn't triggered in our asynchronous form.
    // Try commenting the next line and see what happens
    e.preventDefault();
    // We get the value (.val()) of our .user-input field and use it to call
    // the fetchNumberFact function we previously defined
    var number = $('.user-input').val();
    fetchNumberFact(number);
  });
});
