import React from 'react';

export type TextProps = {
	title?: string;
	align?: string;
	color?: string;
	weight?: string;
	size?: string | number;
	height?: string | number;
	onClick?: React.MouseEventHandler<HTMLParagraphElement>;
	children?: React.ReactNode;
};
