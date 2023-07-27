// 1st way
// // alert("welcome sandhya u can do it :)")
//button is targeted
const openbtn = document.querySelector("#open");
// console.log(openbtn)
//the continer we need to show is targeted
const modal = document.querySelector('.modal-overlay');
// console.log(modal)
//event is added for the button 
openbtn.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.classList.contains('btn')){
        modal.style.visibility = 'visible';
        modal.style.zIndex = 5
    }
})

const closebtn = document.querySelector('.close-btn')
// console.log(closebtn)
function xbutton(e){
    // console.log(e.target)
    if(e.target.classList.contains('fas')){
        // console.log('hello')
        modal.style.visibility = 'hidden';
        modal.style.zIndex = -10
    }
}
closebtn.addEventListener('click',xbutton)





// 2nd way
// const modal = document.querySelector('.modal-overlay');

const buttons = document.querySelectorAll('button')


for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',(e)=>{

        if(e.target.classList.contains('btn')){
            modal.style.visibility = 'visible';
            modal.style.zIndex = 5
        }
        if(e.target.classList.contains('fas')){
            console.log('hello')
            modal.style.visibility = 'hidden';
            modal.style.zIndex = -10
        }

    })  
    }