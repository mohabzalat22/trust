var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});
// dark mode button
let toggleMode = document.querySelector('.checkbox');
toggleMode.addEventListener('click',()=>{
  let data = document.querySelector('#main');
  // console.log(data);
  // console.log(data.getAttribute("data-bs-theme"));
  if(data.getAttribute("data-bs-theme") === null){
    data.setAttribute("data-bs-theme", "dark");
    document.querySelectorAll('.bg-fade-toggle').forEach((e)=>e.classList.remove('bg-fade'));
    document.querySelectorAll('.bg-burger-nav').forEach((e)=>{e.style.backgroundColor = 'white';});
  }
  else{
    data.removeAttribute("data-bs-theme");
    document.querySelectorAll('.bg-fade-toggle').forEach((e)=>e.classList.add('bg-fade'));
    document.querySelectorAll('.bg-burger-nav').forEach((e)=>{e.style.backgroundColor = '#212529';});
  }
})
// nav button click
let burgerButton = document.querySelector('.navbar-toggler');
  burgerButton.addEventListener('click',()=>{
  let data = document.querySelector('#middleBurgerIcon');
  if(data.style.width !== '30px'){data.style.width = '30px';}
  else{data.style.width = '15px';}
});
// form validation
function formValidationStatus(){
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let formValidationEmail = document.querySelector("#email");
  return(re.test(formValidationEmail.value));

}
let submit = document.querySelector('#submit');
submit.addEventListener('click',(e)=>{
  if(formValidationStatus() == false){
    e.preventDefault();
    document.querySelector("#email").style.border='1px solid red';
    document.querySelector("#tip").innerHTML = "invalid Email address.";
  }
});
// copy writing
let copyWriting = document.querySelector('#copyWrite');
copyWriting.innerHTML = "Copyright © 2022 - "+ new Date().getFullYear();