import React from 'react';

function HtmlCrash({ title, desc, src }) {
    return (
        <div className="mt-5 pt-5">
            <div className="container">
                <h1 className="fw-bold">{title}</h1>
                <p className="mb-5">{desc}</p>
                <iframe
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                    title="Html crash course"
                    className="w-100 rounded"
                    style={{ height: '500px' }}
                />
            </div>
        </div>
    );
}

export default HtmlCrash;
