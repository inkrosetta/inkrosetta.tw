import {style} from '@vanilla-extract/css'
import {colors} from '../../styles/colors'

export const logoContainer = style({
  position: 'absolute',
  top: '-15%',
  left: '50%',
  width: '100vh',
  height: '100vh',
  backgroundColor: colors['Dark Lava Light'],
  boxShadow: `0 0 3px ${colors['Dark Lava Light']}`,
  transform: 'translate3d(-50%, 0, 0)',
  borderRadius: '100vh',
  zIndex: 1,
})

export const logo = style({
  width: 200,
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate3d(-50%, 0, 0)',
})

export const title = style({
  position: 'absolute',
  bottom: '30%',
  left: '50%',
  transform: 'translate3d(-50%, 0, 0)',
  fontSize: '2.5em',
  textAlign: 'center',
  color: colors.White,
  zIndex: 2,
})
