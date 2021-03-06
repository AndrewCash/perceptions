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
    <div className="product">
      <h2 className="product__title">{props.product.name}</h2>
      <p className="product__description">{props.product.description}</p>

      <div className="product__image">
        {/* <img src="../public/images/Dead_Denim.webp" alt=''></img> */}
        <Image 
          src={"/" + props.product.image} 
          alt={props.product.name} 
          className="product__image"
          

          // layout="responsive"
          // objectFit='contain'

          width='500px'
          height='650px'
          // layout='fill'

          // placeholder="blur"
        />
      </div>
      
      
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
    
  )
}
export default withRouter(Product)