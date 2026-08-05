import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Room from "../pages/Room/Room";
import Swipe from "../pages/Swipe/Swipe";
import Match from "../pages/Match/Match";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route 
          path="/room/:roomId" 
          element={
              <ProtectedRoute>
                <Room />
              </ProtectedRoute>
              } 
        />

        <Route 
          path="/swipe/:roomId" 
          element={
            <ProtectedRoute>
              <Swipe />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/match/:roomId" 
          element={
            <ProtectedRoute>
              <Match />
            </ProtectedRoute>
            } 
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;