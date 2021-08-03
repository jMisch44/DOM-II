// Your code goes here
// mouseover, keydown, wheel, load, focus, resize, scroll, select, dblclick, drag / drop

//mouse over event
const navBar = document.querySelector('nav');

navBar.addEventListener('mouseover', function(event){
    event.target.style.color = 'yellow';
    
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

//keydown event
// function keyPress(event) {
//         alert('You pressed a key!');
// }
// document.addEventListener('keydown', keyPress);

//wheel event

//load event

// focus event
// const newWindow = window.open("", "", "width=200, height=100");
// newWindow.document.write("<p> A new Window has been created!</p>");
// newWindow.focus();

//resize event
window.addEventListener('resize', function => console.log('window resizes'));


//select event
// function selectionText(event){
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     console.log(`what you selected ${selection}`)
// }
// const contentSection = document.querySelector('.content-section');
// contentSection.addEventListener('select', selectionText);

//dblclick event
const sectionBackgroundColorChange = document.querySelector('body');
sectionBackgroundColorChange.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'grey';
})


//scroll event
// function scrolledPage(event) {
//     console.log('Scrolling!');
// }

// document.addEventListener('scroll', scrolledPage);