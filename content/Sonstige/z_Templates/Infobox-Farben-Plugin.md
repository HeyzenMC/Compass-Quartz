<%*
function hexToHsv(hex) {
  let r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
  let max=Math.max(r,g,b),min=Math.min(r,g,b),v=max,d=max-min,s=max===0?0:d/max,h=0;
  if(max!==min){switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}h/=6;}
  return [h*360,s,v];
}
function hsvToHex(h,s,v) {
  h/=360;
  let r,g,b,i=Math.floor(h*6),f=h*6-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s);
  switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}
  return '#'+[r,g,b].map(x=>Math.round(x*255).toString(16).padStart(2,'0')).join('');
}

const openColorPicker = (initial='#9B59B6') => new Promise((resolve,reject) => {
  let [h,s,v] = hexToHsv(initial);
  let color = initial, dragging = false;

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:9999;display:flex;align-items:center;justify-content:center;';

  const box = document.createElement('div');
  box.style.cssText = 'background:var(--background-primary);border-radius:12px;padding:16px;width:300px;';

  const sty = document.createElement('style');
  sty.textContent = `.cp-hue{-webkit-appearance:none;width:100%;height:14px;border-radius:7px;outline:none;border:none;cursor:pointer;background:linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);display:block;margin:0 0 10px;}.cp-hue::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:white;border:2px solid rgba(0,0,0,0.25);cursor:pointer;}`;
  box.appendChild(sty);

  const canvas = document.createElement('canvas');
  canvas.width=268; canvas.height=160;
  canvas.style.cssText='width:100%;display:block;border-radius:7px;cursor:crosshair;margin-bottom:10px;';
  box.appendChild(canvas);

  function drawCanvas() {
    const ctx=canvas.getContext('2d'),w=canvas.width,hh=canvas.height;
    const gH=ctx.createLinearGradient(0,0,w,0);
    gH.addColorStop(0,'#fff');gH.addColorStop(1,hsvToHex(h,1,1));
    ctx.fillStyle=gH;ctx.fillRect(0,0,w,hh);
    const gV=ctx.createLinearGradient(0,0,0,hh);
    gV.addColorStop(0,'rgba(0,0,0,0)');gV.addColorStop(1,'#000');
    ctx.fillStyle=gV;ctx.fillRect(0,0,w,hh);
    const cx=s*w,cy=(1-v)*hh;
    ctx.beginPath();ctx.arc(cx,cy,8,0,2*Math.PI);ctx.strokeStyle='white';ctx.lineWidth=2.5;ctx.stroke();
    ctx.beginPath();ctx.arc(cx,cy,9,0,2*Math.PI);ctx.strokeStyle='rgba(0,0,0,0.35)';ctx.lineWidth=1;ctx.stroke();
  }

  function sync() {
    color=hsvToHex(h,s,v);drawCanvas();
    hexInput.value=color.slice(1).toUpperCase();preview.style.background=color;
  }

  const onMove=(e)=>{
    if(!dragging)return;
    const r=canvas.getBoundingClientRect();
    s=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
    v=Math.max(0,Math.min(1,1-(e.clientY-r.top)/r.height));
    sync();
  };
  const onUp=()=>{dragging=false;};
  canvas.addEventListener('mousedown',(e)=>{dragging=true;onMove(e);});
  document.addEventListener('mousemove',onMove);
  document.addEventListener('mouseup',onUp);

  const hueSlider=document.createElement('input');
  hueSlider.className='cp-hue';hueSlider.type='range';hueSlider.min=0;hueSlider.max=360;hueSlider.step=1;hueSlider.value=Math.round(h);
  hueSlider.addEventListener('input',(e)=>{h=parseInt(e.target.value);sync();});
  box.appendChild(hueSlider);

  const row=document.createElement('div');
  row.style.cssText='display:flex;gap:8px;align-items:center;margin-bottom:10px;';
  const preview=document.createElement('div');
  preview.style.cssText=`width:36px;height:36px;border-radius:6px;flex-shrink:0;background:${color};border:1px solid rgba(128,128,128,0.3);`;
  row.appendChild(preview);
  const hexBox=document.createElement('div');
  hexBox.style.cssText='flex:1;display:flex;align-items:center;border:1px solid rgba(128,128,128,0.3);border-radius:6px;padding:0 8px;height:36px;gap:4px;';
  const hash=document.createElement('span');hash.textContent='#';hash.style.cssText='color:var(--text-muted);font-family:monospace;font-size:14px;';
  hexBox.appendChild(hash);
  const hexInput=document.createElement('input');
  hexInput.type='text';hexInput.value=color.slice(1).toUpperCase();hexInput.maxLength=6;
  hexInput.style.cssText='border:none;outline:none;font-family:monospace;font-size:14px;background:transparent;color:var(--text-normal);width:100%;';
  hexInput.addEventListener('input',(e)=>{
    const hx='#'+e.target.value;
    if(/^#[0-9a-fA-F]{6}$/.test(hx)){color=hx;[h,s,v]=hexToHsv(hx);hueSlider.value=Math.round(h);preview.style.background=hx;drawCanvas();}
  });
  hexBox.appendChild(hexInput);row.appendChild(hexBox);box.appendChild(row);

  const presets=['#9B59B6','#C0392B','#27AE60','#2980B9','#E67E22','#F1C40F','#17A589','#95A5A6','#CB5FDE','#E91E8C','#D35400','#1A5276'];
  const pRow=document.createElement('div');pRow.style.cssText='display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px;';
  presets.forEach(c=>{
    const sw=document.createElement('div');
    sw.style.cssText=`width:22px;height:22px;background:${c};border-radius:4px;cursor:pointer;border:1px solid rgba(0,0,0,0.12);`;
    sw.addEventListener('click',()=>{color=c;[h,s,v]=hexToHsv(c);hueSlider.value=Math.round(h);hexInput.value=c.slice(1).toUpperCase();preview.style.background=c;drawCanvas();});
    pRow.appendChild(sw);
  });
  box.appendChild(pRow);

  const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;gap:8px;justify-content:flex-end;';
  const cancelBtn=document.createElement('button');
  cancelBtn.textContent='Abbrechen';cancelBtn.style.cssText='padding:6px 14px;border-radius:6px;border:1px solid rgba(128,128,128,0.3);cursor:pointer;background:transparent;color:var(--text-normal);';
  cancelBtn.addEventListener('click',()=>{cleanup();reject();});
  const okBtn=document.createElement('button');
  okBtn.textContent='✓ Übernehmen';okBtn.style.cssText='padding:6px 14px;border-radius:6px;cursor:pointer;background:var(--interactive-accent);color:var(--text-on-accent);border:none;';
  okBtn.addEventListener('click',()=>{cleanup();resolve(color);});
  btnRow.appendChild(cancelBtn);btnRow.appendChild(okBtn);box.appendChild(btnRow);

  overlay.appendChild(box);
  document.body.appendChild(overlay);
  overlay.addEventListener('click',(e)=>{if(e.target===overlay){cleanup();reject();}});

  function cleanup(){
    document.removeEventListener('mousemove',onMove);
    document.removeEventListener('mouseup',onUp);
    document.body.removeChild(overlay);
  }
  drawCanvas();
});

let pickedColor;
try { pickedColor = await openColorPicker(); } catch(e) { return; }

const title = await tp.system.prompt("Infobox-Titel", "Charaktername");
if (!title) return;

tR += `> [!infobox|wikipedia]
> <div class="infobox-color" style="--infobox-accent: ${pickedColor};">
>
> # **${title}**
> ![[Token.png]]
> ###### –
> | Eigenschaft | Wert |
> | --- | --- |
> | **Name** | - |
>
> </div>`;
-%>