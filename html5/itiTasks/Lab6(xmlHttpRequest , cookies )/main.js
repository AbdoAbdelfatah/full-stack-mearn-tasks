var imgArr = [];

 
var http = new XMLHttpRequest();
http.open("GET", "https://picsum.photos/v2/list", false);
http.onreadystatechange = function () {
  if ((http.readyState == 4) & (http.status == 200)) {
    imgArr = JSON.parse(http.responseText); 
  }
};
http.send();
var imgSlide = document.querySelector("#imgSlide");
var idx = 0;
var id;
var speed=3000;
function showImage() {
  imgSlide.src = imgArr[idx].download_url;
  var div3 = document.querySelector("#div3");
  div3.innerHTML = "";
  var p = document.createElement("p");
  p.innerText = imgArr[idx].author;
  div3.appendChild(p);
}
function startInterval() {
  clearInterval(id);
  id = setInterval(function () { 
    showImage()
    idx++;
    idx%=imgArr.length;
  }, speed);
}

document.querySelector("#btnPlay").addEventListener("click", function () {
  startInterval();
  console.log("Play..");
});


document.querySelector("#l").addEventListener("click", function () {
  clearInterval(id); 
  idx = (idx - 1 + imgArr.length) % imgArr.length; 
   showImage(); 
});

document.querySelector("#g").addEventListener("click", function () {
   clearInterval(id); 
  idx = (idx + 1) % imgArr.length;  
  showImage();
});
document.querySelector("#btnStop").addEventListener("click", function () {
  clearInterval(id);
  console.log("Stop..");
});

document.querySelector("#first").addEventListener("click", function () {
  clearInterval(id);
  speed=3000;
  startInterval();
});

document.querySelector("#second").addEventListener("click", function () {
  clearInterval(id);
   speed=2000;
  startInterval();
   
});

document.querySelector("#third").addEventListener("click", function () {
  clearInterval(id);
   speed=1000;
  startInterval();
  
});
  

var div1 = document.querySelector("#div1");
   
  div1.style.width = "500px";
  div1.style.display = "flex";
  div1.style.alignItems = "center";
  div1.style.justifyContent = "center";


  //BONUS

  function setCookie(name, value, days) {
  var expires = ""; 
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  expires = date.toUTCString();
  
  document.cookie= name + "=" + value+"; expires=" + expires + "; path=/";
   
}

 
function getCookies() {
   var arr=[];
   document.cookie.split("; ").forEach (cookie => {
     const [key,val] = cookie.split("=");
     console.log(key,val)
     arr.push({ name: key, value: val });
  });

  return arr;
}

 
function checkCookie(name, value) {
  const cookies = getCookies();
  return cookies.some(cookie => cookie.name === name && cookie.value === value);
}

setCookie("username", "Abdelfatah", 3); 
setCookie("usernameinfo", "Abdelrahman", 3); 
console.log(getCookies()); 
console.log(checkCookie("username", "Abdelfatah"));
 
 