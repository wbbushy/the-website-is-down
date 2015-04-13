$(document).ready(bindEvents)

var currentTime = 0;
var previousTime = 0;
var stop = null;


function bindEvents() {
    startMonitorInternet()
    stopMonitorInternet()
}

function startMonitorInternet() {
  $('#monitor').click(runIt)
}

function runIt() {
  previousTime = new Date()
  currentTime = new Date()
  stop = setInterval(monitorInternet, 5000)
}

function stopMonitorInternet() {
  $('#stop').click(cancelMonitorInternet)
}

function checkStatus() {
  var online = navigator.onLine;
  if (online == true) {
    return true
  }
  else {
    return false
  }
}

function updateTime() {
  if (checkStatus() == true) {
    previousTime = currentTime
    currentTime = new Date()
    console.log(currentTime - previousTime)
  }
}

function checkForInactivity() {
  if(currentTime - previousTime > 5500){
    makeLog()
    console.log('oh no, the website was down from')
    console.log(previousTime)
    console.log('to')
    console.log(currentTime)
    return false
  }
}

function monitorInternet() {
  checkStatus()
  checkForInactivity()
  updateTime()
}

function cancelMonitorInternet() {
  clearInterval(stop)
}


function makeLog() {
  $('#logs').append("<li>Oh No! The website was down from" + previousTime + " to " + currentTime + "</li>")
}
