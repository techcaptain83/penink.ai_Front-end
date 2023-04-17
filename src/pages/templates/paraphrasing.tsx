import Textarea from '../../components/units/textarea'

const Paraphrasing = () => {
  return (
    <>
      <Textarea
        rows={6}
        name='text'
        title='The text that should get rewritten, like with Quillbot!'
      />
    </>
  )
}

export default Paraphrasing