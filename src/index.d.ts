import * as React from 'react';

interface RgReactSpinnerProps {
    context?: any;
    loading?: boolean;
    color?: string;
    size?: number | number;
    margin?: string | number;
    width?: string | number;
    height?: string | number;
    radius?: string | number;
    component?: string;
    inline?: boolean;
}

declare class RgReactSpinner extends React.Component<RgReactSpinnerProps, {}> { }

export { RgReactSpinner };
