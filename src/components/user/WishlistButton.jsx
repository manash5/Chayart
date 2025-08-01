import React, { useState } from 'react'
import { Heart } from 'lucide-react'

const WishlistButton = ({ artworkId, initialWishlisted = false }) => {
  const [isWishlisted, setIsWishlisted] = useState(initialWishlisted)

  const handleToggleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
    // Here you would make an API call to add/remove from wishlist
    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist: ${artworkId}`)
  }

  return (
    <button
      onClick={handleToggleWishlist}
      className={`p-2 rounded-full transition-colors ${
        isWishlisted
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-white text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Heart 
        className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} 
      />
    </button>
  )
}

export default WishlistButton
