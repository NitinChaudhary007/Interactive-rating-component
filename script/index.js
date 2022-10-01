
document.querySelector(".main2").style.display="none";

document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector(".main").style.display="none";
    document.querySelector(".main2").style.display="";
});

for(var i= 0; i<5; i++){
    document.querySelectorAll(".item")[i].addEventListener("click", function() {
        this.style.backgroundColor="hsl(217, 12%, 63%)";
        this.style.color="white";
        var rate = this.innerHTML;
        var str = "You selected "+rate+" out of 5";
        document.querySelector(".select").innerHTML=str;
        
    });
}

