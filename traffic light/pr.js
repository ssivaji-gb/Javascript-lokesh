let count=0

function trafficLight(){
    if(count=="0"){
        console.log("red")
        count++
    }else if(count=="1"){
        console.log("yellow");
        count++
    }else if(count=="2"){
        console.log("green");
        // count=0
        
    }
}


 let btn = document.querySelector(".btn");
      let red = document.getElementById("redlight");
      let yellow = document.getElementById("yellowlight");
      let green = document.getElementById("greenlight");
    //   let count = 0;
      btn.addEventListener("click", trafficLight);

      function trafficLight() {
        red.style.backgroundColor = "white";
        yellow.style.backgroundColor = "white";
        green.style.backgroundColor = "white";
        count++;
        if (count == "1") {
          red.style.backgroundColor = "red";
        } else if (count == "2") {
          yellow.style.backgroundColor = "yellow";
        } else if (count == "3") {
          green.style.backgroundColor = "green";
          count = 0;
        }
      }