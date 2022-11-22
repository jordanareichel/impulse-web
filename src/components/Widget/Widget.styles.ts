import _ from 'lodash';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Widget.types';

const radiusShape = {
	square: 0,
	rounded: 100,
	bordered: 4,
};

export const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	bottom: 16px;
	right: 16px;
`;

export const Wid = styled.button<ButtonProps>`
	${({ theme, shape = 'rounded' }) => css`
		border-radius: ${_.get(radiusShape, shape, 0)}px;
		background-color: ${_.get(theme, 'colors.primary' || '#8257E5')};
		border-color: ${_.get(theme, 'colors.primary' || '#8257E5')};
	`}
	user-select: none;
	border-width: 1px;
	border-style: solid;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 12px;
	width: 21;
	height: 48px;

	&:hover span {
		max-width: fit-content;
	}
`;

export const Span = styled.span`
	${({ theme }) => css`
		color: ${_.get(theme, 'colors.primary_light' || '#ffff')};
	`}
	max-width: 0px;
	overflow: hidden;
	transition: transform 2s;
`;

export const Title = styled.span`
	padding-left: 8px;
`;
