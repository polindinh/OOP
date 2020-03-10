
class KayneQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        //turn the whole quote to upper case
        var quote = this.kanyeWisdom.toUpperCase();
        $("#content").html(quote);
    }

    methodTwo() {
        //change every second letter to capital
        var quote = this.kanyeWisdom.split('').map((letter, i) => i % 2 == 0 ? letter.toLowerCase() : letter.toUpperCase()).join('');
        return  $("#content").html(quote);
    
          }
    methodThree() {
        //DO SOMETHING WITH THE QUOTE
    }
}
// MAKE AJAX REQUEST TO GET QUOTE
// ON COMPLETE, CREATE A NEW OBJECT FROM THE CLASS
// CALL YOUR THREE METHODS OF YOUR NEW OBJECT

$(document).ready(function(){
    $("#clickMe").click(function(){
        console.log('click');
        $.ajax({
            "url":"https://api.kanye.rest/",
            "data": {},
            "type":"GET",
            "dataType":"json",
            success: function(data){
                var newQuote = new KayneQuote(data.quote);
                console.log(newQuote);
                newQuote.methodOne();
            }
        });
    });
});

$(document).ready(function(){
    $("#clickMe1").click(function(){
        console.log('click');
        $.ajax({
            "url":"https://api.kanye.rest/",
            "data": {},
            "type":"GET",
            "dataType":"json",
            success: function(data){
                var newQuote = new KayneQuote(data.quote);
                console.log(newQuote);
                newQuote.methodTwo();
            }
        });
    });
});

$(document).ready(function(){
    $("#clickMe2").click(function(){
        console.log('click');
        $.ajax({
            "url":"https://api.kanye.rest/",
            "data": {},
            "type":"GET",
            "dataType":"json",
            success: function(data){
                var newQuote = new KayneQuote(data.quote);
                console.log(newQuote);
                newQuote.methodThree();
            }
        });
    });
});
