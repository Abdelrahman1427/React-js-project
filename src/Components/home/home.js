import React, { useState ,useEffect } from 'react';
import './home.css';
function Home() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
        }, []);

    //   const [users, setUsers] = useState([])
    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setProducts(json));

    };
    

    return (  
        <div className="body">
        <h2 className='header'>Shop List</h2>
        {products.map((product) => {
            console.log(product);
        return( 
            // width: 18rem;
        <div className="card m-2">
            <img src={product.image} className ="card-img img rounded mx-auto my-3 d-block " alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-primary">{product.category}</h5>
                <p className="card-text overflow">{product.description}</p>
                <p className="price text-danger ">{product.price} $</p>
            </div>
        </div>
        )})}
        </div>
    );
}
 
export default Home;