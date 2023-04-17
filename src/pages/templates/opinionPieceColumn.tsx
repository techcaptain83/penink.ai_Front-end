import React from 'react'
import Textarea from '../../components/units/textarea'

const OpinionPieceColumn = () => {
  return (
    <>
      <Textarea
        name="Title"
        rows={1}
        note='minimum_10_character'
        title='title_opinion'
      />

      <Textarea
        name='mainSubject'
        rows={5}
        title='content_what_main_subject'
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