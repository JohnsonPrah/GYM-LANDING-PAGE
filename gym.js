const navbar = document.querySelector(".navbar");
const open = document.querySelector(".open-btn");
const close = document.querySelector(".close-btn");

open.addEventListener('click',() => {
    open.style.display ='none';
    navbar.style.display='block';
    close.style.display='inline-block'
}
)

close.addEventListener('click',() =>{
    close.style.display = "none";
    navbar.style.display ='none';
    open.style.display ='inline-block';
}
)



