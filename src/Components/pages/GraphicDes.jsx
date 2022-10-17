import React from 'react';
import Adobeilas from '../../assets/courses/adobeIlas.jpg';
import FigmaImg from '../../assets/courses/figma.jpg';
import SketchImg from '../../assets/courses/sketch.jpg';
import Card from '../Card';
import CatagorieSlider from '../CatagorieSlider';

function CoursesPage() {
    return (
        <>
            <div className="mt-5 pt-5">
                <div className="container">
                    <h1 className="text-center hero-title mb-5">Graphic Design</h1>
                    <CatagorieSlider count="graphic" />
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="Intro to Sketch"
                                image={SketchImg}
                                desc="Sketch is a vector screen design application that’s primarily used for designing digital products — like apps and web interfaces."
                                path="/courses/sketch"
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3  justify-content-center">
                            <Card
                                cardTitle="Free Adobe Illustrator"
                                image={Adobeilas}
                                desc="Access to This Full Course"
                                path="/courses/adobe-illustrator"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="Figma Crash Course"
                                image={FigmaImg}
                                desc="This Figma Crash Course 2021 is beginner-friendly and will help you get up and running with the design platform."
                                path="/courses/figma-crash"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursesPage;
