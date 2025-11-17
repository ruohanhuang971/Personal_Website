import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <span>Welcome to my portfolio</span>
                <h1>
                    {`Hi I'm Ruohan`}
                    <span>web developer</span>
                </h1>
                <p>Short thing here</p>
            </Container>
        </section>
    );
};

export default Banner;
