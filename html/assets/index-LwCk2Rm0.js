(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <p>
    My name is Soheil and I'm based in Hamburg.<br/>

    I enjoy reading books. Some of my favourites are Harari's Sapiens and
    Homo Deus and Hawking's Brief Answers to Big Questions.<br/>

    I also like traveling, running, rock music and playing music.<br/>

    I help organizing community events from time to time.
    Last one was <a href="https://hamburg.devfest.de/" target="_blank">DevFest Hamburg 2025</a>.
  </p>
`;