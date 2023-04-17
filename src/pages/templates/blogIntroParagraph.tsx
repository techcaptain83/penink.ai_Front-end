import Textarea from '../../components/units/textarea'

const BlogIntroParagraph = () => {
    return (
        <>
            <Textarea
                name="Title"
                rows={1}
                note='minimum_10_character'
                title='blog_title_topic'
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