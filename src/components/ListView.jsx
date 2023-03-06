import React from 'react';
import Box from '@mui/material/Box';
import Developer from './Developer.jsx';
import Sprint from './Sprint.jsx';
import List from './List.jsx';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '75%',
  bgcolor: '#fafafa',
  border: '2px solid lightgrey',
  boxShadow: 4,
};

const ListView = ({ sprints, developers }) => {
  return (
    <Box
      p={5}
      sx={{
        ...style,
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: 10,
      }}
    >
      <List heading='Sprints' contents={sprints}>
        <Sprint />
      </List>
      <List heading='Developers' contents={developers}>
        <Developer />
      </List>
    </Box>
  );
};

export default ListView;
