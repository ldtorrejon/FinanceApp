import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.scss";
import App from "./App.tsx";
import { Finance } from "./components/finance/Finance.tsx";
import { Profile } from "./components/profile/Profile.tsx";
import { Feed } from "./components/feed/Feed.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="finance" element={<Finance />} />
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
