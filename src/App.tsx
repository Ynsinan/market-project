import { Navbar } from "components";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "Themes/theme";

const Home = lazy(() => import("./pages/Home/Home"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Basket = lazy(() => import("pages/Basket/Basket"));

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home theme={theme}/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
