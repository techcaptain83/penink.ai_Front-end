import Textarea from '../../components/units/textarea'

const BlogIntroParagraph = () => {
    return (
        <>
            <Textarea
                name="Title"
                rows={1}
                note='Minimum of 10 characters'
                title='Blog title / topic'
            />


            <Textarea
                title='audience'
                rows={1}
                name='audience'

            />

        </>
    )
}

export default BlogIntroParagraph