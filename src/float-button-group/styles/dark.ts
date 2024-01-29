import { commonDark } from '../../_styles/common'
import type { FloatButtonGroupTheme } from './light'

const floatButtonGroupDark: FloatButtonGroupTheme = {
  name: 'FloatButtonGroup',
  common: commonDark,
  self (vars) {
    const { popoverColor, textColor2 } = vars
    return {
      color: popoverColor,
      textColor: textColor2,
      boxShadow: '0 2px 8px 0px rgba(0, 0, 0, .12)',
      boxShadowHover: '0 2px 12px 0px rgba(0, 0, 0, .18)',
      boxShadowPressed: '0 2px 12px 0px rgba(0, 0, 0, .18)'
    }
  }
}

export default floatButtonGroupDark
