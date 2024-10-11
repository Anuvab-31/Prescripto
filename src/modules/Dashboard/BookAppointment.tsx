import React from 'react'
import { useTheme } from "@mui/material/styles";
import { assets } from '@/assets/assets_frontend/assets';
import { Paper, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';

const BookAppointment = () => {
    const theme = useTheme();

    return (
        <Paper elevation={0} sx={{
            backgroundColor: theme.palette.primary.main,
            height: "450px",
            width: "100%",
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            px: 10,
            mt: 10,
            position: 'relative',
            flexWrap: 'wrap',
        }}>

            <Box sx={{ width: "60%" }}>
                <Typography
                    variant="h2"
                    fontWeight={600}
                    color={theme.palette.common.white}
                >
                    Book Appointment <br />
                    With 100+ Trusted Doctors
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: theme.palette.common.white,
                        color: theme.palette.common.black,
                        fontWeight: 400, mt: 5,
                        "&:hover": { bgcolor: theme.palette.common.white }
                    }}
                >
                    {"Create account"}
                </Button>
            </Box>

            <Box sx={{ width: "40%" }}>
                <Image src={assets.appointment_img} height={500} width={450} alt="" style={{ position: 'absolute', bottom: 0 }} />
            </Box>
        </Paper>
    )
}

export default BookAppointment