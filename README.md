# Components I

## Running this project

This project is set up with [Parcel Bundler](https://parceljs.org/), an npm package
that compiles our frontend assets and comes with an integrated development server.

The dev server runs on `http://localhost:1234` by default, but will use another port
number if `1234` is being used by another application.

- Clone the repo.
- Navigate into the project folder.
- Run `npm install` to download the project's dependencies.
- Run `npm start` to compile the project and spin up a dev server on `localhost`.


<!-- THe main purpose of this class -->
- we are going to build a function taking raw data and it's going to return a bunch of html elements like the 'title of panel' on the webpage. The reason we can see it before the class is because it's hard coded in html. Our task is to comment out from HTML.
- 

<!-- 💥💥💥 Rules when DECLARING a React component 💥💥💥 -->
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content


<!-- 💥💥💥 Rules when USING a React component 💥💥💥 -->

  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly

<!-- insertAdjacentHTML -->
- more powerful then prepend and appendChild

<!--The purpose of constructing webpage with js -->
- the HTML load once, never reload and then the js required just the information needed to update the page. So it's increasing speed and avoid asking for too much information.