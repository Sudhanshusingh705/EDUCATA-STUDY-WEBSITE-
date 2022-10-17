import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import {
    faDesktop,
    faMobileScreenButton,
    // eslint-disable-next-line prettier/prettier
    faPalette
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CatagorieSec() {
    return (
        <>
            <section className="py-5 catagorie-sec">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center hero-title mb-5">Catagories</h1>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/web-development"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <FontAwesomeIcon icon={faDesktop} />
                                </div>
                                <div className="text">
                                    <span>Web Development</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/app-development"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMobileScreenButton} />
                                </div>
                                <div className="text">
                                    <span>App Development</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/graphic-design"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPalette} />
                                </div>
                                <div className="text">
                                    <span>Graphic Design</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/video-editing"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCirclePlay} />
                                </div>
                                <div className="text">
                                    <span>Video Editing</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Link
                        to="/courses"
                        className="btn btn-primary rounded fw-bold fs-5 mx-auto d-block btn-view-more mt-3"
                    >
                        All <FaArrowRight className="ms-2" />
                    </Link>
                </div>
            </section>
        </>
    );
}

export default CatagorieSec;
