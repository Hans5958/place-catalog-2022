/*!
 * The 2022 r/place Catalog
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2022 Place Atlas contributors
 * Licensed under AGPL-3.0 (https://place-atlas.stefanocoding.me/license.txt)
 */
const backgroundCanvas=document.createElement("canvas");backgroundCanvas.width=canvasSize.x,backgroundCanvas.height=canvasSize.y;const backgroundContext=backgroundCanvas.getContext("2d"),wrapper=document.getElementById("wrapper"),bottomBar=document.getElementById("bottomBar"),offcanvasList=document.getElementById("offcanvasList"),objectsContainer=document.getElementById("objectsList"),closeObjectsListButton=document.getElementById("closeObjectsListButton"),objectsListOverflowNotice=document.getElementById("objectsListOverflowNotice"),entriesList=document.getElementById("entriesList"),objectEditNav=document.createElement("a");objectEditNav.className="btn btn-outline-primary",objectEditNav.id="objectEditNav",objectEditNav.textContent="Edit";let lastPos=[0,0],fixed=!1;function clearObjectsList(){closeObjectsListButton.classList.add("d-none"),objectsListOverflowNotice.classList.add("d-none"),entriesList.classList.remove("disableHover"),objectsContainer.replaceChildren(),fixed=!1,render(),objectEditNav.remove(),document.title=pageTitle}function toggleFixed(e,t){if(!fixed)return entriesList.classList.remove("disableHover"),0;fixed=!fixed,fixed||(updateHovering(e,t),render()),entriesList.classList.add("disableHover"),objectsListOverflowNotice.classList.add("d-none")}function renderBackground(){backgroundContext.clearRect(0,0,canvas.width,canvas.height),backgroundContext.fillStyle="rgba(0, 0, 0, 0.6)",backgroundContext.fillRect(0,0,backgroundCanvas.width,backgroundCanvas.height)}async function render(){context.clearRect(0,0,canvas.width,canvas.height),context.globalCompositeOperation="source-over",context.clearRect(0,0,canvas.width,canvas.height),context.globalCompositeOperation="source-out",context.drawImage(backgroundCanvas,0,0)}function highlightEntryFromUrl(){const e=window.location.hash.substring(1);let t,n,[i]=e.split("/");i?[,t,n]=parsePeriod(i):(t=defaultPeriod,n=defaultVariation),updateTime(t,n,!0)}function initExplore(){window.updateHovering=function(e,t){if(!dragging&&(!fixed||t)){const t=[(e.clientX-(container.clientWidth/2-innerContainer.clientWidth/2+zoomOrigin[0]+container.offsetLeft))/zoom,(e.clientY-(container.clientHeight/2-innerContainer.clientHeight/2+zoomOrigin[1]+container.offsetTop))/zoom],n=document.getElementById("coords_p");!0===isNaN(t[0])?n.textContent="0, 0":n.textContent=Math.ceil(t[0])+", "+Math.ceil(t[1])}},window.render=function(){},renderBackground(),applyView()}function initGlobal(){container.addEventListener("mousemove",(function(e){e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||updateHovering(e)})),document.addEventListener("timeupdate",(e=>{let t=window.location.hash.substring(1).split("/");const n=formatHash(t[0],e.detail.period,e.detail.period,e.detail.variation);location.hash!==n&&history.replaceState({},"",`./${n}`)}))}function initViewGlobal(){container.addEventListener("mousedown",(function(e){lastPos=[e.clientX,e.clientY]})),container.addEventListener("touchstart",(function(e){1===e.touches.length&&(lastPos=[e.touches[0].clientX,e.touches[0].clientY])}),{passive:!0}),container.addEventListener("mouseup",(function(e){Math.abs(lastPos[0]-e.clientX)+Math.abs(lastPos[1]-e.clientY)<=4&&toggleFixed(e)})),container.addEventListener("touchend",(function(e){e.preventDefault(),1===e.changedTouches.length&&(e=e.changedTouches[0],Math.abs(lastPos[0]-e.clientX)+Math.abs(lastPos[1]-e.clientY)>4&&(dragging=!1),fixed=!1,setTimeout((function(){updateHovering(e,!0)}),10))})),window.location.hash&&highlightEntryFromUrl()}offcanvasList.addEventListener("show.bs.offcanvas",(function(){wrapper.classList.remove("listHidden"),wrapper.classList.add("listTransitioning"),applyView()})),offcanvasList.addEventListener("shown.bs.offcanvas",(function(e){entriesListShown=!0,wrapper.classList.remove("listTransitioning"),updateHovering(e),applyView(),render()})),offcanvasList.addEventListener("hide.bs.offcanvas",(function(){wrapper.classList.add("listHidden"),wrapper.classList.add("listTransitioning"),applyView()})),offcanvasList.addEventListener("hidden.bs.offcanvas",(function(e){entriesListShown=!1,wrapper.classList.remove("listTransitioning"),updateHovering(e),applyView(),render()})),closeObjectsListButton.addEventListener("click",clearObjectsList),bottomBar.addEventListener("mouseover",(function(){fixed||clearObjectsList()})),window.addEventListener("resize",(function(e){applyView(),render()})),window.addEventListener("hashchange",highlightEntryFromUrl);