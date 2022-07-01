import {style} from '@vanilla-extract/css'
import {colors} from '../../styles/colors'

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  padding: '3rem 1rem',
  color: colors.White,
  background: `linear-gradient(to bottom, ${colors['Dark Lava Light']}, ${colors['Dark Lava']})`,
})

export const title = style({
  fontSize: '1.4rem',
})

export const subtitle = style({
  color: colors.Bone,
})
