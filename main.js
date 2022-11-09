const btnEl=document.querySelector(".btn")
btnEl.addEventListener("mouseover",(e)=>{
  const x=(e.pageX-btnEl.offsetLeft);
  const Y=(e.pageY-btnEl.offsetTop);

  btnEl.style.setProperty("--XPos",x + "px");
  btnEl.style.setProperty("--YPos",y + "px");
})