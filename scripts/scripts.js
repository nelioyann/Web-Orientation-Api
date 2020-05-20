window.addEventListener("DOMContentLoaded", ()=>{
    if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    document.getElementById("supported").innerText = "Supported!";
  }
})

