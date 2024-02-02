import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ContactPage from "./Pages/Contact/ContactPage";
import ResumePage from "./Pages/Resume/ResumePage";
import NotFound from "./Pages/NotFound/NotFound";
import BlogPage from "./Pages/Blog/BlogPage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import ArticleDetailPage from "./Pages/articleDetail/ArticleDetailPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import AdminLayout from "./Pages/admin/AdminLayout";
import Admin from "./Pages/admin/screens/Admin";
import Comments from "./Pages/admin/screens/comments/Comments";
import ManagePosts from "./Pages/admin/screens/posts/ManagePosts";
import EditPost from "./Pages/admin/screens/posts/EditPost";
import About from "./Pages/About/About";
import Portfolio from "./Pages/PortFolio/Portfolio";
import usePreLoading from "./Hooks/usePreLoading";
import PreLoading from "./Components/PreLoading/PreLoading";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import useActive from "./Hooks/useActive";
import Forgot from "./Pages/Forgot/Forgot";
import Topic from "./Pages/TopicArticles/Topic";

function App() {
    const preLoading = usePreLoading();
    const active = useActive();
    return (
        <>
            {preLoading ? (
                <PreLoading />
            ) : (
                <>
                    {active !== 0 && <Header isOther={true} />}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about-me" element={<About />} />
                        <Route path="/resumes" element={<ResumePage />} />
                        <Route path="/blog">
                            <Route index element={<BlogPage />} />
                            <Route path=":topic">
                                <Route index element={<Topic />} />
                                <Route
                                    path=":slug"
                                    element={<ArticleDetailPage />}
                                />
                            </Route>
                            <Route
                                path="forget-password"
                                element={<Forgot />}
                            />
                            <Route path="register" element={<RegisterPage />} />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="profile" element={<ProfilePage />} />
                            <Route path="dashboard" element={<AdminLayout />}>
                                <Route index element={<Admin />} />
                                <Route path="comments" element={<Comments />} />
                                <Route
                                    path="posts/manage"
                                    element={<ManagePosts />}
                                />
                                <Route
                                    path="posts/manage/edit/:slug"
                                    element={<EditPost />}
                                />
                            </Route>
                            <Route path="**" element={<NotFound />} />
                        </Route>
                        <Route
                            path="/*"
                            element={<Navigate to="/" replace={true} />}
                        />
                    </Routes>
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
