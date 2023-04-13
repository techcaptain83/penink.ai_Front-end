import React from 'react';
import AmazonProductDescription from './amazonProductDescription';
import AmazonProductFeatures from './amazonProductFeatures';
import AmazonProductTitle from './amazonProductTitle';
import BlogIdeaOutline from './blogIdeaOutline';
import BlogIntroParagraph from './blogIntroParagraph';
import BlogSEOTitleMetaDescription from './blogSEO';
import { Routes, Route } from 'react-router-dom';
import TemplatesPage from './MainPage';
import NotFound from '../../components/home/404';
import ContentImprover from '../contentImprover';
import FacebookAds from './facebookAds';
import GoogleAds from './googleAds';
import GoogleBusinessPost from './googleBusinessPost';
import InterviewQuestions from './interviewQuestions';
import LongArticle from './longArticle';
import OpinionPieceColumn from './opinionPieceColumn';
import Paraphrasing from './paraphrasing';
import PhotoPostCaptions from './photoPostCaptions';
import PinterestTitleDescription from './pinterestTitleDescription';
import YoutubeDescription from './youtubeDescription';
import YoutubeIntroduction from './youtubeIntroduction';
import YoutubeTitle from './youtubeTitle';

const Templates = () => {
    return (
        <div>
            <Routes>
                <Route path="/templates" element={<TemplatesPage />} />

                <Route path="/templates/amazon-product-description" element={<AmazonProductDescription />} />
                <Route path="/templates/amazon-product-features" element={<AmazonProductFeatures />} />
                <Route path="/templates/amazon-product-title" element={<AmazonProductTitle />} />
                <Route path="/templates/blog-idea-outline" element={<BlogIdeaOutline />} />
                <Route path="/templates/blog-intro-paragraph" element={<BlogIntroParagraph />} />
                <Route path="/templates/blog-seo" element={<BlogSEOTitleMetaDescription />} />
                <Route path="/templates/content-improver" element={<ContentImprover />} />
                <Route path="/templates/facebook-ads" element={<FacebookAds />} />
                <Route path="/templates/google-ads" element={<GoogleAds />} />
                <Route path="/templates/google-business-post" element={<GoogleBusinessPost />} />
                <Route path="/templates/interview-questions" element={<InterviewQuestions />} />
                <Route path="/templates/long-article" element={<LongArticle />} />
                <Route path="/templates/opinion-piece-column" element={<OpinionPieceColumn />} />
                <Route path="/templates/paraphrasing" element={<Paraphrasing />} />
                <Route path="/templates/photo-post-captions" element={<PhotoPostCaptions />} />
                <Route path="/templates/pinterest-title-description" element={<PinterestTitleDescription />} />
                <Route path="/templates/youtube-description" element={<YoutubeDescription />} />
                <Route path="/templates/youtube-introduction" element={<YoutubeIntroduction />} />
                <Route path="/templates/youtube-title" element={<YoutubeTitle />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Templates