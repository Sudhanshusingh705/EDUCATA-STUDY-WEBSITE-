import React from 'react';
import { GrTwitter } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className=" text-lg-start mt-5">
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {/* <!--Grid column--> */}
                        <div className="col-12 col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-slate-100 footer-title">Pages</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="/" className="text-slate-400 text-link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses" className="text-slate-400 text-link">
                                        Courses
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/about" className="text-slate-400 text-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                        <div className="col-12 col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-slate-100 footer-title">Catagories</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link
                                        to="/courses/web-development"
                                        className="text-slate-400 text-link"
                                    >
                                        Web Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/courses/graphic-design"
                                        className="text-slate-400 text-link"
                                    >
                                        Graphic Design
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/courses/dsa" className="text-slate-400 text-link">
                                        DSA
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses/c++" className="text-slate-400 text-link">
                                        C++
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/courses/app-development"
                                        className="text-slate-400 text-link"
                                    >
                                        App Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/courses/video-editing"
                                        className="text-slate-400 text-link"
                                    >
                                        Video Editing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-12 col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-slate-100 footer-title">Social Media</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="https://github.com/hasan-naim"
                                        target="_blank"
                                        className="text-slate-400 text-link"
                                        rel="noreferrer"
                                    >
                                        <ImGithub /> Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/HasanNaim20"
                                        target="_blank"
                                        className="text-slate-400 text-link"
                                        rel="noreferrer"
                                    >
                                        <GrTwitter /> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://bd.linkedin.com/in/hasannaim"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-400 text-link"
                                    >
                                        <RiLinkedinBoxFill /> Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-3 footer-bottom">
                    © 2020 Copyright:
                    <a
                        className="text-dark"
                        target="_blank"
                        href="https://hasan-naim.github.io/"
                        rel="noreferrer"
                    >
                        Hasan Naim
                    </a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    );
}

export default Footer;
