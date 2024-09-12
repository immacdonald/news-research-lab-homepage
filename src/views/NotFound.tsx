import { Button, Column, Heading, Page, Row, Section, Typography } from 'phantom-library';
import { FC } from 'react';

const NotFound: FC = () => {
    return (
        <Page title="NEWS Research Lab">
            <Section variant="floating" hasBackground>
                <Column>
                    <Heading subtitle="404 Page Not Found Error" align="center">
                        Not Found
                    </Heading>
                </Column>
                <Typography.Paragraph>
                    Unfortunately, the page you selected cannot be reached. Please try reloading and checking the URL you have searched to confirm it is correctly spelled.
                </Typography.Paragraph>
                <Row>
                    <Button link="/" visual="filled" context="primary">
                        Return Home
                    </Button>
                </Row>
            </Section>
        </Page>
    );
};

export { NotFound };
