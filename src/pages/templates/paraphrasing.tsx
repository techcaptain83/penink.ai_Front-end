import Textarea from '../../components/units/textarea'

const Paraphrasing = () => {
  return (
    <>
      <Textarea
        rows={6}
        name='text'
        title='content_to_rewrite_as_quillbot'
      />
    </>
  )
}

export default Paraphrasing