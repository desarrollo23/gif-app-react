
import { GifItem } from './';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const Category = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    

    return (
        <>
            <h2>{ category }</h2>

            <div className='grid-wrapper'>
                { images.map( image => (
                    <GifItem  
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
        
    )
}