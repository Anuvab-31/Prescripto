import React from 'react'
import MyHeading from '@/core/components/MyHeading'
import { doctors } from '@/assets/assets_frontend/assets'
import { Box, Button, Grid2 as Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import TopDoctorCard from '@/core/components/TopDoctorCard'

const TopDoctorsToBook = () => {
    const Router = useRouter();

    return (
        <React.Fragment>
            <MyHeading
                heading='Top Doctors to Book'
                subHeading='Simply browse through our extensive list of trusted doctors.'
            />

            <Box mt={10} />
            <Grid container spacing={3}>
                {
                    doctors?.slice(0, 10)?.map((each: any, i: number) => (
                        <Grid
                            key={i}
                            size={{ xs: 6, sm: 3, md: 2.4, lg: 2.4 }}
                            sx={{

                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                "&:hover": { transform: "translateY(-15px)" }
                            }}
                            onClick={() => Router.push(`/doctor/${each?.speciality}`)}
                        >

                            <TopDoctorCard
                                image={each?.image}
                                name={each?.name}
                                designation={each?.speciality}
                            />
                        </Grid>
                    ))
                }
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <Button
                    variant="contained"
                    
                    sx={{
                        bgcolor: "#EAEFFF",
                        color: "#000000",
                        fontWeight: 400, mt: 10,
                        width: "10rem",
                        boxShadow: 0,
                        "&:hover": { bgcolor: "#EAEFFF" }
                    }}
                >
                    {"More"}
                </Button>
            </Box>

        </React.Fragment>
    )
}

export default TopDoctorsToBook