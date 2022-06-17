import {globalStyle} from '@vanilla-extract/css'
import {colors} from './lib/styles/colors'

globalStyle(':root', {
  fontSize: 20,
})

globalStyle('html, body', {
  backgroundColor: colors.White,
  color: colors['Dark Lava'],
  fontFamily: '\'PingFangTC-Regular\', \'Noto Sans TC\', sans-serif',
})

globalStyle(
  'a',
  {
    textDecoration: 'underline',
  },
)

globalStyle(
  'p',
  {
    marginTop: '1rem',
  },
)

globalStyle(
  'main', {
    margin: '0 auto',
    height: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    scrollSnapType: 'y mandatory',
  },
)

globalStyle('ol, ul', {
  listStylePosition: 'inside',
  width: '100%',
})

globalStyle('ol', {
  listStyleType: 'decimal',
})

globalStyle('figcaption', {
  fontSize: '0.6rem',
  color: colors.Bone,
})
