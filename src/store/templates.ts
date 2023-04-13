import { ICategory, ITemplate } from "../@types";

export const categories: ICategory[] = [
    {
        id: 1,
        name: "All",
        icon: "all.svg"
    },
    {
        id: 2,
        name: "Youtube",
        icon: "youtube.svg"
    },
    {
        id: 3,
        name: "Blog",
        icon: "blog.svg"
    },
    {
        id: 4,
        name: "Amazon",
        icon: "amazon.svg"
    },
    {
        id: 5,
        name: "Ads",
        icon: "ads.svg"
    },
    {
        id: 6,
        name: "Social Media",
        icon: "social-media.svg"
    }
]

export const templates: ITemplate[] = [
    {
        category: 2,
        title: "Video Description - YouTube",
        description: "Create unique descriptions for YouTube videos that rank well in search.",
        href: "youtube-description"
    },
    {
        category: 2,
        title: "Video Script Hook and Introduction",
        description: "Create a video intro that will capture your viewers attention and compel them to watch all the way through.",
        href: "youtube-introduction"
    },
    {
        category: 2,
        title: "Video Titles",
        description: "Create engaging, click-worthy titles for your videos that will rank on Youtube.",
        href: "youtube-title"
    },
    {
        category: 3,
        title: "Complete long-form article",
        description: "Get a summarized version from a piece of content.",
        href: "long-article"
    },
    {
        category: 3,
        title: "Content Improver",
        description: "Take a piece of content and rewrite it to make it more interesting, creative, and engaging.",
        href: "content-improver"
    },
    {
        category: 3,
        title: "Blog Idea & Outline",
        description: "Generate ideas and content structure for articles.",
        href: "blog-idea-outline"
    },
    {
        category: 3,
        title: "Blog Post Intro Paragraph",
        description: "Blast through writers block by letting Watsom write your opening paragraph.",
        href: "blog-intro-paragraph"
    },
    {
        category: 3,
        title: "SEO - Blog Posts - Title and Meta Descriptions",
        description: "Write SEO optimized title tags and meta descriptions for blog posts that will rank well on Google.",
        href: "blog-seo"
    },
    {
        category: 3,
        title: "Paraphrasing / Rewriting (Quillbot)",
        description: "Paraphrasing / Rewriting texts using Quillbot.",
        href: "paraphrasing"
    },
    {
        category: 3,
        title: "Interview Questions",
        description: "Inspiration for Interview Questions",
        href: "interview-questions"
    },
    {
        category: 4,
        title: "Amazon Product Features (bullets)",
        description: "Create key feature and benefit bullet points for Amazon listing under the 'about this item' section.",
        href: "amazon-product-features"
    },
    {
        category: 4,
        title: "Amazon Product Title",
        description: "Create compelling product title for Amazon listings.",
        href: "amazon-product-title"
    },
    {
        category: 4,
        title: "Amazon Product Description (paragraph)",
        description: "Create compelling product descriptions for Amazon listings.",
        href: "amazon-product-description"
    },
    {
        category: 5,
        title: "Facebook Ads",
        description: "Create high converting copy for the 'Headlines' section of your Facebook Ads",
        href: "facebook-ads"
    },
    {
        category: 5,
        title: "Google Ads",
        description: "Create high converting copy for the 'Headlines' section of your Google Ads",
        href: "google-ads"
    },
    {
        category: 6,
        title: "Pinterest Title & Description",
        description: "Create compelling pinterest description",
        href: "pinterest-title-description"
    },
    {
        category: 6,
        title: "Photo Post Captions",
        description: "Write catchy captions for your Instagram posts.",
        href: "photo-post-captions"
    },
    {
        category: 6,
        title: "Opinion piece / Column",
        description: "Write an Opinion piece / Column",
        href: "opinion-piece-column"
    },
    {
        category: 6,
        title: "Google my Business Posts",
        description: "Writes Google My Business posts",
        href: "google-business-post"
    },
]