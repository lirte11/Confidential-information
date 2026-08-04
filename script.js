const PASSWORD = "אאא";

document.getElementById("openGift").onclick = () => {

    const value = document.getElementById("password").value;

    if (value === PASSWORD) {

        document.getElementById("password-screen").style.display = "none";
        document.getElementById("loading-screen").style.display = "flex";

        setTimeout(() => {

            document.getElementById("loading-screen").style.display = "none";
            document.querySelector(".hero").style.display = "block";

        }, 1800);

    } else {

        document.getElementById("error").innerHTML = "הסיסמה שגויה";

    }

};

document.getElementById("envelope").onclick = function () {

    this.classList.add("open");
startConfetti();
    setTimeout(() => {

        document.getElementById("letterPage").style.display = "flex";

        setTimeout(() => {

            document.getElementById("paper").style.transform = "translateY(0)";
showParagraphs();
        }, 100);

    }, 800);

};

document.getElementById("finish").onclick = function () {

   

    document.querySelector(".hero").style.display = "none";
    document.getElementById("letterPage").style.display = "none";
   const ending = document.getElementById("ending");
ending.style.display = "flex";
ending.style.visibility = "visible";

    startHearts();
    startFireworks();

};

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";
        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=3+Math.random()*3+"s";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),6000);

    },250);

}

function startFireworks(){

    let count=0;

    const timer=setInterval(()=>{

        const fw=document.createElement("div");

        fw.className="firework";

        fw.style.left=Math.random()*100+"vw";
        fw.style.top=Math.random()*100+"vh";

        fw.style.background=`hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(fw);

        setTimeout(()=>fw.remove(),900);

        count++;

        if(count>40){
            clearInterval(timer);
        }

    },120);

}
createSparkles();

function createSparkles(){

    const envelope=document.getElementById("envelope");

    for(let i=0;i<18;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.style.left=Math.random()*260+"px";
        s.style.top=Math.random()*170+"px";

        s.style.animationDelay=Math.random()*2+"s";

        envelope.appendChild(s);

    }

}
function startConfetti(){

    const colors=[
        "#ff4d6d",
        "#ffd60a",
        "#00d4ff",
        "#7bff00",
        "#ffffff",
        "#ff66ff"
    ];

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        c.style.animationDuration=
        (3+Math.random()*2)+"s";

        c.style.animationDelay=
        (Math.random()*0.6)+"s";

        document.body.appendChild(c);

        setTimeout(()=>{
            c.remove();
        },6000);

    }

}
function showParagraphs(){

    const paragraphs=document.querySelectorAll(".fade");

    paragraphs.forEach(p=>p.classList.remove("show"));

    paragraphs.forEach((p,index)=>{

        setTimeout(()=>{

            p.classList.add("show");

        },index*900);

    });

}
