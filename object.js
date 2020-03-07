
class KayneQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        //DO SOMETHING WITH THE QUOTE
        alert (this.kanyeWisdom);
        // this.kanyeWisdom.quote = this.kanyeWisdom.quote.toUpperCase();

    }

    methodTwo() {
        //DO SOMETHING WITH THE QUOTE
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