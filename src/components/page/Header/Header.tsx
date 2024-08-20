import { FC } from 'react';
import { Button, MoonFilledIcon, SunFilledIcon, useResponsiveContext } from 'phantom-library';
import clsx from 'clsx';
import style from './Header.module.scss';

interface HeaderProps {
    inline?: boolean;
}

const Header: FC<HeaderProps> = ({ inline = false }) => {
    const { theme, toggleTheme } = useResponsiveContext();

    const pages = [
        { label: 'Home', link: '/' },
        { label: 'Students', link: '/' },
        { label: 'Research', link: '/' },
        { label: 'Publications', link: '/' },
        { label: 'Tools & Datasets', link: '/' },
        { label: 'Blog', link: '/' }
    ];

    const headerClasses = clsx(style.header, {
        [style.inline]: inline
    });

    return (
        <header className={headerClasses} data-context={inline ? 'dark' : undefined}>
            <div className={style.content}>
                <Button visual="text" label="NEWS Lab" link="/" />
                <div className={style.navigation}>
                    <nav className={style.links}>
                        {pages.map((page, index: number) => (
                            <Button label={page.label} visual="text" key={index} />
                        ))}

                        <Button rounded visual="text" onClick={() => toggleTheme()} Icon={theme == 'light' ? SunFilledIcon : MoonFilledIcon} />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export { Header };
