import React from 'react'

const CartCard = ({ cartItems, dispatch }) => {
    return (
        <div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='card-container'>
                    {cartItems.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} className="p-image" width="200px" />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Description: {item.description}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => dispatch({ type: "DELETE", payload: item.id })}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}</div>
    )
}

export default CartCard