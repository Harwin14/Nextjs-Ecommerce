import { createGlobalStyle } from "styled-components";
import "../styles/_app.css";
import { CartContextProvider } from "@/components/CartContext";
const GlobalStyles = createGlobalStyle`
 
 body{
  background-color:#eee;
  padding:0;
  margin:0;
  font-family: 'Poppins', sans-serif;
 }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
