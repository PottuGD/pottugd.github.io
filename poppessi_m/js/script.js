window.onload = () =>{


    if (!/Android|iPhone/i.test(navigator.userAgent)) {
        location.replace("../../poppessi/html");
    }

    var mouseIsDown = false;
    let img = document.querySelector('#PopPessi');
    let counter = document.querySelector('#target');
    let sound = new Audio('../assets/pop.mp3');

    if (String(getCookie('fixScore')) == 'yes') {
      score = 0
    }
    else {
      var score = parseInt(getCookie("score"));
    }
    
    if (isNaN(score)) {
      score = -0;
      console.log('score was NaN: score = 0');
    }

    addToCounter()

    console.log('Hi! You found me :)')

    img.addEventListener('touchstart', ()=> {
        mouseIsDown = true;
        img.setAttribute("style", "background-image: url('../assets/poppessi2.png'); width: 490px; height: 640px; background-position: bottom 100px center; background-repeat: no-repeat;");
        img.setAttribute('draggable', 'false')
        sound.play();
        addToCounter();
        setCookie('score', score - 1, '9999999999999999999999');
        

        setTimeout(function() {
          if(mouseIsDown) {
            // mouse was held down for 5 seconds
            img.setAttribute("style", "background-image: url('../assets/favicon.ico'); width: 490px; height: 640px; background-position: bottom 100px center; background-repeat: no-repeat;");
            img.setAttribute('class', 'rotate');
            img.setAttribute('draggable', 'false')

          }
        }, 5000);
    })
    img.addEventListener('touchend', ()=> {
        mouseIsDown = false;
        img.setAttribute("style", "background-image: url('../assets/poppessi1.png'); width: 490px; height: 640px; background-position: bottom 100px center; background-repeat: no-repeat;");
        img.setAttribute('class', 'nothing');
        img.setAttribute('draggable', 'false')
        counter.setAttribute('class', 'nothing');
        
    })

    function addToCounter(){        
        score++;
        counter.innerHTML = score;
        // TODO: scale and rotate score when clicked
        counter.setAttribute('class', 'scale');

        if (score == NaN || score == Infinity || score == -Infinity || score == 'NaN' || counter == 'NaN') {
          score = 0;
          console.log('score was NaN: score = 0');
        }
        
    }
}

// cookies

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


/*

copy these functions into the console if score is nan

function fixScore(input){
    setCookie('fixScore', input, '9999999999999999999999');
    location.reload();
}


/////////////////////////////////////////////////////////////////////////


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

*/
