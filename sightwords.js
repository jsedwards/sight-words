$(document).ready(function(){
  Sightwords.listenForClicks()
})


var Sightwords = {

  listenForClicks: function(){
    $('body').on('click','.word',function(){
      event.preventDefault()
      var currentWord = $(this).data("word")
      console.log("you clicked on "+currentWord)
    })
  }
}