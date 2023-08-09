// eslint-disable-next-line
import react, { useState } from 'react';
import { increment } from "../slices/bonusSlices";
import { useDispatch, useSelector } from 'react-redux';


function Bonus() {

    const dispatch = useDispatch();
    const point = useSelector((state) => state.bonus.point)
    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Bonus Component</b>
                </h4>
                <h3>Total Point : ${point}</h3>

                <button onClick={() => dispatch(increment())}>Increment +</button>
            </div>
        </div>
    );
}

export default Bonus;
