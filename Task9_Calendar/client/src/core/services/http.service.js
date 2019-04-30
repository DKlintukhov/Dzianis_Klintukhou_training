var http = (function () {

    function get(uri) {
        return new Promise(function (res, rej) {
            var _xhr = new XMLHttpRequest();
            _xhr.open('GET', uri);

            _xhr.onload = function () {
                res(_xhr.response);
            };

            _xhr.onerror = function () {
                rej(_xhr.status)
            };

            _xhr.timeout = 5000;
            _xhr.send(null);
        })
    }

    return {
        get: get
    }
})();