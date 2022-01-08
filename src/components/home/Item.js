import React from 'react'

function Item() {
    return (
        <div className='item-main'>
            <div className='item-sec'>
                <div className='item-img'>
                    <img src="loho.jpg" />
                </div>
                <div className='item-txt'>
                    <div className='item-txt-head'>City Classic R-99</div>
                    <div className='item-txt-price'>$30.00</div>
                    <div className='item-txt-btn'>
                        <button>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Item
