import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Room from "../pages/Room/Room";
import Swipe from "../pages/Swipe/Swipe";
import Match from "../pages/Match/Match";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/room/:roomId" element={<Room />} />

        <Route path="/swipe/:roomId" element={<Swipe />} />

        <Route path="/match/:roomId" element={<Match />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;