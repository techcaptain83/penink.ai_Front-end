import Textarea from '../../components/units/textarea'

const BlogIdeaOutline = () => {
    return (
        <>
            <Textarea
                name="about"
                title='What is your post about?'
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

export default BlogIdeaOutline