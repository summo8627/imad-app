console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='hi!! it\'s me your sumanth \n this is my first web app...!!';


var img=document.getElementById('sumo');
var marginright=0;
function moveleft(){
    marginright=marginright+5;
    img.style.margin=marginright+'px';
}
img.onclick=function(){
    var interval=setInterval(moveleft,50);
};
