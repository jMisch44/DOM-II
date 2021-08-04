// Your code goes here
const addingBorders = document.querySelector('body');
const letsGoText = document.querySelector('.text-content h2');
const allElements = document.querySelector('*');
const navBar = document.querySelector('nav');
const firstLink = document.querySelector('.nav-link')
//mouse over event
navBar.addEventListener('mouseover', function(event){
    event.target.style.color = 'yellow';
    
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);


// nesting and stopPropagation and click event
firstLink.addEventListener('click', function(event){
    event.target.style.color = 'green';
    event.stopPropagation();
});
  
//keydown event
function keyPress(event) {
        alert('You pressed a key!');
}
document.addEventListener('keydown', keyPress);


//wheel event
function wheelOnPage(event){
    event.target.style.fontSize = '200%';
}

letsGoText.addEventListener('wheel', wheelOnPage);


//load event
window.addEventListener('load', (event) => {
    alert('continue on?');
})


// fullscreen change event
document.addEventListener('fullscreenchange', (event) => {
    if(document.fullscreenElement){
        alert(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    }else {
        alert('Leaving full-screen mode.');
    }
});

// resize event
window.addEventListener('resize', function(event){
    console.log(EventTarget);
});


//select event
document.addEventListener('selectstart', () => {
    allElements.style.color = 'orange';
})


// dblclick event

addingBorders.addEventListener('dblclick', function(event){
    event.target.style.border = 'black 2px dotted';
})







//scroll event
// function scrolledPage(event) {
//     console.log('Scrolling!');
// }



let count = 0;
function colorChanger(event){
    count = count + 1;
    if (count > 100 && count < 200){
            allElements.style.backgroundColor = 'pink';
    }else if (count > 150 && count < 250){
            allElements.style.color = 'blue';
    }else {
        allElements.style.backgroundColor = '';
        allElements.style.color = '';
    }
}

document.addEventListener('scroll', colorChanger);
