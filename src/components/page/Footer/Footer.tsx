import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Text, SimpleFooter } from 'phantom-library';

const Footer: FC = () => {
    return (
        <SimpleFooter topBorder>
            <Text as="span">
                &copy; {new Date().getFullYear()}{' '}
                <Link to="https://www.wm.edu" target="_blank">
                    Willam & Mary
                </Link>{' '}
                <Link to="/" target="_blank">
                    NEWS Lab
                </Link>
            </Text>
        </SimpleFooter>
    );
};

export { Footer };
