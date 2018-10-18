//fetch
$(document).ready(function(){

$('#lyrics-form').on('submit', function(e) {
    e.preventDefault();

    $('.text').text("buffering...");

var userArtist = $('#artist').val();
var userSong = $('#song').val();

var url = "https://api.lyrics.ovh/v1/" + userArtist + "/" + userSong + ""

fetch(url).then(function(response) {
    var processedLyrics = response.json();
    return processedLyrics;
}).then(function(processedLyrics){
    $('.text').html("<p class='song-lyrics'>" + processedLyrics.lyrics + "</p>");
}).catch(function(error){
    console.log(error);
    alert("Whoaaaaa!");
});
})
})

//AJAX - Jquery
// $(document).ready(function(){

// $('#lyrics-form').on('submit', function(e) {
//     e.preventDefault();

//     $('.text').text("buffering...");

// var userArtist = $('#artist').val();
// var userSong = $('#song').val();
  
// $.ajax({
//     type:"GET",
//     url:"https://api.lyrics.ovh/v1/" + userArtist + "/" + userSong + "",
//     //https://api.lyrics.ovh/v1/artist/title
//     success: function(data) {
//         $('.text').text("");
//         $('.text').html("<p class='song-lyrics'>" + data.lyrics + "</p>");
//     },
//     error: function(xhr, status, e) {
//             console.log(status, e);
//             alert("<p>nope</p>")
//           }  
//   })
// })
// })