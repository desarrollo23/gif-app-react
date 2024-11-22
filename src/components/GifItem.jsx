

export const GifItem = ( { title, url })  => {
    return(
        <div className="image">
            <img src={url} alt={title} className="image-card"/>
            <p>{ title }</p>
        </div>
    )
}