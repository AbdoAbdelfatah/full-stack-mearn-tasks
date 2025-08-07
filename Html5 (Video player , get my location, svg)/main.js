 //for location page
 //---------------------------------------------------------------------
    
    
   function getLocation() {
      const status = document.getElementById("status");
 
       
      status.textContent = "Getting your location...";
 
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          status.textContent = "Location found! Opening Google Maps...";
          
           
          const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          window.open(mapsUrl, "_blank");
        }
        
      );
    }

// for video player page
//-----------------------------------------------------------------------------------------------------------------------

const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const progressBar = document.getElementById("progressBar");

 
playBtn.addEventListener("click",()=>{
   if(video.paused) {
    video.play();
    playBtn.textContent = "Stop";
   }
   else{
      video.pause();
      playBtn.textContent = "Play";
   }
});

 muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "Unmute" : "Mute";
 });

 
 volumeSlider.addEventListener("input",()=>{
  video.volume =volumeSlider.value
 });

 

video.addEventListener("timeupdate",()=>{
  const p=video.currentTime/video.duration*100;
  progressBar.value=p;   
    if (video.ended) {
      playBtn.textContent = "Play";
    }
});
 
 
 
function loadVideo(src) {
  video.src = src;
  video.load();
  playBtn.textContent = "Play";
}
