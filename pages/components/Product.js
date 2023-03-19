
const Product = ({product}) => {
  return (
    <>
      <div>
        <div className="card w-96 h-[38rem] glass">
          <figure>
            <img src={product.images[0]} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.description}</h2>
            <p>{product.title}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">
                {" "}
                Price: ${product.price}
              </button>
              <button className="btn btn-primary">Buy now!</button>
            </div>
          </div>
        </div>

        {/* <img src={product.image} className="h-48 w-48" alt="product-img" />
      <p>{product.title}</p> */}
      </div>
    </>
  );
};

export default Product;
