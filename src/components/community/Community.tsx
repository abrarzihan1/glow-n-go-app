import { SetStateAction, useState} from "react";
import {
    Heart,
    MessageCircle,
    Share2,
    BookOpen,
    MapPin,
    ShoppingBag,
    Users,
    Home,
    Search,
    Filter,
    MoreVertical,
    ChevronLeft
} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function Community() {
    // States
    const [activeTab, setActiveTab] = useState("All");
    const [showComments, setShowComments] = useState(null);

    // Demo data
    const tabs = ["All", "Before/After", "Tips", "Questions"];
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const posts = [
        {
            id: 1,
            user: {
                name: "Jessica T.",
                username: "@jess_glow",
                avatar: "/images/woman1.jpg",
                followers: "2.3k"
            },
            content: "Just tried the 5-minute makeup kiosk at Downtown Center! Perfect for my lunch break touch-up ✨",
            images: ["/images/linh-ha-nt6KRD9im7A-unsplash.jpg"],
            timeAgo: "35m",
            likes: 42,
            comments: [
                {
                    id: 101,
                    user: {
                        name: "Michelle",
                        avatar: "/images/profile.png",
                        verified: false
                    },
                    content: "Looks amazing! Which products did you use?",
                    timeAgo: "15m"
                },
                {
                    id: 102,
                    user: {
                        name: "Glow 'n Go",
                        avatar: "public/logo.jpg",
                        verified: true
                    },
                    content: "You look fabulous, Jessica! The Downtown kiosk has our newest foundation line.",
                    timeAgo: "10m"
                }
            ],
            shares: 5,
            location: "Downtown Center",
            type: "Before/After"
        },
        {
            id: 2,
            user: {
                name: "Beauty Pro Ava",
                username: "@ava_mua",
                avatar: "/images/profile.png",
                followers: "12.5k",
                verified: true
            },
            content: "💡 Quick Tip: When using our self-service kiosks, start with the face primer for longer-lasting makeup. Here's my 3-step process:",
            listItems: [
                "Apply primer and let it set for 30 seconds",
                "Use foundation sparingly - our kiosk dispensers are precise!",
                "Finish with setting spray for all-day wear"
            ],
            timeAgo: "2h",
            likes: 215,
            comments: [
                {
                    id: 201,
                    user: {
                        name: "Sarah",
                        avatar: "/images/profile.png",
                        verified: false
                    },
                    content: "This is so helpful! Would you recommend the matte or dewy finish?",
                    timeAgo: "1h"
                }
            ],
            shares: 57,
            type: "Tips"
        },
        {
            id: 3,
            user: {
                name: "Mark J.",
                username: "@mark_j",
                avatar: "/images/profile.png",
                followers: "456"
            },
            content: "Question for the community: How do you clean your face before using the kiosks? I want to ensure I'm getting the best results.",
            timeAgo: "5h",
            likes: 18,
            comments: [
                {
                    id: 301,
                    user: {
                        name: "Skincare Expert",
                        avatar: "/images/profile.png",
                        verified: true
                    },
                    content: "Great question! Try using the complimentary cleansing wipes available at each kiosk stand.",
                    timeAgo: "4h"
                }
            ],
            shares: 2,
            type: "Questions"
        }
    ];

    // Toggle comments display for a post
    const toggleComments = (postId: number | SetStateAction<null>) => {
        if (showComments === postId) {
            setShowComments(null);
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setShowComments(postId);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-pink-50 text-gray-800">
            {/* Header */}
            <div className="bg-white pt-12 pb-2 px-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <ChevronLeft size={24} className="text-gray-700" />
                        <h1 className="font-bold text-xl ml-2">Community</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Search size={22} className="text-gray-700" />
                        <Filter size={22} className="text-gray-700" />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-2 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap ${
                                activeTab === tab
                                    ? "bg-pink-500 text-white"
                                    : "bg-white border border-gray-200 text-gray-700"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto pb-20">
                {/* Posts Feed */}
                <div className="space-y-4 p-4">
                    {posts
                        .filter(post => activeTab === "All" || post.type === activeTab)
                        .map(post => (
                            <div key={post.id} className="bg-white rounded-xl shadow-sm">
                                {/* Post Header */}
                                <div className="p-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={post.user.avatar}
                                            className="w-10 h-10 rounded-full"
                                            alt={post.user.name}
                                        />
                                        <div className="ml-3">
                                            <div className="flex items-center">
                                                <h3 className="font-semibold text-sm">{post.user.name}</h3>
                                                {post.user.verified && (
                                                    <span className="ml-1 text-pink-500">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500">{post.user.username} • {post.timeAgo}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <MoreVertical size={18} className="text-gray-500" />
                                    </div>
                                </div>

                                {/* Post Content */}
                                <div className="px-4">
                                    <p className="text-sm mb-3">{post.content}</p>

                                    {/* List Items */}
                                    {post.listItems && (
                                        <ul className="list-disc pl-5 mb-3">
                                            {post.listItems.map((item, index) => (
                                                <li key={index} className="text-sm mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Images */}
                                    {post.images && post.images.length > 0 && (
                                        <div className="mb-3">
                                            {post.images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    className="w-full rounded-lg"
                                                    alt={`Post by ${post.user.name}`}
                                                    style={{ maxHeight: 400, width: 'auto' }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Location Tag */}
                                    {post.location && (
                                        <div className="flex items-center mb-3">
                                            <MapPin size={14} className="text-pink-500" />
                                            <span className="text-xs text-pink-500 ml-1">{post.location}</span>
                                        </div>
                                    )}

                                    {/* Post Type Tag */}
                                    <div className="mb-3">
                    <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                      {post.type}
                    </span>
                                    </div>
                                </div>

                                {/* Post Actions */}
                                <div className="px-4 py-3 border-t border-gray-100">
                                    <div className="flex justify-between">
                                        <button className="flex items-center text-gray-600">
                                            <Heart size={18} className={post.likes ? "text-red-500 fill-current" : ""} />
                                            <span className="text-xs ml-1">{post.likes}</span>
                                        </button>
                                        <button
                                            className="flex items-center text-gray-600"
                                            onClick={() => toggleComments(post.id)}
                                        >
                                            <MessageCircle size={18} />
                                            <span className="text-xs ml-1">{post.comments.length}</span>
                                        </button>
                                        <button className="flex items-center text-gray-600">
                                            <Share2 size={18} />
                                            <span className="text-xs ml-1">{post.shares}</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Comments Section */}
                                {showComments === post.id && (
                                    <div className="px-4 py-3 bg-gray-50 rounded-b-xl">
                                        <div className="space-y-3">
                                            {post.comments.map(comment => (
                                                <div key={comment.id} className="flex">
                                                    <img
                                                        src={comment.user.avatar}
                                                        className="w-8 h-8 rounded-full"
                                                        alt={comment.user.name}
                                                    />
                                                    <div className="ml-2 flex-1">
                                                        <div className="bg-white p-2 rounded-lg">
                                                            <div className="flex items-center">
                                                                <p className="text-xs font-semibold">{comment.user.name}</p>
                                                                {comment.user.verified && (
                                                                    <span className="ml-1 text-pink-500">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </span>
                                                                )}
                                                            </div>
                                                            <p className="text-xs">{comment.content}</p>
                                                        </div>
                                                        <div className="flex items-center mt-1 space-x-3">
                                                            <p className="text-xs text-gray-500">{comment.timeAgo}</p>
                                                            <p className="text-xs text-gray-500">Like</p>
                                                            <p className="text-xs text-gray-500">Reply</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Add Comment */}
                                        <div className="flex items-center mt-3">
                                            <img
                                                src="/api/placeholder/30/30"
                                                className="w-8 h-8 rounded-full"
                                                alt="Your avatar"
                                            />
                                            <div className="flex-1 ml-2 bg-white rounded-full border border-gray-200">
                                                <input
                                                    type="text"
                                                    placeholder="Add a comment..."
                                                    className="w-full py-2 px-4 text-sm bg-transparent rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>

            {/* Floating Action Button - Create Post */}
            <div className="fixed bottom-20 right-6">
                <button className="w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-6">
                <div
                    onClick={handleClick}
                    className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200"
                >
                    <Home size={24} className="mb-1"/>
                    <span className="text-xs">Home</span>
                </div>

                <div
                    className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200">
                    <MapPin size={24} className="mb-1"/>
                    <span className="text-xs">Map</span>
                </div>

                <div className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200">
                    <ShoppingBag size={24} className="mb-1" />
                    <span className="text-xs">Shop</span>
                </div>

                <div className="flex flex-col items-center text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200">
                    <BookOpen size={24} className="mb-1" />
                    <span className="text-xs">Tutorials</span>
                </div>

                <div className="flex flex-col items-center text-pink-600">
                    <Users size={24} className="mb-1" />
                    <span className="text-xs">Community</span>
                </div>
            </div>
        </div>
    );
}