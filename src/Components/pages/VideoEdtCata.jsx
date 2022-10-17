import React from 'react';
import VideoEdit1 from '../../assets/courses/video-edt-1.jpg';
import VideoEdt2 from '../../assets/courses/video-edt-2.jpg';
import Card from '../Card';
import CatagorieSlider from '../CatagorieSlider';

function CoursesPage() {
    return (
        <>
            <div className="mt-5 pt-5">
                <div className="container">
                    <h1 className="text-center hero-title mb-5">Video Editing</h1>
                    <CatagorieSlider count="video" />
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="Premiere Pro | TUTORIAL"
                                image={VideoEdit1}
                                desc="Welcome to Learn Everything about Adobe Premiere Pro. In this massive 9+ hour free master class course you will learn EVERYTHING about Adobe Premiere Pro"
                                path="/courses/premiere-pro"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="Free Adobe Premiere Pro"
                                image={VideoEdt2}
                                desc="I am here to help you learn Adobe Premiere Pro and to show you the tools you need to become a successful video editor."
                                path="/courses/free-adobe-premiere-pro"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursesPage;
