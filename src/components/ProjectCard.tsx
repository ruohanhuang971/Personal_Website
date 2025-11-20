import { Col, Row } from 'react-bootstrap';

interface ProjectCardProp {
    title: string;
    description: string;
    tool: string[];
    imgUrl: string;
    link: string;
}

const ProjectCard = ({
    title,
    description,
    tool,
    imgUrl,
    link,
}: ProjectCardProp) => {
    return (
        <Row className="px-4 py-4">
            <Col sm={12} md={6}>
                <img
                    className="border-2 border-white"
                    src={imgUrl}
                    alt={title}
                />
            </Col>
            <Col sm={12} md={6}>
                <div className="mt-4 md:mt-2 mx-5 text-left">
                    <h3 className="md:text-5xl!">{title}</h3>
                    <p className="text-[#B8B8B8] text-xs md:text-lg!">
                        {description}
                    </p>
                    <h4 className="text-sm! md:text-2xl!">Development Tools</h4>
                    <ul>
                        {tool.map((t) => {
                            return <li className="list-disc">{t}</li>;
                        })}
                    </ul>

                    <button
                        className="mt-5 px-4 py-3 rounded-full! border border-white bg-white/10 hover:bg-[#121212]"
                        onClick={() => window.open(link)}
                    >
                        View Project
                    </button>
                </div>
            </Col>
        </Row>
    );
};

export default ProjectCard;
