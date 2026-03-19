const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letter2 = document.getElementById("letter2");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const msg = document.getElementById("msg");
const area = document.querySelector(".btns");

// abrir carta
envelope.onclick = () => {
  envelope.style.display = "none";
  letter.style.display = "block";
};

// mostrar SIM
function ativarModoTroll(){
  yes.style.display = "inline-block";
}

// NÃO foge
function fugir(){
  ativarModoTroll();

  const maxX = area.clientWidth - no.offsetWidth;
  const maxY = area.clientHeight - no.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.left = x + "px";
  no.style.top = y + "px";
}

no.addEventListener("mouseenter", fugir);
no.addEventListener("mouseover", fugir);

// botão SIM mostra segunda carta
yes.onclick = () => {
  letter.style.display = "none";
  letter2.style.display = "block";
};

// corações caindo mais densos e azuis
const hearts = document.querySelector(".hearts");
setInterval(()=>{
  for(let i=0; i<2; i++){
    const h = document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";

    h.style.left = Math.random()*100+"vw"; 
    h.style.animationDuration = (Math.random()*3 + 2) + "s"; 
    h.style.fontSize = (12 + Math.random()*12) + "px";
    h.style.color = "#3399ff";

    hearts.appendChild(h);
    setTimeout(()=>h.remove(), 5000); 
  }
},200);