import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart, User, Palette } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">ChaYArt</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/gallery') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/wishlist"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/wishlist') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/dashboard') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/login" className="btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/wishlist"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Wishlist
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Link to="/login" className="btn-secondary text-center" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
