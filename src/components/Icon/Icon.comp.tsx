import React from 'react';

import { Wrapper } from './Icon.styles';
import { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = props => {
	const { name, color, ...rest } = props;
	return (
		<Wrapper {...rest} iconColor={color}>
			{name}
		</Wrapper>
	);
};

Icon.defaultProps = {
	color: 'black',
	fontSize: 'small',
};
