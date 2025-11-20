import { GiStarSwirl } from 'react-icons/gi';
import { LiaStarSolid } from 'react-icons/lia';

const SectionTransition = () => {
    return (
        <div className="my-10! flex gap-2 items-center justify-center text-white/90">
            <LiaStarSolid className="animated-bounce size-3" />
            <LiaStarSolid className="animated-bounce size-7" />
            <GiStarSwirl className="animated-bounce size-20" />
            <LiaStarSolid className="animated-bounce size-7" />
            <LiaStarSolid className="animated-bounce size-3" />
        </div>
    );
};

export default SectionTransition;
