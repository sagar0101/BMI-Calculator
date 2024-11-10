const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const div6 = document.querySelector(".div6");

btn.addEventListener("click", () => {
    const input_weight = parseInt(document.querySelector(".input-weight").value);
    const input_height = parseInt(document.querySelector(".input-height").value);
    div6.style.border = "1px solid violet";
    div6.style.borderRadius = "8px";
    const pass = (input_height / 100) ** 2;
    const res = input_weight / pass;
    
    if(res<18.5){
        output.innerText = res.toFixed(2)+"(Underweight)"+"🥹";
    }
    else if(res>29.9){
        output.innerText = res.toFixed(2)+"(Overweight)"+"😟";
       

    }
    else{
        output.innerText = res.toFixed(2)+"(Normal)"+"😃";
    }
    
});
