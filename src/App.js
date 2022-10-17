// import CourseSec from './Components/CourseSec';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AboutPage from './Components/pages/AboutPage';
import AppDevCata from './Components/pages/AppDevCata';
import AdobeIlas from './Components/pages/courses/AdobeIlas';
import AppDev from './Components/pages/courses/AppDev';
import Cplusplus from './Components/pages/courses/Cplusplus';
import CssCrash from './Components/pages/courses/CssCrash';
import Dsa1 from './Components/pages/courses/Dsa1';
import Dsa2 from './Components/pages/courses/Dsa2';
import FigmaCrash from './Components/pages/courses/FigmaCrash';
import HtmlCrash from './Components/pages/courses/HtmlCrash';
import JsCrash from './Components/pages/courses/JsCrash';
import ReactJs from './Components/pages/courses/ReactJs';
import Sketch from './Components/pages/courses/Sketch';
import VideoEdt1 from './Components/pages/courses/VideoEdt1';
import VideoEdt2 from './Components/pages/courses/VideoEdt2';
import CoursesPage from './Components/pages/CoursesPage';
import CplusplusCata from './Components/pages/CplusplusCata';
import Dsa from './Components/pages/Dsa';
import ErrorPage from './Components/pages/ErrorPage';
import GraphicDes from './Components/pages/GraphicDes';
import HomePage from './Components/pages/HomePage';
import VideoEdtCata from './Components/pages/VideoEdtCata';
import WebDev from './Components/pages/WebDev';
import './css/App.css';
import './css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/courses/web-development" element={<WebDev />} />
                <Route path="/courses/graphic-design" element={<GraphicDes />} />
                <Route path="/courses/video-editing" element={<VideoEdtCata />} />
                <Route path="/courses/dsa" element={<Dsa />} />
                <Route path="/courses/app-development" element={<AppDevCata />} />
                <Route path="/courses/c++" element={<CplusplusCata />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/courses/html-crash" element={<HtmlCrash />} />
                <Route path="/courses/react-js" element={<ReactJs />} />
                <Route path="/courses/learn-c++" element={<Cplusplus />} />
                <Route path="/courses/sketch" element={<Sketch />} />
                <Route path="/courses/android-development" element={<AppDev />} />
                <Route path="/courses/algorithms-and-data-structures" element={<Dsa1 />} />
                <Route path="/courses/dsa-by-mosh" element={<Dsa2 />} />
                <Route path="/courses/adobe-illustrator" element={<AdobeIlas />} />
                <Route path="/courses/premiere-pro" element={<VideoEdt1 />} />
                <Route path="/courses/free-adobe-premiere-pro" element={<VideoEdt2 />} />
                <Route path="/courses/figma-crash" element={<FigmaCrash />} />
                <Route path="/courses/css-crash" element={<CssCrash />} />
                <Route path="/courses/js-crash" element={<JsCrash />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
