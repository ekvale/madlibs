/**
 * Created by ekval on 2/14/2017.
 */

$(function() {
    console.log("whee!")

    // ---- event handler ---- //
    $("#btn-click").click(function(e) {
        // grab the values from the input boxes, then append them to the DOM
        $(".person").empty().append($("input.person").val());
        $(".adjective").empty().append($("input.adjective").val());
        $(".noun").empty().append($("input.noun").val());
        $(".insect").empty().append($("input.insect").val());
        $(".noun2").empty().append($("input.plural-noun").val());
        $(".verb").empty().append($("input.verb").val());

        // show the story
        // Could also use CSS #story {display: none; }
        $("#story").show();

        // empty the form's values
        $(':input').val('');

        // hide the questions
        $("#questions").hide();
    });

    $("#play-btn").click(function() {
        $("#story").hide();
        $("#questions").show();
    });

});

