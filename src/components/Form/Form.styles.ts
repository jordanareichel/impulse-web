import { Icon } from '@components/Icon';
import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		background-color: ${_.get(theme, 'colors.primary_dark' || '#18181B')};
	`}
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	border-radius: 16px;
	margin: 0 0 16px;
	width: 336px;
	height: 264px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	& > p {
		line-height: 24px;
	}

	& > svg {
		position: absolute;
		left: 20px;
		right: 20px;
	}
`;

export const Close = styled(Icon)`
	position: absolute;
	right: 25px;
	top: 20px;
	cursor: pointer;
`;

export const Footer = styled.div`
	position: absolute;
	bottom: 16px;
`;
