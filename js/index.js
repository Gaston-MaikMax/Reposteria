
let ubicacionPrincipal = window.pageYOffset;

  AOS.init();


window.addEventListener('scroll', function(){
 let desplasamientoActual = window.pageYOffset;
 if(ubicacionPrincipal >= desplasamientoActual){
  document.getElementsByTagName('nav')[0].style.top = '0px';
 }else{
  document.getElementsByTagName('nav')[0].style.top = '-100px';
 }
 ubicacionPrincipal = desplasamientoActual;
});

/*Menu*/ 
let enLacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener('click', function(){

 if(semaforo){
  document.querySelectorAll(".hamburger")[0].style.color = "#fff";
  semaforo=false; 
 }else{
  document.querySelectorAll(".hamburger")[0].style.color = "#000";
  semaforo=true;
 }
 enLacesHeader.classList.toggle("menudos")
});