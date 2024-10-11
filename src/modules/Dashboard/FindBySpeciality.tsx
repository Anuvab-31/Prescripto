import React from 'react';
import MyHeading from '@/core/components/MyHeading';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { specialityData } from '@/assets/assets_frontend/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FindBySpeciality = () => {
    const Router = useRouter();
    return (
        <React.Fragment>
            <MyHeading
                heading='Find by Speciality '
                subHeading='Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.'
            />
            <Box mt={10} />
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                {
                    specialityData?.map((each: any, i: number) => (
                        <Grid
                            key={i}
                            size={{ xs: 6, sm: 2, md: 1.5, lg: 1.5 }}
                            sx={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: "center",
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out', 
                                "&:hover": { transform: "translateY(-15px)" }
                            }}
                            onClick={() => Router.push(`/doctor/${each?.speciality}`)}
                        >
                            <Image src={each?.image} height={110} width={110} alt="" />
                            <Typography variant='h6' fontWeight={400} color='#4B5563' mt={1}>{each?.speciality}</Typography>
                        </Grid>
                    ))
                }
            </Grid>

        </React.Fragment>
    )
}

export default FindBySpeciality