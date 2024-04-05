// Styles
import 'vuetify/styles'

// Imports
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'
import colors from 'vuetify/util/colors'

// Types
import type { App } from 'vue'

export function installVuetify(app: App) {
    const vuetify = createVuetify({
        components: {
            ...components,
            ...labs,
        },
        directives,
        defaults: {
            global: {
                eager: false,
            },
        },
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: colors.red.darken1, // #E53935
                        secondary: colors.red.lighten4, // #FFCDD2

                    }
                },
            },
        },
    })
    app.use(vuetify)
}