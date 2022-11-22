import { ReactNode } from 'react';

export type WidgetProps = {
	shape?: 'square' | 'bordered' | 'rounded';
	title?: string;
	visible?: boolean;
	onClick?: () => void;
	children?: ReactNode;
};
