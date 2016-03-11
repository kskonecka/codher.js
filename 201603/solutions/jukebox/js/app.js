$(document).ready( function() {
  // Let's define some variables and functions we'll use more than once

  // Add songs to the jukebox variable and make this the most awesome 90's playlist ever
  var jukebox = [
    { title: "I Want It That Way", artist: "Backstreet Boys", id: "4fndeDfaWCg" },
    { title: "Basket Case", artist: "Green Day", id: "NUTGr5t3MoY" },
    { title: "Wonderwall", artist: "Oasis", id: "6hzrDeceEKc" },
    { title: "Creep", artist: "Radiohead", id: "XFkzRNyygfk" },
    { title: "Wannabe", artist: "Spice Girls", id: "gJLIiF15wjQ" }
  ];

  // Exercise 1: Make a function appendSong(song) that adds a <li> containing an <a> to .songlist
  // This one is almost for free, just follow the instructions inside the function
  function appendSong(song) {
    // Create an empty link (a) node
    var link = $('<a>');
    // Add a jukebox-link class to the link
    link.addClass('jukebox-link');
    // Add our song title and artist as text
    link.text(song.title + " - " + song.artist);
    // Add the song url as the link's target
    link.attr('href', "https://www.youtube.com/watch?v=" + song.id);
    // Store the youtube id in a data attribute
    link.data('id', song.id);

    // Create an list item (li) node
    var item = $('<li/>');
    // Add our new link as the content of the list item
    item.html(link);
    // Add the item to the songlist div
    $('.songlist').append(item);
  }

  // Exercise 2: Make a function addSong(); that propmts the user for a title, an artist and a youtube id
  // Add the song to jukebox array
  // Don't forget to update your .songlist!
  function addSong() {
    var title = prompt("What is the song title?");
    var artist = prompt("Who is the artist?");
    var id = prompt("What is the youtube id? Hint: It is dQw4w9WgXcQ in https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    var song = {title: title, artist: artist, id: id};
    jukebox.push(song);
    appendSong(song);
  }
  // Stuff to execute as soon as the page renders

  // Exercise 3: Add all our songs to the songlist ul.
  // Hint: Use the functions you already defined. Also you might want to check http://api.jquery.com/jquery.each/
  $.each(jukebox, function(index, song) {
    appendSong(song);
  });

  // Exercise 4: Handle clicks con .add-song-link and call addSong();
  $('.add-song-link').click(function(e) {
    e.preventDefault();
    addSong();
  });

  // Exercise 5: Handle clicks on .jukebox-link elements, render the video inside a container instead of redirecting to youtube
  $(document).on('click', '.jukebox-link', function(e) {
    // Don't forget to stop the event's default behaviour
    e.preventDefault();
    // Let's create the video like youtube says we should
    var video = $('<iframe width="560" height="315" frameborder="0" allowfullscreen></iframe>');
    video.attr('src', "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1");
    // Add the element
    $('.video-player').html(video);
  });

  // BONUS: We are using $(document).on('click') for a very interesting reason.
  // Try changing this to use $('.jukebox-link').click(); and see if you can spot why.
});
