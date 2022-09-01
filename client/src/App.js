import MainNavbar from "./navigation/MainNavbar";
import MainItemListView from "./views/MainItemListView";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import SignupView from "./views/SignupView";
import { AutenticationContextProvider } from "./context/AutenticationContext";
import { AppContextProvider } from "./context/appContext";
import Profile from "./views/Profile";
import PostMuseum from "./views/PostMuseum";
import React from "react"

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <AutenticationContextProvider>
        <AppContextProvider>
          <Routes>
            <Route path="home" element={<MainItemListView />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignupView />} />
            <Route path="profile" element={<Profile />} />
            <Route path="postmuseum" element={<PostMuseum />} />
          </Routes>
        </AppContextProvider>
      </AutenticationContextProvider>
    </div>
  );
}

export default App;
