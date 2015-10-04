var Parse = require("./scripts/parse.js");
var AppInitializer = require("./app.js");
Parse.initialize("sioS0CIiNzrrrveHJXRGefR6GfwmejA0g3RvCMW3", "zTbOPtlz85lIodGeJppajHWYEUpMiIDT10gIaAPQ");

var loginPage = tabris.create("Page", {
  title: "Iniciar Sesion",
  topLevel: true,
  image: {src: "images/Caduceus-64.png", scale: 0}
});

var savedUser = localStorage.getItem("login_user");
var savedPass = localStorage.getItem("login_pass");

savedUser = savedUser != null ? savedUser : "";
savedPass = savedPass != null ? savedPass : "";

var userInput = tabris.create("TextInput", {
  layoutData: {top: 20, left: "20%", right: "20%"},
  message: "Usuario",
  text: savedUser
}).on("accept", function(widget, text) {

}).appendTo(loginPage);

var passInput = tabris.create("TextInput", {
  layoutData: {top: [userInput, 10], left: "20%", right: "20%"},
  message: "Clave de acceso",
  text: savedPass,
  autoCapitalize: false,
  autoCorrect: false,
  keyboard: "default",
  type: "password"
}).on("accept", function(widget, text) {

}).appendTo(loginPage);

var remindCheck = tabris.create("CheckBox", {
  layoutData: {left: "20%", right: "20%", top: [passInput, 15]},
  selection: true,
  text: "Recordar datos de sesion"
}).on("change:selection", function(checkBox, selection) {
  if(!selection) {
    localStorage.removeItem("login_user");
    localStorage.removeItem("login_pass");
  }
}).appendTo(loginPage);

var loginButton = tabris.create("Button", {
  layoutData: {left: "20%", right: "20%", top: [remindCheck, 15]},
  text: "Iniciar Sesion"
}).on("select", function() {

  Parse.User.logIn(userInput.get("text"), passInput.get("text"), {
    success: function(user) {
      if(remindCheck.get("selection") == true) {
        localStorage.setItem("login_user", userInput.get("text"));
        localStorage.setItem("login_pass", passInput.get("text"));
      }
      window.plugins.toast.showShortBottom(user);
      InitApp = new AppInitializer(Parse, user, loginPage);
    },
    error: function(user, error) {
      window.plugins.toast.showShortBottom(error.message);
    }
  });


}).appendTo(loginPage);

var imageView = tabris.create("ImageView", {
    layoutData: {bottom: 10, left: 0, centerX: 0, height: 64},
    scaleMode: "fit",
    image:"./images/logo_iaiolabs.png"
  }).appendTo(loginPage);

loginPage.open();
