import React, { useEffect, useState } from "react";
import Stats1 from "./Stats1";
import Stats2 from "./Stats2";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <Stats1 />
      <Stats2 />
    </div>
  );
};

export default Dashboard;
