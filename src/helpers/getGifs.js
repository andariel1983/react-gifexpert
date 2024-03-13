export const getGifs = async(category) => {
    const limite = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IERR8a9NlT1602g9DJvy0cvsIdE2rfTL&q=${ category }&limit=${ limite }`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}