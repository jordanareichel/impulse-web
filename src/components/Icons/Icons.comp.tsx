import React from 'react';

import _ from '@utils/lodash';
import { useTheme } from 'styled-components';

import icons from './data';
import { IconProps } from './Icons.types';

export const Icons: React.FC<IconProps> = props => {
	const { name, size, color } = props;

	const theme = useTheme();

	return Object.prototype.hasOwnProperty.call(icons, name) ? (
		React.createElement(_.get(icons, name), {
			width: size,
			height: size,
			style: {
				color: _.get(theme, `colors.${color}`, color),
			},
		})
	) : (
		<></>
	);
};

Icons.defaultProps = {
	color: 'neutral9',
};
