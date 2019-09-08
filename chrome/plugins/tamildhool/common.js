

var displayId = '$nodeId'
// $(document).ready( createTopbar );
let topbarRetry = 0;
let timeout = 360000;
let topBarType = 'all';
function createTopbar() {

    var topbar =
         '<div class="moblty-d-flex moblty-justify-content-between mobltytopbar" style="padding: 7px 20px;">' +
            '<div id="mobltyback" class="moblty-ml-3"><img src="' + chrome.extension.getURL("/images/back-white.png") + '"></div>' +
            getAdditionalButtons() +
        '</div>';

    //getTopbarParentElement().prepend( topbar );



    if( topbarRetry < 3 ) {
      //  setTimeout(enforceTopbar, 500);
        topbarRetry ++;
    }
    // setTimeout( loadConfig, 1000 );
    // setInterval(loadConfig, 30000 );
    topBarPostTasks();
}

function enforceTopbar() {
    // setTimeout( loadConfig, 1000 );
    // setInterval(loadConfig, 30000 );
    if (! $( "#mobltyback" ).length && showTopbar() ) {
        createTopbar();
    }
}

prevUrl = '';

setTimeout(enforceTopbar, 200);
//setInterval(navigationEvent, 500);
setTimeout(function() {postTasks();}, 1500);


function navigationEvent () {
    if ( window.location.href !== prevUrl ) {
        // sendEvent({'type': 'navigation', 'payload': window.location.href});
        prevUrl = window.location.href;
    }

}

function loadConfig() {
    console.log( 'load config' ) ;
    $.getJSON("http://localhost:5001/player/" + getPlayerId() + "/home",
        function(data) {
            if ( data.type === 'url') {
                homeLocationUrl = data.value;
            }
        });


    $.getJSON("http://localhost:5001/player/" + getPlayerId() + "/config/paylocity",
        function(data) {
             paylocityUrl = data.value;
             console.log( paylocityUrl );
        });

}

function sendEvent(data) {
    $.ajax( "http://localhost:5001/player/" + getPlayerId() + "/event",
        { data: JSON.stringify(data ),
            success: function( resp) { $( ".result" ).html( resp ); },
            contentType: 'application/json',
            type: 'POST'
        });

}

function getAdditionalButtons() {
    console.log( topBarType + ' : ' + window.history.length );

    if ( window.location.href.indexOf('carsaver.com') < 0 && window.location.href.indexOf('paylocity.com') ) {
        topBarType = 'back'
    }

    if( topBarType === 'back') {
        return ''
    } else {
        return '<div id="mobltyhome"><img src="' + chrome.extension.getURL("/images/home-white.png") + '"></div>' +
            '<div id="mobltylogin" class="mr-3"><img src="' + chrome.extension.getURL("/images/login-black.png") + '"></div>';
    }
}


