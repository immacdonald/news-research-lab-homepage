import type { FC } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { StyledApp } from 'phantom-library';
import { Footer, Header } from '@components/page';
import { Home, NotFound } from '@views';
import { useAnalytics } from './hooks/useAnalytics';

const RoutedApp: FC = () => {
    useAnalytics();

    return (
        <StyledApp rootId="root" fillViewport>
            <Header hasBackground />
            <Outlet />
            <Footer />
        </StyledApp>
    );
};

const router = createBrowserRouter([
    {
        element: <RoutedApp />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export { App };
