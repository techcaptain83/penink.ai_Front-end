import ContentInput from "../components/contentImprover/contentInput";
import ContentOutput from "../components/contentImprover/contentOutput";
import Templates from "../components/contentImprover/templates";



const ContentImprover = () => {
    return (
        <div className=' flex md:items-center justify-between md:h-screen    msm:px-4 md:px-0  pb-6 md:pb-0'>
            <Templates />
            <div className="flex sm:flex-row flex-col w-full md:w-[78vw] sm:space-x-4 lg:space-x-8 xl:space-x-10 md:px-4 lg:px-8 lg:pb-4">
                <ContentInput />
                <ContentOutput />
            </div>
        </div>
    )
}

export default ContentImprover