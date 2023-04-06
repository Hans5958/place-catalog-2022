/*!
 * The 2022 r/place Catalog
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2022 Place Atlas contributors
 * Copyright (c) 2022 Hans5958
 * Licensed under AGPL-3.0 (https://hans5958.github.io/place-catalog/license.txt)
 */
const codeReference={};let canvasUrl="";const variantsEl=document.getElementById("variants");for(const e in variationsConfig){const t=document.createElement("option");variantsEl.appendChild(t),t.textContent=variationsConfig[e].name,e.startsWith("#")?(t.disabled=!0,t.classList.add("fw-bold","fst-italic")):(codeReference[variationsConfig[e].code]=e,codeReference[e]=e,t.value=e)}const timelineSlider=document.getElementById("timeControlsSlider"),timelineList=document.getElementById("timeControlsList"),tooltip=document.getElementById("timeControlsTooltip"),image=document.getElementById("image");let abortController=new AbortController,currentUpdateIndex=0,updateTimeout=setTimeout(null,0),tooltipDelayHide=setTimeout(null,0),currentVariation=defaultVariation,currentPeriod=defaultPeriod;function timelineParser(e){updateTooltip(parseInt(e),currentVariation),clearTimeout(updateTimeout),updateTimeout=setTimeout((()=>{updateTime(parseInt(timelineSlider.value),currentVariation),setTimeout((()=>{timelineSlider.value!==currentPeriod&&abortController.signal.aborted&&updateTime(parseInt(timelineSlider.value),currentVariation)}),50)}),25)}window.currentVariation=currentVariation,window.currentPeriod=currentPeriod,buildObjectsList(),1===variationsConfig[currentVariation].versions.length&&bottomBar.classList.add("no-time-slider"),timelineSlider.max=variationsConfig[currentVariation].versions.length-1,timelineSlider.value=currentPeriod,timelineList.children[0].value=defaultPeriod,timelineSlider.addEventListener("input",(e=>timelineParser(e.target.value))),timelineSlider.addEventListener("wheel",(function(e){e.deltaY<0?(this.valueAsNumber+=1,timelineParser(this.value)):(this.value-=1,timelineParser(this.value)),e.stopPropagation()}),{passive:!0}),variantsEl.addEventListener("input",(e=>{updateTime(-1,e.target.value)}));const dispatchTimeUpdateEvent=(e=currentPeriod,t=currentVariation)=>{const i=new CustomEvent("timeupdate",{detail:{period:e,variation:t,periodString:formatPeriod(e,e,t)}});document.dispatchEvent(i)};async function updateBackground(e=currentPeriod,t=currentVariation){abortController.abort(),abortController=new AbortController,currentUpdateIndex++;const i=currentUpdateIndex,n=variationsConfig[t];variantsEl.value=currentVariation,n.icon?(variantsEl.previousElementSibling.innerHTML=n.icon,variantsEl.previousElementSibling.classList.remove("d-none"),variantsEl.parentElement.classList.add("input-group")):(variantsEl.previousElementSibling.innerHTML="",variantsEl.previousElementSibling.classList.add("d-none"),variantsEl.parentElement.classList.remove("input-group"));const r=n.versions[currentPeriod];let o=[],a=[];"string"==typeof r.url?o.push(r.url):o.push(...r.url);const l=document.createElement("canvas"),s=l.getContext("2d");for await(const e of o){const t=new Image;await new Promise((i=>{t.onload=()=>{s.canvas.width=Math.max(t.width,s.canvas.width),s.canvas.height=Math.max(t.height,s.canvas.height),a.push(t),i()},t.src=e}))}for(const e of a)s.drawImage(e,0,0);if(currentUpdateIndex!==i)return[r,e,t];const d=await new Promise((e=>l.toBlob(e)));canvasUrl=URL.createObjectURL(d),image.src=canvasUrl}async function updateTime(e=currentPeriod,t=currentVariation,i=!1){document.body.dataset.canvasLoading="";const n=currentVariation;variationsConfig[t]||(t=defaultVariation);const r=variationsConfig[t];e<0?e=0:e>r.versions.length-1&&(e=r.versions.length-1),currentPeriod=e,currentVariation=t,n!==t&&(timelineSlider.max=r.versions.length-1,i||(currentPeriod=r.default,e=currentPeriod),1===r.versions.length?bottomBar.classList.add("no-time-slider"):bottomBar.classList.remove("no-time-slider"),buildObjectsList()),timelineSlider.value=currentPeriod,updateTooltip(e,t),await updateBackground(e,t),dispatchTimeUpdateEvent(e,t),delete document.body.dataset.canvasLoading,tooltip.dataset.forceVisible="",clearTimeout(tooltipDelayHide),tooltipDelayHide=setTimeout((()=>{delete tooltip.dataset.forceVisible}),1e3)}function updateTooltip(e,t){const i=variationsConfig[t].versions[e];Array.isArray(i.timestamp)?(tooltip.querySelector("div").textContent="",i.timestamp.forEach((e=>{tooltip.querySelector("div").textContent&&(tooltip.querySelector("div").innerHTML+="<br />"),tooltip.querySelector("div").innerHTML+="number"==typeof e?new Date(1e3*e).toUTCString():e}))):"number"==typeof i.timestamp?tooltip.querySelector("div").textContent=new Date(1e3*i.timestamp).toUTCString():tooltip.querySelector("div").textContent=i.timestamp;const n=timelineSlider.getBoundingClientRect();let r=12-n.left,o=window.innerWidth-tooltip.offsetWidth-n.left+4;tooltip.style.left=Math.min(Math.max(timelineSlider.offsetWidth*timelineSlider.value/timelineSlider.max-tooltip.offsetWidth/2,r),o)+"px"}function isOnPeriod(e,t,i,n,r){return e>t&&([e,t]=[t,e]),n>=e&&n<=t&&i===r}function parsePeriod(e){let t=defaultVariation;if((e+="").split(":").length>1){const i=e.split(":");t=codeReference[i[0]],e=i[1]}if(e.search("-")+1){let[i,n]=e.split("-").map((e=>parseInt(e)));return i>n&&([i,n]=[n,i]),[i,n,t]}if(codeReference[e]){t=codeReference[e];const i=variationsConfig[t].default;return[i,i,t]}{const i=parseInt(e);return[i,i,t]}}function formatPeriod(e,t,i){let n,r;return null!=e||(e=currentPeriod),null!=t||(t=currentPeriod),null!=i||(i=currentVariation),r=variationsConfig[i].code,e>t&&([e,t]=[t,e]),n=e===t?e===variationsConfig[i].default&&i!==defaultVariation?"":e:e+"-"+t,n&&r?variationsConfig[i].code+":"+n:r||n}function formatHash(e,t,i,n){null!=t||(t=currentPeriod),null!=i||(i=currentPeriod),null!=n||(n=currentVariation);const r=formatPeriod(t,i,n);return r&&r!==defaultPeriod?"#"+r:""}function downloadCanvas(){const e=document.createElement("a");e.download="canvas.png",e.href=canvasUrl,e.classList.add("d-none"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}function buildObjectsList(e=currentVariation){const t=variationsConfig[e],i={name:t.name,links:{},id:e,...t.info},n=createInfoBlock(i);entriesList.replaceChildren(n)}tooltip.parentElement.addEventListener("mouseenter",(()=>updateTooltip(parseInt(timelineSlider.value),currentVariation))),window.addEventListener("resize",(()=>updateTooltip(parseInt(timelineSlider.value),currentVariation)));