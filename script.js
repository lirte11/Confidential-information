*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#000;
    color:white;
    font-family:Arial,Helvetica,sans-serif;
}

/* מסך סיסמה */

#password-screen{

    width:100vw;
    height:100vh;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    background:#050505;

}

#password-screen h1{

    font-size:50px;
    margin-bottom:10px;

}

#password-screen p{

    font-size:24px;
    color:#bbbbbb;
    margin-bottom:40px;

}

input{

    width:320px;

    padding:18px;

    font-size:22px;

    border-radius:12px;

    border:1px solid #555;

    background:#111;

    color:white;

    text-align:center;

}

button{

    margin-top:25px;

    width:320px;

    padding:18px;

    font-size:22px;

    border:none;

    border-radius:12px;

    background:white;

    cursor:pointer;

}

#error{

    color:#ff6b6b;

    margin-top:20px;

    height:25px;

}

/* מסך פתיחה */

.hero{
    position:relative;
    width:100vw;
    height:100vh;
    background:#000;
    overflow:hidden;
}

.cover{
    width:100%;
    height:100%;
    object-fit:cover;
}

.overlay{

    position:absolute;

    inset:0;

    background:rgba(0,0,0,.45);

}

.content{

    position:absolute;

    top:50%;

    left:50%;

    transform:translate(-50%,-50%);

    text-align:center;

}

.crown{

    font-size:70px;

}

.content h1{

    font-size:58px;

    margin-top:20px;

}

.content h2{

    margin-top:10px;

    font-size:34px;

}/* מסך טעינה */

#loading-screen{

    display:none;

    position:fixed;

    top:0;
    left:0;

    width:100%;
    height:100%;

    background:black;

    justify-content:center;
    align-items:center;

    z-index:999;

}

#loading-text{

    color:white;

    font-size:50px;

    opacity:.8;

    animation:pulse 1s infinite;

}

@keyframes pulse{

0%{

opacity:.3;

}

50%{

opacity:1;

}

100%{

opacity:.3;

}
}
#envelope{
    position:relative;
    width:290px;
    height:190px;
    margin:60px auto;
    cursor:pointer;

    transition:.4s;

    animation:breathe 3s ease-in-out infinite;
}

#envelope:hover{
    transform:scale(1.05);
}

@keyframes breathe{

    0%,100%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-10px);
    }

}

#top{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:90px;
   background:#ffffff;
    clip-path:polygon(0 0,100% 0,50% 100%);
    transform-origin:top;
    transition:.8s;
    z-index:3;
}

#letter{

    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:150px;
    background:#fafafa;
    border-radius:0 0 12px 12px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:70px;
    transition:1s;
    box-shadow:0 10px 30px rgba(0,0,0,.25);

}

#envelope:hover #top{

    transform:rotateX(180deg);

}

#envelope:hover #letter{
    bottom:150px;
    transform:scale(1.05);
}

#envelope.open #top{
    transform:rotateX(180deg);
}

#envelope.open #letter{
    bottom:150px;
    transform:scale(1.05);
}
#letterPage{
    position:fixed;
    inset:0;
    background:#111;
    display:none;
    justify-content:center;
    align-items:center;
    z-index:9999;
}

#paper{
    width:min(95vw, 900px);
    max-height:90vh;
height:auto;

    background:#fff;
    color:#111;

    border-radius:22px;

    padding:55px 45px;

    overflow-y:auto;

    transform:translateY(100%);
    transition:1s cubic-bezier(.2,.9,.2,1);

    font-size:24px;
    line-height:2.2;

    box-shadow:
    0 20px 80px rgba(0,0,0,.45);
}
#paper p{

    max-width:100%;
    margin-bottom:28px;

}

#paper h1{

    text-align:center;
    margin-bottom:35px;
    font-size:46px;

}

#paper h2{

    text-align:center;
    margin-top:35px;
}

#ending{
    position:fixed;
    inset:0;
    background:#000;

    display:none;
    visibility:hidden;

    flex-direction:row-reverse;
    justify-content:center;
    align-items:center;
    gap:80px;
    overflow:hidden;
    z-index:99999;
}

.end-left{
    width:380px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#fff;
}

