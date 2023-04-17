import Textarea from "../../components/units/textarea"

const YoutubeDescription = () => {
  return (
    <>
      <Textarea
        name="videoTitle"
        title='youtube_title'
        rows={1}
        note='minimum_10_character'
        min={10}
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

export default YoutubeDescription