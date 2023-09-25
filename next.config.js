/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.themoviedb.org' ,'image.tmdb.org' ,'cdn.pixabay.com' , 'lh3.googleusercontent.com'], 
    minimumCacheTTL: 60
  }
}

module.exports = nextConfig
