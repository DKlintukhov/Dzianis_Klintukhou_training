// функция конструктор для создания компонентов
function Component() {
    var _tag;
    var _content;
    var _className;
    var _attributeName;
    var _attributeValue;
    var _handler = new Function;
    var _callback = new Function;

    function setCallBack(callback) {
        this._callback = callback;
    }

    function getCallBack() {
        return _callback;
    }

    function setHandler(handler) {
        _handler = handler;
        return this;
    }

    function setAttributeName(name) {
        _attributeName = name;
        return this;
    }

    function setAttributeValue(value) {
        _attributeValue = value;
        return this;
    }

    function setTag(tag) {
        _tag = tag;
        return this;
    }

    function setContent(content) {
        _content = content || " ";
        return this;
    }

    function setClassName(className) {
        _className = className || " ";
        return this;
    }

    function getTag() {
        return _tag;
    }

    function getContent() {
        return _content;
    }

    function getClassName() {
        return _className;
    }

    function getHandler() {
        return _handler();
    }

    function getAttributeName() {
        return _attributeName;
    }

    function getAttributeValue() {
        return _attributeValue;
    }

    return {
        setCallBack: setCallBack,
        getCallBack: getCallBack,
        setHandler: setHandler,
        setAttributeName: setAttributeName,
        setAttributeValue: setAttributeValue,
        setTag: setTag,
        setContent: setContent,
        setClassName: setClassName,
        getTag: getTag,
        getContent: getContent,
        getClassName: getClassName,
        getHandler: getHandler,
        getAttributeName: getAttributeName,
        getAttributeValue: getAttributeValue
    }
}