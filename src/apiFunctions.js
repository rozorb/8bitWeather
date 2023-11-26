export const kelvinToFahrenheit = (value) => {
    return ((value - 273.15) * 1.8 + 32).toFixed(0)
  }

export  const windDirection = (degrees) => {
    if(degrees === 0) {
      return 'calm'
    } else if(degrees > 345 || degrees <= 15) {
      return 'N'
    } else if(degrees > 15 || degrees <= 35) {
      return 'N/NE'
    } else if(degrees > 35 || degrees <= 55) {
      return 'NE'
    } else if(degrees > 55 || degrees <= 75) {
      return 'E/NE'
    } else if(degrees > 75 || degrees <= 105) {
      return 'E'
    } else if(degrees > 105 || degrees <= 125) {
      return 'E/SE'
    } else if(degrees > 125 || degrees <= 145) {
      return 'SE'
    } else if(degrees > 145 || degrees <= 165) {
      return 'S/SE'
    } else if(degrees > 165 || degrees <= 195) {
      return 'S'
    } else if(degrees > 195 || degrees <= 215) {
      return 'S/SW'
    } else if(degrees > 215 || degrees <= 235) {
      return 'SW'
    } else if(degrees > 235 || degrees <= 255) {
      return 'W/SW'
    } else if(degrees > 255 || degrees <= 285) {
      return 'W'
    } else if(degrees > 285 || degrees <= 305) {
      return 'W/NW'
    } else if(degrees > 305 || degrees <= 325) {
      return 'NW'
    } else if(degrees > 325 || degrees <= 345) {
      return 'N/NW'
    }
  }