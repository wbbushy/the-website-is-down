var currentTime = new Date()
var previousTime = null;

var updateTime = function() {
  checkStatus();
  previousTime = currentTime
  currentTime = new Date()
}

var checkStatus = function() {
  var online = navigator.onLine;
  if (online == true) {
    return true
  }
  else {
    return false
  }
}
