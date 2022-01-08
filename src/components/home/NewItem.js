import React from 'react'
import Item from './Item'

function NewItem() {
    return (
        <div className='newitem-sec'>
            <div className='newitem-heading'>
                <h3>NEW RELEASES</h3>
            </div>
            <Item />
            <Item />
            <Item />
            
        </div>
    )
}

export default NewItem
