

// let my = "Hii I AM Akshay";
// console.log(my.length);
// console.log(my.indexOf("Akshay"));


// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getDay()); 
// console.log(myDate.getDate());
// console.log(myDate.getMonth());

//DOM Manipulation
let elem = document.getElementById('click');
  console.log(elem); 
  let elemClass = document.getElementsByClassName("caontainer");
  console.log(elemClass); 


//     //Javascript events
//    function clicked(){
  
//       console.log('the button was clicked');


//    }

   firstcontainer.addEventListener('click',function(){
       document.querySelectorAll('.container')[1].innerHTML = "<b>we Have clicked</b>"
       console.log('its working');
    })
//    firstcontainer.addEventListener('mouseover',function(){
//     console.log('mouse on container')
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log('mouse is out of a container');
// })
// firstcontainer.addEventListener('mouseup',function(){
//     console.log('mouse up when clicked on container');
    
// })

// firstcontainer.addEventListener('mousedown',function(){
//     console.log('mouse down when a clicked container');
// })


let Detail = {name : "Maddy", age : 23, City :[ "Pune","Mumbai","Delhi","Punjab"]}
console.log(Detail.City[3]);