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
ending.classList.add("show");
const music = document.getElementById("music");

music.currentTime = 169;

music.play().catch(err => {
    console.error(err);
});
    startHearts();

setTimeout(()=>{

    startFireworks();

},400);

setTimeout(()=>{

    startRoses();

},800);

};

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";
        const hearts = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💝"
];

heart.innerHTML = hearts[
    Math.floor(Math.random() * hearts.length)
];

        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=3+Math.random()*3+"s";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),6000);

    },250);

}

function startFireworks(){

    let count = 0;

    const timer = setInterval(()=>{

        const firework = document.createElement("div");

        firework.className = "firework";

        firework.style.left = Math.random()*100 + "vw";
        firework.style.top = Math.random()*100 + "vh";

        document.body.appendChild(firework);

        const colors = [
            "#ff4d6d",
            "#ffd60a",
            "#00d4ff",
            "#7bff00",
            "#ffffff",
            "#ff66ff"
        ];

        for(let i=0;i<18;i++){

            const particle = document.createElement("div");

            particle.className = "particle";

            particle.style.background =
                colors[Math.floor(Math.random()*colors.length)];

            particle.style.setProperty(
                "--x",
                (Math.random()*160-80)+"px"
            );

            particle.style.setProperty(
                "--y",
                (Math.random()*160-80)+"px"
            );

            firework.appendChild(particle);

        }

        setTimeout(()=>{
            firework.remove();
        },1000);

        count++;

        if(count>=30){
            clearInterval(timer);
        }

    },180);

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
function startRoses(){

    setInterval(()=>{

        const rose=document.createElement("div");

        rose.className="rose";

        rose.innerHTML="🌹";

        rose.style.left=Math.random()*100+"vw";
        rose.style.animationDuration=(4+Math.random()*3)+"s";

        document.body.appendChild(rose);

        setTimeout(()=>{
            rose.remove();
        },7000);

    },450);

}
let leftThePage = false;

document.addEventListener("visibilitychange", function () {

    if (document.hidden) {

        // המשתמש יצא מהאתר
        leftThePage = true;

    } else if (leftThePage) {

        // המשתמש חזר לאתר
        leftThePage = false;

        // מחזירים למסך הסיסמה
        document.getElementById("password-screen").style.display = "flex";

        // מסתירים את מסך הפתיחה
        const hero = document.querySelector(".hero");
        if (hero) {
            hero.style.display = "none";
        }

        // מסתירים את המכתב
        const letterPage = document.getElementById("letterPage");
        if (letterPage) {
            letterPage.style.display = "none";
        }

        // מסתירים את מסך הסיום
        const ending = document.getElementById("ending");
        if (ending) {
            ending.classList.remove("show");
            ending.style.display = "none";
            ending.style.visibility = "hidden";
        }

        // מוחקים את הסיסמה שהוקלדה
        const password = document.getElementById("password");
        if (password) {
            password.value = "";
        }

        // מוחקים הודעת שגיאה אם קיימת
        const error = document.getElementById("error");
        if (error) {
            error.textContent = "";
        }

        // מחזירים את הדף להתחלה
        window.scrollTo(0, 0);
    }

});
let isUnlocked = false;
let pageWasHidden = false;


// כשנכנסים עם סיסמה נכונה
const originalOpenGift = document.getElementById("openGift");

originalOpenGift.addEventListener("click", function () {

    const password = document.getElementById("password").value;

    if (password === PASSWORD) {
        isUnlocked = true;
    }

});


// כשעוזבים את האתר
document.addEventListener("visibilitychange", function () {

    if (document.visibilityState === "hidden") {

        if (isUnlocked) {
            pageWasHidden = true;
        }

        return;
    }

    // חזרנו לאתר
    if (
        document.visibilityState === "visible" &&
        pageWasHidden &&
        isUnlocked
    ) {

        pageWasHidden = false;
        isUnlocked = false;

        lockPageAgain();
    }

});


// נעילת האתר מחדש
function lockPageAgain() {

    const passwordScreen =
        document.getElementById("password-screen");

    if (passwordScreen) {
        passwordScreen.style.display = "flex";
    }

    const hero =
        document.querySelector(".hero");

    if (hero) {
        hero.style.display = "none";
    }

    const letterPage =
        document.getElementById("letterPage");

    if (letterPage) {
        letterPage.style.display = "none";
    }

    const ending =
        document.getElementById("ending");

    if (ending) {
        ending.classList.remove("show");
        ending.style.display = "none";
        ending.style.visibility = "hidden";
    }

    const password =
        document.getElementById("password");

    if (password) {
        password.value = "";
    }

    const error =
        document.getElementById("error");

    if (error) {
        error.textContent = "";
    }

    window.scrollTo(0, 0);
}
