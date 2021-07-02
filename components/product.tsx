import {withRouter} from 'next/router'
import RouterProps from 'next/router'
import Image from 'next/image'

import productDB from '../public/products.json'

export interface IProduct {
  id: string
  name: string
  price: number
  url: string  
  description: string
  image: string
}
interface IProductProps {
  product: IProduct
  router: typeof RouterProps
}
const Product = (props: IProductProps) => {
  return (
    <div className="product-container">
      <div className="product">
        <h2 className="product__title">{props.product.name}</h2>
        <p className="product__description">{props.product.description}</p>

        <Image 
          src={"/" + props.product.image} 
          alt={props.product.name} 
          className="product__image"
          // layout='fill'

          layout="responsive"
          objectFit='contain'

          width='200'
          height='200'

          // placeholder="blur"
        />
        
        
        <div className="product__price-button-container">
          <div className="product__price">${props.product.price.toFixed(2)}</div>
          <button 
            className="snipcart-add-item product__button"
            data-item-id={props.product.id}
            data-item-name={props.product.name}
            data-item-price={props.product.price}
            data-item-url={productDB.products} 
            data-item-image={props.product.image}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
    
  )
}
export default withRouter(Product)