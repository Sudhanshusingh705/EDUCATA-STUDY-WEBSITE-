import React from 'react';
import { Link } from 'react-router-dom';

function Card({ cardTitle, image, desc, path }) {
    return (
        <>
            <Link
                to={path}
                className="d-block text-secondary text-decoration-none card-shadow"
                style={{ width: '18rem' }}
            >
                <div className="card rounded overflow-hidden">
                    <img src={image} className="card-img-top" alt={cardTitle} />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{cardTitle}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
