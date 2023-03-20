import Product from "../components/Product";

const Products = ({products}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4  justify-items-center">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>{" "}
    </>
  );
};

export default Products;

export const getStaticProps = async () =>{
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  return {
    props:{
      products: data,
    }
  }
}
