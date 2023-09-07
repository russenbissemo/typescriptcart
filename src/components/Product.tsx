import { ProductType } from "../context/ProductsProvider"
import { reducerActionType, ReducerAction} from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
    product : ProductType, 
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: reducerActionType,
    inCart: boolean, 
}

const Product = ({product, dispacth, REDUCER_ACTIONS, inCart}: PropsType): ReactElement => {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => {
        
    }
  return (
    <div>Product</div>
  )
}

export default Product