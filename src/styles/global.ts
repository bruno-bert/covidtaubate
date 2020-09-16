import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: local('Poppins Light'), local('Poppins-Light'),
       url('../fonts/poppins-v12-latin-300.woff2') format('woff2');
}
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local('Poppins Regular'), local('Poppins-Regular'),
       url('../fonts/poppins-v12-latin-regular.woff2') format('woff2');
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local('Poppins Medium'), local('Poppins-Medium'),
       url('../fonts/poppins-v12-latin-500.woff2') format('woff2'); 
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local('Poppins Bold'), local('Poppins-Bold'),
       url('../fonts/poppins-v12-latin-700.woff2') format('woff2');
}
/* poppins-900 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: local('Poppins Black'), local('Poppins-Black'),
       url('../fonts/poppins-v12-latin-900.woff2') format('woff2'); 
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

 

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100vh;
   

    
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #EFFFFA;
    background: url('./img/background.webp') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    @media (max-width: 600px){
      background-position-x: left;
    }
    
  
  }

  button{
    font-family: 'Roboto';
  }
`

export default GlobalStyles
