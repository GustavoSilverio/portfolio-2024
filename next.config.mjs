/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        allowMiddlewareResponseBody: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/dibhgoygm/image/upload/**"
            }
        ]
    },
};

export default nextConfig;
