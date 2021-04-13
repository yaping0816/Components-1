const someData = ['foo', 'bar', 'baz', 'fizz'] //this is raw data from data server
// someData.forEach(str =>{
//   const div = divMaker(str, 'grey'); //floating in memory at this moment
//   document.body.prepend(div); //attach to the body at this moment
//   console.log(div);
// })

function divMaker(text, color){ //COMPONENT takes raw data, returns DOM elements
  const theNewDiv = document.createElement('div'); //instantiation
  theNewDiv.classList.add('nice-div'); //adding attributes, we can also style .nice-div in css file
  theNewDiv.textContent = text; //adding text
  theNewDiv.style.color = color; //adding inline style
  return theNewDiv; //RETURN
}
// function DivMaker(data){
//   const {text,color} = data;
//   return <div style = {{color:color}} > {text}</div>
// } //React component, touch on later

const div = divMaker('lambda', 'red');
const div2 = divMaker('web', 'green');
// document.body.prepend(div);
// document.body.prepend(div2);

// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

function imageMaker(imageURL){
  const image = document.createElement('img');
  // image.src = imageURL;
  image.setAttribute('src', imageURL);
  return image;
}

// function Image(data){
//   return <img src={data.src} />
// }  //React component, touch on later

// imageData.forEach(imgURL =>{
//   const img = imageMaker(imgURL.imageURL); //img = imageMaker(), not img.src = imageMaker(), because imageMaker() returns an image itself
//   document.body.appendChild(img);
//   console.log(img);
// })
 

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants

import panelData from './data/panelData';
import constants from './data/constants';

const open = constants.open;
const close = constants.close;
// const {open, close} = constants' //destructuring



// TASK 2- Verify our imports using log statements
console.log(panelData); // log the panelData
console.log(open); // log the open arrow
console.log(close); // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('.accordion');
console.log(accordion);


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(title, content/* what data does the panel need? */) {


  // TASK 5- Instantiate all the elements needed for a panel
  // floating in the memory
  const panel = document.createElement('div');
  const panelBar = document.createElement('div');
  const panelContent = document.createElement('div');
  const panelTitle = document.createElement('h3');
  const panelButtons = document.createElement('div');
  const openButton = document.createElement('button');
  const closeButton = document.createElement('button');


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */

  panel.appendChild(panelBar);
  panel.appendChild(panelContent);
  panelBar.appendChild(panelTitle);
  panelBar.appendChild(panelButtons);
  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton);


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  panelContent.classList.add('panel-content');
  panelButtons.classList.add('panel-buttons');
  openButton.classList.add('panel-btn-open');
  closeButton.classList.add('anel-btn-close','hide-btn');


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file

  panelContent.textContent = content;
  panelTitle.textContent = title;
  openButton.textContent = open;
  closeButton.textContent = close;



  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)
  
  panelButtons.addEventListener('click', (event) =>{
    openButton.classList.toggle('hide-btn');
    closeButton.classList.toggle('hide-btn');
    panelContent.classList.toggle('toggle-on')
  })

  // don't forget to return the panel!
  return panel;
}
console.log(makePanel('the title', 'the content'));

// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.
panelData.forEach(data =>{
  const panel = makePanel(data.title, data.content);
  accordion.appendChild(panel);
}) 


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
