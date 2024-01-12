import React from 'react';
import './style.scss';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { useGlobalContext } from '../../utils/context/useContext';

const Skills = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  return (
    <section onClick={() => setIsSidebarOpen(false)}>
      <TagCloud
        options={(w) => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'normal',
        })}
        onClick={(tag) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          'HIML',
          'CSS',
          'JavaScript',
          'React',
          'TypeScript',
          'SASS',
          'Responsive',
          'HIML5',
          'CSS3',
          'Animation',
          'Redux',
          'Route',
          'API',
        ]}
      </TagCloud>
    </section>
  );
};

export default Skills;