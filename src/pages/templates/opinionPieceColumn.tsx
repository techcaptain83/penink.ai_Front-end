import React from 'react'
import Textarea from '../../components/units/textarea'

const OpinionPieceColumn = () => {
  return (
    <>
      <Textarea
        name="Title"
        rows={1}
        note='Minimum of 10 characters'
        title='Title of the opinion'
      />

      <Textarea
        name='mainSubject'
        rows={5}
        title='Main Subject'
      />

      <Textarea
        title='audience'
        rows={1}
        name='audience'
        
      />

    </>
  )
}

export default OpinionPieceColumn