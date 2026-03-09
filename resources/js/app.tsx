import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import ChatBar from './components/chatbot/ChatBar';

const appName = import.meta.env.VITE_APP_NAME || 'Japanese Car Exporter';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ).catch(() => {
            return import('./pages/errors/NotFound');
        }),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <App {...props} />
                <ChatBar />
            </StrictMode>,
        );
    },
    progress: {
        color: '#FF3636',
        showSpinner: false,
        delay: 100,
    },
});

// This will set light / dark mode on load...
initializeTheme();
