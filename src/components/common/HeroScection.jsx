import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Palette, Users, Award } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing
            <span className="block text-yellow-300">Artworks</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore a curated collection of unique artworks from talented artists worldwide. 
            Find your next masterpiece today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join Community
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                <Palette className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Unique Artworks</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Artists</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                <Award className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
