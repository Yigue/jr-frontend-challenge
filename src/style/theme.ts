import { defaultConfig, defineLayerStyles } from "@chakra-ui/react"

const layerStyles = defineLayerStyles({
    components: {
        Button: {
          defaultProps: {
            colorScheme: 'brand',
          },
        },
        Card: {
          baseStyle: {
            container: {
              borderRadius: 'lg',
              boxShadow: 'sm',
            },
          },
        },
      },
})
import { createSystem, defineConfig } from "@chakra-ui/react"


const config = defineConfig({
  theme: {
    layerStyles,
  },
})

export default createSystem(defaultConfig, config)