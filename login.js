var Parse = require("./scripts/parse.js");
var Keys = require("./secure/keys.js");
var AppInitializer = require("./app.js");

var savedUser = localStorage.getItem("login_user");
var savedPass = localStorage.getItem("login_pass");

savedUser = savedUser != null ? savedUser : "";
savedPass = savedPass != null ? savedPass : "";

Parse.initialize(Keys.parseKeyApp, Keys.parseJsKey);

var loginPage = tabris.create("Page", {
  title: "Iniciar Sesion",
  topLevel: true,
  image: {src: "images/Caduceus-64.png", scale: 0}
});

var continueBlock = false;
var loggedUser = "";

if (Parse.User.current()) {
  continueBlock = true;
  loggedUser = Parse.User.current().getUsername();
  window.plugins.toast.showShortBottom( "Currently logged in as " + loggedUser);

} else {
  window.plugins.toast.showShortBottom("need to log in");
}

var continueText = tabris.create("TextView", {
  layoutData: {left: "10%", top: 20, right: "10%"},
  text: "Sesion Iniciada como :",
  visible: continueBlock
}).appendTo(loginPage);

var continueUserText = tabris.create("TextView", {
  layoutData: {left: "10%", top: [continueText, 5], right: "10%"},
  text: "<big>" + loggedUser +"</big>",
  markupEnabled: true,
  visible: continueBlock
}).appendTo(loginPage);

var continueButton = tabris.create("Button", {
  layoutData: {left: "10%", right: "10%", top: [continueUserText, 5]},
  text: "Continuar",
  visible: continueBlock
}).on("select", function() {
  InitApp = new AppInitializer(Parse, loginPage);
}).appendTo(loginPage);

var logoutButtonButton = tabris.create("Button", {
  layoutData: {left: "10%", right: "10%", top: [continueButton, 5]},
  text: "Cerrar Sesion",
  visible: continueBlock
}).on("select", function() {
  Parse.User.logOut();
}).appendTo(loginPage);

var userInput = tabris.create("TextInput", {
  layoutData: {top: [logoutButtonButton, 10], left: "10%", right: "10%"},
  message: "Usuario",
  text: savedUser
}).on("accept", function(widget, text) {

}).appendTo(loginPage);

var passInput = tabris.create("TextInput", {
  layoutData: {top: [userInput, 5], left: "10%", right: "10%"},
  message: "Clave de acceso",
  text: savedPass,
  autoCapitalize: false,
  autoCorrect: false,
  keyboard: "default",
  type: "password"
}).on("accept", function(widget, text) {

}).appendTo(loginPage);

var remindCheck = tabris.create("CheckBox", {
  layoutData: {left: "10%", right: "10%", top: [passInput, 5]},
  selection: true,
  text: "Recordar datos de sesion"
}).on("change:selection", function(checkBox, selection) {
  if(!selection) {
    localStorage.removeItem("login_user");
    localStorage.removeItem("login_pass");
  }
}).appendTo(loginPage);

var loginButton = tabris.create("Button", {
  layoutData: {left: "20%", right: "20%", top: [remindCheck, 5]},
  text: "Iniciar Sesion"
}).on("select", function() {

  Parse.User.logIn(userInput.get("text"), passInput.get("text"), {
    success: function(user) {
      if(remindCheck.get("selection") == true) {
        localStorage.setItem("login_user", userInput.get("text"));
        localStorage.setItem("login_pass", passInput.get("text"));
      }
      window.plugins.toast.showShortBottom(user);
      InitApp = new AppInitializer(Parse, loginPage);
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
