
/*Nav bar*/ 

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    fixedBlurNav();
});

function fixedBlurNav() {
    if (window.pageYOffset >= 250) {
        
        navbar.classList.add("container");
        navbar.classList.remove("sticky-top");
        navbar.classList.add("my-3");
        navbar.classList.add("fixed-top");
        

        navbar.classList.add("new-nav");
        
    } else {
        navbar.classList.remove("container");
        navbar.classList.add("sticky-top");
        navbar.classList.remove("fixed-top");
        navbar.classList.remove("my-3")
        navbar.classList.remove("new-nav");
        
    }
}

let toggler = document.querySelector(".navbar-toggler");
let togglerIcon = document.querySelector(".fa-solid")

toggler.addEventListener("click", function(){
    if(togglerIcon.classList.contains("fa-bars")){
        console.log("true");
        togglerIcon.classList.remove("fa-bars")
     togglerIcon.classList.add("fa-xmark")
  
    
    }else{
        console.log("false");
        
        togglerIcon.classList.add("fa-bars")
        togglerIcon.classList.remove("fa-xmark")
    }
})


//counter

let section_counter = document.querySelector('.counter')
let counters = document.querySelectorAll('.value');

let speed = 200;


//scroll anmation
let CounterObserver = new IntersectionObserver((entries, observer) => {
  let [entry] = entries;
  if (!entry.isIntersecting) return;
  
  let speed = 200;
  counters.forEach((counter,index) => {
    function UpdateCounter(){
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;

        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          
          setTimeout(UpdateCounter, 40) 
        }
    }
    UpdateCounter();
    
    if(counter.parentElement.style.animation){
      counter.parentElement.style.animation = "";
    } else { 
      counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5}s`;
    }
});
}, 
{
  root: null,
 threshold:0.4,

});
CounterObserver.observe(section_counter);




/* Loader*/
var loaderWrapper = document.querySelector('.loading');


// setTimeout (() => {
//     spinnerwrapper.style.opacity = '0';

// },1000);
window.addEventListener('load', () =>{
    loaderWrapper.style.opacity = '0';

    setTimeout(() =>{
        loaderWrapper.style.display = 'none';
    },1000)
})
