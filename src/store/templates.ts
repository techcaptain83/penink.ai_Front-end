import { ICategory, ITemplate } from "../@types";

export const categories: ICategory[] = [
    {
        id: 1,
        name: "group_all",
        icon: "all.svg"
    },
    {
        id: 2,
        name: "group_youtube",
        icon: "youtube.svg"
    },
    {
        id: 3,
        name: "group_blog",
        icon: "blog.svg"
    },
    {
        id: 4,
        name: "group_amazon",
        icon: "amazon.svg"
    },
    {
        id: 5,
        name: "group_ads",
        icon: "ads.svg"
    },
    {
        id: 6,
        name: "group_social_media",
        icon: "social-media.svg"
    }
]

export const templates: ITemplate[] = [
    {
        category: 2,
        title: "youtube_description",
        description: "youtube_description_content",
        href: "youtube-description"
    },
    {
        category: 2,
        title: "youtube_introduction",
        description: "youtube_introduction_content",
        href: "youtube-introduction"
    },
    {
        category: 2,
        title: "youtube_title",
        description: "youtube_title_content",
        href: "youtube-title"
    },
    {
        category: 3,
        title: "long_article_title",
        description: "long_article_content",
        href: "long-article"
    },
    {
        category: 3,
        title: "content_improver",
        description: "content_improver_content",
        href: "content-improver"
    },
    {
        category: 3,
        title: "blog_idea_outline",
        description: "blog_idea_outline_content",
        href: "blog-idea-outline"
    },
    {
        category: 3,
        title: "blog_intro_paragraph",
        description: "blog_intro_paragraph_content",
        href: "blog-intro-paragraph"
    },
    {
        category: 3,
        title: "blog_seo_title_meta_description",
        description: "blog_seo_title_meta_description_content",
        href: "blog-seo"
    },
    {
        category: 3,
        title: "paraphrasing_rewrite_quillbot",
        description: "paraphrasing_rewrite_quillbot_content",
        href: "paraphrasing"
    },
    {
        category: 3,
        title: "interview_question",
        description: "interview_question_content",
        href: "interview-questions"
    },
    {
        category: 4,
        title: "amazon_product_feature",
        description: "amazon_product_feature_content",
        href: "amazon-product-features"
    },
    {
        category: 4,
        title: "amazon_product_title",
        description: "amazon_product_title_content",
        href: "amazon-product-title"
    },
    {
        category: 4,
        title: "amazon_product_description",
        description: "amazon_product_description_content",
        href: "amazon-product-description"
    },
    {
        category: 5,
        title: "facebook_ads",
        description: "facebook_ads_content",
        href: "facebook-ads"
    },
    {
        category: 5,
        title: "google_ads",
        description: "google_ads_content",
        href: "google-ads"
    },
    {
        category: 6,
        title: "pinterest_title_description",
        description: "pinterest_title_description_content",
        href: "pinterest-title-description"
    },
    {
        category: 6,
        title: "photo_post_caption",
        description: "photo_post_caption_content",
        href: "photo-post-captions"
    },
    {
        category: 6,
        title: "opinion_piece_column",
        description: "opinion_piece_column_content",
        href: "opinion-piece-column"
    },
    {
        category: 6,
        title: "google_business_post",
        description: "google_business_post_content",
        href: "google-business-post"
    }, 
]