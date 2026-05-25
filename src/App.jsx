import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { useThemeStore } from "./store/themeStore.js";

import BottomNav from "./components/layout/BottomNav.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import TopBar from "./components/layout/TopBar.jsx";

import Compose from "./pages/Compose.jsx";
import Feed from "./pages/Feed.jsx";
import Notifications from "./pages/Notifications.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Profile from "./pages/Profile.jsx";

import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <TopBar />

      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <Sidebar />

        <main className="flex-1 pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Feed />} />

            <Route
              path="/post/:id"
              element={<PostDetail />}
            />

            <Route
              path="/compose"
              element={<Compose />}
            />

            <Route
              path="/alerts"
              element={<Notifications />}
            />

            <Route
              path="/me"
              element={<Profile />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;