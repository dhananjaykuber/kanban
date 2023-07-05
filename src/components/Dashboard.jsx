import React, { useContext, useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import SidebarContext from '../context/SidebarContext';
import Step from './dashboard/Step';
import { DragDropContext } from 'react-beautiful-dnd';

const Dashboard = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Brainstorming',
      body: 'Brainstorming brings team members diverse experience into play.',
      priority: 'low',
      comments: '12',
      files: '0',
      assigne: [
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
      ],
    },
    {
      id: 2,
      title: 'Research',
      body: 'User research helps you to create an optimal products for users.',
      priority: 'high',
      comments: '10',
      files: '3',
      assigne: [
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
      ],
    },
    {
      id: 3,
      title: 'Wireframe',
      body: 'Low fidelity wireframes include the most basic content and visuals.',
      priority: 'high',
      comments: '8',
      files: '4',
      assigne: [
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
      ],
    },
  ]);
  const [onProgress, setOnProgress] = useState([
    {
      id: 4,
      title: 'Onbording Illustration',
      image: 'images/dashboard/image1-step.svg',
      priority: 'low',
      comments: '14',
      files: '5',
      assigne: [
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
      ],
    },
    {
      id: 5,
      title: 'Moodboard',
      image: '/images/dashboard/image2-step.svg',
      priority: 'low',
      comments: '9',
      files: '10',
      assigne: [
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
      ],
    },
  ]);
  const [done, setDone] = useState([
    {
      id: 6,
      title: 'Mobile App Design',
      image: '/images/dashboard/image3-step.svg',
      priority: 'completed',
      comments: '12',
      files: '15',
      assigne: [
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
      ],
    },
    {
      id: 7,
      title: 'Design System',
      body: 'It just needs to adapt the UI from what you did before.',
      priority: 'completed',
      comments: '12',
      files: '15',
      assigne: [
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
        '/images/profiles/profile1.svg',
      ],
    },
  ]);

  const onDragEnd = (result) => {
    // console.log(result);

    const { source, destination } = result;

    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    let todos = todo,
      onProgressTodo = onProgress,
      doneTodo = done;

    let selectedTodo;

    if (source.droppableId === 'todo') {
      selectedTodo = todos[source.index];
      todos.splice(source.index, 1);
    } else if (source.droppableId === 'onProgress') {
      selectedTodo = onProgressTodo[source.index];
      onProgressTodo.splice(source.index, 1);
    } else {
      selectedTodo = doneTodo[source.index];
      doneTodo.splice(source.index, 1);
    }

    if (destination.droppableId === 'todo') {
      todos.splice(destination.index, 0, selectedTodo);
    } else if (destination.droppableId === 'onProgress') {
      onProgressTodo.splice(destination.index, 0, selectedTodo);
    } else {
      doneTodo.splice(destination.index, 0, selectedTodo);
    }

    setTodo(todos);
    setOnProgress(onProgressTodo);
    setDone(doneTodo);
  };

  return (
    <div className={styles.dashboard}>
      <div
        className={`${styles.overlay} ${!showSidebar && styles.showOverlay}`}
        onClick={() => setShowSidebar(!showSidebar)}
      ></div>
      <div className={styles.head}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!showSidebar && (
            <img
              src="/images/sidebar/logo-side.svg"
              alt="logo-side"
              onClick={() => setShowSidebar(!showSidebar)}
              className={styles.openIcon}
            />
          )}

          <img
            src="/images/dashboard/hamburger.svg"
            alt="hamburger"
            className={styles.hamburger}
            onClick={() => setShowSidebar(!showSidebar)}
          />

          <div className={styles.input}>
            <img src="/images/dashboard/search.svg" alt="search" />
            <input type="text" placeholder="Search for anything..." />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.icons}>
            <img src="/images/dashboard/calendar.svg" alt="calendar" />
            <img src="/images/dashboard/message.svg" alt="message" />
            <img src="/images/dashboard/notification.svg" alt="notification" />
          </div>

          <div className={styles.profile}>
            <div>
              <p>Anima Agrawal</p>
              <span>U.P, India</span>
            </div>
            <img src="/images/dashboard/profile.svg" alt="profile" />
            <img src="/images/dashboard/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>

      <div className={styles.subHead}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h1>Mobile App</h1>
            <div className={styles.icons}>
              <img src="/images/dashboard/arrow-square-up.svg" alt="edit" />
              <img src="/images/dashboard/link.svg" alt="link" />
            </div>
          </div>

          <div className={styles.topRight}>
            <img src="/images/dashboard/add-square.svg" alt="add" />
            <p>Invite</p>

            <div className={styles.invite}>
              <img src="/images/dashboard/profile.svg" alt="profile" />
              <img src="/images/dashboard/profile.svg" alt="profile" />
              <img src="/images/dashboard/profile.svg" alt="profile" />
              <img src="/images/dashboard/profile.svg" alt="profile" />
              <div>
                <span>+2</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.select}>
              <img src="/images/dashboard/filter.svg" alt="filter" />
              <span>Filter</span>
              <img
                src="/images/dashboard/arrow-down-select.svg"
                alt="arrow-down"
              />
            </div>
            <div className={styles.select}>
              <img
                src="/images/dashboard/calendar-bottom.svg"
                alt="calendar-bottom"
              />
              <span>Today</span>
              <img
                src="/images/dashboard/arrow-down-select.svg"
                alt="arrow-down"
              />
            </div>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.select}>
              <img src="/images/dashboard/share.svg" alt="share" />
              <span>Share</span>
            </div>

            <div className={styles.vr}></div>

            <div className={styles.pause}>
              <img src="/images/dashboard/pause.svg" alt="pause" />
            </div>

            <img src="/images/dashboard/menu.svg" alt="menu" />
          </div>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.content}>
          <Step
            title="To Do"
            color="#5030e5"
            data={todo}
            setData={setTodo}
            droppableId="todo"
          />
          <Step
            title="On Progress"
            color="#FFA500"
            data={onProgress}
            setData={setOnProgress}
            droppableId="onProgress"
          />
          <Step
            title="Done"
            color="#76A5EA"
            data={done}
            setData={setDone}
            droppableId="done"
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
