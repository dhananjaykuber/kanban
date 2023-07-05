import React, { useContext } from 'react';
import styles from '../styles/Dashboard.module.css';
import SidebarContext from '../context/SidebarContext';

const Dashboard = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

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

      <div className={styles.content}>
        <div className={styles.step}>
          <div className={styles.stepHeader}>
            <div className={styles.stepHeaderLeft}>
              <div></div>
              <p>To Do</p>
              <span>3</span>
            </div>
            <img src="/images/dashboard/add-square-step.svg" alt="add-square" />
          </div>

          {/* card */}
          <div className={styles.stepCard}>
            <div className={styles.cardHeader}>
              <span>Low</span>
              <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
            </div>
            <div className={styles.cardContent}>
              <h1>Brainstroming</h1>
              <p>
                Brainstorming brings team members' diverse experience into play.{' '}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardProfiles}>
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
              </div>
              <div className={styles.cardFooterInfo}>
                <div>
                  <img src="/images/dashboard/message-step.svg" alt="message" />
                  <span>12 comments</span>
                </div>
                <div>
                  <img src="/images/dashboard/folder-step.svg" alt="folder" />
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/* card */}
          <div className={styles.stepCard}>
            <div className={styles.cardHeader}>
              <span className={styles.high}>High</span>
              <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
            </div>
            <div className={styles.cardContent}>
              <h1>Research</h1>
              <p>
                User research helps you to create an optimal product for users.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardProfiles}>
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
              </div>
              <div className={styles.cardFooterInfo}>
                <div>
                  <img src="/images/dashboard/message-step.svg" alt="message" />
                  <span>12 comments</span>
                </div>
                <div>
                  <img src="/images/dashboard/folder-step.svg" alt="folder" />
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/* card */}
          <div className={styles.stepCard}>
            <div className={styles.cardHeader}>
              <span className={styles.high}>High</span>
              <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
            </div>
            <div className={styles.cardContent}>
              <h1>Wireframes</h1>
              <p>
                Low fidelity wireframes include the most basic content and
                visuals.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardProfiles}>
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
              </div>
              <div className={styles.cardFooterInfo}>
                <div>
                  <img src="/images/dashboard/message-step.svg" alt="message" />
                  <span>12 comments</span>
                </div>
                <div>
                  <img src="/images/dashboard/folder-step.svg" alt="folder" />
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        <div className={styles.step}>
          <div className={styles.stepHeader} style={{ borderColor: '#FFA500' }}>
            <div className={styles.stepHeaderLeft}>
              <div style={{ background: '#FFA500' }}></div>
              <p>On Progress</p>
              <span>3</span>
            </div>
          </div>

          {/* Card */}
          <div className={styles.stepCard}>
            <div className={styles.cardHeader}>
              <span>Low</span>
              <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
            </div>
            <div className={styles.cardContent}>
              <h1>Onboarding Illustrations</h1>
              <img src="/images/dashboard/image1-step.svg" alt="image" />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardProfiles}>
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
              </div>
              <div className={styles.cardFooterInfo}>
                <div>
                  <img src="/images/dashboard/message-step.svg" alt="message" />
                  <span>12 comments</span>
                </div>
                <div>
                  <img src="/images/dashboard/folder-step.svg" alt="folder" />
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          {/* Card */}
          <div className={styles.stepCard}>
            <div className={styles.cardHeader}>
              <span>Low</span>
              <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
            </div>
            <div className={styles.cardContent}>
              <h1>Moodboard</h1>
              <img src="/images/dashboard/image2-step.svg" alt="image" />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardProfiles}>
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
              </div>
              <div className={styles.cardFooterInfo}>
                <div>
                  <img src="/images/dashboard/message-step.svg" alt="message" />
                  <span>12 comments</span>
                </div>
                <div>
                  <img src="/images/dashboard/folder-step.svg" alt="folder" />
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        <div className={styles.step}>
          <div className={styles.stepHeader} style={{ borderColor: '#8BC48A' }}>
            <div className={styles.stepHeaderLeft}>
              <div style={{ background: '#76A5EA' }}></div>
              <p>Done</p>
              <span>3</span>
            </div>
          </div>

          {/* Card */}
          <div className={styles.stepCard}>
            <div className={styles.cardHeader}>
              <span className={styles.completed}>Completed</span>
              <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
            </div>
            <div className={styles.cardContent}>
              <h1>Mobile App Design</h1>
              <img src="/images/dashboard/image3-step.svg" alt="image" />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardProfiles}>
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
              </div>
              <div className={styles.cardFooterInfo}>
                <div>
                  <img src="/images/dashboard/message-step.svg" alt="message" />
                  <span>12 comments</span>
                </div>
                <div>
                  <img src="/images/dashboard/folder-step.svg" alt="folder" />
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          {/* card */}
          <div className={styles.stepCard}>
            <div className={styles.cardHeader}>
              <span className={styles.completed}>Completed</span>
              <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
            </div>
            <div className={styles.cardContent}>
              <h1>Design System</h1>
              <p>It just needs to adapt the UI from what you did before</p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardProfiles}>
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
                <img src="/images/dashboard/profile.svg" alt="profile" />
              </div>
              <div className={styles.cardFooterInfo}>
                <div>
                  <img src="/images/dashboard/message-step.svg" alt="message" />
                  <span>12 comments</span>
                </div>
                <div>
                  <img src="/images/dashboard/folder-step.svg" alt="folder" />
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
