import './style.css'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

function About_product() {
    const [products, setProducts] = useState([]);
    const [founds, setFounds] = useState(null);
    const [active, setActive] = useState(0);
    const [color,setColor] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetch('https://strapi-store-server.onrender.com/api/products', {
          method: 'GET'
        })
        .then(res => res.json())
        .then((data) => {
          setProducts(data.data)
          const found = data.data.find(product => product.id == id);
          setFounds(found);
        })
        .catch(error => {
          console.error(error);
        });
      }, []);
console.log(products);

function handleChangeColor(color,index) {
    setColor(color);
    setActive(index);
}

  return (
    <>
    <div className="container">
          {founds && (
               <div key={founds.id} className="information">
               <img src={founds.attributes.image} alt=""/>
               <div className="data">
                   <h1 className='text-xl'>{founds.attributes.title}</h1>
                   <h6 className='text-xl'>{founds.attributes.company}</h6>
                   <h5 className='text-xl'>{founds.attributes.price}</h5>
                   <p>{founds.attributes.description}</p>
                   <div className="colors_div">
                       <p>Colors</p>
                       <div className="colors">
                        {founds.attributes.colors.map((color,index) => (
                            <div key={index} onClick={() => handleChangeColor(color,index)} className="color " style={{border: index == active ? '2px solid #bf95f9': 'none', backgroundColor: color}}></div>
                        ))}
                       </div>
                   </div>
                   <span>Amount</span>
                   <select className="form-select" aria-label="Default select example">
                       <option defaultValue={1}>1</option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                       <option value="11">11</option>
                       <option value="12">12</option>
                       <option value="13">13</option>
                       <option value="14">14</option>
                       <option value="15">15</option>
                       <option value="16">16</option>
                       <option value="17">17</option>
                       <option value="18">18</option>
                       <option value="19">19</option>
                       <option value="20">20</option>
                   </select>
                   <button className="btn">ADD TO BAG</button>
               </div>
           </div>
          )}
    </div>
    </>
  )
}

export default About_product