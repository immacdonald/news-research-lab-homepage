import type { FC } from 'react';
import { Box, Button, Heading, Row, Section, tokens, Typography } from 'phantom-library';
import { Layout } from '@components/Layout';
import styles from './View.module.scss';

const NotFound: FC = () => {
    return (
        <Layout>
            <Section background="container">
                <Row>
                    <Box background="content" border padding={tokens.space.lg} className={styles.box}>
                        <Heading subheading="404 Page Not Found Error" align="center" style={{ marginBottom: tokens.space.lg }}>
                            Not Found
                        </Heading>
                        <Typography.Paragraph>
                            Unfortunately, the page you selected cannot be reached. Please try reloading and checking the URL you have searched to confirm it is correctly spelled.
                        </Typography.Paragraph>
                        <Row>
                            <Button link="/" variant="filled" context="primary">
                                Return Home
                            </Button>
                        </Row>
                    </Box>
                </Row>
            </Section>
        </Layout>
    );
};

export { NotFound };
