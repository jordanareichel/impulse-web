import React from 'react';

import _ from '@utils/lodash';

import { Container, Paragraphy } from './Text.styles';
import { TextProps } from './Text.types';

export const TextContainer: React.FC<TextProps> = props => {
	const { children, ...rest } = props;

	return (
		<Container>
			{React.Children.map(children, (child, index) => {
				return (
					<Text
						key={index}
						{...Object.assign({}, rest, _.get(child, 'props', null))}
					/>
				);
			})}
		</Container>
	);
};

export const Text: React.FC<TextProps> = props => {
	return <Paragraphy {...props} />;
};
