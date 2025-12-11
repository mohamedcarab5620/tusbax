const eber = document.querySelector(".eber")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const reset = document.querySelector(".reset")
const ten = document.querySelector(".ten")
const twenty = document.querySelector(".twenty")
const thirty = document.querySelector(".thirty")
const fourty = document.querySelector(".fourty")
const hundred= document.querySelector(".hundred")


xisaabiye = 0
ten.style.display = "none"
twenty.style.display = "none"
thirty.style.display = "none"
fourty.style.display = "none"
hundred.style.display = "none"
plus.addEventListener("click",()=>{
  xisaabiye ++
  eber.innerHTML=xisaabiye
  if(xisaabiye === 10){
    ten.style.display = "block"
  }
  else{
    ten.style.display = "none"
  }
  if(xisaabiye === 20){
    twenty.style.display = "block"
  }else{
    twenty.style.display = "none"
  }
  if(xisaabiye === 30){
    thirty.style.display = "block"
  }else{
    thirty.style.display = "none"
  }
  if(xisaabiye === 40){
    fourty.style.display = "block"
  }else{
    fourty.style.display = "none"
  }
  if(xisaabiye === 100){
    hundred.style.display = "block"
  }else{
    hundred.style.display = "none"
  }
})
minus.addEventListener("click",()=>{
  if(xisaabiye > 0)
  xisaabiye --
  eber.innerHTML=xisaabiye
   if(xisaabiye === 10){
    ten.style.display = "block"
  }
  else{
     ten.style.display = "none"
  }
    if(xisaabiye === 20){
    twenty.style.display = "block"
  }else{
    twenty.style.display = "none"
  }
    if(xisaabiye === 30){
    thirty.style.display = "block"
  }else{
    thirty.style.display = "none"
  }  if(xisaabiye === 40){
    fourty.style.display = "block"
  }else{
    fourty.style.display = "none"
  }
  if(xisaabiye === 100){
    hundred.style.display = "block"
  }else{
    hundred.style.display = "none"
  }
})
reset.addEventListener("click",()=>{
  xisaabiye = 0
  eber.innerHTML=xisaabiye
})