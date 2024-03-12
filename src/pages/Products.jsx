import './style.css';
import '../App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products', {
      method: 'GET'
    })
    .then(res => res.json())
    .then((data) => {
      setProducts(data.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  console.log(products);

  function handleClick(dataId) {
    navigate(`/about_product/${dataId}`)
  }

  return (
    <div className="container">
      <div className="featured_products">
        <hr />
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product" onClick={() => handleClick(product.id)}>
              <img src={product.attributes.image} alt={product.attributes.title} />
              <div className="info">
                <h2>{product.attributes.title}</h2>
                <p>${product.attributes.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
