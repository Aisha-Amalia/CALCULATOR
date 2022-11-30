
function del(){

    var value= document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}



function reset(){
  document.getElementById('screen').value= ''

 }

 function mult(){
    let sum = x * y
    changeR.innerText = sum
   
  }

 

  var first=document.getElementById('first');
  first.addEventListener('click',function(){
   var body=document.querySelector('body');
   var box1=document.getElementById('toggle');
    body.classList.add('active');
    body.classList.remove('active1');
    body.classList.remove('active2');
    box1.style.left='5%';
  })

  
  
  var second=document.getElementById('second');
  second.addEventListener('click',function(){
   var body=document.querySelector('body');
   var box1=document.getElementById('toggle');
   body.classList.add('active1');
   body.classList.remove('active');
   body.classList.remove('active2');
   box1.style.left='38%';
  })
  

  
  var third=document.getElementById('third');
  third.addEventListener('click',function(){
    var body=document.querySelector('body');
    var box1=document.getElementById('toggle');
    body.classList.add('active2');
    body.classList.remove('active');
    body.classList.remove('active1');
    box1.style.left='76%';
    
  })



// -----



  var toggle=document.getElementById('first');
  first.addEventListener('click',function(){
   var body=document.querySelector('body');
   var  box1=document.getElementById('toggle');
    body.classList.add('toggle1');
    body.classList.remove('toggle2');
    body.classList.remove('toggle3');
    box1.style.left='5%';
  })


  var toggle=document.getElementById('second');
  second.addEventListener('click',function(){
   var body=document.querySelector('body');
   var  box1=document.getElementById('toggle');
    body.classList.add('toggle2');
    body.classList.remove('toggle1');
    body.classList.remove('toggle3');
    box1.style.left='38%';
  })



  var toggle=document.getElementById('third');
  third.addEventListener('click',function(){
   var body=document.querySelector('body');
   var box1=document.getElementById('toggle');
    body.classList.add('third');
    body.classList.remove('first');
    body.classList.remove('second');
    box1.style.left='72%';
  })








