$(document).ready(function(){

    $.mon = "Monday: 9AM - 6PM";
    $.tue = "Tuesday: 9AM - 6PM";
    $.wed = "Wednesday: 9AM - 6PM";
    $.thu = "Thursday: Close";
    $.fri = "Friday: 9AM - 6PM";
    $.sat = "Saturday: 9AM - 5PM";
    $.sun = "Sunday: 9AM - 6PM";
    $.my_hours = 'Hours' +'<br>'+ $.mon + '<br>' + $.tue + '<br>' + $.wed + '<br>' + $.thu + '<br>' + $.fri + '<br>' + $.sat + '<br>' + $.sun;

    // ----- This function only show the display of the top button ---
    function show_top_btn() {
       top_btn.css({
           'display' : 'inline-block',
       });
    }
    function hide_top_btn() {
        top_btn.css({
            'display' : 'none',
        });
    }
    //
    // function level1_effect(){
    //     $('.level1').css({
    //         'background' : '#f0f0f0',
    //     });
    // }
    // function level1_normal(){
    //     $('.level1').css({
    //         'background' : '#f8f9fb',
    //     });
    // }
    // function section1_effect() {
    //     $('.section1').css({
    //         'background':'black',
    //         'color':'white',
    //         'height':'400px',
    //         'width':'50%',
    //         'transition':'0.4s',
    //
    //         'margin-top':'12%',
    //     });
    // }
    // function section1_normal(){
    //     $('.section1').css({
    //         'width':'30%',
    //         'background':'white',
    //         'color':'black',
    //         'height':'100px',
    //
    //         'margin-top':'20%',
    //
    //     });
    // }

    // -------- Smooth scrolling (Online code) ------
    // -------- USE Href to target ------
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }

    });
    // -------------------------------

    // --------- Top Button ------------
    var top_btn = $('#top');
    $(window).scroll(function () {
        var a_top = $('.section1').height();
        if($(window).scrollTop() >= a_top){
            show_top_btn();
        }
        else{
            hide_top_btn();
        }
    });
    // -----------------------------

    $(".section1").mouseover(function(){
        level1_effect();
        section1_effect();

        $('#pageTitle').css({
           'float':'middle',
        });

        $('#phone').html('Phone: 872-208-5686');

        $('#phone').css({
            'float':'left',
            'padding-left':'5%',
        });

        $('#hours_operation').html($.my_hours);
        $('#hours_operation').css({
            'float' : 'right',
            'padding-right' : '5%',
        });

        $('#address').html('Address: 1024 W Argyle'+'<br>'+'Chicago, Il 60640');
        $('#address').css({
            'float' : 'left',
            'padding-left' : '5%',
        });

    });
    $(".section1").mouseleave(function(){
        level1_normal();
        section1_normal();
        $('#pageTitle').css({
            'float':'',
        });
        $('#hours_operation').empty();
        $('#phone').empty();
        $('#address').empty();

    });
});










