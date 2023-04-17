import Textarea from '../../components/units/textarea'

const FacebookAds = () => {
  return (
    <>
      <Textarea
        name="shortDescription"
        title='Short Description'
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

export default FacebookAds