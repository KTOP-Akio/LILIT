import { createMantineTheme } from '@mantine/core';

export default createMantineTheme({
  theme: {
    primaryColor: '#333',
    secondaryColor: '#666',
  },
  components: {
    Button: {
      styles: {
        root: {
          fontSize: '18px',
        },
      },
    },
  },
});
