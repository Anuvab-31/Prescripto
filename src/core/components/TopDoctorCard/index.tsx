import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import { Circle } from '@mui/icons-material';
import Image from 'next/image';


interface TopDoctorCardProps {
    image: string
    name: string
    designation: string
}

const TopDoctorCard: React.FC<TopDoctorCardProps> = ({ image, name, designation }) => {
    return (
        <Card elevation={0} sx={{
            width: '100%',
            borderRadius: '12px',
            border: '1px solid #C9D8FF',
        }}>
            {/* <CardMedia
                sx={{ height: 280, width: 300 }}
                image={image}
                title={name}
            /> */}
            <Image src={image} height={250} width={280} alt="" />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Circle sx={{ fontSize: "10px", color: '#0FBF00' }} />
                    <Typography gutterBottom variant="body1" color='#0FBF00' mt={1}>Available</Typography>
                </Box>

                <Typography variant="h5" fontWeight={500} color='#1F2937'> {name}  </Typography>
                <Typography variant="subtitle2" fontWeight={400} color='#4B5563'> {designation}  </Typography>
            </CardContent>
        </Card>
    )
}

export default TopDoctorCard