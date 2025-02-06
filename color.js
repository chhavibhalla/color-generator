function color(){
    const randomnum = Math.random();
    const num =  Math.floor(randomnum*16777215);
    const randnum = "#"+ num.toString(16);

    document.body.style.backgroundColor=randnum;
    document.getElementById("label").innerText=randnum;

   
    
}

document.getElementById("button").addEventListener("click", color);
