

function darkMode(){
    document.body.classList.toggle("dark");
}

const text = "B.Tech CSE | Software Developer";
let index = 0;

function typeWriter() {

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();

function topFunction(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function toggleMenu(){

    let menu = document.getElementById("menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }

}

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

window.addEventListener("scroll",()=>{

let totalHeight=document.documentElement.scrollHeight-window.innerHeight;

let progress=(window.pageYOffset/totalHeight)*100;

document.getElementById("progressBar").style.width=progress+"%";

});

