import React from "react";
import Button from "../Buttons/Button";
import { DefaultSelector } from "../GlobalTypes/GlobalTypes";



const Selector: React.FC<DefaultSelector> = ({
  items,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="periodSelector">
      {items.map(({ label, value }) => (
        <div key={value} className="periodItem">
          <Button
            isRound
            isSmall
            variant={selectedValue === value ? "primary" : "default"}
            onClick={() => onSelect(value)}
          >
            {label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Selector;
