// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    repOff: boolean

    colors: {
      main: string
      secondary: string
    }
  }
}
