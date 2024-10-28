import { StyleConfiguration, StyledApp } from 'phantom-library';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { FC } from 'react';
import { Footer, Header } from '@components/page';
import { Home, NotFound } from '@views';
import { useAnalytics } from './hooks/useAnalytics';

const styleConfiguration: StyleConfiguration = {
    page: {
        defaultHeader: <Header hasBackground pageSpace="pad" />,
        defaultFooter: <Footer />
    }
};

const RoutedApp: FC = () => {
    useAnalytics();

    return (
        <StyledApp anchors modals banners configuration={styleConfiguration}>
            <Outlet />
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
