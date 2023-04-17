import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import NotFound from './components/home/404';
import MainLayout from './components/mainLayout';
import ContentImprover from "./pages/templates/contentImprover";
import Home from './pages/home';
import Login from './pages/login';
import ResetPassword from './pages/resetPassword';
import Signup from './pages/signup';
import Subscription from './pages/subscription';
import TemplatesPage from './pages/templates/MainPage';
import AmazonProductDescription from './pages/templates/amazonProductDescription';
import AmazonProductFeatures from './pages/templates/amazonProductFeatures';
import AmazonProductTitle from './pages/templates/amazonProductTitle';
import BlogIdeaOutline from './pages/templates/blogIdeaOutline';
import BlogIntroParagraph from './pages/templates/blogIntroParagraph';
import BlogSEOTitleMetaDescription from './pages/templates/blogSEO';
import FacebookAds from './pages/templates/facebookAds';
import GoogleAds from './pages/templates/googleAds';
import GoogleBusinessPost from './pages/templates/googleBusinessPost';
import InterviewQuestions from './pages/templates/interviewQuestions';
import LongArticle from './pages/templates/longArticle';
import OpinionPieceColumn from './pages/templates/opinionPieceColumn';
import Paraphrasing from './pages/templates/paraphrasing';
import PhotoPostCaptions from './pages/templates/photoPostCaptions';
import PinterestTitleDescription from './pages/templates/pinterestTitleDescription';
import YoutubeDescription from './pages/templates/youtubeDescription';
import YoutubeIntroduction from './pages/templates/youtubeIntroduction';
import YoutubeTitle from './pages/templates/youtubeTitle';
import TemplatesLayout from "./components/templatesLayout";

function App() {

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/templates" index element={<TemplatesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/templates/" element={<TemplatesLayout />}>
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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router >
  )
}

export default App
