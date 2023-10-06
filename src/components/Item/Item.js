import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <image src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock Dispnible: {stock}
                </p>
                <footer className='ItemFooter'>
                    <button className='Option'>Ver detalle</button>
                </footer>
            </section>
        </article>
    )
}

export default Item;