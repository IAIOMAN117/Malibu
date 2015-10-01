var dummyPage = require("./pages/dummyPage.js");
require("./pages/main.js");
agendaDummyPage = new dummyPage("Agenda","Planner-64.png",true);

require("./pages/patientsPage.js");
require("./pages/settingsPage.js");


infoDummyPage = new dummyPage("Acerca de","Info-64.png",true);
helpDummyPage = new dummyPage("Ayuda","Help-64.png",true);

/**/



/**/


var drawer = tabris.create("Drawer");

tabris.create("ImageView", {
  image: "images/Contacts-64.png",
  scaleMode: "fill",
  layoutData: {left: 0, right: 0, top: 0, height: 200}
}).appendTo(drawer);

tabris.create("PageSelector", {
  layoutData: {left: 0, top: 200, right: 0, bottom: 0}
}).appendTo(drawer);
