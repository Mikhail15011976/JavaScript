import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from './ProjectList';
import projectsData from './projects.json'; // Импортируем данные

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      projects: projectsData, // Используем импортированные данные
    };
  }

  handleSelectFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  }

  render() {
    const { selectedFilter, projects } = this.state;
    
    const filteredProjects = selectedFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedFilter);

    return (
      <div>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;
