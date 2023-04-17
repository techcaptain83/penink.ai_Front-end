import React from 'react'
import Textarea from '../../components/units/textarea'

const AmazonProductDescription = () => {
  return (
    <>
      <Textarea
        name="productName"
        title='product_name'
        rows={1}
        min={6}
        note='Minimum of 6 characters'
      />

      <Textarea
        name='productInfo'
        title='product_info'
        rows={6}
      />
    </>
  )
}

export default AmazonProductDescription