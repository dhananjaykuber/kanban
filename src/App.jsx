import SidebarContext from './context/SidebarContext';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import styles from './styles/Container.module.css';
import { useState } from 'react';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      <div className={styles.board}>
        <Sidebar />
        <Dashboard />
      </div>
    </SidebarContext.Provider>
  );
}

export default App;
