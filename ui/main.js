console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='hi!! it\'s me your sumanth \n this is my first web app...!!';


var img=document.getElementById('sumo');
var marginleft=0;
function moveright(){
    marginleft=marginright+5;
    img.style.margin=marginleft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,50);
};
