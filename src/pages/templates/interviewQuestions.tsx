import Textarea from '../../components/units/textarea'

const InterviewQuestions = () => {
  return (
    <>
      <Textarea
        rows={2}
        min={10}
        title='Interview Subject'
        name='subject'
      />
      <Textarea
        rows={4}
        name='description'
        title='Describe the Interview'
      />
    </>
  )
}

export default InterviewQuestions