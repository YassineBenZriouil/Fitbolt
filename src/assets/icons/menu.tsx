import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIcon = ({ size = 24, color = '#000' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M5 12H18"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M5 17H11"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M5 7H15"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
);

export default MenuIcon;
