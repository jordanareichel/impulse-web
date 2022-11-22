import React from 'react';

import { Icons } from '@components/Icons';
import { Text } from '@components/Text';

import { Wrapper, Header, Close, Footer } from './Form.styles';
import { FormProps } from './Form.types';

export const Form: React.FC<FormProps> = props => {
	const { title, icon, children, onClick } = props;

	return (
		<Wrapper>
			<Header>
				{icon && <Icons name={icon} />}
				<Text color="#F4F4F5">{title}</Text>
				<Close
					name="close"
					color="#A1A1AA"
					fontSize="small"
					onClick={onClick}
				/>
			</Header>
			{children}
			<Footer>
				<Text size={12} color="#A1A1AA">
					Feito por Jordana Reichel
				</Text>
			</Footer>
		</Wrapper>
	);
};
