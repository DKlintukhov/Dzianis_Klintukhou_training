// функция конструктор для создания компонентов
function Component() {
    var _tag;
    var _content;
    var _className;
    var _attributeName;
    var _attributeValue;
    var _handler = new Function;
    var _id;
    var _callback = new Function;

    this.setCallBack = function (callback) {
        this._callback = callback;
    }

    this.getCallBack = function () {
        return _callback;
    }

    this.setHandler = function (handler) {
        _handler = handler;
        return this;
    }

    this.setAttributeName = function (name) {
        _attributeName = name;
        return this;
    }

    this.setAttributeValue = function (value) {
        _attributeValue = value;
        return this;
    }

    this.setTag = function (tag) {
        _tag = tag;
        return this;
    }

    this.setContent = function (content) {
        _content = content || " ";
        return this;
    }

    this.setClassName = function (className) {
        _className = className || " ";
        return this;
    }

    this.setId = function (id) {
        _id = id || " ";
        return this;
    }

    this.getId = function () {
        return _id;
    }

    this.getTag = function () {
        return _tag;
    }

    this.getContent = function () {
        return _content;
    }

    this.getClassName = function () {
        return _className;
    }

    this.getHandler = function () {
        return _handler();
    }

    this.getAttributeName = function () {
        return _attributeName;
    }

    this.getAttributeValue = function () {
        return _attributeValue;
    }
}