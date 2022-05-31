'use strict';
/* ======== menu hidden ======== */

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

/* ========add to cart ======== */

/* console.log("running");

let carts = document.querySelectorAll(".add-cart")

for (let i = 0; i < carts.length; i++)
{
carts[i].addEventListener('click',() => {
  console.log('TOTO');
  
})
} */

/* ========add to cart  counter ======== */

let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');


let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    if(count< 0) {
    count= 0;
    }
    else {

      updateDisplay();
    }
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;


};



/* ========add to cart  counter ======== */
/* ============== */
 let totalprice = document.querySelector('.total-price')





updateprice()



/* ========change color heart ======== */

function display()
{
document.getElementById("fa-heart").style.color="red";

}

/* ========add to cart  counter ======== */
/* ========change color heart ======== */







/* document.getElementById('bt-cart1').addEventListener('click', addTocart)
function addTocart () {
  for(let i = 0; i < carts.length; i++) {
    document.getElementById("text").innerHTML= "yes"
    
  } */


 /*  
 let toto = carts[i].
  
  document.getElementById('bt-cart1').addEventListener('click', addTocart)
 

  function addTocart () {
    console.log(addTocart);
  }
   */
 

/* code capcha */
var recaptcha_response = '';
       
function submitUserForm() {
    // je vérifie si la réponse est vide. 
    if(recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = `<span style="color:red;">Merci de valider le captcha avant l'envoi</span>`;
        /* 
        * Il renvoie 'false' pour une réponse vide. Cela signifie qu'un
        * utilisateur n'a pas encore validé reCAPTCHA.
        * 
        * Et donc, il ajoute une erreur à la div ayant l'id 'g-recaptcha-error'.
        */ 
        return false;
    }
    /* 
    * Lorsque Google reCAPTCHA envoie une réponse valide,
    * je renvoie une valeur vraie, qui soumet le formulaire pour un traitement ultérieur
    */
    return true;
}
 /* 
 * La verifyCaptchaméthode reçoit un jeton une fois que les utilisateurs
 * ont résolu les énigmes de reCAPTCHA.
 * Nous attribuons cette réponse à la variable <<recaptcha_response>>.
 */
function verifyCaptcha(effacemessage) {
    recaptcha_response = effacemessage;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}
function test() {
  document.getElementById("formulaire").reset();
}
