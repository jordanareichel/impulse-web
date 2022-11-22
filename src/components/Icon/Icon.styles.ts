import { Icon } from '@material-ui/core';
import _ from 'lodash';
import styled, { css } from 'styled-components';

export const Wrapper = styled(Icon)<{ iconColor?: string }>`
	${({ theme, iconColor = 'black' }) => css`
		color: ${_.get(theme, `colors.${iconColor}`, iconColor)};
	`}
`;
