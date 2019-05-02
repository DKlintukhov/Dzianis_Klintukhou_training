var http = (function () {

    function get(uri) {
        return new Promise(function (res, rej) {
            var _xhr = new XMLHttpRequest();
            _xhr.open('GET', uri);

            _xhr.onload = function () {
                res(JSON.parse(_xhr.response));
            };

            _xhr.onerror = function () {
                rej("Погода не доступна")
            };

            _xhr.timeout = 3000;
            _xhr.send(null);
        })
    }

    return {
        get: get
    }
})();