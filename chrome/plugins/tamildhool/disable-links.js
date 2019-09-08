


var disableLinks = function(e){

    console.log($(this).attr('mobltylinkenabled') + ' -> ' + event.target.href );
    if( $(this).attr('mobltylinkenabled') === "true" ){
        setTimeout(processLinks, 100);
        return true;
    }
    e.preventDefault();
    return false;
};

function processLinks() {
    
    setTimeout(function () {
        $('#nav span  a').attr('mobltylinkenabled', 'true');
        $('a[href="http://www.carsaverdealers.com/applynow/"]').attr('mobltylinkenabled', 'true');
        $('.foxfloat').remove();
        // Remove at multiple intervals as buttons take time to appear.
        setTimeout(function() {$('#printFauxLink,#cipPrintBtn,#shareBtn,#topbarSocial').remove();} , 100);
        setTimeout(function() {$('#printFauxLink,#cipPrintBtn,#shareBtn,#topbarSocial').remove();} , 500);
        setTimeout(function() {$('#printFauxLink,#cipPrintBtn,#shareBtn,#topbarSocial').remove();} , 2000);
    }, 500);


    setTimeout(function () {
        // $('a:not([mobltylinkenabled="true"])').attr("href", "https://www.carsaver.com");
        $('a').bind('click', disableLinks);
    }, 500);
}

setTimeout(processLinks, 100);