import Textarea from '../../components/units/textarea'

const YoutubeTitle = () => {
  return (
    <>
      <Textarea
        name="about"
        title='What is the video about?'
        rows={1}
        note='Minimum of 10 characters'
        min={10}
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

export default YoutubeTitle