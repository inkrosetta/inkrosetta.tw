import {style} from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '0 1.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  scrollSnapAlign: 'start',
})
