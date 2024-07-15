//let btn=document.querySelector("#btn1")
    
//btn.addEventListener('click'.)
let plus=document.getElementById("btn1")
let minus=document.getElementById("btn2")
let h1=document.querySelector("h1")
 let  refresh =()=>{
   h1.textContent=count
 }

let count=0

plus.addEventListener('click',()=>{
count++
refresh()
})
minus.addEventListener('click',()=>{
    count--
    refresh()
    })

    