import React from "react";
import Dermaplaning from "../../treatments/Dermaplaning/Dermaplaning";
import CBD from "../../treatments/CBD/CBD";
import "./TreatmentsPage5.css";

const TreatmentsPage5 = (props) => (
  <div className="treatments_page_5_container">
    <Dermaplaning
      initialScreenSize={props.initialScreenSize}
      currentScreenSize={props.currentScreenSize}
      resetAllCartStates={props.resetAllCartStates}
    />
    <CBD
      initialScreenSize={props.initialScreenSize}
      currentScreenSize={props.currentScreenSize}
      resetAllCartStates={props.resetAllCartStates}
    />
  </div>
);

export default TreatmentsPage5;
