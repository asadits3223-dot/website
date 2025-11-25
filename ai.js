// ai.js - subtle 3D tilt for .ai-face based on mouse movement
(function(){
  const face = document.querySelector('.ai-face');
  if(!face) return;

  const damp = 0.09;
  let tx=0, ty=0;
  let lx=0, ly=0;

  window.addEventListener('mousemove', (e)=>{
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    tx = (e.clientX - cx) / 20; // rotateY
    ty = (cy - e.clientY) / 20; // rotateX
  });

  function frame(){
    lx += (tx - lx) * damp;
    ly += (ty - ly) * damp;
    face.style.transform = `rotateX(${ly}deg) rotateY(${lx}deg) translateZ(6px) scale(1.01)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
