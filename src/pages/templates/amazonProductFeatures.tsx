import React from 'react'
import Textarea from '../../components/units/textarea'

const AmazonProductFeatures = () => {
    return (
        <>
            <Textarea
                name="productName"
                title='product Name'
                rows={1}
                min={6}
                note='Minimum of 6 characters'
            />

            <Textarea
                name='productInfo'
                title='Product Info'
                rows={6}
            />
        </>
    )
}

export default AmazonProductFeatures