import { FC, useMemo } from 'react';
import { Button, MenuIcon, Popover, useResponsiveContext } from 'phantom-library';
import clsx from 'clsx';
import style from './Header.module.scss';

interface HeaderProps {
    inline?: boolean;
}

const Header: FC<HeaderProps> = ({ inline = false }) => {
    const { windowSize } = useResponsiveContext();

    const pages = [
        { label: 'Home', link: '/' },
        { label: 'Students', link: '/' },
        { label: 'Research', link: '/' },
        { label: 'Publications', link: '/' },
        { label: 'Tools & Datasets', link: '/' },
        { label: 'Blog', link: '/' }
    ];

    const mobileHeader = windowSize.width < 900;

    const navContent = useMemo(
        () => (
            <nav className={style.links}>
                {pages.map((page, index: number) => (
                    <Button label={page.label} link={page.link} visual={mobileHeader ? 'ghost' : 'text'} key={index} />
                ))}
            </nav>
        ),
        [mobileHeader]
    );

    const headerClasses = clsx(style.header, {
        [style.inline]: inline
    });

    return (
        <header className={headerClasses} data-context={inline ? 'dark' : undefined}>
            <div className={style.content}>
                <Button visual="text" label="NEWS Lab" link="/" />
                <div className={style.navigation}>
                    {mobileHeader ? (
                        <Popover direction="bottom" content={navContent}>
                            <Button visual="ghost" Icon={MenuIcon} />
                        </Popover>
                    ) : (
                        navContent
                    )}
                </div>
            </div>
        </header>
    );
};

export { Header };
