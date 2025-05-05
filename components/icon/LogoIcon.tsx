// components/CustomLogoIcon.tsx
import React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const CustomLogoIcon = (props) => (
  <Svg width={200} height={37} viewBox="0 0 200 37" fill="none" {...props}>
    <Defs>
      <ClipPath id="clip0_7714_666">
        <Path fill="#fff" d="M0 0h200v37H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_7714_666)">
      <Path
        d="M39.7611 35.8465L40.1292 35.9385C39.3747 36.1014 ..."
        fill="white"
      />
      {/* Dán tiếp các <Path /> còn lại ở đây */}
    </G>
  </Svg>
);

export default CustomLogoIcon;
