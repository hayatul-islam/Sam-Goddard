import { createContext, useEffect, useState } from "react";
import Loading from "./components/shared/Loading";
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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 30);
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <MainContexts.Provider value={globalContexts}>
          <div className={`${about ? " bg-[#bebebe] " : "bg-[#262525]"}`}>
            <TheLayout />
          </div>
        </MainContexts.Provider>
      )}
    </>
  );
}

export default App;
