import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, Share2, Eye, Calendar, Tag, User, ArrowLeft, Star } from 'lucide-react'
import WishlistButton from '../../components/user/WishlistButton'
import ArtworkCard from '../../components/common/ArtworkCard'
import Modal from '../../components/common/Modal'

const ArtworkDetails = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [showShareModal, setShowShareModal] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  // Sample artwork data (in real app, this would be fetched based on id)
  const artwork = {
    id: 1,
    title: "Abstract Sunset",
    artist: "Jane Smith",
    price: 299,
    originalPrice: 350,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=600&fit=crop"
    ],
    description: "A beautiful abstract representation of sunset with vibrant colors that evoke feelings of warmth and tranquility. This piece combines traditional painting techniques with modern abstract concepts to create a truly unique artwork.",
    fullDescription: "This stunning abstract piece captures the essence of a golden sunset through bold brushstrokes and a carefully curated color palette. The artist has masterfully blended warm oranges, deep purples, and gentle yellows to create a sense of movement and energy that draws the viewer into the scene. Created using high-quality acrylic paints on premium canvas, this artwork represents months of careful planning and execution. The texture and depth achieved through layered paint application give this piece a dynamic quality that changes with different lighting conditions throughout the day.",
    category: "Abstract",
    medium: "Acrylic on Canvas",
    dimensions: "24\" x 36\"",
    year: "2024",
    views: 245,
    likes: 89,
    rating: 4.8,
    reviews: 23,
    createdAt: "2024-01-15",
    tags: ["Abstract", "Sunset", "Warm Colors", "Modern"],
    artistInfo: {
      name: "Jane Smith",
      bio: "Jane Smith is a contemporary abstract artist based in New York. Her work focuses on capturing emotions through color and movement.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=100&h=100&fit=crop&crop=face",
      artworks: 15,
      followers: 234
    },
    specifications: {
      "Medium": "Acrylic on Canvas",
      "Dimensions": "24\" x 36\"",
      "Year": "2024",
      "Style": "Abstract",
      "Frame": "Not included",
      "Certificate": "Included"
    }
  }

  // Sample related artworks
  const relatedArtworks = [
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
          <span>/</span>
          <span className="text-gray-900">{artwork.title}</span>
        </div>

        {/* Back Button */}
        <Link 
          to="/gallery" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <img
                src={artwork.images[selectedImage]}
                alt={artwork.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2">
              {artwork.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${artwork.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Artwork Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{artwork.title}</h1>
                <Link 
                  to={`/artist/${artwork.artistInfo.name}`}
                  className="text-lg text-blue-600 hover:text-blue-800"
                >
                  by {artwork.artist}
                </Link>
              </div>
              <div className="flex space-x-2">
                <WishlistButton artworkId={artwork.id} />
                <button 
                  onClick={() => setShowShareModal(true)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(artwork.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {artwork.rating} ({artwork.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-gray-900">${artwork.price}</span>
                {artwork.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${artwork.originalPrice}</span>
                )}
              </div>
              <p className="text-sm text-green-600">Free shipping included</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center text-gray-600 mb-1">
                  <Eye className="h-4 w-4 mr-1" />
                </div>
                <div className="text-lg font-semibold text-gray-900">{artwork.views}</div>
                <div className="text-xs text-gray-600">Views</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-gray-600 mb-1">
                  <Heart className="h-4 w-4 mr-1" />
                </div>
                <div className="text-lg font-semibold text-gray-900">{artwork.likes}</div>
                <div className="text-xs text-gray-600">Likes</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-gray-600 mb-1">
                  <Calendar className="h-4 w-4 mr-1" />
                </div>
                <div className="text-lg font-semibold text-gray-900">{artwork.year}</div>
                <div className="text-xs text-gray-600">Created</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full btn-primary text-lg py-3">
                Add to Cart - ${artwork.price}
              </button>
              <button className="w-full btn-secondary text-lg py-3">
                Contact Artist
              </button>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {artwork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-md mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['description', 'specifications', 'artist', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{artwork.fullDescription}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(artwork.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="font-medium text-gray-900">{key}</dt>
                      <dd className="text-gray-600">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {activeTab === 'artist' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Artist</h3>
                <div className="flex items-start space-x-4">
                  <img
                    src={artwork.artistInfo.avatar}
                    alt={artwork.artistInfo.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{artwork.artistInfo.name}</h4>
                    <p className="text-gray-600 mb-3">{artwork.artistInfo.bio}</p>
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span>{artwork.artistInfo.artworks} artworks</span>
                      <span>{artwork.artistInfo.followers} followers</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reviews</h3>
                <p className="text-gray-600">Reviews feature coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Artworks */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Artworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <Modal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title="Share Artwork"
      >
        <div className="space-y-4">
          <p className="text-gray-600">Share this amazing artwork with others</p>
          <div className="flex space-x-3">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Facebook
            </button>
            <button className="flex-1 bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
              Twitter
            </button>
            <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
              WhatsApp
            </button>
          </div>
          <div className="pt-4 border-t">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Copy Link
            </label>
            <div className="flex">
              <input
                type="text"
                value={window.location.href}
                readOnly
                className="flex-1 input-field rounded-r-none"
              />
              <button className="bg-gray-200 hover:bg-gray-300 px-4 rounded-r-lg border border-l-0 border-gray-300">
                Copy
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ArtworkDetails
