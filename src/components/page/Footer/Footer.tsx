import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, SimpleFooter, Flex, Column, Row } from 'phantom-library';

const Footer: FC = () => {
    return (
        <SimpleFooter theme="dark">
            <Flex flex={{ base: 'row', xs: 'column' }} gap={{ base: '64px', xs: '8px' }} verticalAlign="start">
                <Column align="start" gap="0">
                    <Typography.Text>
                        <b>About</b>
                    </Typography.Text>
                    <Typography.Text>
                        <i>NEWS Lab studies the web as an entity with a focus on (local) news and vectors of disinformation on social media.</i>
                    </Typography.Text>
                </Column>
                <Column align="start" gap="0">
                    <Typography.Text>
                        <b>Navigation</b>
                    </Typography.Text>
                    <Row>
                        <Column align="start" gap="0">
                            <Link to="/#about">About</Link>
                            <Link to="/#students">Students</Link>
                        </Column>
                        <Column align="start" gap="0">
                            <Link to="/#faculty">Faculty</Link>
                            <Link to="/#tools">Tools & Datasets</Link>
                        </Column>
                    </Row>
                </Column>
            </Flex>
            <Typography.Text styleLinks={false}>
                &copy; {new Date().getFullYear()}{' '}
                <Link to="https://newsresearch.lab.wm.edu" target="_blank">
                    Willam & Mary NEWS Lab
                </Link>
            </Typography.Text>
        </SimpleFooter>
    );
};

export { Footer };
