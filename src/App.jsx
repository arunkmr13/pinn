import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNav from "./components/layout/BottomNav.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import TopBar from "./components/layout/TopBar.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Compose from "./pages/Compose.jsx";
import Feed from "./pages/Feed.jsx";
import Notifications from "./pages/Notifications.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Profile from "./pages/Profile.jsx";
import { useThemeStore } from "./store/themeStore.js";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <TopBar />
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <Sidebar />
        <main className="flex-1 pb-24 md:pb-8">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/compose" element={<Compose />} />
            <Route path="/alerts" element={<Notifications />} />
            <Route path="/me" element={<Profile />} />
          </Routes>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}

function App() {
  const theme = useThemeStore((state) => state.theme);

  // sets initial theme class on <html> on first mount
  // toggleTheme in themeStore handles subsequent updates directly
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth — full screen, no chrome */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App — with TopBar, Sidebar, BottomNav */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;