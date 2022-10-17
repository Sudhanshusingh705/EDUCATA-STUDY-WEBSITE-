import React from 'react';
import { Link } from 'react-router-dom';

function CatagorieSlider({ count }) {
    let webActive;
    let graphicActive;
    let DSAActive;
    let cplusplusActive;
    let appActive;
    let allActive;
    let videoActive;
    if (count === 'all') {
        allActive = 'active';
    }
    if (count === 'web') {
        webActive = 'active';
    }
    if (count === 'graphic') {
        graphicActive = 'active';
    }
    if (count === 'dsa') {
        DSAActive = 'active';
    }
    if (count === 'c++') {
        cplusplusActive = 'active';
    }
    if (count === 'app') {
        appActive = 'active';
    }
    if (count === 'video') {
        videoActive = 'active';
    }

    return (
        <>
            <div className="d-flex my-4 p-2 catagorie-slider">
                <Link to="/courses" className={allActive}>
                    All
                </Link>
                <Link to="/courses/web-development" className={webActive}>
                    Web development
                </Link>
                <Link to="/courses/graphic-design" className={graphicActive}>
                    Graphic Design
                </Link>
                <Link to="/courses/dsa" className={DSAActive}>
                    DSA
                </Link>
                <Link to="/courses/c++" className={cplusplusActive}>
                    C++
                </Link>
                <Link to="/courses/app-development" className={appActive}>
                    App development
                </Link>
                <Link to="/courses/video-editing" className={videoActive}>
                    Video Editing
                </Link>
            </div>
        </>
    );
}

export default CatagorieSlider;
