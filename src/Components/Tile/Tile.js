function Tile({img, imgAlt, Title, children}){
    return(
        <section>
            {img && <img src={img} alt={imgAlt}/>}
            { Title && <h2>{Title}</h2>}
            {children}
        </section>
    )
}
export default Tile;