import React from 'react';
import AppdevImg from '../../assets/courses/app-dev-1.jpg';
import Card from '../Card';
import CatagorieSlider from '../CatagorieSlider';

function CoursesPage() {
    return (
        <>
            <div className="mt-5 pt-5">
                <div className="container">
                    <h1 className="text-center hero-title mb-5">App Development</h1>
                    <CatagorieSlider count="app" />
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="Android Development"
                                image={AppdevImg}
                                desc="In this course, you will learn how to build a real-word Android application from scratch using Java. "
                                path="/courses/android-development"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursesPage;