.end-left h1{
    font-size:58px;
    margin-bottom:25px;
}

.end-left h2{
    font-size:42px;
    margin-bottom:20px;
}

.end-left h3{
    font-size:36px;
    color:#ff5f9d;
    margin-bottom:30px;
}

.end-left h4{
    font-size:40px;
}

.end-image{
    width:auto;
    height:95vh;
    object-fit:contain;
    display:block;
}.heart{
    position:fixed;
    top:-50px;
    font-size:30px;
    animation:fall linear forwards;
    pointer-events:none;
    z-index:999999;
}

@keyframes fall{
    from{
        transform:translateY(-50px) rotate(0deg);
        opacity:1;
    }
    to{
        transform:translateY(110vh) rotate(360deg);
        opacity:0;
    }
}
.firework{
    position:fixed;
    width:8px;
    height:8px;
    border-radius:50%;
    pointer-events:none;
    z-index:999999;
}

.particle{
    position:absolute;
    width:6px;
    height:6px;
    border-radius:50%;
    animation:particle .9s forwards;
}

@keyframes particle{

    0%{
        transform:translate(0,0) scale(1);
        opacity:1;
    }

    100%{
        transform:translate(var(--x),var(--y)) scale(.2);
        opacity:0;
    }

}
.sparkle{
    position:absolute;
    width:8px;
    height:8px;
    background:white;
    border-radius:50%;
    box-shadow:0 0 15px #fff;
    animation:sparkle 2s infinite;
    pointer-events:none;
}

@keyframes sparkle{

0%{
transform:scale(0);
opacity:0;
}

50%{
transform:scale(1.5);
opacity:1;
}

100%{
transform:scale(0);
opacity:0;
}

}
.confetti{
    position:fixed;
    width:10px;
    height:16px;
    top:-20px;
    animation:confettiFall linear forwards;
    z-index:999999;
}

@keyframes confettiFall{

0%{
transform:translateY(-20px) rotate(0deg);
}

100%{
transform:translateY(110vh) rotate(720deg);
}

}
.fade{
    opacity:0;
    transform:translateY(30px);
    transition:1s;
}

.fade.show{
    opacity:1;
    transform:translateY(0);
}
@media (max-width:768px){

#paper{

width:96vw;
max-height:95vh;
height:auto;

padding:28px;

font-size:20px;

line-height:2;

border-radius:18px;

}

#paper h1{

font-size:34px;

}

#paper h2{

font-size:28px;

}

}
@keyframes endingEnter{

0%{
opacity:0;
transform:scale(1.08);
}

100%{
opacity:1;
transform:scale(1);
}

}


.rose{

position:fixed;

top:-40px;

font-size:28px;

pointer-events:none;

animation:roseFall linear forwards;

z-index:999999;

}

@keyframes roseFall{

0%{

transform:
translateY(-50px)
rotate(0deg);

opacity:1;

}

100%{

transform:
translateY(110vh)
rotate(720deg);

opacity:0;

}

}
@keyframes pulseEnding{

0%{
transform:scale(1);
}

50%{
transform:scale(1.01);
}

100%{
transform:scale(1);
}

}

#ending.show{
    display:flex;
    visibility:visible;

    animation:
        endingEnter 1s ease,
        pulseEnding 6s ease-in-out infinite;
}
.endFade{

opacity:0;

transform:
translateY(40px);

animation:endFade .9s forwards;

}

.endFade:nth-child(1){
animation-delay:.3s;
}

.endFade:nth-child(2){
animation-delay:.8s;
}

.endFade:nth-child(3){
animation-delay:1.3s;
}

.endFade:nth-child(4){
animation-delay:1.8s;
}

@keyframes endFade{

to{

opacity:1;

transform:
translateY(0);

}

}
.end-image{

position:relative;

overflow:hidden;

}

.end-image::after{

content:"";

position:absolute;

top:0;
left:-40%;

width:40%;
height:100%;

background:linear-gradient(
90deg,
transparent,
rgba(255,255,255,.5),
transparent
);

transform:skewX(-20deg);

animation:shine 6s infinite;

}

@keyframes shine{

0%{
left:-40%;
}

100%{
left:150%;
}

}
