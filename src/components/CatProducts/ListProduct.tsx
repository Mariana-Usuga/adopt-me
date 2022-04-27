interface CatProducts {
  id?:number
  name: string
}

interface Props {
  products:CatProducts[]
}

const ListProduct = ({ products }:Props) => (
  <div className="container">
    <ul className="container__dog">
      {products.map((product) => (
        <li className="container__dog__item">{product.name}</li>
      ))}
    </ul>
  </div>
);

export default ListProduct;
