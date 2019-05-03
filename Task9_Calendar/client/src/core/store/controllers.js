var controllersObserver = (function () {
    var _controllers = [];
    var _getControllers = {};

    function add(controller) {
        _controllers.push(controller);
    }

    function update() {
        for (let index = 0; index < _controllers.length; index++) {
            _controllers[index]();
        }
    }

    return {
        _getControllers: _getControllers,
        add: add,
        update: update
    }
})();