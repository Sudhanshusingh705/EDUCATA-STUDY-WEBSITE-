import React from 'react';
import Dsa1Img from '../../assets/courses/dsa1.jpg';
import Dsa2Img from '../../assets/courses/dsa2.jpg';
import Card from '../Card';
import CatagorieSlider from '../CatagorieSlider';

function CoursesPage() {
    return (
        <>
            <div className="mt-5 pt-5">
                <div className="container">
                    <h1 className="text-center hero-title mb-5">DSA</h1>
                    <CatagorieSlider count="dsa" />
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="Algorithms and Data Structures"
                                image={Dsa1Img}
                                desc="In this course you will learn about algorithms and data structures, two of the fundamental topics in computer science."
                                path="/courses/algorithms-and-data-structures"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3  justify-content-center">
                            <Card
                                cardTitle="Dsa"
                                image={Dsa2Img}
                                desc="Data structures and algorithms are one of the topics taught to computer science and software engineering students."
                                path="/courses/dsa-mosh"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursesPage;
