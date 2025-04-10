import { useState } from 'react';
import { Calendar, Clock, MapPin, Star, BookOpen, ShoppingBag, Users } from 'lucide-react';
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const [activeCategory, setActiveCategory] = useState('All');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/community');
    };

    const categories = ['All', 'Makeup', 'Hair', 'Skincare'];
    const nearbyKiosks = [
        {
            id: 1,
            name: 'Downtown Center',
            location: 'City Center Mall, 2nd Floor',
            distance: '0.3 mi',
            rating: 4.8,
            reviews: 124,
            available: true,
            image: '/images/downtown.jpg'
        },
        {
            id: 2,
            name: 'Fitness Hub',
            location: 'Elite Gym, Wellness Area',
            distance: '1.2 mi',
            rating: 4.6,
            reviews: 89,
            available: true,
            image: '/images/fitness.jpg'
        }
    ];

    const upcomingBookings = [
        {
            id: 101,
            service: 'Quick Makeup Refresh',
            location: 'Downtown Center',
            date: 'Today',
            time: '3:30 PM',
            image: '/images/makeup_refresh.jpg'
        }
    ];

    const beautyTips = [
        {
            id: 201,
            title: '5-Minute Office Makeup Touch-up',
            views: '2.4k',
            image: '/images/makeup_5_minutes.jpg'
        },
        {
            id: 202,
            title: 'Quick Hair Fixes for Busy Days',
            views: '1.8k',
            image: '/images/makeup_refresh.jpg'
        }
    ];

    return (
        <div className="flex flex-col h-screen bg-pink-50 text-gray-800">
            {/* Status Bar */}
            <div className="bg-white pt-12 pb-4 px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center">
                            <span className="text-pink-700 font-bold">GG</span>
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-500 text-sm">Hello there!</p>
                            <p className="font-bold text-lg">Glow 'n Go</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                            {/*<bell className="text-pink-700" size={18} />*/}
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mt-4 relative">
                    <input
                        type="text"
                        placeholder="Find kiosks, services..."
                        className="w-full py-3 px-4 pr-12 rounded-xl bg-gray-100 text-gray-700"
                    />
                    <div className="absolute right-4 top-3">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 16l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="px-6 py-4">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap ${
                                activeCategory === category
                                    ? 'bg-pink-500 text-white'
                                    : 'bg-white text-gray-700'
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 pb-20">
                {/* Book Now Button */}
                <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl p-4 mb-6 flex justify-between items-center">
                    <div className="text-white">
                        <h3 className="font-bold text-lg">Ready for a quick glow up?</h3>
                        <p className="text-sm text-pink-100">Book a kiosk near you in seconds</p>
                    </div>
                    <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded-lg">
                        Book Now
                    </button>
                </div>

                {/* Nearby Kiosks */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="font-bold text-lg flex items-center">
                            <MapPin size={18} className="mr-2 text-pink-500" />
                            Nearby Kiosks
                        </h2>
                        <span className="text-pink-500 text-sm">See all</span>
                    </div>

                    <div className="space-y-4">
                        {nearbyKiosks.map(kiosk => (
                            <div key={kiosk.id} className="bg-white rounded-xl p-4 flex shadow-sm">
                                <img src={kiosk.image} className="w-20 h-20 rounded-lg object-cover" alt={kiosk.name} />
                                <div className="ml-4 flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold">{kiosk.name}</h3>
                                        <span className="text-sm text-gray-500">{kiosk.distance}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{kiosk.location}</p>
                                    <div className="flex items-center">
                                        <Star size={14} className="text-yellow-500 fill-current" />
                                        <span className="text-sm ml-1">{kiosk.rating}</span>
                                        <span className="text-xs text-gray-500 ml-1">({kiosk.reviews})</span>
                                        <span className="ml-auto text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                      {kiosk.available ? 'Available Now' : 'Closed'}
                    </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Bookings */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="font-bold text-lg flex items-center">
                            <Calendar size={18} className="mr-2 text-pink-500" />
                            Your Bookings
                        </h2>
                        <span className="text-pink-500 text-sm">History</span>
                    </div>

                    {upcomingBookings.length > 0 ? (
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            {upcomingBookings.map(booking => (
                                <div key={booking.id} className="flex items-center">
                                    <img src={booking.image} className="w-12 h-12 rounded-lg object-cover" alt={booking.service} />
                                    <div className="ml-3 flex-1">
                                        <h4 className="font-semibold">{booking.service}</h4>
                                        <p className="text-sm text-gray-600">{booking.location}</p>
                                        <div className="flex items-center text-xs text-gray-500 mt-1">
                                            <Clock size={12} className="mr-1" />
                                            {booking.date}, {booking.time}
                                        </div>
                                    </div>
                                    <button className="bg-pink-100 text-pink-600 text-sm py-1 px-3 rounded-lg">
                                        View
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                            <p className="text-gray-500">No upcoming bookings</p>
                            <button className="mt-2 text-sm text-pink-500">Book a session</button>
                        </div>
                    )}
                </div>

                {/* Beauty Tips & Tutorials */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="font-bold text-lg flex items-center">
                            <BookOpen size={18} className="mr-2 text-pink-500" />
                            Beauty Tips
                        </h2>
                        <span className="text-pink-500 text-sm">See all</span>
                    </div>

                    <div className="flex space-x-3 overflow-x-auto pb-2">
                        {beautyTips.map(tip => (
                            <div key={tip.id} className="bg-white rounded-xl shadow-sm min-w-40">
                                <img src={tip.image} className="w-full h-24 rounded-t-xl object-cover" alt={tip.title} />
                                <div className="p-3">
                                    <h4 className="font-medium text-sm">{tip.title}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{tip.views} views</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-6">
                <div className="flex flex-col items-center text-pink-600">
                    <div className="w-6 h-6 mb-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="text-xs">Home</span>
                </div>

                <div className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200">
                    <MapPin size={24} className="mb-1"/>
                    <span className="text-xs">Map</span>
                </div>

                <div className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200">
                    <ShoppingBag size={24} className="mb-1"/>
                    <span className="text-xs">Shop</span>
                </div>

                <div className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200">
                    <BookOpen size={24} className="mb-1"/>
                    <span className="text-xs">Tutorials</span>
                </div>

                <div
                    onClick={handleClick}
                    className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200"
                >
                    <Users size={24} className="mb-1"/>
                    <span className="text-xs">Community</span>
                </div>
            </div>
        </div>
    );
}