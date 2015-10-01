function createDummyPage(newTitle, newImage,isTopLevel) {
  var page = tabris.create("Page", {
    title:newTitle,
    topLevel:isTopLevel,
    image: {src: "images/"+newImage, scale: 0}
  });

  return page;
}

module.exports = createDummyPage;
