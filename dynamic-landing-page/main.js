const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

function showTime() {

    // let today = new Date(2021, 09, 09, 23, 09, 09), // to test

    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    // set am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';
    //  12hr hour format
    hour = hour % 12 || 12;
    // output time
    time.innerHTML =
        `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
        ${amPm}
        `;
    setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting

function setBgGreet() {
    let today = new Date(2021, 09, 09, 23, 09, 09), // to test
        // let today = new Date(),
        hour = today.getHours();


    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // afternoon
        document.body.style.backgroundImage = "url('img/afternoon1.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //  evening
        document.body.style.backgroundImage = "url('img/evening2.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = "white";
    }


}

// setName
function setName(e) {
    if (e.type == 'keypress') {
        // if press the "ENTER" key 
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }

}

// set Focus
function setFocus(e) {
    if (e.type == 'keypress') {
        // if press the "ENTER" key 
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }

}


//  get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }

}
// get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }

}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



// run
showTime();

setBgGreet();
getName();
getFocus();