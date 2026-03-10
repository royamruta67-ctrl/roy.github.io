// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})
})


// dark mode

const toggle=document.getElementById("darkModeToggle")

toggle.onclick=()=>{
document.body.classList.toggle("dark")
}


// form validation

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let phone=document.getElementById("phone").value

if(name=="" || email=="" || phone==""){
document.getElementById("formMsg").innerText="Please fill all required fields"
return
}

document.getElementById("formMsg").innerText="Message sent successfully!"
this.reset()

})
