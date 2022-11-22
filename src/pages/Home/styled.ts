import { Button } from '@components/Button';
import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 32px 0px 32px;
	gap: 8px;
	width: 100%;
`;

export const Feedback = styled(Button)`
	flex-direction: column;
	cursor: pointer;
	padding: 20px 8px;
	flex: 1;
	align-items: center;
	gap: 8px;
	border: 1px solid transparent;
	background: #27272a;
	border-radius: 8px;
	width: 96px;
	height: 112px;

	&:hover {
		border-color: #996dff;
	}
`;
