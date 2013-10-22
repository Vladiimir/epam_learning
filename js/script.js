$(document).ready(function(){

    $('.bxslider-slider').bxSlider({
        auto: true
    });
    $('#carusel').carouFredSel({
        //responsive: true,
        width: '100%',
        scroll: 2,
        items: {
            //width: auto,
            //height: '150px',	//	optionally resize item-height
            visible: {
                min: 2,
                max: 6
            }
        },
        prev: '#prev2',
        next: '#next2'
    });
    $('#calendar').datepicker({
        inline: true,
        beforeShowDay:  iventsDays
    });

    $('#calendar .ui-datepicker-today a').attr('title', 'test text');
    $('#calendar').tooltip({
        track: false,
        delay: 0,
        showURL: false,
        fade: 200
    });


    function iventsDays(date) {
        var ivenDays = ["2","5"];
        var sDate = date.getDate().toString();
        if (jQuery.inArray(sDate, ivenDays) !== -1) {return [false,"mark", "Some text"];}
        else  return [true, ""];

    }
});