import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  User, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Calendar, 
  Edit3, 
  Settings,
  Award,
  TrendingUp
} from 'lucide-react'
import ArtworkCard from '../../components/common/ArtworkCard'

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Sample user data
  const user = {
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    joinDate: "January 2024",
    location: "Kathmandu, Nepal",
    bio: "Art enthusiast and collector with a passion for contemporary works",
    stats: {
      wishlistItems: 12,
      purchases: 5,
      totalSpent: 1250,
      profileViews: 89
    }
  }

  // Sample user's recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'wishlist',
      artwork: 'Abstract Sunset',
      artist: 'Jane Smith',
      date: '2 days ago',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      type: 'purchase',
      artwork: 'Mountain Reflection',
      artist: 'John Doe',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      type: 'view',
      artwork: 'Urban Dreams',
      artist: 'Alice Johnson',
      date: '3 days ago',
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=100&h=100&fit=crop'
    }
  ]

  // Sample recommended artworks
  const recommendations = [
    {
      id: 1,
      title: "Cosmic Flow",
      artist: "Emma Wilson",
      price: 320,
      imageUrl: "https://images.unsplash.com/photo-1558618046-fbd9c3abc5d6?w=400&h=300&fit=crop",
      description: "Dynamic abstract piece with cosmic themes",
      category: "Abstract",
      views: 156
    },
    {
      id: 2,
      title: "Serene Waters",
      artist: "Mark Taylor",
      price: 420,
      imageUrl: "https://images.unsplash.com/photo-1515278520751-9ba2d1b2cdf5?w=400&h=300&fit=crop",
      description: "Peaceful waterscape in soft blues",
      category: "Landscape",
      views: 203
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'purchases', label: 'Purchases', icon: ShoppingBag },
    { id: 'profile', label: 'Profile', icon: User }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
            </div>
            <Link to="/profile/edit" className="btn-secondary">
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </nav>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wishlist</span>
                    <span className="font-medium">{user.stats.wishlistItems}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchases</span>
                    <span className="font-medium">{user.stats.purchases}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Spent</span>
                    <span className="font-medium">${user.stats.totalSpent}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Heart className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Wishlist Items</p>
                        <p className="text-2xl font-bold text-gray-900">{user.stats.wishlistItems}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <ShoppingBag className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Purchases</p>
                        <p className="text-2xl font-bold text-gray-900">{user.stats.purchases}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Total Spent</p>
                        <p className="text-2xl font-bold text-gray-900">${user.stats.totalSpent}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Eye className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">Profile Views</p>
                        <p className="text-2xl font-bold text-gray-900">{user.stats.profileViews}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={activity.image}
                          alt={activity.artwork}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {activity.type === 'wishlist' && 'Added to wishlist: '}
                            {activity.type === 'purchase' && 'Purchased: '}
                            {activity.type === 'view' && 'Viewed: '}
                            {activity.artwork}
                          </p>
                          <p className="text-sm text-gray-600">by {activity.artist}</p>
                        </div>
                        <span className="text-sm text-gray-500">{activity.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended for You</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendations.map((artwork) => (
                      <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">My Wishlist</h2>
                  <Link to="/wishlist" className="text-blue-600 hover:text-blue-800">
                    View All
                  </Link>
                </div>
                <p className="text-gray-600">Your wishlist content will be displayed here...</p>
              </div>
            )}

            {activeTab === 'purchases' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Purchase History</h2>
                <p className="text-gray-600">Your purchase history will be displayed here...</p>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      className="input-field"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      className="input-field"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={user.location}
                      className="input-field"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={user.bio}
                      rows={3}
                      className="input-field"
                      readOnly
                    />
                  </div>
                  <button className="btn-primary">
                    Update Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
