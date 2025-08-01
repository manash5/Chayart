import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common layout components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// User pages
import Home from "./pages/user/Home";
import Gallery from "./pages/user/Gallery";
import ArtworkDetails from "./pages/user/ArtworkDetails";
import Wishlist from "./pages/user/Wishlist";
import UserDashboard from "./pages/user/UserDashboard";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import AddArtwork from "./pages/admin/AddArtwork";
import EditArtwork from "./pages/admin/EditArtwork";

// Not Found fallback (optional)
const NotFound = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <h2>404 | Page Not Found</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artwork/:id" element={<ArtworkDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dashboard" element={<UserDashboard />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-artwork" element={<AddArtwork />} />
          <Route path="/admin/edit-artwork/:id" element={<EditArtwork />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
