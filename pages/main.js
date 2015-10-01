var PAGE_MARGIN = 16;


var page = tabris.create("Page", {
  title: "Inicio 8",
  topLevel: true,
  image: {src: "images/Home-64.png", scale: 0}
});


/*


tabris.create("Action", {
  title: "Settings",
  image: {src: "images/action_settings.png", scale: 3}
}).on("select", function() {
  settingsPage = new settings();
  settingsPage.open();
});

var proposals = ["baseball", "batman", "battleship", "bangkok", "bangladesh", "banana"];
var textView = tabris.create("TextView", {
  layoutData: {centerX: 0, centerY: 0}
}).appendTo(page);
var action = tabris.create("SearchAction", {
  title: "Search",
  image: "images/action_search.png"
}).on("select", function() {
  this.set("text", "");
}).on("input", function(widget, query) {
  updateProposals(query);
}).on("accept", function(widget, query) {
  textView.set("text", "Selected '" + query + "'");
});

updateProposals("");
function updateProposals(query) {
  action.set("proposals", proposals.filter(function(proposal) {
    return proposal.indexOf(query.toLowerCase()) !== -1;
  }));
}
*/




var button = tabris.create("Button", {
  text: "Un boton",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var label = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

button.on("select", function() {
  label.set("text", "Un texto");
});

var checkBox = tabris.create("CheckBox", {
  layoutData: {left: 10, top: 10},
  selection: true,
  text: "selected"
}).on("change:selection", function(checkBox, selection) {
  this.set("text", selection ? "selected" : "deselected");
}).appendTo(page);


var switch1 = tabris.create("Switch", {
  layoutData: {left: 10, top: [checkBox, 10]},
  selection: true
}).on("change:selection", function(checkBox, selection) {

}).appendTo(page);

tabris.create("ToggleButton", {
  layoutData: {left: 10, top: [switch1, 10]},
  text: "selected",
  selection: true
}).on("change:selection", function(button, selection) {
  this.set("text", selection ? "selected" : "not selected");
}).appendTo(page);


module.exports = page;
page.open();
