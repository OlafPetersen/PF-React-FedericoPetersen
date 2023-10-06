import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

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
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descipcion: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <footer className='ItemFooter'>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
                </footer>
            </section>
        </article>
    )
}

export default ItemDetail;