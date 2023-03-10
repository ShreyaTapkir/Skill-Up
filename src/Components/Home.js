import React from 'react'

import Carousel from './Carousel';

import Gutters from './Gutters';
import Split2 from './Split2';
export default function Home() {
  return (
    <>
      <Carousel/>
      <h1 className="heading">Our Learning Opportunity</h1>
      <Gutters/>
      <Split2 fact1="Free Online Courses" fact2="Free Guidance from tutors"/>
      
    </>
  )
}
