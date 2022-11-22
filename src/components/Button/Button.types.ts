import React from 'react';

import { IconProps } from '@components/Icon';

export type ButtonIconProps = {
	iconSize?: IconProps['fontSize'];
};

export type ButtonFontProps = {
	fontColor?: string;
	fontWeight?: string;
};

export type ButtonProps = {
	icon?: string;
	children: React.ReactNode;
	block?: boolean;
	disable?: boolean;
	size?: 'sm' | 'md' | 'lg';
	color?: string;
	shape?: 'primary' | 'secondary' | string;
	variant?: 'outlined' | 'contained' | 'ghost';
	onClick: () => void;
} & ButtonIconProps &
	ButtonFontProps;
