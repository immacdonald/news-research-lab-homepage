import type { DynamicHeaderProps } from 'phantom-library';
import type { FC } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Button, MenuIcon, useResponsiveContext, DynamicHeader, StyledLink, tokens, pxToInt, orUndefined, useOutsideClick } from 'phantom-library';
import style from './Header.module.scss';

interface HeaderProps extends DynamicHeaderProps {}

const sidebarDebounce = 500;

const Header: FC<HeaderProps> = ({ ...props }) => {
    const { windowSize } = useResponsiveContext();
    const ref = useRef<HTMLDivElement>(null);
    const lastToggleTime = useRef<number>(0);
    const [sidebarActive, setSidebarActive] = useState<boolean>(false);

    const setSidebar = useCallback((state: boolean) => {
        const now = Date.now();
        if (now - lastToggleTime.current > sidebarDebounce) {
            setSidebarActive(state);
            lastToggleTime.current = now;
        }
    }, []);

    useOutsideClick(ref, () => {
        if (sidebarActive) {
            setSidebar(false);
        }
    });

    const mobileHeader = windowSize.width < pxToInt(tokens.screen.sm);

    const pages = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/#about' },
        { label: 'Students', link: '/#students' },
        { label: 'Faculty', link: '/#faculty' },
        { label: 'Tools & Datasets', link: '/#tools' }
    ];

    const navContent = useMemo(
        () =>
            pages.map((page, index: number) => {
                return (
                    <StyledLink to={page.link} base={null} hover="subtle" key={index} onClick={() => setSidebar(false)}>
                        {page.label}
                    </StyledLink>
                );
            }),
        [mobileHeader]
    );

    return (
        <DynamicHeader {...props}>
            <div className={style.content}>
                <StyledLink to="/" base="bold" hover="subtle">
                    NEWS Lab
                </StyledLink>
                <div className={style.navigation}>
                    {mobileHeader ? (
                        <>
                            <Button variant="text" Icon={MenuIcon} className={style.menuButton} onClick={() => setSidebar(!sidebarActive)} />
                            <div className={style.sidebar} data-active={orUndefined(sidebarActive, '')} ref={ref}>
                                {navContent}
                            </div>
                        </>
                    ) : (
                        <nav className={style.links}>{navContent}</nav>
                    )}
                </div>
            </div>
        </DynamicHeader>
    );
};

export { Header };
