import React from "react";
import { useEffect, useState } from "react";
import Header from "./header";
import Gallery from "./gallery";

const Index = () => {
  return (
    <div>
      hello this is main page
      <Header />
      <Gallery />
    </div>
  );
};
export default Index;


// css for whole page 
// individual components will have its own css
