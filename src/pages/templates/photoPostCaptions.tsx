import React from 'react'
import Textarea from '../../components/units/textarea'

const PhotoPostCaptions = () => {
  return (
    <>
      <Textarea
        rows={2}
        min={10}
        title='What is the product about ?'
        note='Minimum of 10 characters'
        name='about'
      />
      <Textarea
        rows={1}
        note='Separate keywords with ","'
        name='keywords'
        title='keywords'
      />
    </>
  )
}

export default PhotoPostCaptions