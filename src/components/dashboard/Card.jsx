import React from 'react';
import styles from '../../styles/Dashboard.module.css';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id.toString()} index={index}>
      {(provided) => (
        <div
          className={styles.stepCard}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.cardHeader}>
            <span
              className={`${data.priority === 'high' && styles.high} ${
                data.priority === 'completed' && styles.completed
              }`}
            >
              {data.priority}
            </span>
            <img src="/images/sidebar/three-dot.svg" alt="three-dot" />
          </div>
          <div className={styles.cardContent}>
            <h1>{data.title}</h1>
            {data.image ? <img src={data.image} /> : <p>{data.body}</p>}
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.cardProfiles}>
              {data.assigne.map((profile, index) => (
                <img key={index} src={profile} alt="profile" />
              ))}
            </div>
            <div className={styles.cardFooterInfo}>
              <div>
                <img src="/images/dashboard/message-step.svg" alt="message" />
                <span>{data.comments} comments</span>
              </div>
              <div>
                <img src="/images/dashboard/folder-step.svg" alt="folder" />
                <span>{data.files} files</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
