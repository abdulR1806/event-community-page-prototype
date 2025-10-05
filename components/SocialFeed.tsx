
import React from 'react';
import type { SocialPost } from '../types';
import { YoutubeIcon, FacebookIcon, GoogleIcon, XIcon } from './Icons';

const platformIcons: { [key in SocialPost['platform']]: React.ReactNode } = {
    youtube: <YoutubeIcon className="w-5 h-5" />,
    facebook: <FacebookIcon className="w-5 h-5" />,
    google: <GoogleIcon className="w-5 h-5" />,
    x: <XIcon className="w-5 h-5" />,
};

const SocialPostCard: React.FC<{ post: SocialPost }> = ({ post }) => {
    return (
        <div className="bg-white border border-[#E0D6FF] rounded-2xl p-6 mb-6 break-inside-avoid shadow-md">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <img src={post.profileImage} alt={post.accountName} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-bold">{post.accountName}</p>
                        <p className="text-xs text-[#4A4A6A]">{post.followers} &bull; {post.time}</p>
                    </div>
                </div>
                <div className="text-[#4A4A6A]">{platformIcons[post.platform]}</div>
            </div>
            {post.text && <p className="text-sm my-4">{post.text}</p>}
            {post.image && (
                <div className="mt-4 rounded-lg overflow-hidden">
                    <img src={post.image} alt="Social post" className="w-full h-auto object-cover" />
                </div>
            )}
            {post.videoTitle && (
                <div className="mt-4">
                    <p className="font-semibold text-sm">{post.videoTitle}</p>
                    <p className="text-xs text-[#4A4A6A] mt-1">{post.videoViews}</p>
                </div>
            )}
        </div>
    );
};

interface SocialFeedProps {
    posts: SocialPost[];
}

export const SocialFeed: React.FC<SocialFeedProps> = ({ posts }) => {
    return (
        <section className="py-24 bg-[#F0F0F5]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Embedded Social Media Widget</h2>
                <div className="max-w-6xl mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                        {posts.map((post, index) => (
                            <SocialPostCard key={index} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};