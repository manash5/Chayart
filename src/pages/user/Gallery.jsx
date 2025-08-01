import React, { useState, useEffect } from 'react'
import ArtworkCard from '../../components/common/ArtworkCard'
import GalleryFilter from '../../components/user/GalleryFilter'
import { Grid, List } from 'lucide-react'

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState('grid')
  const [filteredArtworks, setFilteredArtworks] = useState([])

  // Sample artworks data
  const artworks = [
    {
      id: 1,
      title: "Abstract Sunset",
      artist: "Jane Smith",
      price: 299,
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      description: "A beautiful abstract representation of sunset with vibrant colors",
      category: "Abstract",
      views: 245,
      createdAt: "2024-01-15"
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
      createdAt: "2024-01-10"
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
      createdAt: "2024-01-20"
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
      createdAt: "2024-01-05"
    },
    {
      id: 5,
      title: "Nature's Symphony",
      artist: "Sarah Wilson",
      price: 380,
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      description: "A harmonious blend of natural elements in watercolor",
      category: "Painting",
      views: 223,
      createdAt: "2024-01-12"
    },
    {
      id: 6,
      title: "Digital Fusion",
      artist: "Alex Chen",
      price: 275,
      imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      description: "Contemporary digital art with futuristic elements",
      category: "Digital Art",
      views: 156,
      createdAt: "2024-01-18"
    },
    {
      id: 7,
      title: "Vintage Camera",
      artist: "David Park",
      price: 125,
      imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      description: "Classic photography capturing timeless moments",
      category: "Photography",
      views: 198,
      createdAt: "2024-01-08"
    },
    {
      id: 8,
      title: "Marble Dreams",
      artist: "Lisa Martinez",
      price: 850,
      imageUrl: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      description: "Elegant marble sculpture with flowing forms",
      category: "Sculpture",
      views: 134,
      createdAt: "2024-01-03"
    }
  ]

  // Filter and sort artworks
  useEffect(() => {
    let filtered = artworks.filter(artwork => {
      // Search filter
      const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.description.toLowerCase().includes(searchTerm.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory

      // Price filter
      let matchesPrice = true
      if (priceRange !== 'all') {
        const price = artwork.price
        switch (priceRange) {
          case '0-100':
            matchesPrice = price >= 0 && price <= 100
            break
          case '100-500':
            matchesPrice = price > 100 && price <= 500
            break
          case '500-1000':
            matchesPrice = price > 500 && price <= 1000
            break
          case '1000+':
            matchesPrice = price > 1000
            break
        }
      }

      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort artworks
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt)
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt)
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'popular':
          return b.views - a.views
        default:
          return 0
      }
    })

    setFilteredArtworks(filtered)
  }, [searchTerm, selectedCategory, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Art Gallery</h1>
          <p className="text-gray-600">Discover amazing artworks from talented artists</p>
        </div>

        {/* Filters */}
        <GalleryFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* View Toggle and Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Artworks Grid/List */}
        {filteredArtworks.length > 0 ? (
          <div className={viewMode === 'grid' ? 
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : 
            "space-y-6"
          }>
            {filteredArtworks.map((artwork) => (
              viewMode === 'grid' ? (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ) : (
                <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-48 h-32 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{artwork.title}</h3>
                      <span className="text-lg font-bold text-blue-600">${artwork.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">by {artwork.artist}</p>
                    <p className="text-gray-500 text-sm mb-3">{artwork.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        {artwork.category}
                      </span>
                      <span className="text-xs text-gray-400">{artwork.views} views</span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Grid className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No artworks found</h3>
            <p className="text-gray-600">Try adjusting your search filters to find what you're looking for.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredArtworks.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Artworks
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
