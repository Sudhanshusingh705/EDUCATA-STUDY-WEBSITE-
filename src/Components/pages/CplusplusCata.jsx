import React from 'react';
import Cplusplsu from '../../assets/courses/c++.jpg';
import Card from '../Card';
import CatagorieSlider from '../CatagorieSlider';

function CoursesPage() {
    return (
        <>
            <div className="mt-5 pt-5">
                <div className="container">
                    <h1 className="text-center hero-title mb-5">C++</h1>
                    <CatagorieSlider count="c++" />
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="C++ Programming Course"
                                image={Cplusplsu}
                                desc="Learn modern C++ 20 programming in this comprehensive course."
                                path="/courses/learn-c++"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursesPage;
