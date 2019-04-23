var headerDateComponent = new Component()
    .setTag("h1")
    .setAttributeName("id")
    .setAttributeValue("js-headerComponent")
    .setClassName("date page__date")
    .setContent(dateModel.getMonthName() + " " + dateModel.getCurrentYear())

var headerDateNode = render.createNode(headerDateComponent);