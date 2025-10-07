function turnOn() {
  document.getElementById('myImage').src = './images3/pic_bulbon.gif';
  document.querySelector('#myMessage').innerHTML = 'The light is ON 💡';
  document.body.style.backgroundColor = 'white'; // cambia fondo
  document.body.style.color = 'black'; // texto visible
}

function turnOff() {
  document.getElementById('myImage').src = './images3/pic_bulboff.gif';
  document.querySelector('#myMessage').innerHTML = 'The light is OFF ⚫';
  document.body.style.backgroundColor = 'black'; // fondo claro
  document.body.style.color = 'white';
}

function idea() {
    
}