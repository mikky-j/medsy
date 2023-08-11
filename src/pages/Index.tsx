import { createContext, useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import SideNav from "../components/General/SideNav";
import { NavContextState, Routes } from "../types/navTypes";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface NavContextProps {
  navState: NavContextState;
  closeNav: VoidFunction;
  openRoute: (name: Routes["name"], params?: Routes["params"]) => void;
}

export const NavContext = createContext<NavContextProps>({
  navState: { direction: "left", open: false, route: { name: "Home" } },
  closeNav: () => {},
  openRoute: () => {},
});

function App() {
  const [navState, setNavState] = useState<NavContextState>({
    direction: "left",
    open: false,
    route: { name: "Home" },
  });

  const openRoute = (name: Routes["name"], params?: Routes["params"]) => {
    setNavState({
      direction: name == "Home" ? "left" : "right",
      open: true,
      route: {
        name,
        params,
      },
    });
  };

  const closeNav = () => {
    setNavState({ ...navState, open: false });
  };

  return (
    <Provider store={store}>
      <NavContext.Provider value={{ navState, closeNav, openRoute }}>
        <SideNav />
        <Header />
        <Body />
        <Footer />
      </NavContext.Provider>
    </Provider>
  );
}

export default App;
