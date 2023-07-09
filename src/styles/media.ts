const size = {
  large: '1300px',
  medium: '1000px',
  small: '700px',
}

export const media = {
  large: `@media screen and (min-width: ${size.large})`,
  medium: `@media screen and (min-width: ${size.medium}) and (max-width:${size.large})`,
  small: `@media screen and (min-width: ${size.small} ) and (max-width:${size.medium})`,
  mobile: `@media screen and (min-width: 0px) and (max-width:${size.small})`,
}
