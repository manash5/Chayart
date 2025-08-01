import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { Upload, X, ArrowLeft, Save, Eye } from 'lucide-react'

const AddArtwork = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    description: '',
    category: '',
    medium: '',
    dimensions: '',
    price: '',
    tags: '',
    status: 'draft'
  })
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const categories = [
    'Abstract',
    'Landscape',
    'Portrait',
    'Still Life',
    'Digital Art',
    'Photography',
    'Sculpture',
    'Mixed Media'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          setImages(prev => [...prev, {
            id: Date.now() + Math.random(),
            file,
            url: event.target.result,
            name: file.name
          }])
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.artist.trim()) newErrors.artist = 'Artist name is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.price || formData.price <= 0) newErrors.price = 'Valid price is required'
    if (images.length === 0) newErrors.images = 'At least one image is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Artwork data:', { ...formData, images })
      setIsLoading(false)
      
      // Show success message and redirect
      alert('Artwork added successfully!')
      navigate('/admin')
    }, 2000)
  }

  const handleSaveAsDraft = () => {
    setFormData(prev => ({ ...prev, status: 'draft' }))
    handleSubmit(new Event('submit'))
  }

  const handlePublish = () => {
    setFormData(prev => ({ ...prev, status: 'published' }))
    handleSubmit(new Event('submit'))
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/admin" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Artwork</h1>
          <p className="text-gray-600 mt-1">Fill in the details below to add a new artwork to the gallery.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Artwork Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className={`input-field ${errors.title ? 'border-red-500' : ''}`}
                      placeholder="Enter artwork title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Artist Name *
                    </label>
                    <input
                      type="text"
                      name="artist"
                      value={formData.artist}
                      onChange={handleInputChange}
                      className={`input-field ${errors.artist ? 'border-red-500' : ''}`}
                      placeholder="Enter artist name"
                    />
                    {errors.artist && <p className="text-red-500 text-sm mt-1">{errors.artist}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className={`input-field ${errors.description ? 'border-red-500' : ''}`}
                      placeholder="Describe the artwork..."
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={`input-field ${errors.category ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price (USD) *
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                        className={`input-field ${errors.price ? 'border-red-500' : ''}`}
                        placeholder="0.00"
                      />
                      {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Medium
                    </label>
                    <input
                      type="text"
                      name="medium"
                      value={formData.medium}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., Oil on canvas, Digital, Acrylic..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dimensions
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., 24 x 36, 61cm x 91cm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Separate tags with commas (e.g., modern, colorful, abstract)"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Tags help users discover your artwork through search
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Images *</h2>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <label className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-800 font-medium">
                          Upload images
                        </span>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="text-gray-500 text-sm">
                        or drag and drop files here
                      </p>
                      <p className="text-gray-400 text-xs">
                        PNG, JPG, GIF up to 10MB each
                      </p>
                    </div>
                  </div>

                  {errors.images && <p className="text-red-500 text-sm">{errors.images}</p>}

                  {/* Image Preview */}
                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image) => (
                        <div key={image.id} className="relative group">
                          <img
                            src={image.url}
                            alt={image.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          <p className="text-xs text-gray-500 mt-1 truncate">{image.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleSaveAsDraft}
                    disabled={isLoading}
                    className="w-full btn-secondary"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? 'Saving...' : 'Save as Draft'}
                  </button>
                  <button
                    type="button"
                    onClick={handlePublish}
                    disabled={isLoading}
                    className="w-full btn-primary"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {isLoading ? 'Publishing...' : 'Publish Artwork'}
                  </button>
                </div>
              </div>

              {/* Publishing Options */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Status</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="draft"
                      checked={formData.status === 'draft'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Save as Draft
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="published"
                      checked={formData.status === 'published'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Publish Immediately
                    </span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Published artworks will be visible to all users
                </p>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Tips for Better Listings</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use high-quality, well-lit images</li>
                  <li>• Write detailed, engaging descriptions</li>
                  <li>• Include accurate dimensions and materials</li>
                  <li>• Add relevant tags for better discovery</li>
                  <li>• Price competitively for your market</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddArtwork
