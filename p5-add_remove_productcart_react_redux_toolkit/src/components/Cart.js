import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { useDispatch } from 'react-redux'
import { removeProductToCart } from '../redux/slice/productSlice';
import { Row, Col, Card } from 'react-bootstrap';


function Cart() {
    const cartItem = useSelector((state) => state.Addproduct.value)
    console.log(cartItem)
    const dispatch = useDispatch()
    return (
        <div>
            <Header />
            <h3>Shopping Cart</h3>
            <Card>
                <Row classname="justify-content-center">
                    {cartItem && cartItem?.map((item, index) => (
                        //here to we can control card size 3 or 4 show in row 
                        <Col lg='4'>
                            <div className="card" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"> {item.price}</p>
                                    <button className="btn btn-primary"
                                        onClick={() => dispatch(removeProductToCart(item.id))}> Remove </button>

                                </div>
                            </div>

                        </Col>
                    ))
                    }

                </Row>
            </Card>
            {/* {cartItem && cartItem?.map((item, index) => (
                <div className="card" key={index}>

                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"> {item.price}</p>
                        <button className="btn btn-primary"
                            onClick={() => dispatch(removeProductToCart(item.id))}> Remove to cart</button>

                    </div>
                </div>

            ))} */}
        </div>
    )
}

export default Cart