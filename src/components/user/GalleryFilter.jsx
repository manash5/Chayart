import React from 'react'
import { Search, Filter } from 'lucide-react'

const GalleryFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy 
}) => {
  const categories = [
    'All',
    'Painting',
    'Digital Art',
    'Photography',
    'Sculpture',
    'Abstract',
    'Portrait',
    'Landscape'
  ]

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filter & Search</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search artworks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="input-field"
          >
            <option value="all">All Prices</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000+">$1000+</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default GalleryFilter
