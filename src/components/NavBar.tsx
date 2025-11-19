import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// icons
import { FaBars, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const NavBar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);

    // check if navbar has scrolled pass its initial position
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    // home about skills projects | social media | contact me
    return (
        <Navbar
            expand="md"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#121212]/90 py-2 backdrop-blur-md'
                    : 'bg-transparent py-6'
            }`}
        >
            <Container>
                <Navbar.Brand href="#home" className="text-white w-[9%]">
                    LOGO
                </Navbar.Brand>

                {/* toggle icon */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="border-0 shadow-none bg-transparent p-0"
                    onClick={() => setOpen((open) => !open)}
                >
                    <FaBars
                        className={`text-white size-6 transition-transform duration-300 ${
                            open ? 'rotate-90' : 'rotate-0'
                        }`}
                    />
                </Navbar.Toggle>

                {/* navbar content */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Sections */}
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            onClick={() => setActive('home')}
                            className={`transition-opacity duration-300 opacity-75 hover:opacity-100! text-white!  inline-block ${
                                active === 'home' ? 'opacity-100' : ''
                            }`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            onClick={() => setActive('skills')}
                            className={`transition-opacity duration-300 opacity-75 hover:opacity-100! text-white!  inline-block ${
                                active === 'skills' ? 'opacity-100' : ''
                            }`}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            onClick={() => setActive('projects')}
                            className={`transition-opacity duration-300 opacity-75 hover:opacity-100! text-white!  inline-block ${
                                active === 'projects' ? 'opacity-100' : ''
                            }`}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>

                    {/* social media / button */}
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#">
                                <FaLinkedin />
                            </a>
                            <a href="#">
                                <FaXTwitter />
                            </a>
                        </div>
                        <button className="vvd">
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
