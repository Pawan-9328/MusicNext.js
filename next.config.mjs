/** @type {import('next').NextConfig} */
// here we mentioned image docs path: to reduce the next.js error
const nextConfig = {
     images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
     }
};

export default nextConfig;
