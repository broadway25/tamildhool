console.log('plugin relaods');

setInterval( function() {
    const id = 'moeacnfnjpcnhpjlbhojdadollgcaijj';
    chrome.management.setEnabled(id, false, function() {
        chrome.management.setEnabled(id, true);
        console.log('plugin relaoded');
    });
}, 3000);