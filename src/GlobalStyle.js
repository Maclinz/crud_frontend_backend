import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
    }

    body{
        background-color: #27AE60;
        
    }
    input[type="text"]::-webkit-input-placeholder {
        color: white;
        opacity: .7;
    }
    textarea::-webkit-input-placeholder {
        color: white;
        opacity: .7;
    }

    .alert-enter {
  opacity: 0;
  transform: scale(0.9);
}
.alert-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
.alert-exit {
  opacity: 1;
}
.alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}
`;

export default GlobalStyle;