import * as React from 'react';
import ListView from './components/ListView';

const sprints = [
  [
    {
      id: 4,
      dependencies: [],
      duration: 6,
      assignedDeveloperId: 0,
      startDay: 0,
      endDay: 6,
      remainingDuration: 0,
      developers: [{ id: 0, name: 'harbir' }],
    },
    {
      id: 5,
      dependencies: [],
      duration: 5,
      assignedDeveloperId: 1,
      startDay: 0,
      endDay: 5,
      remainingDuration: 0,
      developers: [{ id: 1, name: 'mukul' }],
    },
    {
      id: 2,
      dependencies: [5],
      duration: 4,
      assignedDeveloperId: 1,
      startDay: 5,
      endDay: 9,
      remainingDuration: 0,
      developers: [{ id: 1, name: 'mukul' }],
    },
    {
      id: 0,
      dependencies: [4, 5],
      duration: 5,
      assignedDeveloperId: 0,
      startDay: 6,
      endDay: 11,
      remainingDuration: 0,
      developers: [{ id: 0, name: 'harbir' }],
    },
    {
      id: 3,
      dependencies: [2],
      duration: 2,
      assignedDeveloperId: 1,
      startDay: 9,
      endDay: 11,
      remainingDuration: 0,
      developers: [{ id: 1, name: 'mukul' }],
    },
  ],
  [
    {
      id: 0,
      dependencies: [4, 5],
      duration: 5,
      assignedDeveloperId: 0,
      startDay: 6,
      endDay: 11,
      remainingDuration: 0,
      developers: [{ id: 0, name: 'harbir' }],
    },
    {
      id: 3,
      dependencies: [2],
      duration: 2,
      assignedDeveloperId: 1,
      startDay: 9,
      endDay: 11,
      remainingDuration: 0,
      developers: [{ id: 1, name: 'mukul' }],
    },
    {
      id: 1,
      dependencies: [3, 4],
      duration: 3,
      assignedDeveloperId: 0,
      startDay: 11,
      endDay: 13,
      remainingDuration: -1,
      developers: [
        { id: 0, name: 'harbir' },
        { id: 1, name: 'mukul' },
      ],
    },
  ],
];

const App = () => {
  const getStoriesPerDeveloper = sprints.reduce((acc, sprint) => {
    sprint.forEach((story) => {
      story.developers.forEach((developer) => {
        if (!acc[developer.id]) {
          acc[developer.id] = [];
        }
        if (!acc[developer.id].find((exist) => story.id === exist.id))
          acc[developer.id].push(story);
      });
    });
    return acc;
  }, []);
  return (
    <div id='main'>
      <ListView sprints={sprints} developers={getStoriesPerDeveloper} />
    </div>
  );
};
export default App;
