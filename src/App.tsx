import { StyledApp } from 'phantom-library';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { FC } from 'react';
import { Home, NotFound } from '@views';

const router = createBrowserRouter([
    {
        element: (
            <StyledApp anchors modals banners>
                <Outlet />
            </StyledApp>
        ),
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
