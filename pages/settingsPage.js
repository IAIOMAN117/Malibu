var PAGE_MARGIN = 16;
var settingsPage = createSettingsPage();

function createSettingsPage() {
  var page = tabris.create("Page", {
    title: "Preferencias",
    topLevel:true,
    image: {src: "images/Settings-64.png", scale: 0}
  });
  var settingsTextView = tabris.create("TextView", {
    text: "Book covers come under CC BY 2.0",
    layoutData: {left: PAGE_MARGIN, right: PAGE_MARGIN, top: PAGE_MARGIN}
  }).appendTo(page);
  var url = "https://www.flickr.com/photos/ajourneyroundmyskull/sets/72157626894978086/";
  var linkTextView = tabris.create("TextView", {
    text: "<a href=\"" + url + "\">Covers on flickr</a>",
    markupEnabled: true,
    layoutData: {left: PAGE_MARGIN, right: PAGE_MARGIN, top: [settingsTextView, 10]}
  }).appendTo(page);
  tabris.create("TextView", {
    text: "<i>Authors of book covers:</i><br/>" +
      "Paula Rodriguez - 1984<br/>" +
      "Marc Storrs and Rob Morphy - Na Tropie Nieznanych<br/>" +
      "Cat Finnie - Stary Czlowiek I Morze<br/>" +
      "Andrew Brozyna - Hobbit<br/>" +
      "Viacheslav Vystupov - Wojna Swiatow<br/>" +
      "Marc Storrs and Rob Morphy - Zegar Pomaranczowy Pracz<br/>" +
      "Andrew Evan Harner - Ksiega Dzungli",
    markupEnabled: true,
    layoutData: {left: PAGE_MARGIN, right: PAGE_MARGIN, top: [linkTextView, 10]}
  }).appendTo(page);
  return page;
}



module.exports = settingsPage;
