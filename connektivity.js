(function (win) {

	'use strict';

    if (!navigator.onLine) {
        win.addEventListener('online',  updateOnlineStatus);
        win.addEventListener('offline', updateOnlineStatus);
    } else {
        
    }

    var createEl = function (status) {
        var el = document.createElement('<span />'),
            body = document.getElementsByTagName('body');

        el.className = status;
        el.innerHTML = status.toUpperCase();

        body.appendChild(el);
    },

    updateOnlineStatus = function (e) {
        var status = document.getElementById('status'),
            condition = navigator.onLine ? 'online' : 'offline';

        createEl(condition);
    };

})(window);
