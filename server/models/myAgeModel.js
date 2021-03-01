const myAgeModel = {
  myAge (birthDate) {
    birthDate = new Date(birthDate)
    const diffMs = Date.now() - birthDate.getTime()
    const ageDt = new Date(diffMs)

    return {
      years: Math.abs(ageDt.getUTCFullYear() - 1970),
      months: ageDt.getMonth(),
      days: ageDt.getDate()
    }
  },

  formatMyAge (birthDate) {
    const age = this.myAge(birthDate)
    let formatted = age.years + ' ans'
    if (age.months === 0 && age.days === 1) {
      formatted += " (aujourd'hui 🎉)"
    }
    return formatted
  }
}

module.exports = myAgeModel
