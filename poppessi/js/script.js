const ClientJS = window.ClientJS;

// Create a new ClientJS object
const client = new ClientJS();

// Get the client's fingerprint id
const fingerprint = client.getDevice();

// set cookie for the fingerprint
setCookie('uid', fingerprint, '9999999999999999999999');

window.onload = () =>{
    var mouseIsDown = false;
    let img = document.querySelector('#poppessi1');
    let counter = document.querySelector('#target');
    let sound = new Audio('../assets/pop.mp3');

    if (String(getCookie('fixScore')) == 'yes') {
      score = 0
    }
    else {
      var score = parseInt(getCookie("score"));
    }
    
    if (score == NaN) {
      score = 0;
    }

    addToCounter()

    console.log('Hi! You found me :)')

    img.addEventListener('mousedown', ()=> {
        mouseIsDown = true;
        img.src = '../assets/poppessi2.png';
        sound.play();
        addToCounter();
        setCookie('score', score - 1, '9999999999999999999999');
        

        setTimeout(function() {
          if(mouseIsDown) {
            // mouse was held down for 5 seconds
            img.src = '../assets/favicon.ico';
            img.setAttribute('class', 'rotate');

          }
        }, 5000);
    })
    img.addEventListener('mouseup', ()=> {
        mouseIsDown = false;
        img.src = '../assets/poppessi1.png';
        img.setAttribute('class', 'nothing');
        counter.setAttribute('class', 'nothing');
        
    })

    function addToCounter(){        
        score++;
        counter.innerHTML = score;
        // TODO: scale and rotate score when clicked
        counter.setAttribute('class', 'scale');
        
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