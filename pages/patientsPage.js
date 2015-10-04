var PAGE_MARGIN = 16;
var WIDGET_MARGIN = 5;
var patients = require("../patients.json");
var patientsDetailPage = require("./patientDetailsPage.js");

var page = tabris.create("Page", {
  title:"Pacientes",
  topLevel:true,
  image: {src: "images/Contacts-64.png", scale: 0}
});

var patientsCollection = tabris.create("CollectionView", {
  layoutData: {left: 0, right: 0, top: 0, bottom: 0},
  itemHeight: 64,
  items: patients,
  initializeCell:function(cell) {
    var imageView = tabris.create("ImageView", {
        layoutData: {left: PAGE_MARGIN, centerY: 0, width: 64, height: 64},
        scaleMode: "fit"
      }).appendTo(cell);
      var nameTextView = tabris.create("TextView", {
        layoutData: {left: [imageView, WIDGET_MARGIN], right: PAGE_MARGIN, top: WIDGET_MARGIN},
        markupEnabled: true,
        textColor: "#4a4a4a"
      }).appendTo(cell);
      var dobTextView = tabris.create("TextView", {
        layoutData: {left: [imageView, WIDGET_MARGIN], right: PAGE_MARGIN, top: [nameTextView, WIDGET_MARGIN]},
        textColor: "#7b7b7b"
      }).appendTo(cell);
      cell.on("change:item", function(widget, patient) {
        //imageView.set("image", patient.image);
        if(patient.sex == "male")
        {
          imageView.set("image", "./images/Businessman-64.png");
        }
        else if(patient.sex == "female") {
          imageView.set("image", "./images/Businesswoman-64.png");
        }
        nameTextView.set("text","<big>" + patient.firstName + "  " + patient.lastName + "</big>");
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
