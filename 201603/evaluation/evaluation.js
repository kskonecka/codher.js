// Basic Javascript refresher.
// You have 30 minutes, don't worry about finishing, just go as far as you can
// For every exercise, uncomment everything in the block,
// add whatever code is missing and run the script.
// A live copy of this file can be found in https://repl.it/BvXw

// 1. Make an array called songs with the names of your 5 favourite songs

  // Your code here
  // console.log(songs);

// 2. Add a new song to the array using the Array.push(); method

  // Your code here
  // console.log(songs);

// 3. Remove the first song from the array using the Array.splice(); method

  // Your code here
  // console.log(songs);

// 4. Modify the function printSongList(); to also print the song's index in the array next to the song's name

  // function printSongList() {
  //   songs.forEach(function(song, index) {
  //       console.log(song); // Your code here
  //   });
  // }

  // printSongList();

// 5. Modify the function findSong(needle, haystack); to print "Yay! I LOVE that song!" if needle is part of the array

  // function findSong(needle, haystack) {
  //   if() {
  //     // Hint: use Array.indexOf(); in the if() argument
  //   } else {
  //     console.log("Nah, " + needle + " isn't on my list.");
  //   }
  // }

  // findSong("// A song in your list", songs); // Should print "Yay! I LOVE that song!"
  // findSong("Call Me Maybe", songs); // Should print "Nah, Call Me Maybe isn't on my list"

// 6. Make a new array called jukebox with your favourite songs as objects with three properties: title, artist and youtube url.

  // Your code here
  // console.log(jukebox);

// 7. Modify the function addSong(title, artist, url); so it adds a new song with the three attributes.

  // function addSong(title, artist, url) {
  //   var new_song;
  //   jukebox.push(new_song);
  // }
  //
  // addSong("title", "artist", "url");
  // console.log(jukebox);

// 8. Modify the function findSongByTitle(needle, haystack); so it returns the whole song object if it's part of the array

  // function findSongByTitle(needle, haystack) {
  //   var result = null;
  //   haystack.forEach( function(item, index) {
  //     // Your code here
  //   });
  //   return result;
  // }
  //
  // var my_song = findSongByTitle("A song title you like", jukebox);
  // console.log(my_song);

// 9. Modify the function playSongByTitle(title); so it uses findSongByTitle(needle, haystack) to find a song and assign it to the song variable;

  // function playSongByTitle(title) {
  //   // Your code here
  //   if(typeof(song) !== "undefined") {
  //     window.open(song.url, "_blank");
  //   }
  // }
  //
  // playSongByTitle("A song title you like");

// 10. Run the function celebrate();

  // function celebrate() {
  //   console.log("Congratulations! You're done with the exercise, go get some coffee before the workshop begins :-)");
  // }
