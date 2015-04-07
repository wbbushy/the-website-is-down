var currentTime = new Date();
var previousTime = new Date();



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
  if (checkStatus() == true) {
    previousTime = currentTime
    currentTime = new Date()
    console.log(currentTime - previousTime)
  }
}

var checkForInactivity = function() {
  if(currentTime - previousTime > 5500){
    console.log('oh no, the website was down from')
    console.log(previousTime)
    console.log('to')
    console.log(currentTime)
    return false
  }
}

var monitorInternet = function() {
  checkStatus()
  checkForInactivity()
  updateTime()
}

