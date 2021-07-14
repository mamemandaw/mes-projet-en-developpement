const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        result.textContent += e.target.id ;
    })
})

// les id n'ont pas besoin d'etre déclarer en javascript il le connait déjas ;
equal.addEventListener("click", ()=>{
    result.textContent = eval(result.textContent);
})
clear.addEventListener('click',()=>{
    result.textContent = "";
})