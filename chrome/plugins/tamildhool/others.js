

function topBarPostTasks() {

    // $(".mobltytopbar").css('opacity', 0.5);
    getTopbarParentElement().prepend( '<div id="mobltyspacer" style="width: 100%; height: 50px" ></div>');
    $('#mobltyback').click(function() {
        sendEvent( {'type' : 'topbar', 'payload' : 'back' } );
        window.close();
        setTimeout(function() {
            window.location.replace(homeLocationUrl);
        }, 100);
    });
    $('#mobltyhome').click(function() {
        sendEvent( {'type' : 'topbar', 'payload' : 'home' } );
        if( window.location.href.indexOf("paylocity.com") !== -1 ){
            window.location.replace(homeLocationUrl);
        }else {
            window.close();
            setTimeout(function() {
                window.location.replace(homeLocationUrl);
            }, 100);
        }
    });

}

function getTopbarParentElement() {
    return $('body')
}

function showTopbar() { return true; }


function postTasks() {}