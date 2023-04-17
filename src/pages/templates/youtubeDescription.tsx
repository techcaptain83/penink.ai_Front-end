import Textarea from "../../components/units/textarea"

const YoutubeDescription = () => {
  return (
    <>
      <Textarea
        name="videoTitle"
        title='Video Title'
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

export default YoutubeDescription