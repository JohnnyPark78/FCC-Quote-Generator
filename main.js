$(document).ready(function(){
    function req(){
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
            type: "GET",
            dataType: "jsonp",
            crossDomain: true,
        })
        .done(function(json){
            var quote = JSON.stringify(json.quoteText).replace(/[""]+/g,'');
            var auth = JSON.stringify(json.quoteAuthor).replace(/[""]+/g,'');
            $(".quote-main").html(quote);
            $(".quote-auth").html('- ' + auth);
            $(".tweet").html('<a href="https://twitter.com/intent/tweet?text=' + quote + ' - ' + auth + '" class="btn btn-info" role="button" target="_blank">Tweet This</a>');

        });
    };

    req();
    $(".new-quote-btn").on("click", function(){
        var randBgs = "bg" + (Math.floor(Math.random() * 10) + 1 );

        $(".shutter").fadeIn(500, function(){
            $("body").removeClass().addClass(randBgs);
            $(".shutter").delay(500).fadeOut(500);
        });

        $(".quote-box").fadeOut(800, function(){
            req();
            $(".quote-box").delay(300).fadeIn(1000);
        });
        
    });
})