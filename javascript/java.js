// les selecteurs en java 

// const BALISEHTML = document.querySelector("h3");
//  console.log(BALISEHTML);
//  BALISEHTML.style.background=" red";



//  les clicks d'événements ou click events
  const insidecontainer = document.querySelector(".click-event");
   const btn1= document.getElementById('btn-1');
   const btn2 = document.getElementById('btn-2');
   const response = document.querySelector('p');


  insidecontainer.addEventListener("click", ()=> {
    insidecontainer.classList.toggle("question-clicked");


  });
   btn1.addEventListener('click', () =>{
    response.classList.add("mame");
       response.style.background="green";
   })
   btn2.addEventListener('click', () =>{
    response.classList.add("gueye");
    response.style.background="red";
    
})
// --------------------------------------------partie exo n2!! sur les mouvements de la souris----------------
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) =>{
  mousemove.style.left= e.pageX + "px";
  mousemove.style.top= e.pageY + "px";
  console.log(e);
  
})
window.addEventListener("mousedown", ()=>{
  mousemove.style.transform = "scale(4) translate(-25% , -25%)";
  mousemove.style.border= "1px solid teal";
})
window.addEventListener("mouseup", ()=>{
  mousemove.style.transform = "scale(1) translate(-50% , -50%)";
  mousemove.style.border= "2px solid red";
})
insidecontainer.addEventListener("mouseenter" , ()=>{
  insidecontainer.style.background ="rgba(0,0,0,0.6)";
})
insidecontainer.addEventListener("mouseout" , ()=>{
  insidecontainer.style.background ="pink";
})
response.addEventListener("mouseover" , ()=>{
  response.style.transform = "rotate(3deg)";
})

// --------------3eme partie----------------avec les keypress--------

  
const contenuPage = document.querySelector(".keypress");
const touche = document.getElementById("touche");
   
const ring = (key) =>{
  
 const audio = new Audio();
 audio.src= key + ".mp3";
 audio.play();
 //  bon c'étais la syntax pour activer des sons bien vrai cela n'apparait pas mais kameme c'est la logiquee a suivre
}


contenuPage.addEventListener("keypress", ()=>{
  contenuPage.style.background =" black";


})
document.addEventListener("keypress", (e)=>{
  touche.textContent = e.key;
  if(e.key==="M"){
   contenuPage.style.background ="yellow";
 
  }else if (e.key==="D"){
   contenuPage.style.background ="red";
    }else{
     contenuPage.style.background ="green";
    }

   //  ring(e.key);  ring()est une appel de la fonctions ring en haut
  });

// --------------------------------
// scroll events


const nav= document.querySelector("nav");


window.addEventListener("scroll", () =>{
 console.log(window.scrollY);
 if(window.scrollY>125){
   nav.style.top="0";
 }else{
   nav.style.top="-50px";
 }
 
})
// ----------------------
// form events 
 const inputname =document.querySelector('input[type="text"]');
 const select = document.querySelector("select");
 const form = document.querySelector(".boite");
// le let pseudo c'est une variable dont on n'a créer pour enrégistrer tout le contenue taper dans une boite , on pourras l'utiliser plustard !!!
 let pseudo = "";
 let language ="";
    
 inputname.addEventListener("input", (e)=>{

// console.log(e.target.value);
pseudo= e.target.value;


 })
 select.addEventListener("input", (e)=>{
  //  console.log(e.target.value);
language=e.target.value;
 });

 form.addEventListener("submit", (e) =>{
 e.preventDefault()
console.log("yes!!");


if (yes.checked){
  document.querySelector("form > div ").innerHTML= `
  <h3> votre nom est : ${pseudo} </h3>
  <h4> vous avez optez : ${language} </h4>

  
  `;

}
 else{
  alert(' veuillez acceptez les CGV !!!');
}


 })
//NB:  Des remarques a faire !!! sur le bubbling et le usecapture
// NB: Bubbling est déclancher en dernier (fin) il va avec false entyre l' accolade et la parenthèse au fin 
document.addEventListener('click', ()=>{
  console.log("mon Bonjour !!!");
  
});
// NB :usecapture il va avec true au fin 
document.addEventListener('click', ()=>{
  console.log("mon salut !!!");
  
}, true);
contenuPage.addEventListener("click",(e)=>{
  alert('Soit positif pour avancer !!!');
  e.stopPropagation();
})
// NB : e.stopPropagation(); nous permet de stoper les autres evenements si on n'agit sur une partie et que l'on ne veut pas 
// que l'autre survient sauf si on utilise quel que part usecapture !


// le BOM = Browser Objet Model ; il comporte le DOM , le Window et le Javascript mais le DOM et le Javascript 
// sont plus important
//  window.open('http://gmail.com ');
//  cette syntax nous permet d'ouvire une nouvelle fenetre avec l'URL demander 
// window.close();


btn2.addEventListener('click',()=>{
  confirm("voulez-vous vraiment quitté cette page !");
})
let answer="";
btn1.addEventListener("click", ()=>{
  answer = prompt("GIVE YOUR NAME !!!");
  contenuPage.innerHTML += "<h4> Bravo "  + answer +  "<h4>";
})
// setTimeout nous permet d'ajout quelsques chose en temps déterminer
// comptes en rebours
// setTimeout(()=>{
// fonctions (instructions) a mettre ici;

// }, 2000);
// il y'a aussi setInterval mais ceux lui ci doit etre déclarer dans une variable 
// let moninterval = setTimeout(()=>{
  // instructions a faire ici;
// }, compterebours);
// --------------------------------------------------

// il y' a aussi l'élément compts clearInterval(interval); qui permets de netoyer l'interval mise 
// et aussi e.target.remove();

// ---------------------------------------------------

//  on verra aussi l'élément location dans le BOM 

// window.onload= () =>{
  // location.href="http://twitter.fr";
// };
// avec navigator on peut avoir les informations de notre utilisateur et du navigateur
// console.log(naviagtor.userAgent);
// il y'a aussi le history qui nous permet de revenire en arriere sur nos page ou autre 
// history.go(-2);
// bon là on 'a mis deux parceque on voulais retourner deux fois en arrière mais on pouvait avoir plusieurs


// ---------------nouvelle element avec setProperty
const menu = document.querySelector("nav");

window.addEventListener('mousemove',(e)=>{
  nav.style.setProperty=("--x", e.layerX +"px");
  nav.style.setProperty=("--y", e.layerY +"px");
console.log(nav);

})
menu.addEventListener('mousemove',()=>{
nav.classList.toggle("viga");
});