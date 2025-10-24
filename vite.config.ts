import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'hg-storybook',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({ rollupTypes: true }),
    svgr({
      svgrOptions: {
        template: ({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) => {
          return tpl`
            ${imports}
            import PropTypes from 'prop-types';
            ${interfaces}

            function ${componentName}(${props}) {
              return ${jsx};
            }

            ${componentName}.propTypes = {
              title: PropTypes.string,
            };

            ${exports}
            `;
        },
        expandProps: 'start',
        svgProps: {
          color: '{props.color}',
          width: '{props.width}',
          height: '{props.height}',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
    },
  },
});
