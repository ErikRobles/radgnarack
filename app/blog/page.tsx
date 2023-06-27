import React, { useEffect, useState } from 'react';
import BlogList from "../components/BlogList";
import BlogHero from "../components/BlogHero";


const page = () => {

  return (
    <div>
        <BlogHero heading="Blog" message="Get the latest in RadGnaRack news here" />
        <BlogList  />
    </div>
  );
};

export default page;