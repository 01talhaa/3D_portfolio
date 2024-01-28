import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>A B S Talha</span>
        👋
        <br />
        A Software Engineer from Bangladesh 🇧🇩
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Currently enrolled in North South University, pursuing a major in Computer Science and Engineering. <br /> Actively engaged in academic coursework and practical learning to develop a strong foundation in technology.

        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
        Know more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Demonstrating a genuine passion for technology and staying abreast of the latest advancements in the tech world.<br /> Actively participating in coding projects, staying curious, and continuously expanding technical skills.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Know more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Enjoys watching a diverse range of movies and TV series to unwind and relax. Football enthusiast, with a keen interest in sports, particularly football and cricket.
      </p>
    </div>
    );
  }
  if (currentStage === 5) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Aspires to become an entrepreneur in the future, combining technical expertise with a business mindset. <br/> Currently focused on becoming a successful web and application developer, honing skills for a strong foundation in the tech industry.Worked with many projects and picked up many skills along the way
      </p>

      <Link to='/about' className='neo-brutalism-white neo-btn'>
        Know more
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }
  if (currentStage === 6) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }
  if (currentStage === 7) {
    return (
        <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the year. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
