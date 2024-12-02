import React from "react";
import SectionsCard from "./SectionsCard";
const Sections = () => {
  return (
    <div className="flex gap-4">
      <SectionsCard
        image={"images/image 46.png"}
        title={"Emma Watson"}
        discription={"Managing Director"}
      />
      <SectionsCard
        image={"images/image 51.png"}
        title={"Emma Watson"}
        discription={"Managing Director"}
      />
      <SectionsCard
        image={"images/image 46.png"}
        title={"Emma Watson"}
        discription={"Managing Director"}
      />
    </div>
  );
};

export default Sections;
