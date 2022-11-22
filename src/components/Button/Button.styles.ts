import { Text } from '@components/Text';
import _ from 'lodash';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

const RadiusShape = {
	square: 0,
	rounded: 100,
	bordered: 8,
};

export const Wrapper = styled.button<{ haveIcon?: boolean } & ButtonProps>`
	${({
		theme,
		block,
		disabled,
		haveIcon,
		color = 'primary',
		shape = 'rounded',
		fontColor = 'white',
		variant = 'contained',
		size = '200',
	}) => css`
		width: ${block ? '100%' : 'auto'}
		cursor: ${!disabled ? 'pointer' : 'default'};
		border-radius: ${_.get(RadiusShape, shape, 0)}px;
		padding: ${_.get(theme, size)}px 16px;
		border-color: ${
			['ghost'].includes(variant)
				? 'transparent'
				: `${_.get(theme, `colors.${color}_button`, color)}`
		};
		background-color: ${
			['outlined', 'ghost'].includes(variant)
				? 'transparent'
				: `${_.get(theme, `colors.${color}_button`, color)}`
		};

	& > ${Title} {
		margin-left: ${haveIcon ? 8 : 0}px;
		line-height: 1;
	}

	& > span,
	& > ${Title} {
		color: ${_.get(
			theme,
			`colors.${
				['outlined', 'ghost'].includes(variant) ? `${color}_button` : fontColor
			}`,
			fontColor,
		)};
	}

	&:hover {
		border-color: ${
			['ghost'].includes(variant)
				? 'transparent'
				: `${_.get(theme, `${color}_button_hover`, color)}`
		};
		background-color: ${_.get(
			theme,
			`colors.${
				['outlined', 'ghost'].includes(variant)
					? `${color}_button_hover_bg`
					: `${color}_button_hover`
			}`,
			color,
		)};

		& > span,
		& > ${Title} {
			color: ${_.get(
				theme,
				`colors.${
					['outlined', 'ghost'].includes(variant)
						? `${color}_button_hover`
						: fontColor
				}`,
				'white',
			)};
		}
	}

	&:disabled {
		pointer-events: none;
		border-color: ${_.get(theme, 'button_disabled', '#A5ABB3')};
		background-color: ${
			['outlined', 'ghost'].includes(variant)
				? 'transparent'
				: `${_.get(theme, 'neutral4', '#A5ABB3')}`
		};

		& > span,
		& > ${Title} {
			color: ${_.get(
				theme,
				`colors.${
					['outlined', 'ghost'].includes(variant) ? 'neutral4' : fontColor
				}`,
				color,
			)};
		}
	}

	&:active {
		border-color: ${
			['ghost'].includes(variant)
				? 'transparent'
				: `${_.get(theme, `colors.${color}_button_active`, color)}`
		};
		background-color: ${
			['outlined', 'ghost'].includes(variant)
				? 'transparent'
				: `${_.get(theme, `colors.${color}_button_active`, color)}`
		};

		& > span,
		& > ${Title} {
			color: ${_.get(
				theme,
				`colors.${
					['outlined', 'ghost'].includes(variant)
						? `${color}_button_active`
						: fontColor
				}`,
				color,
			)};
		}
	}
	`}
	user-select: none;
	border-width: 1px;
	border-style: solid;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Title = styled(Text)`
	display: inline-block;
`;
