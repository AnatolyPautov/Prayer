import * as React from 'react';
import Svg, {Mask, Path, G, EMaskUnits} from 'react-native-svg';

const BackIcon = (props: any) => {
  return (
    <Svg
      width={18}
      height={29}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask
        id="prefix__a"
        x={0}
        y={0}
        width={18}
        height={16}
        maskUnits={'useSpaceOnUse' as EMaskUnits.USER_SPACE_ON_USE}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.707 1.707A1 1 0 007.293.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L3.414 9H17a1 1 0 000-2H3.414l5.293-5.293z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#fff" d="M-3-4h24v24H-3z" />
      </G>
    </Svg>
  );
};

export default BackIcon;
