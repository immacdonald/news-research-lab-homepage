import type { FC } from 'react';
import { Typography, Flex, Column, Row, StyledFooter, tokens, StyledLink } from 'phantom-library';

const Footer: FC = () => {
    return (
        <StyledFooter theme="dark">
            <Flex flex={{ base: 'row', xs: 'column' }} gap={{ base: tokens.space.xl, xs: tokens.space.md }} style={{ marginBottom: tokens.space.sm }} verticalAlign="start" block>
                <Column align="start" block>
                    <Typography.Text>
                        <b>About</b>
                    </Typography.Text>
                    <Typography.Text>
                        <i>NEWS Lab studies the web as an entity with a focus on (local) news and vectors of disinformation on social media.</i>
                    </Typography.Text>
                </Column>
                <Column align="start" block>
                    <Typography.Text>
                        <b>Navigation</b>
                    </Typography.Text>
                    <Row>
                        <Column align="start" block>
                            <StyledLink base={null} to="/#about">
                                About
                            </StyledLink>
                            <StyledLink base={null} to="/#students">
                                Students
                            </StyledLink>
                        </Column>
                        <Column align="start" block>
                            <StyledLink base={null} to="/#faculty">
                                Faculty
                            </StyledLink>
                            <StyledLink base={null} to="/#tools">
                                Tools & Datasets
                            </StyledLink>
                        </Column>
                    </Row>
                </Column>
            </Flex>
            <Typography.Text>
                &copy; {new Date().getFullYear()}{' '}
                <StyledLink to="https://newsresearch.lab.wm.edu" external base={null}>
                    Willam & Mary NEWS Lab
                </StyledLink>
            </Typography.Text>
        </StyledFooter>
    );
};

export { Footer };
