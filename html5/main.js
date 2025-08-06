   
   const red = document.getElementById("r");
   const green = document.getElementById("g");
   const blue = document.getElementById("b");
   const p1 = document.getElementById("p1");
   
   function updateColor() {
    
    console.log('-------')
       const r = red.value;
       const g = green.value;
       const b = blue.value;
        p1.style.color = `rgb(${r}, ${g}, ${b})`;
    }
    
     
    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);
 
    updateColor();