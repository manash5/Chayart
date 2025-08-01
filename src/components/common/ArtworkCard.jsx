import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Eye } from 'lucide-react'
import WishlistButton from '../user/WishlistButton'

const ArtworkCard = ({ artwork, showWishlist = true }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <Link
              to={`/artwork/${artwork.id}`}
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Eye className="h-5 w-5" />
            </Link>
            {showWishlist && <WishlistButton artworkId={artwork.id} />}
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            ${artwork.price}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1 truncate">
          {artwork.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">by {artwork.artist}</p>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {artwork.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
            {artwork.category}
          </span>
          <div className="flex items-center space-x-1 text-gray-400">
            <Eye className="h-4 w-4" />
            <span className="text-xs">{artwork.views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtworkCard
