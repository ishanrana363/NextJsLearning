import BlogCard from '@/components/blog-card/BlogCard'
import React from 'react'

const Blog = () => {
    const blog = [
        {
            "id": 1,
            "title": "The Future of Web Development",
            "description": "Exploring the latest trends and technologies shaping the web.",
            "author": "John Doe",
            "date": "2025-02-03",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 2,
            "title": "Next.js vs React: Which One to Choose?",
            "description": "A deep dive into Next.js and React, comparing performance and features.",
            "author": "Jane Smith",
            "date": "2025-01-28",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 3,
            "title": "How to Optimize SEO for Your Blog",
            "description": "Learn essential SEO techniques to increase your blog's visibility.",
            "author": "Alice Johnson",
            "date": "2025-01-15",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 4,
            "title": "The Rise of AI in Content Creation",
            "description": "How artificial intelligence is transforming the blogging industry.",
            "author": "Michael Lee",
            "date": "2025-01-10",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 5,
            "title": "10 Must-Have Tools for Bloggers",
            "description": "A list of essential tools every blogger should use for efficiency.",
            "author": "Emily Brown",
            "date": "2024-12-30",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 6,
            "title": "Content Marketing Strategies That Work",
            "description": "How to create content that drives traffic and engagement.",
            "author": "Chris Wilson",
            "date": "2024-12-20",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 7,
            "title": "WordPress vs Ghost: Which Blogging Platform is Better?",
            "description": "A comparison of WordPress and Ghost for content creators.",
            "author": "Sarah Martinez",
            "date": "2024-12-10",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 8,
            "title": "Monetizing Your Blog: A Beginner’s Guide",
            "description": "Ways to make money from blogging and grow your audience.",
            "author": "Daniel Carter",
            "date": "2024-11-25",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 9,
            "title": "The Importance of UX/UI in Blogging",
            "description": "How user experience and design impact reader engagement.",
            "author": "Jessica Adams",
            "date": "2024-11-15",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        },
        {
            "id": 10,
            "title": "How to Write Viral Blog Posts",
            "description": "Tips and tricks to create blog posts that get shared widely.",
            "author": "Mark Robinson",
            "date": "2024-11-05",
            "image": "https://res.cloudinary.com/dj2edy2rg/image/upload/v1738595989/blgo_km1yym.png"
        }
    ]

    return (
        <div>
            <h1>Blog page</h1>
            <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-3  ' >
                {
                    blog.map((item, i) => {
                        return (
                            <div key={i} >
                                <BlogCard blogData={item} ></BlogCard>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog
/*  */