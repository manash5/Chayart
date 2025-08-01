import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Trash2, ShoppingBag, Filter, Grid, List } from 'lucide-react'
import ArtworkCard from '../../components/common/ArtworkCard'

const Wishlist = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedItems, setSelectedItems] = useState([])

  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      title: "Abstract Sunset",
      artist: "Jane Smith",
      price: 299,
      originalPrice: 350,
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      description: "A beautiful abstract representation of sunset with vibrant colors",
      category: "Abstract",
      views: 245,
      addedDate: "2024-01-20",
      available: true
    },
    {
      id: 2,
      title: "Mountain Reflection",
      artist: "John Doe",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Serene mountain landscape reflected in crystal clear water",
      category: "Landscape",
      views: 189,
      addedDate: "2024-01-15",
      available: true
    },
    {
      id: 3,
      title: "Urban Dreams",
      artist: "Alice Johnson",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop",
      description: "Modern urban cityscape with dreamy atmosphere",
      category: "Digital Art",
      views: 312,
      addedDate: "2024-01-18",
      available: false
    },
    {
      id: 4,
      title: "Portrait of Grace",
      artist: "Michael Brown",
      price: 600,
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Elegant portrait capturing the essence of grace and beauty",
      category: "Portrait",
      views: 167,
      addedDate: "2024-01-12",
      available: true
    }
  ]

  const handleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    setSelectedItems(
      selectedItems.length === wishlistItems.length 
        ? [] 
        : wishlistItems.map(item => item.id)
    )
  }

  const handleRemoveSelected = () => {
    if (window.confirm(`Remove ${selectedItems.length} items from wishlist?`)) {
      setSelectedItems([])
      // Here you would make API calls to remove items
      console.log('Removing items:', selectedItems)
    }
  }

  const totalValue = wishlistItems
    .filter(item => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
              <p className="text-gray-600">
                {wishlistItems.length} items • Total value: ${wishlistItems.reduce((sum, item) => sum + item.price, 0)}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/gallery" className="btn-secondary">
                <Heart className="h-4 w-4 mr-2" />
                Find More Art
              </Link>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Selection Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedItems.length === wishlistItems.length}
                  onChange={handleSelectAll}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Select All ({selectedItems.length} selected)
                </label>
              </div>
              {selectedItems.length > 0 && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleRemoveSelected}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    <Trash2 className="h-4 w-4 mr-1 inline" />
                    Remove Selected
                  </button>
                  <span className="text-sm text-gray-500">
                    Total: ${totalValue}
                  </span>
                </div>
              )}
            </div>

            {/* View and Sort Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field text-sm"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="artist">Artist Name</option>
              </select>

              <div className="flex items-center space-x-1 border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-l-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-r-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length > 0 ? (
          <div className={viewMode === 'grid' ? 
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : 
            "space-y-4"
          }>
            {wishlistItems.map((item) => (
              viewMode === 'grid' ? (
                <div key={item.id} className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  {!item.available && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 rounded-lg">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Sold Out
                      </span>
                    </div>
                  )}
                  <ArtworkCard artwork={item} showWishlist={false} />
                  <div className="mt-2 flex space-x-2">
                    <Link
                      to={`/artwork/${item.id}`}
                      className="flex-1 btn-secondary text-center text-sm py-2"
                    >
                      View Details
                    </Link>
                    <button
                      disabled={!item.available}
                      className="flex-1 btn-primary text-sm py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingBag className="h-4 w-4 mr-1 inline" />
                      {item.available ? 'Add to Cart' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              ) : (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                  <div className="flex items-center p-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-32 h-24 object-cover"
                    />
                    {!item.available && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          Sold Out
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">by {item.artist}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">Added {new Date(item.addedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <div className="flex space-x-2">
                        <Link
                          to={`/artwork/${item.id}`}
                          className="btn-secondary text-sm px-3 py-1"
                        >
                          View
                        </Link>
                        <button
                          disabled={!item.available}
                          className="btn-primary text-sm px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {item.available ? 'Add to Cart' : 'Sold Out'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">Start adding artworks you love to your wishlist</p>
            <Link to="/gallery" className="btn-primary">
              Browse Gallery
            </Link>
          </div>
        )}

        {/* Summary */}
        {wishlistItems.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Wishlist Summary</h3>
                <p className="text-gray-600">
                  {wishlistItems.length} items • {wishlistItems.filter(item => item.available).length} available
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  ${wishlistItems.reduce((sum, item) => sum + item.price, 0)}
                </p>
                <p className="text-sm text-gray-600">Total value</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wishlist
