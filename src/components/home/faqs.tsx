const faqs = [
    {
        qn: "What is Penink.ai",
        answer: "Penink.ai is the world's best AI writing platform for creating SEO-optimized content that increases organic traffic to your website on Google. By strategically placing keywords , internal links, and external links in your generated content, you can increase traffic, sales, and revenue 10x."
    },
    {
        qn: "Who owns the generated copy?",
        answer: "Penink.ai is the world's best AI writing platform for creating SEO-optimized content that increases organic traffic to your website on Google. By strategically placing keywords , internal links, and external links in your generated content, you can increase traffic, sales, and revenue 10x."
    },
    {
        qn: "Who can use Penink.ai?",
        answer: "Penink.ai is the world's best AI writing platform for creating SEO-optimized content that increases organic traffic to your website on Google. By strategically placing keywords , internal links, and external links in your generated content, you can increase traffic, sales, and revenue 10x."
    },
    
]

const FAQs = () => {
    return (
        <div className="md:px-14 msm:px-4">

        <div className='  bg-[#F5F8FF] py-10 rounded-xl '>
            <h1 className='md:text-6xl text-center  font-bold mb-10 msm:text-4xl'>FAQs</h1>
            <div className="sm:flex sm:flex-wrap md:grid md:grid-cols-3 gap-14 ">
                {
                    faqs.map((faq) => (

                        <div className=" py-14 px-8 flex flex-col ">
                             <span className='text-xl font-bold capitalize'>{faq.qn}</span> <br />
                             <span className='mt-4'>{faq.answer}</span>
                        </div>
                    ))
                }

            </div>

        </div>
        </div>
    )
}

export default FAQs