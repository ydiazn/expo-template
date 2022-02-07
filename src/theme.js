import { extendTheme } from 'native-base';


const config = {
  useSystemColorMode: false,
};


const components = {
  Flex: {
    variants: {
      body: () => ({
        p: 2,
      })
    }
  }
}


const theme = extendTheme({ config, components });


export default theme;

