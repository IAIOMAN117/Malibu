var PAGE_MARGIN = 16;


function createHomePage(ParseInstance) {
  this.Parse = ParseInstance;
  var page = tabris.create("Page", {
    title: "Inicio 8",
    topLevel: true,
    image: {src: "images/Home-64.png", scale: 0}
  });

  var TestObject = this.Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "var"}).then(function(object) {
    console.log("new orientation:", "yay! it worked");
  });

  return page;
}

module.exports = createHomePage;
//page.open();
