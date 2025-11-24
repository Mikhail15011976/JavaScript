import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      marginTop: '20px'
    }}>
      {projects.map((project, index) => (
        <div key={index}>
          <img 
            src={project.img} 
            alt={project.category} 
            style={{ 
              width: '100%', 
              height: 'auto',
              objectFit: 'cover'
            }} 
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;