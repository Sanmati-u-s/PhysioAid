import React, { useState } from "react";
import "./menbody.css";
import "./variables.css";
import MenBodySvgComponent from "./MenBodySvgComponent.jsx";
import MenBackBodySvgComponent from "./MenBackBodySvgComponent.jsx";

const MenBody = ({ view = 'front', handlePieceClick: externalHandleClick }) => {
  const handlePieceClick = (event) => {
    // Get the id or class of the clicked path
    const path = event.target;
    const pathClass = path.getAttribute("class");
    
    // Remove 'sc-body-model-svg__path--active' from all paths
    const activePath = document.querySelector(
      ".sc-body-model-svg__path--active",
    );
    if (activePath) {
      activePath.classList.remove("sc-body-model-svg__path--active");
    }

    // Check if the element exists
    if (pathClass) {
      // Add the 'newClass' to the clicked element
      event.target.setAttribute(
        "class",
        `${pathClass} sc-body-model-svg__path--active`,
      );
    }
    
    // Call external handler if provided
    if (externalHandleClick) {
      externalHandleClick(event);
    }
  };

  return (
    <div>
      <div className="sc-body-model evidence-search-body-widget__body-model">
        <div className="ui-dropdown ui-dropdown--compact sc-body-model__dropdown">
          {view === 'front' ? (
            <MenBodySvgComponent handlePieceClick={handlePieceClick} />
          ) : (
            <MenBackBodySvgComponent handlePieceClick={handlePieceClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenBody;
