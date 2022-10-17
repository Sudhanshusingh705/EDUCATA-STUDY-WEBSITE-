import React from 'react';
import CsslImg from '../../assets/courses/css.jpg';
import HtmlImg from '../../assets/courses/html.jpg';
import JsImg from '../../assets/courses/js.jpg';
import ReactImg from '../../assets/courses/reactjs.jpg';
import Card from '../Card';
import CatagorieSlider from '../CatagorieSlider';

function CoursesPage() {
    return (
        <>
            <div className="mt-5 pt-5">
                <div className="container">
                    <h1 className="text-center hero-title mb-5">Web Development</h1>
                    <CatagorieSlider count="web" />
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="HTML Crash Course"
                                image={HtmlImg}
                                desc="In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners."
                                path="/courses/html-crash"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3  justify-content-center">
                            <Card
                                cardTitle="Css Crash Course"
                                image={CsslImg}
                                desc="In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners."
                                path="/courses/css-crash"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="Learn JavaScript"
                                image={JsImg}
                                desc="JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web."
                                path="/courses/js-crash"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex pb-3 justify-content-center">
                            <Card
                                cardTitle="React Tutorial"
                                image={ReactImg}
                                desc="React JS Tutorial - Get up running with React JS: the most popular JavaScript library in the world! "
                                path="/courses/react-js"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursesPage;
