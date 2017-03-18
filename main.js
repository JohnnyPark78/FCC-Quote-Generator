$(document).ready(function(){
    function req(){
        $.ajax({
            url: "https://random-quote-generator.herokuapp.com/api/quotes/random",
            type: "GET",
            dataType: "jsonp",
            crossDomain: true,
        })
        .done(function(json){
            var quote = JSON.stringify(json.quote).replace(/[""]+/g,'');
            var auth = JSON.stringify(json.author).replace(/[""]+/g,'');
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
