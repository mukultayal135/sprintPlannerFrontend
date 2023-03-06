import * as React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './List.css';

export default function List({ heading, children, contents }) {
  const style = {
    width: 400,
    bgcolor: '#eeeeee',
    border: '2px solid lightgrey',
    // boxShadow: 10,
  };
  let theme = createTheme({
    typography: {
      fontSize: 13,
      fontWeightBold: 300,
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <Box width={2 / 3} sx={{ ...style, borderRadius: 5 }}>
      <Box
        display='flex'
        sx={{
          bgcolor: 'black',
          color: 'white',
          width: '100%',
          borderRadius: 5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottom: '5px solid white',
          // borderTopRightRadius: 5,
          height: 50,
        }}
      >
        <Typography variant='h4' theme={theme} m='auto'>
          {heading}
        </Typography>
      </Box>
      <Grid container spacing={2} padding={2}>
        {contents.map((content, index) => {
          const props = {
            content,
            index,
          };
          return (
            <Grid key={index} item xs={12}>
              {React.cloneElement(children, { ...props })}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
