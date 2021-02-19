// const getImagePromise = () => new Promise( (resolve) => resolve('https://jdkasjdkajdka.com'));
// getImagePromise().then( console.log );

const getImage = async () => {
    try {
        const apiKey = '8ghzCIKOoxCuqerFzlUCD1PF3136sdGY';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
        console.log( data );
    } catch (err) {
        console.error(err.message);
    }
    
}

getImage();
