function fetchTweets() {
  $.get("https://twither.herokuapp.com/tweets")
  .done(function(data) {
    $('.tweets').html('');
    for (var key in data) {
      var item = data[key];
      var tweet = $('<div/>').addClass('tweet');
      var date = new Date(item.timestamp);
      tweet.append($('<div/>').addClass('date').text(date.toUTCString()));
      tweet.append($('<div/>').addClass('content').text(item.content));
      tweet.append($('<div/>').addClass('author').text('-' + item.author));
      $('.tweets').prepend(tweet);
    }
  })
  .fail(function(xhr, status, err) {
    console.error(err);
  });
}

function addTweet() {
  $("form").on('submit', function(event){

    event.preventDefault();

    var getName = $(".user-name").val();
    var getTweet = $('textarea').val();

    // var newTweet = {
    //   author: getName,
    //   content: getTweet
    // }

    $.post("https://twither.herokuapp.com/tweets",
     {
       author: getName,
       content: getTweet
    }).done(function(data){
      console.log(data.success);
      fetchTweets();
      var getName = $(".user-name").val("");
      var getTweet = $('textarea').val("");
    }).fail(function(error){
      console.log(error);
    });
  });
}



$(document).ready(function() {
  fetchTweets();
  addTweet();
});
