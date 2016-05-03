(function () {
    'use strict';

    var classList = document.getElementsByClassName('code')

    for(var i = 0, len = classList.length; i < len; i++) {
        var val = classList[i].innerHTML
        document.getElementsByClassName('code')[i].innerHTML = marked(val)
    }
})()