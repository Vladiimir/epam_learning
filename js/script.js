$(document).ready(function(){

    $('.bxslider-slider').bxSlider({
        auto: true
    });

    $('#carusel').carouFredSel({
        //responsive: true,
        width: '90%',
        scroll: 1,
        items: {
            //width: auto,
            //height: '150px',	//	optionally resize item-height
            visible: {
                min: 1,
                max: 5
            }
        },
        prev: '#prev2',
        next: '#next2'
    });

    $(function() {
        $("#carusel img")
            .mouseover(function() {
                var src = $(this).attr("src").match(/[^\.]+/) + "-hov.png";
                $(this).attr("src", src);
            })
            .mouseout(function() {
                var src = $(this).attr("src").replace("-hov.png", ".png");
                $(this).attr("src", src);
            });
    });

    $('#calendar').datepicker({
        inline: true,
        beforeShowDay:  iventsDays
    });

    $('#calendar .ui-datepicker-today a').attr('title', 'test text');
    $('#calendar').find('.ui-datepicker-calendar').tooltip({
        track: false,
        delay: 0,
        showURL: false,
        fade: 200,
        position: {
            my: "center+1 bottom+70",
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });


    function iventsDays(date) {
        var ivenDays = ["21","15"];
        var sDate = date.getDate().toString();
        if (jQuery.inArray(sDate, ivenDays) !== -1) {return [false,"mark", "Some text"];}
        else  return [true, ""];

    }

//----------------mobile navigation----------------------------
    $( "#main-nav-icon" ).click(function() {
        $( "#main-nav" ).toggle(400);
    });
    $( window ).resize(function() {
        if($(this).width() > 480){
            $( "#main-nav" ).css('display', 'table-row');
        }
        else $( "#main-nav" ).css('display', 'none');
    });
//----------------end mobile navigation----------------------------

});
