/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"], // Allow Cloudinary images
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/dj2edy2rg/image/upload/**", // Your specific Cloudinary folder
            },
        ],
    },
};
export default  nextConfig;
