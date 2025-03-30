export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    },
    pagination: {
      slots: {
        root: 'p-1',
        list: 'flex items-center gap-1',
        ellipsis: 'pointer-events-none',
        label: 'min-w-5 text-center',
        first: '',
        prev: '',
        item: 'p-1',
        next: '',
        last: ''
      }
    }
  }
})
