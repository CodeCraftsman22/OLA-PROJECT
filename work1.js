let btn1=document.getElementById("b11")
btn1.addEventListener("click",()=>{
    
    let cost=2;
    let input1=document.getElementById("input1").value;
    let i=document.getElementById("cost1");
    i.innerText=input1*cost;
})

let btn2=document.getElementById("b12")
btn2.addEventListener("click",()=>{
    let cost1=54;
    let input2=document.getElementById("input12").value;
    let i1=document.getElementById("cost2");
    i1.innerText=input2*cost1;
})




