import { SolidarityRunContext, SolidaritySettings } from '../../types'
module.exports = (settings: SolidaritySettings, context: SolidarityRunContext): void => {
  const { print, filesystem } = context

  if (settings.requirements) {
    try {
      // Write file
      filesystem.write('.solidarity', JSON.stringify(settings, null, 2), {atomic: true})
    } catch (e) {
      print.error(e)
      process.exit(1)
    }
  } else {
    throw 'You must have a requirements key to be a valid solidarity file'
  }
}
