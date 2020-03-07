
class KayneQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        //DO SOMETHING WITH THE QUOTE
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
        $.ajax({
            "url":"https://api.kanye.rest/",
            "data": {},
            "type":"GET",
            "dataType":"json",
        }).done(
            function(resultJson){
                console.log(resultJson.quote);
                $("#content").append("<p id='quote'>"+resultJson.quote+"</p>");
                var colorChanger = $("#quote");
                console.log(colorChanger);
                colorChanger.on(
            {
                "mouseout":function(){colorChanger.css("color","green");},
                "mouseover":function(){colorChanger.css("color","red");}
            }
        );
        }).fail(
            function(xhr,status,error){
            console.log("there was an error" + error);
        }).always(
            function(xhr, status){
                alert("request complete");
            }
        );
    });
});