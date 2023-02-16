function sendActionToApp(action) {

  if(action == 1) {
    $("#app-status-text").text("Status: Online");
    $("#app-status-text").css("color", "blue");
    $("#app-icon-inactive").css("display", "none");
    $("#app-icon-active").css("display", "");
  }
  else {
    $("#app-status-text").text("Status: Offline");
    $("#app-status-text").css("color", "red");
    $("#app-icon-inactive").css("display", "");
    $("#app-icon-active").css("display", "none");
  }

}