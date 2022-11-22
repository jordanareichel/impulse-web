import React from 'react';

import { IconProps as IconPropsRN } from '@material-ui/core';

export type IconProps = {
	name?: string;
	color?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<IconPropsRN, 'color'>;
