import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../redux/slice/productSlice';
import Header from './Header';

function Home() {
    const [products, setProducts] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((er) => console.log(er));
        console.log("api called")

    }, [])
    return (
        <div>
            <Header />
            <h5> Product List</h5>
            {products && products.map((value, index) => {
                return (

                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Title:{value.title}</h5>
                            <p className="card-text">Prise:{value.price} </p>
                            <p className="card-text">Prise:{value.description} </p>
                            <button className="btn btn-primary"
                                onClick={() => dispatch(addProductToCart(value))}> Add to cart</button>

                        </div>
                    </div>
                )
            })
            }
        </div >
    )
}

export default Home