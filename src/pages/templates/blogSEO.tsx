import Textarea from '../../components/units/textarea'

const blogSEOTitleMetaDescription = () => {
    return (
        <>
            <Textarea
                rows={1}
                min={10}
                title="product name"
                note='Minimum of 10 characters'
                name='name'
            />
            <Textarea
                rows={5}
                name='description'
                title='Short Description'
            />
        </>
    )
}

export default blogSEOTitleMetaDescription