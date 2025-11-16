import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <p>
    My name is Soheil and I live in Hamburg.<br/>

    I enjoy reading books. Some of my favourites are Harari's Sapiens and
    Homo Deus and Hawking's Brief Answers to Big Questions.<br/>

    I also like traveling, running, rock music and playing music.<br/>

    I help organizing community events from time to time.
    Last one was <a href="https://hamburg.devfest.de/" target="_blank">DevFest Hamburg 2025</a>.
  </p>
`;
