import React from 'react';

import { Icon } from '@components/Icon';

import { Wrapper, Title } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = props => {
	const { icon, children, iconSize, fontWeight = '700', ...rest } = props;

	return (
		<Wrapper haveIcon={!!icon} {...rest}>
			{icon && <Icon name={icon} fontSize={iconSize} />}
			{React.isValidElement(children)
				? children
				: children && <Title weight={fontWeight}>{children}</Title>}
		</Wrapper>
	);
};
