/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/pokemon',
                destination: 'http://v8jy4k51p4.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
            },
            {
                source: '/api/pokemon/:id',
                destination: 'http://v8jy4k51p4.execute-api.eu-west-2.amazonaws.com/Prod/pokemon/:id',
            },
        ];
    }
 };
 
 
 export default nextConfig;