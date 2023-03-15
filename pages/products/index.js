
const Products = ({products}) => {

  return (
    <div>
 <h1>Category {products.category}</h1>
 {

 }
    </div>
  );
};

export default Products;

export const getStaticProps = async () =>{
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props:{
      products: data
    }
  }
}
