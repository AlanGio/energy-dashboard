import * as React from "react";
import { ToggleButton, ToggleButtonGroup, SxProps } from "@mui/material";
import { ReactNode } from "react";

type ViewToggleOption = {
  name: string;
  text: ReactNode | string;
  callback?: (tab: string) => void;
};

const ViewToggleButton = ({
  selectedValue,
  options,
  sx,
  className,
}: {
  selectedValue: string;
  className?: string;
  options: ViewToggleOption[];
  sx?: SxProps;
}) => {
  const handleViewChange = (
    _: React.MouseEvent<HTMLElement>,
    viewToggle: string
  ) => {
    const selectedTab = options.find((item) => item.name === viewToggle);
    selectedTab?.callback && selectedTab?.callback(selectedTab.name);
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={selectedValue}
      exclusive
      onChange={handleViewChange}
      aria-label="text alignment"
      className={`${className ?? ""} MapToggle`}
      sx={sx}
    >
      {options.map((item: ViewToggleOption) => (
        <ToggleButton
          value={item.name}
          key={item.name}
          className="MapToggleButton"
        >
          {item.text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ViewToggleButton;
