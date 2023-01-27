
var length=document.querySelectorAll(".drum").length;

for(i=0;i<length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var a=this.innerHTML;
        buttonClicked(a);
    });
}
document.addEventListener("keydown", e =>{
    var a=e.key;
    buttonClicked(a);
});
function  buttonClicked(innerHtml){
    switch(innerHtml){
        case 'w':
            var tom1 = new Audio("audios/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2=new Audio("audios/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3=new Audio("audios/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4=new Audio("audios/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare=new Audio("audios/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash=new Audio("audios/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("audios/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(a);
    }
}


