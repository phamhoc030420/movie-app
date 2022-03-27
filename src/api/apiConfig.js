const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ea4de8b18024bef486c8afed740e0bfb',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
}
export default apiConfig;