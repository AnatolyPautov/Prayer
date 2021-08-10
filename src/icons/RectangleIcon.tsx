import * as React from 'react';
import Svg, {SvgProps, Mask, Rect, G, Path} from 'react-native-svg';

const RectangleIcon = (props: any) => {
  return (
    <Svg
      width={3}
      height={22}
      viewBox="0 0 3 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask id="prefix__a" x={0} y={0} width={3} height={22}>
        <Rect width={3} height={22} rx={1.5} fill="#C4C4C4" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#AC5253" d="M-12-1h24v24h-24z" />
      </G>
    </Svg>
  );
};

export default RectangleIcon;
