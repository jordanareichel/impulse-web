import React from 'react';

import Chat from '../../assets/svg/chat.svg';

import { Wrapper, Wid, Span, Title } from './Widget.styles';
import { WidgetProps } from './Widget.types';

export const Widget: React.FC<WidgetProps> = props => {
	const { shape, title, children, onClick } = props;

	return (
		<Wrapper>
			{children}
			<Wid
				onClick={onClick}
				{...Object.assign({
					shape,
				})}>
				<Chat />
				<Span>
					<Title>{title}</Title>
				</Span>
			</Wid>
		</Wrapper>
	);
};

Widget.defaultProps = {
	title: 'Feedback',
	shape: 'rounded',
};
