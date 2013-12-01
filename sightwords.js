$(document).ready(function(){
  Sightwords.listenForClicks()
  Sightwords.init()
  SightAudio.playCorrect()
  SightAudio.replayListener()
})


var Sightwords = {
  list1: ['all', 'am', 'at', 'ate', 'be', 'black', 'brown', 'but', 'came', 'did', 'do', 'eat', 'four', 'get', 'good', 'have', 'he', 'into', 'like', 'must', 'new'],
  list: ['and','are','cat','dog','four','how','one','she','the'],
  listenForClicks: function(){
    $('body').on('click','.word',function(){
      event.preventDefault()
      var currentWord = $(this).data("word")
      console.log("you clicked on "+currentWord)
    })
  },
  randomWord: function(list){
    return list[Math.floor(Math.random()*list.length)]
  },
  setOfRandomWords: function(list, qty){
    var randoms = []
    var listOfRandoms = []
    for(var i=0; i< qty; i++){
      randoms.push(list.splice(Math.floor(Math.random()*list.length),1))
    }
    return listOfRandoms.concat.apply([],randoms)
  },
  addCorrect: function(word){
    $('div#correctWord').html(this.randomWord(this.list))
  },
  setAudioSource: function(word){
    $('#correctAudio').attr('src','audio/Audio'+word.toUpperCase()+'.m4a')
  },
  init: function(){
    this.choices = this.setOfRandomWords(this.list,4)
    this.correct = this.randomWord(this.choices)
    this.newChoicesOnPage(this.choices)
    this.setAudioSource(this.correct)
    console.log(this.setOfRandomWords(this.list,4))
  },
  addChoiceToPage: function(word){
    var choice = document.createElement('p')
    $(choice).html(word)
    $(choice).data("word",word)
    $(choice).addClass('word')
    console.log(choice)
    $('div#choices').append(choice)
  },
  newChoicesOnPage: function(listOfRandoms){
    $('div#choices').empty()
    for(var i = 0; i< listOfRandoms.length; i++){
      this.addChoiceToPage(listOfRandoms[i])
    }
  }


}
var SightAudio = {
  playCorrect: function(){
      d = document.getElementById('correctAudio')
      d.play()
  },
  replayListener: function(){
    $('div#replay').on('click',function(){
      SightAudio.playCorrect()
  })

}
}