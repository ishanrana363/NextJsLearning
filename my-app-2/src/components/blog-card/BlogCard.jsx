import Link from 'next/link';
import React from 'react'

const BlogCard = ({ blogData }) => {
    const { title, description, author, date, image,id } = blogData;
    return (
        <div>
            <div>
                <div className="card bg-base-100 p-4 border  shadow-xl">
                    <figure>
                        <img
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {
                                title.slice(0, 10)
                            }..
                        </h2>
                        <p>{title.slice(0, 25)}....</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">
                                <Link href={`/blog/${id}`}>Blog details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
