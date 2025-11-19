import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500);
    const period = 1000;

    useEffect(() => {
        // list of words to cycle through
        const wordList = ['Web Developer', 'Web Designer', 'UX/UI Designer'];

        const tick = () => {
            // set new word that is being displayed
            const i = loopNum % wordList.length;
            const fullText = wordList[i];
            const updateText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);
            setText(updateText);

            // speed up if is deleting text rather than typing
            if (isDeleting) {
                setDelta((delta) => (delta < 50 ? delta / 2 : 50));
            }

            if (!isDeleting && updateText === fullText) {
                // word is fully typed out
                setIsDeleting(true);
                setDelta(period); // reset delta
            } else if (isDeleting && updateText === '') {
                // word is fully deleted
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            }
        };

        // run ever tick to update word on screen
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta, loopNum, isDeleting]);

    return (
        <section
            id="home"
            className="pt-[260px]! pb-[260px]! bg-[url('/shooting-star.png')] bg-center bg-cover bg-no-repeat banner"
        >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={8} xl={6}>
                        <span className="font-bold! tracking-[0.8px] text-center text-lg mb-4! px-3! py-2! border! border-white/50! rounded-xl inline-block">
                            Welcome to my portfolio
                        </span>
                        <h1 className="font-bold! tracking-[0.8px] text-7xl! block">{`Hi I'm Ruohan `}</h1>
                        <h1 className="font-bold! tracking-[0.8px] flex items-center">
                            {text}
                            <span className="h-12 w-1 bg-white animate-pulse"></span>
                        </h1>
                        <p className="text-gray-400 text-lg w-[96%]">
                            Great products start with great design
                        </p>
                        <button>
                            Let's connect <IoArrowForwardCircleOutline />
                        </button>
                    </Col>

                    <Col xs={12} md={4} xl={6}>
                        <div className="mx-auto w-15 h-15 md:w-45 md:h-45 lg:w-45 lg:h-45 bg-white rounded-full animated-bounce"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
