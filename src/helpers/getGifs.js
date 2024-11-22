export const getGifsByCategory = async ( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=1PdxggWtVC6iVoFWloxwEfzZIbztAY84&q=${category}&limit=${5}`;
    const response = await fetch(URL);
    const { data } = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}