import React from 'react'
import { Box, Button, Grid2 as Grid, Paper, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import { assets } from '../../assets/assets_frontend/assets.js';


const Home = () => {
    const theme = useTheme();

    return (
        <Paper elevation={0} sx={{
            backgroundColor: theme.palette.primary.main,
            height: "600px",
            width: "100%",
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            px: 10,
            position: 'relative',
            flexWrap: 'wrap',
        }}>

            <Box sx={{ width: "55%" }}>
                <Typography
                    variant="h1"
                    fontWeight={600}
                    color={theme.palette.common.white}
                >
                    Book Appointment <br /> With Trusted Doctors
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Image src={assets.group_profiles} height={50} width={120} alt="" />
                    <Typography
                        variant="h6"
                        fontWeight={400}
                        color={theme.palette.common.white}
                    >
                        Simply browse through our extensive list of trusted doctors, <br />
                        schedule your appointment hassle-free.
                    </Typography>

                </Box>

                <Button
                    variant="contained"
                    endIcon={<Image src={assets.arrow_icon} height={15} width={15} alt="" style={{ paddingLeft: 3 }} />}
                    sx={{
                        bgcolor: theme.palette.common.white,
                        color: theme.palette.common.black,
                        fontWeight: 400, mt: 2,
                        "&:hover": { bgcolor: theme.palette.common.white }
                    }}
                >
                    {"Book appointment"}
                </Button>
            </Box>

            <Box sx={{ width: "45%" }}>
                <Image src={assets.header_img} height={500} width={600} alt="" style={{ position: 'absolute', bottom: 0 }} />
            </Box>
        </Paper>
    )
}

export default Home