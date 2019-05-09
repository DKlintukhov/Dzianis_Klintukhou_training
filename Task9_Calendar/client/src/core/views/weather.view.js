var weatherView = (function () {
    
    function render(weatherViewModel) {
        var node = document.createElement(weatherViewModel.tag);
        var city = document.createElement(weatherViewModel.content.city.tag);
        var wind = document.createElement(weatherViewModel.content.wind.tag);
        var temp = document.createElement(weatherViewModel.content.temp.tag);
        var desc = document.createElement(weatherViewModel.content.desc.tag);

        city.className = weatherViewModel.content.city.style;
        wind.className = weatherViewModel.content.wind.style;
        temp.className = weatherViewModel.content.temp.style;
        desc.className = weatherViewModel.content.desc.style;

        city.textContent = weatherViewModel.content.city.content;
        wind.textContent = weatherViewModel.content.wind.content;
        temp.textContent = weatherViewModel.content.temp.content;
        desc.textContent = weatherViewModel.content.desc.content;
        
        node.className = weatherViewModel.style;
        node.id = weatherViewModel.id;
        node.appendChild(city);
        node.appendChild(temp);
        node.appendChild(wind);
        node.appendChild(desc);

        libDOM.isElemInDom(document.getElementById(weatherViewModel.id), document.getElementById(weatherViewModel.parentId));
        libDOM.addToParent(weatherViewModel.parentId, node, "beforeEnd");
    }

    return {
        render: render
    }
})();