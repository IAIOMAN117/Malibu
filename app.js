function initializeApplication (Parse, loggedInUser, loginPage) {
  var dummyPage = require("./pages/dummyPage.js");
  var homePageBuilder = require("./pages/main.js");

  homePage = new homePageBuilder(Parse);
  agendaDummyPage = new dummyPage("Agenda","Planner-64.png",true);

  require("./pages/patientsPage.js");

  infoDummyPage = new dummyPage("Notas Medicas","TreatmentPlan-64.png",true);
  infoDummyPage = new dummyPage("Recetas","Invoice-64.png",true);
  infoDummyPage = new dummyPage("Certificados","Agreement-64.png",true);
  infoDummyPage = new dummyPage("Facturas","Bill-64.png",true);
  infoDummyPage = new dummyPage("Reportes","BarChart-64.png",true);


  require("./pages/settingsPage.js");


  infoDummyPage = new dummyPage("Acerca de","Info-64.png",true);
  helpDummyPage = new dummyPage("Ayuda","Help-64.png",true);


  homePage.open();
  loginPage.close();
  /**/



  /**/


  var drawer = tabris.create("Drawer");

  tabris.create("ImageView", {
    image: "images/Doctor-64.png",
    scaleMode: "fit",
    layoutData: {left: 16, right: 0, top: 0, height: 96, width: 80}
  }).appendTo(drawer);

  tabris.create("PageSelector", {
    layoutData: {left: 0, top: 96, right: 0, bottom: 0}
  }).appendTo(drawer);
}

module.exports = initializeApplication;
