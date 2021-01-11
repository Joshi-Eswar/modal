// modal-overlay
// open-modal
// close-btn
mod=document.querySelector(".modal-overlay");
console.log(mod);
opener=document.querySelector(".open-modal");
console.log(opener);
closer=document.querySelector(".close-btn");
console.log(closer);
btn=document.querySelector(".modal-btn");
console.log(btn);

btn.addEventListener("click",function(){
    mod.classList.add("open-modal");
});
closer.addEventListener("click",function(){
    mod.classList.remove("open-modal");
});





