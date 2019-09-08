
attractUrl = 'none';

function topBarPostTasks() {

}

function getTopbarParentElement() {

}

function showTopbar() { return false; }


function postTasks() {
    if ( localStorage.getItem('attractUrl') !== null ){
        attractUrl = localStorage.getItem('attractUrl');
        //Avoid reloads on any sub urls.
        if ( window.location.href.indexOf( attractUrl ) === -1 ){
            window.location.href = attractUrl;

        }
    }
    montiorAttactUrl();

    setInterval(montiorAttactUrl, 30000);
}

function montiorAttactUrl() {
    $.getJSON("http://localhost:5001/player/" + getPlayerId() + "/attract",
        function(data) {
            if ( data.type === 'url') {
                if ( attractUrl === 'none' || ( attractUrl !== data.value && window.location.href.indexOf("://localhost/"))){
                    window.location.href = data.value;
                    attractUrl = data.value;
                    localStorage.setItem('attractUrl', attractUrl);
                }
            }
        });
}




$( document ).ready(function() {
    $(".moblty-homelink").click(function() {
        window.location.href = homeLocationUrl;
    });
});


function testAlert() {
    alert( '2323');
}
