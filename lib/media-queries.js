const { withUnits } = require('./units')

module.exports = config => {
  return config.customMedia.map((breakpoint, i) => {
    const nextBreakpoint = config.customMedia[i+1]
    const key = Object.keys(breakpoint)[0]
    const val = breakpoint[key]

    if (nextBreakpoint) {
      const nbpVal = nextBreakpoint[Object.keys(nextBreakpoint)[0]]

      return [key, `screen and (min-width: ${withUnits(val)}) and (max-width: ${withUnits(nbpVal)})`]
    } else {
      return [key, `screen and (min-width: ${withUnits(val)})`]
    }
  })
}
