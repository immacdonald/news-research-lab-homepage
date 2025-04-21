import type { FC, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%' }}>{children}</main>;
};

export { Layout };
