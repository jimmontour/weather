import { createGlobalStyle } from "styled-components";
import font from '../assets/fonts/Roboto.ttf'

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #50B1D1;
    --yellow: #F7C87A;
    --black: #161616;
    --purple: #973B88;
    --darkPurple: #66337C;
    --white: #fff;
    --grey: #efefef;

   /* Font Sizes */
   --baseFontSize: 100%;
   --baseNavSize: 0.64rem;
   --smallFontSize: 0.8rem;
   --smallestFontSize: 0.512rem;

   --h1: 3.052rem;
   --h2: 2.441rem;
   --h3: 1.953rem;
   --h4: 1.563rem;
   --h5: 1.25rem;
   --smallText: 0.8rem;

   /* Z- Index */
   --headerLevel: 10;
   --highestLevel: 100;

   /* Elevation */
   --level-1: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
   --level-2: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
   --level-3: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
   --level-4: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);

    /* Positioning */
   --containerPadding: 2.5%;
   --headerHeight: 3rem;
   --margin: 2.75rem 0 1rem;
   --borderRadius: 10px;
  }

  @font-face {
    font-family: Roboto;
    src: url(${font});
  }

  html {
     font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: var(--baseFontSize); /*18px*/
    box-sizing: border-box;
  }

*,
*::before,
*::after {
   box-sizing: inherit;
}

body {
  font-weight: 400;
  line-height: 1.75;
  color: var(--white);
  background: var(--black);
}

/* Type-scale */
p {
   margin-bottom: 1rem;
   max-width: 40rem;
}

p a,
blockquote a {
   color: var(--textColor);
   text-decoration: none;
   border-bottom: solid 2px var(--green);
}

h1,
h2,
h3,
h4,
h5 {
  margin: 3rem 0 1.38rem;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: var(--h1);
}

h2 {font-size: var(--h2);}

h3 {font-size: var(--h3);}

h4 {font-size: var(--h4);}

h5 {font-size: var(--h5);}

small, .text_small {font-size: var(--small);}
/* End Type-scale */

blockquote {
   margin: 0;
   padding: 2rem;
   background: var(--white);
   box-shadow: var(--level-3);
}

label {
   display: block;
   font-size: var(--smallText);
}

input, textarea {
   padding: .5rem 1rem;
   background: var(--purple);
   border: none;
   :focus {
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
   }
}


textarea {
   width: 100%;
}

::placeholder {
   color: var(--grey)
}

select {
   border: var(--line);
}

hr {
   border-top: var(--line);
}

ul {
   list-style: none;margin: 0;
   padding: 0;
}

img {
   width: 100%;
}

a {
   text-decoration: none;
   color: var(--white);
}

button {
   appearance: none;
   padding: .5rem .75rem;
   border: none;
   border-radius: 5px;
   box-shadow: var(--level-1);
   background-color: var(--black);
   color: var(--white);
   transition: .3s ease-in-out box-shadow;
   cursor: pointer;
}

button:hover {
   box-shadow: var(--level-2);
}

button[disabled] {
   opacity: 0.4;
}

.actions {
   display: grid;
   grid-template-columns: 1fr 1fr;
}

.grid {
   --gridCols: 2;
   display: block;
   grid-template-columns: repeat(var(--gridCols), 1fr);
}

.cols-3 {
   --gridCols: 3;
}

.flex {
   --justifyContent: space-between;
   display: block;
   justify-content: var(--justifyContent);
}

.flex-around {
   --justifyContent: space-around;
}

/* Media queries */
@media only screen and (min-width: 500px) {
   :root {
      --baseFontSize: 112.5%;
   }

   .grid {
      display: grid;
   }

   .flex {
      display: flex;
   }
}

`;

export default GlobalStyles;
