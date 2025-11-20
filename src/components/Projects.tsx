import { Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Bookstore Website',
            description: 'Yippie bookstore',
            tool: ['React', 'Hooks'],
            imgUrl: 'shooting-star.png', // stand-in temp image
            link: 'https://google.com', // stand-in link
        },
        {
            title: 'Worldwide Website',
            description: 'Yippie bookstore',
            tool: ['React', 'Hook'],
            imgUrl: 'shooting-star.png', // stand-in temp image
            link: '#',
        },
        {
            title: 'Pokemon Website',
            description: 'Yippie bookstore',
            tool: ['React', 'Hook'],
            imgUrl: 'shooting-star.png', // stand-in temp image
            link: '#',
        },
    ];

    return (
        <section id="projects" className="scroll-mt-20">
            <div className="my-20! text-center">
                <h1 className="mb-8!">Latest Projects</h1>
                <Tab.Container id="project-tabs" defaultActiveKey="tab-1">
                    <Nav
                        variant="pills"
                        defaultActiveKey="/home"
                        className="nav-pills w-[75%]! mx-auto rounded-full bg-white/10 overflow-hidden mb-5"
                    >
                        <Nav.Item className="w-1/3">
                            <Nav.Link eventKey="tab-1">Project 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="w-1/3">
                            <Nav.Link eventKey="tab-2">Project 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="w-1/3">
                            <Nav.Link eventKey="tab-3">Project 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="tab-1">
                            <ProjectCard {...projects[0]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab-2">
                            <ProjectCard {...projects[1]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab-3">
                            <ProjectCard {...projects[2]} />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <button className="mt-10! px-5 py-3 border border-white rounded-4xl!">
                    View All Projects
                </button>
            </div>
        </section>
    );
};

export default Projects;
