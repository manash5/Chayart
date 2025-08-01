import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import AdminArtworkCard from '../../components/admin/AdminArtworkCard'
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Eye, 
  DollarSign,
  Search,
  Filter,
  MoreVertical
} from 'lucide-react'

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Sample analytics data
  const stats = {
    totalArtworks: 156,
    totalSales: 23450,
    totalUsers: 1234,
    totalViews: 45678,
    monthlyGrowth: {
      artworks: 12,
      sales: 8.5,
      users: 15.2,
      views: 23.1
    }
  }

  // Sample recent artworks
  const recentArtworks = [
    {
      id: 1,
      title: "Abstract Sunset",
      artist: "Jane Smith",
      price: 299,
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      status: "published",
      views: 245,
      createdAt: "2024-01-20T10:30:00Z"
    },
    {
      id: 2,
      title: "Mountain Reflection",
      artist: "John Doe",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      status: "draft",
      views: 189,
      createdAt: "2024-01-19T14:15:00Z"
    },
    {
      id: 3,
      title: "Urban Dreams",
      artist: "Alice Johnson",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop",
      status: "published",
      views: 312,
      createdAt: "2024-01-18T09:45:00Z"
    },
    {
      id: 4,
      title: "Portrait of Grace",
      artist: "Michael Brown",
      price: 600,
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      status: "published",
      views: 167,
      createdAt: "2024-01-17T16:20:00Z"
    }
  ]

  const handleDeleteArtwork = (id) => {
    console.log('Deleting artwork:', id)
    // Here you would make an API call to delete the artwork
  }

  const filteredArtworks = recentArtworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || artwork.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your gallery.</p>
            </div>
            <Link to="/admin/add-artwork" className="btn-primary">
              <Plus className="h-5 w-5 mr-2" />
              Add New Artwork
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Artworks</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalArtworks}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+{stats.monthlyGrowth.artworks}% from last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalSales.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+{stats.monthlyGrowth.sales}% from last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+{stats.monthlyGrowth.users}% from last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+{stats.monthlyGrowth.views}% from last month</span>
            </div>
          </div>
        </div>

        {/* Recent Artworks */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Artworks</h2>
            <Link to="/admin/artworks" className="text-blue-600 hover:text-blue-800 font-medium">
              View All
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search artworks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
              <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-lg">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map((artwork) => (
              <AdminArtworkCard
                key={artwork.id}
                artwork={artwork}
                onDelete={handleDeleteArtwork}
              />
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-4">
                <Eye className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No artworks found</h3>
              <p className="text-gray-600">Try adjusting your search filters.</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/admin/add-artwork" className="block w-full btn-primary text-center">
                Add New Artwork
              </Link>
              <Link to="/admin/users" className="block w-full btn-secondary text-center">
                Manage Users
              </Link>
              <Link to="/admin/analytics" className="block w-full btn-secondary text-center">
                View Analytics
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">New user registered</span>
                <span className="text-gray-500">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Artwork sold</span>
                <span className="text-gray-500">4 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">New artwork added</span>
                <span className="text-gray-500">6 hours ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Server Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Database</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Storage</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">75% Used</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
