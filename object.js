
class KanyeQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        //turn the whole quote to upper case
        var quote = this.kanyeWisdom.toUpperCase();
        $("#contentOne").html(quote);
    }

    methodTwo() {
        //change every second letter to capital
        var quote = this.kanyeWisdom.split('').map((letter, i) => i % 2 == 0 ? letter.toLowerCase() : letter.toUpperCase()).join('');
        return  $("#contentTwo").html(quote);
    
          }
    methodThree() {
        //turn to lower case
        var quote = this.kanyeWisdom.toLowerCase();
        $("#contentThree").html(quote);
    }
}
// MAKE AJAX REQUEST TO GET QUOTE
// ON COMPLETE, CREATE A NEW OBJECT FROM THE CLASS
// CALL YOUR THREE METHODS OF YOUR NEW OBJECT

$(document).ready(function(){
    $("#clickMeOne").click(function(){
        console.log('click');
        $.ajax({
            "url":"https://api.kanye.rest/",
            "data": {},
            "type":"GET",
            "dataType":"json",
            success: function(data){
                var newQuote = new KanyeQuote(data.quote);
                console.log(newQuote);
                newQuote.methodOne();
            }
        });
    });
});

$(document).ready(function(){
    $("#clickMeTwo").click(function(){
        console.log('click');
        $.ajax({
            "url":"https://api.kanye.rest/",
            "data": {},
            "type":"GET",
            "dataType":"json",
            success: function(data){
                var newQuote = new KanyeQuote(data.quote);
                console.log(newQuote);
                newQuote.methodTwo();
            }
        });
    });
});

$(document).ready(function(){
    $("#clickMeThree").click(function(){
        console.log('click');
        $.ajax({
            "url":"https://api.kanye.rest/",
            "data": {},
            "type":"GET",
            "dataType":"json",
            success: function(data){
                var newQuote = new KanyeQuote(data.quote);
                console.log(newQuote);
                newQuote.methodThree();
            }
        });
    });
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });