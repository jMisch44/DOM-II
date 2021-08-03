// Your code goes here
// resize, select, drag / drop


//working
//mouse over event
const navBar = document.querySelector('nav');

navBar.addEventListener('mouseover', function(event){
    event.target.style.color = 'yellow';
    
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);


//working    
//keydown event
// function keyPress(event) {
//         alert('You pressed a key!');
// }
// document.addEventListener('keydown', keyPress);


//working
//wheel event
// function wheelOnPage(event){
//     event.target.style.fontSize = '200%';
// }
// const el = document.querySelector('.text-content h2');
// el.addEventListener('wheel', wheelOnPage);


//working
// //load event
// window.addEventListener('load', (event) => {
//     alert('continue on?');
// })


//working
// focus event
// const newWindow = window.open("", "", "width=200, height=100");
// newWindow.document.write("<p> A new Window has been created!</p>");
// newWindow.focus();


//working
// resize event
// window.addEventListener('resize', function(event){
//     console.log(target.)
//     if ()
// });


//select event



// working
// dblclick event
// const addingBorders = document.querySelector('body');
// addingBorders.addEventListener('dblclick', function(event){
//     event.target.style.border = 'black 2px dotted';
// })


//working
//scroll event
// function scrolledPage(event) {
//     console.log('Scrolling!');
// }

// function colorChanger(event){
//     count = 0;
//     count = count++;
//     if (count % 2 === 0){
        
//     }
// }


// document.addEventListener('scroll', scrolledPage);