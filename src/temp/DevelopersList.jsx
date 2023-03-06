import * as React from 'react';
import Developer from '../components/Developer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid lightgrey',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
let theme = createTheme();
theme = responsiveFontSizes(theme);
const DevelopersList = ({ developers }) => {
  return (
    <Box width={2 / 3} p={3} sx={{ ...style, borderRadius: 10 }}>
      <Box display='flex' mx='auto'>
        <Typography variant='h4' theme={theme} m='auto'>
          DEVELOPERS
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {developers.map((developer, index) => {
          return (
            <Grid key={index} item xs={12}>
              <Developer developer={developer} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default DevelopersList;
