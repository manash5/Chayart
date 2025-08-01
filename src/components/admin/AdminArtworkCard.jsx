import React from 'react'
import { Link } from 'react-router-dom'
import { Edit, Trash2, Eye, Calendar } from 'lucide-react'

const AdminArtworkCard = ({ artwork, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this artwork?')) {
      onDelete(artwork.id)
    }
  }

  return (
    <div className="card">
      <div className="relative">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            artwork.status === 'published' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {artwork.status}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {artwork.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">by {artwork.artist}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(artwork.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>{artwork.views} views</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ${artwork.price}
          </span>
          <div className="flex space-x-2">
            <Link
              to={`/admin/edit-artwork/${artwork.id}`}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Edit className="h-4 w-4" />
            </Link>
            <button
              onClick={handleDelete}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminArtworkCard
