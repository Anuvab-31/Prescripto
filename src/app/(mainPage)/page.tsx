'use client';

import React from 'react';
import { Container } from '@mui/material';
import Home from '@/modules/Dashboard/Home';
import FindBySpeciality from '@/modules/Dashboard/FindBySpeciality';
import TopDoctorsToBook from '@/modules/Dashboard/TopDoctorsToBook';
import BookAppointment from '@/modules/Dashboard/BookAppointment';

const Page = () => {
  return (
    <React.Fragment>
      <Container maxWidth={'xl'}>
        <Home />
        <FindBySpeciality />
        <TopDoctorsToBook />
        <BookAppointment />
      </Container>
    </React.Fragment>
  )
}

export default Page