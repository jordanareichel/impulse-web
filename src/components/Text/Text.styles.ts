import _ from '@utils/lodash';
import styled, { css } from 'styled-components';

import { TextProps } from './Text.types';

export const Paragraphy = styled.p<TextProps>`
	${({
		theme,
		align = 'center',
		weight = 'normal',
		size,
		color = _.get(theme, 'colors.primary', '#242424'),
	}) => css`
		text-align: ${align};
		font-size: ${_.get(theme, `font.size.${size}`, size)}px;
		font-weight: ${weight};
		color: ${_.get(theme, `colors.${color}`, color)};
	`}
`;

export const Container = styled.div`
	& > ${Paragraphy} {
		display: inline;
	}
`;
