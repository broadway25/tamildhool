

function topBarPostTasks() {
    getTopbarParentElement().prepend( '<div id="mobltyspacer" style="width: 100%; height: 50px" ></div>');

    $('#mobltyback').click(function() {
        sendEvent( {'type' : 'topbar', 'payload' : 'back' } );
        if (topBarType === 'back' ) {
            window.close();
        }
        window.history.back();
    });
    $('#mobltyhome, .moblty-home-anchor').click(function() {
        sendEvent( {'type' : 'topbar', 'payload' : 'home' } );
        window.location.replace(homeLocationUrl);
    });

    $("nav:first").css({ top: '43px' });
    setTimeout( removeElements, 200 );
    setTimeout( removeElements, 500 );
    setTimeout( removeElements, 1000 );
    setTimeout( removeElements, 2500 );


    setTimeout( function() { $("nav:first").css({ top: '43px' });  }, 200);
    setTimeout( function() { $("nav:first").css({ top: '43px' }); }, 500);
    setTimeout( function() { $("nav:first").css({ top: '43px' }); }, 2000);
    setTimeout( function() { $(".StartNewSearch-Wrapper" ).css( { top : "100px",  position: "fixed"}); }, 2000);
    setInterval( function() { $(".StartNewSearch-Wrapper" ).css( { top : "100px",  position: "fixed"}); }, 5000);


}

function removeElements () {
    $(".entry-cover").remove();
    $("#rc-row-container").remove();
    $(".tamil-before-content").remove();
    $(".navbar-brand-wpz, .header_social, .entry-header, .tamil-in-between-feed").remove();

    console.log( $(".entry-content div iframe[src*='http://www.tamilray.space/']").parent() );
    $(".entry-content div iframe[src*='http://www.tamilray.space/']").parent().siblings().remove();
    $(".entry-content" ).css({left:'10px', width: '1200px', hight: '1080px'})
    // $(".entry-content p").remove();
    var d = $("div iframe[src*='http://www.tamilray.space/'] > div ");
    $(".inner-wrap, .content-area").css({'max-width': '100%'});
    $(".entry-content").css( {width: '80%'});
    $(".main-navbar").css( {top: '5px', 'margin-top': '-40px'});
    $("#taboola-below-article").remove();
    $("#colophon").remove();

    //d.remove();
    //$("div iframe").parent().parent().not("div iframe[src*='http://www.tamilray.space/p/dvGpmzb']").remove();
}

function getTopbarParentElement() {
    var elem = $(".MainHeader") ;
    if (! elem.length > 0  ) elem = $('#main-navigation');
    if (! elem.length > 0  ) elem = $('body');
    return elem;
}

function showTopbar() { return true; }

function postTasks() {}
