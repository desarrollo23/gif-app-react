import { useEffect, useState } from "react";
import { getGifsByCategory } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifsByCategory(category);
        setImages( newImages );
        setIsloading(false);
    }

    useEffect( () => {
        setIsloading(true);
        getImages();
    }, [ ]);

    return {
        images,
        isLoading
    }
}