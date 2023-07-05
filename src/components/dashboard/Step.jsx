import React from 'react';
import styles from '../../styles/Dashboard.module.css';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';

const Step = ({ title, color, data, setData, droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          className={styles.step}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className={styles.stepHeader} style={{ borderColor: color }}>
            <div className={styles.stepHeaderLeft}>
              <div style={{ background: color }}></div>
              <p>{title}</p>
              <span>3</span>
            </div>
            <img src="/images/dashboard/add-square-step.svg" alt="add-square" />
          </div>

          {/* Cards */}
          {data?.map((item, index) => (
            <Card key={item.id} data={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Step;
