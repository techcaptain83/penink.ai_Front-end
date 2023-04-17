import Textarea from '../../components/units/textarea'

const InterviewQuestions = () => {
  return (
    <>
      <Textarea
        rows={2}
        min={10}
        title='interview_subject'
        name='subject'
      />
      <Textarea
        rows={4}
        name='description'
        title='interview_describe'
      />
    </>
  )
}

export default InterviewQuestions