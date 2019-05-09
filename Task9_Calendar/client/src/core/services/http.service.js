var http = (function () {

    function get(uri) {
        return new Promise(function (res, rej) {
            var _xhr = new XMLHttpRequest();
            _xhr.open('GET', uri);
            _xhr.responseType = "json";
            
            _xhr.onload = function() {
                res(_xhr.response);
            };

            _xhr.onerror = function () {
                rej(_xhr.response);
            };

            _xhr.timeout = 3000;
            _xhr.send(null);
        })
    }

    return {
        get: get
    }
})();