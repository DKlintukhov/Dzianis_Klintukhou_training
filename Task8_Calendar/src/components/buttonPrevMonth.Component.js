var buttonPrevMonthComponent = new Component()
    .setTag("button")
    .setClassName("button")
    .setContent("<")
    .setHandler(renderDatesController.prevDatesHandler)

var buttonNodeL = render.createNode(buttonPrevMonthComponent);