
let popped = 0;
var livescount = 3;
let lives = document.getElementById('lives')
lives.textContent = 'lives: ' + livescount;
let score = document.getElementById('score')
score.textContent ='Score: '+ popped;
/*
document.addEventListener('click', function(e){
    
    if (e.target.className === "balloon"){

      if  (e.target.style.backgroundColor = "green"){alert('correct')}
                console.log('heloo')
                e.target.style.backgroundColor = "#ededed";
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                Popsfinished();
    }   
});
*/
function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function Popsfinished(){
    if (popped > 30){
        clearInterval(i);
        hd.textContent='';
        console.log('all popped!');
        let gallery = document.querySelector('#ballons-main');
        let message = document.querySelector('#no-ballons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        lives.textContent =''
      let  hd2=  document.getElementById('hd')
        hd2.textContent='';
        d.textContent='';
    }
};



var d= document.getElementById('colorselect');
console.log(d);
let color=['green','red','blue','orange'];
//setInterval(function(){ alert("Hello"); }, 3000);
var counter = 0;


var i = setInterval(function(){
    // do your thing
    
d.textContent = `Please select  ${color[counter+1]}  color`;


document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        Popsfinished()
           var ee = e.target;
           console.log(ee.id);
           console.log(color[counter])
      if (color[counter]=="red" &&  ee.id=="div2"){
              Popsfinished()
               console.log('helloooo')
                e.target.style.backgroundColor = "#ededed";
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped+=10;
                score.textContent = popped;
                removeEvent(e);
              
    }
   else if (color[counter]=="green" &&  ee.id=="div1"){
        Popsfinished();
        console.log('helloooo')
         e.target.style.backgroundColor = "#ededed";
         e.target.style.backgroundColor = "#ededed";
         e.target.textContent = "POP!";
         popped+=10;
         score.textContent = popped;
         removeEvent(e);
        
}
else if (color[counter]=="blue" &&  ee.id=="div3"){
     Popsfinished();
     e.target.style.backgroundColor = "#ededed";
     e.target.style.backgroundColor = "#ededed";
     e.target.textContent = "POP!";
     popped+=10;
     score.textContent = popped;
     removeEvent(e);
   
}

else if (color[counter]=="orange" &&  ee.id=="div4"){
      Popsfinished();
     e.target.style.backgroundColor = "#ededed";
     e.target.style.backgroundColor = "#ededed";
     e.target.textContent = "POP!";
     popped+=10;
     score.textContent = popped;
     removeEvent(e);
     Popsfinished();
}






 
      else ( 
     livescount--
     
     );
     lives.textContent = 'lives: ' + (+livescount)


    }
    }   
);



    counter++;
    if(counter == color.length || livescount <1) {
     
        let gallery2 = document.querySelector('#ballons-main');
        gallery2.innerHTML = '';
        let hd=  document.getElementById('hd')
        hd.textContent='';
        clearInterval(i);
        d.textContent = 'GAME OVER'
    }
},7000)


/*
var d= document.getElementById('colorselect');
console.log(d);
let color=['red','green','blue','orange','black'];
//setInterval(function(){ alert("Hello"); }, 3000);
var counter = 0;
var i = setInterval(function(){
    // do your thing
    console.log('jjjjs')
d.textContent = `Please select  ${color[counter]}  color`;
    counter++;
    if(counter == color.length) {
        clearInterval(i);
        d.textContent = 'GAME OVER'
    }
}, 7000)


*/







