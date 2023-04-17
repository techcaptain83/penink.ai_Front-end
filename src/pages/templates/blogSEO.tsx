import Textarea from '../../components/units/textarea'

const blogSEOTitleMetaDescription = () => {
    return (
        <>
            <Textarea
                rows={1}
                min={10}
                title="product_name"
                note='minimum_10_character'
                name='name'
            />
            <Textarea
                rows={5}
                name='description'
                title='short_description'
            />
        </>
    )
}

export default blogSEOTitleMetaDescription