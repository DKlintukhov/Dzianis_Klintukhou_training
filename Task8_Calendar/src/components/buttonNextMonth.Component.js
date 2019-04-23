var buttonNextMonthComponent = new Component()
    .setTag("button")
    .setClassName("button")
    .setContent(">")
    .setHandler(renderDatesController.nextDatesHandler)

var buttonNodeR = render.createNode(buttonNextMonthComponent);