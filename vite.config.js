import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// Import our custom CSS
import '~resources/scss/app.scss';

const path = require('path');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],

    // Aggiungo un alias per la cartella rescources
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~resources': '/resources/'
        }
   },
});
