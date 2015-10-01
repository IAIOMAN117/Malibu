var PAGE_MARGIN = 16;
var patients = require("../patients.json");
var patientsDetailPage = require("./patientDetailsPage.js");

var page = tabris.create("Page", {
  title:"Lista de Pacientes",
  topLevel:true,
  image: {src: "images/Contacts-64.png", scale: 0}
});

var patientsCollection = tabris.create("CollectionView", {
  layoutData: {left: 0, right: 0, top: 0, bottom: 0},
  itemHeight: 64,
  items: patients,
  initializeCell:function(cell) {
    var imageView = tabris.create("ImageView", {
        layoutData: {left: PAGE_MARGIN, centerY: 0, width: 32, height: 48},
        scaleMode: "fit"
      }).appendTo(cell);
      var nameTextView = tabris.create("TextView", {
        layoutData: {left: 64, right: PAGE_MARGIN, top: PAGE_MARGIN},
        markupEnabled: true,
        textColor: "#4a4a4a"
      }).appendTo(cell);
      var dobTextView = tabris.create("TextView", {
        layoutData: {left: 64, right: PAGE_MARGIN, top: [nameTextView, 4]},
        textColor: "#7b7b7b"
      }).appendTo(cell);
      cell.on("change:item", function(widget, patient) {
        //imageView.set("image", patient.image);
        nameTextView.set("text", patient.firstName + "  " + patient.lastName);
        dobTextView.set("text", patient.dob + " / " + patient.sex);
      });
  }
}).on("select", function(widget, patient) {
    var patientDetails = new patientsDetailPage(patient);
    patientDetails.open();

  });

patientsCollection.appendTo(page);
//page.append(patientsCollection);

module.exports = page;
