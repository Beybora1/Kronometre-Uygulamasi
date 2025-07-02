 // Kronometre Uygulaması

 let span1 = document.getElementById("span1");
 let span2 = document.getElementById("span2");
 let btn1 = document.getElementById("btn1");
 let btn2 = document.getElementById("btn2");
 let btn3 = document.getElementById("btn3");
 i = 0;
 k = 0;
 btn1.disabled = false;
 
 btn1.addEventListener("click", () => {
    inter = setInterval(time, 10);
    btn1.disabled = true;
     
 })

 btn2.addEventListener("click", () => {
    clearInterval(inter);
    btn1.disabled = false;
})

 btn3.addEventListener("click", () => {
    i= 0;
    k= 0;
    span2.textContent = "0" + i;
    span1.textContent = "0" + k;
    clearInterval(inter);
    btn1.disabled = false;
})
 
 function time(){
    i++;
    span2.textContent = i
    span1.textContent = k;

    if(i <= 9){
        span2.textContent = "0" + i;
    }

    if(i > 9){
        span2.textContent = i;
    }

    if(i === 99){
        i = 0;
        k++;
    }

    if(k > 9){
        span1.textContent = k;
    }

    if(k <= 9){
        span1.textContent = "0" + k;
    }
}
