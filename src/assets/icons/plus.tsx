import React from 'react';
import Svg, { Line } from 'react-native-svg';

const PlusIcon = ({ size = 24, color = '#000' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Line
            x1="12"
            y1="4"
            x2="12"
            y2="20"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default PlusIcon;
