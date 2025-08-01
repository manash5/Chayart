import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../../components/common/HeroScection'
import ArtworkCard from '../../components/common/ArtworkCard'
import { Palette, Users, Award, ArrowRight } from 'lucide-react'

const Home = () => {
  // Sample featured artworks
  const featuredArtworks = [
    {
      id: 1,
      title: "Abstract Sunset",
      artist: "Jane Smith",
      price: 299,
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      description: "A beautiful abstract representation of sunset with vibrant colors",
      category: "Abstract",
      views: 245
    },
    {
      id: 2,
      title: "Mountain Reflection",
      artist: "John Doe",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Serene mountain landscape reflected in crystal clear water",
      category: "Landscape",
      views: 189
    },
    {
      id: 3,
      title: "Urban Dreams",
      artist: "Alice Johnson",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop",
      description: "Modern urban cityscape with dreamy atmosphere",
      category: "Digital Art",
      views: 312
    },
    {
      id: 4,
      title: "Portrait of Grace",
      artist: "Michael Brown",
      price: 600,
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Elegant portrait capturing the essence of grace and beauty",
      category: "Portrait",
      views: 167
    }
  ]

  const categories = [
    { name: "Paintings", count: 150, icon: "🎨" },
    { name: "Digital Art", count: 89, icon: "💻" },
    { name: "Photography", count: 124, icon: "📸" },
    { name: "Sculptures", count: 45, icon: "🗿" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Artworks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artworks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of exceptional artworks from talented artists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/gallery" className="btn-primary inline-flex items-center">
              View All Artworks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">
              Explore different art styles and mediums
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/gallery?category=${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count} artworks
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ChaYArt</h2>
            <p className="text-lg text-gray-600">
              We're committed to connecting art lovers with exceptional artworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Palette className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Collection</h3>
              <p className="text-gray-600">
                Every artwork is carefully selected to ensure quality and uniqueness
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Join a vibrant community of artists and art enthusiasts
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authenticity</h3>
              <p className="text-gray-600">
                All artworks come with certificates of authenticity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new artworks and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home; 
