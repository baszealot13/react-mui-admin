import Typography from '@mui/material/Typography';
import React from 'react'

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography variant="h4" className='text-gray-500' gutterBottom>
      {props.children}
    </Typography>
  );
}
