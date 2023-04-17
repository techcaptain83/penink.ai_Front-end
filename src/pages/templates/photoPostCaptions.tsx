import React from 'react'
import Textarea from '../../components/units/textarea'

const PhotoPostCaptions = () => {
  return (
    <>
      <Textarea
        rows={2}
        min={10}
        title='post_about'
        note='minimum_10_character'
        name='about'
      />
      <Textarea
        rows={1}
        note='separate_keywords_with'
        name='keywords'
        title='keywords'
      />
    </>
  )
}

export default PhotoPostCaptions