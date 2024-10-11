import { Typography } from '@mui/material'
import React from 'react';


interface MyHeadingProps {
    heading: string
    subHeading: string
}

const MyHeading: React.FC<MyHeadingProps> = ({ heading, subHeading }) => {
    return (
        <React.Fragment>

            <Typography
                variant="h3"
                fontWeight={500}
                color={"#1F2937"}
                textAlign={'center'}
                sx={{ mt: 15, mb: 1 }}
            >
                {heading}
            </Typography>

            <Typography
                variant="h6"
                fontWeight={400}
                color={"#4B5563"}
                textAlign={'center'}
            >
                {subHeading}
            </Typography>

        </React.Fragment>
    )
}

export default MyHeading