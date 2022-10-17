import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero-image.svg';

export default function HeroSec() {
    return (
        <div className="pt-5 mt-5">
            <Container className="my-5">
                <Row>
                    <Col lg={6} className="mb-5 mb-lg-0">
                        {/* // eslint-disable-next-line prettier/prettier */}
                        <h1 className="text-secondary hero-title pb-2">
                            You can learn here a lot more than on any platform that exists in the
                            internet.
                        </h1>
                        <p className="pb-2 fw-light">
                            Instructors from around the world teach millions of students on Youtube.
                            We provide the tools and skills to teach what you love. And learners
                            around the world are launching new careers, advancing in their fields,
                            and enriching their lives.
                        </p>
                        <Link to="/courses" className="btn btn-primary rounded fw-bold fs-5">
                            Courses <FaArrowRight className="ms-2" />
                        </Link>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center">
                        <img className="w-100 hero-img" src={HeroImage} alt="Hero section" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
