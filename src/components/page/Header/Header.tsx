import { FC, useMemo } from 'react';
import { Button, MenuIcon, Popover, SimpleDynamicHeader, DynamicHeaderProps, useResponsiveContext } from 'phantom-library';
import style from './Header.module.scss';

interface HeaderProps extends DynamicHeaderProps {}

const Header: FC<HeaderProps> = ({ ...props }) => {
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

    return (
        <SimpleDynamicHeader {...props}>
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
        </SimpleDynamicHeader>
    );
};

export { Header };
