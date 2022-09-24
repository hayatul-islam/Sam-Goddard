import { createContext, useState } from "react";
import TheLayout from "./pages/TheLayout";
export const MainContexts = createContext();

function App() {
  const [about, setAbout] = useState(false);
  setInterval(() => {
    const location = window.location.pathname;
    if (location === "/about") {
      setAbout(true);
    } else {
      setAbout(false);
    }
  }, 1000);
  const globalContexts = {
    about,
    setAbout,
  };
  return (
    <>
      <MainContexts.Provider value={globalContexts}>
        <div className={`${about ? " bg-white " : "bg-[#262525]"}`}>
          <TheLayout />
        </div>
      </MainContexts.Provider>
    </>
  );
}

export default App;
