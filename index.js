const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

const sliderContainerEl = document.querySelector(".slider-container");
const imageContainerEl = document.querySelector(".image-container")

let curentImg = 1;

nextEl.addEventListener("click", () =>{
    curentImg++
    updateImg();
})

function updateImg(){

}