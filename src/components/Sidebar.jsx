import React, { useContext, useState } from 'react';
import styles from '../styles/Sidebar.module.css';
import SidebarContext from '../context/SidebarContext';

const Sidebar = () => {
  const screens = [
    {
      id: '1',
      title: 'Home',
      logo: '/images/sidebar/home.svg',
    },
    {
      id: '2',
      title: 'Messages',
      logo: '/images/sidebar/messages.svg',
    },
    {
      id: '3',
      title: 'Tasks',
      logo: '/images/sidebar/tasks.svg',
    },
    {
      id: '4',
      title: 'Members',
      logo: '/images/sidebar/members.svg',
    },
    {
      id: '5',
      title: 'Settings',
      logo: '/images/sidebar/settings.svg',
    },
  ];

  const projects = [
    { id: '1', title: 'Mobile App', color: '#7AC555' },
    { id: '2', title: 'Website Redesign', color: '#FFA500' },
    { id: '3', title: 'Design System', color: '#E4CCFD' },
    { id: '4', title: 'Wireframes', color: '#76A5EA' },
  ];

  const [activeProject, setActiveProject] = useState('Mobile App');

  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  return (
    <div
      className={`${styles.sidebar} ${showSidebar && styles.showSidebar} ${
        !showSidebar && styles.slideSidebar
      }`}
    >
      <div className={styles.logo}>
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <p>Project M.</p>
        </div>
        <img
          src="/images/sidebar/logo-side.svg"
          alt="logo-side"
          onClick={() => setShowSidebar(!showSidebar)}
          className={styles.openIcon}
        />
      </div>

      <div className={styles.screens}>
        {screens.map((screen) => (
          <div key={screen.id}>
            <img src={screen.logo} alt={screen.title} />
            <p>{screen.title}</p>
          </div>
        ))}
      </div>

      <hr />

      <div className={styles.projects}>
        <div className={styles.heading}>
          <p>My Projects</p>
          <img src="/images/sidebar/add-square.svg" alt="add-square" />
        </div>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.project} ${
              project.title === activeProject && styles.active
            }`}
            onClick={() => setActiveProject(project.title)}
          >
            <div className={styles.left}>
              <div style={{ backgroundColor: project.color }}></div>
              <p
                className={`${
                  project.title === activeProject && styles.activeP
                }`}
              >
                {project.title}
              </p>
            </div>
            {project.title === activeProject && (
              <img
                src="/images/sidebar/three-dot.svg"
                alt="three-dot"
                style={{ transition: '0.2s all ease-in-out' }}
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.card}>
        <div className={styles.cardImg}>
          <div></div>
          <img src="/images/sidebar/lamp-on.svg" alt="lamp-on" />
        </div>
        <div className={styles.cardContent}>
          <h3>Thoughts Time</h3>
          <p>
            We don't have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <button>Write a message</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
