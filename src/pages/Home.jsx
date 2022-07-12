import React from 'react';
import DropPoints from '../components/DropPoints';
import Header from '../components/Header';
import How from '../components/How';
import OurPartner from '../components/OurPartner';
import What from '../components/What';
import Why from '../components/Why';


const Home = () => {
  return (
    <>
      <Header />
      <How />
      <Why />
      <What />
      <DropPoints />
      <OurPartner />
    </>
  )
}

export default Home