import type { DynamicHeaderProps } from 'phantom-library';
import type { FC } from 'react';
import { useMemo } from 'react';
import { Button, MenuIcon, Popover, useResponsiveContext, DynamicHeader, StyledLink } from 'phantom-library';
import style from './Header.module.scss';

interface HeaderProps extends DynamicHeaderProps {}

const Header: FC<HeaderProps> = ({ ...props }) => {
    const { windowSize } = useResponsiveContext();

    const pages = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/#about' },
        { label: 'Students', link: '/#students' },
        { label: 'Faculty', link: '/#faculty' },
        { label: 'Tools & Datasets', link: '/#tools' }
    ];

    const mobileHeader = windowSize.width < 900;

    const navContent = useMemo(
        () => (
            <nav className={style.links}>
                {pages.map((page, index: number) => {
                    return mobileHeader ? (
                        <Button link={page.link} variant="ghost" key={index}>
                            {page.label}
                        </Button>
                    ) : (
                        <StyledLink to={page.link} base="bold" hover="subtle" key={index}>
                            {page.label}
                        </StyledLink>
                    );
                })}
            </nav>
        ),
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
                        <Popover direction="bottom" content={navContent}>
                            <Button variant="text" Icon={MenuIcon} />
                        </Popover>
                    ) : (
                        navContent
                    )}
                </div>
            </div>
        </DynamicHeader>
    );
};

export { Header };
