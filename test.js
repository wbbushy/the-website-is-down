var on = false
var currentTime = new Date()
var previousTime = null;

var checkStatus = function() {
  var online = navigator.onLine;
  if (online == true) {
    return true
  }
  else {
    return false
  }
}

var updateTime = function() {
  if (checkStatus() == true {
    previousTime = currentTime
    currentTime = new Date()
  }
}

var checkForInactivity = function() {
  if(currentTime - previousTime > 3000){
    createLog()
  }
}

var monitorInternet = function() {
  while (on == true)
    updateTime()
    checkStatus
}
