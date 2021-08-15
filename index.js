const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')

const showAmPm = true

// show time
function showTime(){
    // let today = new Date(2020, 08, 14, 23, 21, 25),
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


    // Set AM or PM 
    const amPm = hour >=12 ? 'PM' : 'AM';

    // 12 hour format
    hour  = hour % 12 || 12


    // output time
    time.innerHTML = `${hour} <span>:</span>${addZero(min)} <span>:</span> ${addZero(sec)} ${showAmPm ? amPm : ''} `

    setTimeout(showTime, 1000);
}

//addd zero
function addZero (n){
    return (parseInt(n,10) < 10 ? '0' : '') + n
}

//set background and greeting 

function setBgGreet(){
  let today = new Date(),
//   let today = new Date(2020, 08, 14, 23, 21, 22),
  hour = today.getHours()
  
  if(hour < 12){
      //Morning
      document.body.style.backgroundImage = "url(./images/morning.jpg)"
      greeting.textContent = 'Good Morning'
      document.body.style.color =  'white'
  }else if(hour < 18){
    document.body.style.backgroundImage = "url(./images/afternoon.jpg)"
    greeting.textContent = 'Good Afternoon'
      //afternoon
  }else if(hour < 21){
      //evening
      document.body.style.backgroundImage = "url(./images/evening.jpg)"
      greeting.textContent = ' Good Evening'

  } else{
      //night
      document.body.style.backgroundImage = "url(./images/night.jpg)"
      greeting.textContent = 'Good Night'
      document.body.style.color =  'white'
  }
}

//get name
function getName(){  
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]'

    }else{
        name.textContent = localStorage.getItem('name')
    }
}
//set name

function setName(e){
    if(e.type === 'keypress' ){
    //make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText)
        name.blur ()
    }
    } else {
    localStorage.setItem('name', e.target.innerText)
    }
}





//get focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]'

    }else{
        focus.textContent = localStorage.getItem('focus')
    }
}
//set focus

function setFocus(e){
    if(e.type === 'keypress' ){
    //make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText)
        focus.blur ()
    }
    } else {
    localStorage.setItem('focus', e.target.innerText)
    }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)




//event listener

showTime()
setBgGreet()
getName()
getFocus()
