import { Button, Column, Heading, Page, Row, Section, Text } from 'phantom-library';
import { FC } from 'react';
import { Footer, Header } from '@components/page';

const NotFound: FC = () => {
    return (
        <Page title="NEWS Research Lab" header={<Header />} headerSpace="pad" footer={<Footer />}>
            <Section variant="floating" hasBackground>
                <Column>
                    <Heading title="Not Found" subtitle="404 Page Not Found Error" align="center" />
                </Column>
                <Text marginBottom>Unfortunately, the page you selected cannot be reached. Please try reloading and checking the URL you have searched to confirm it is correctly spelled.</Text>
                <Row>
                    <Button label="Return Home" link="/" visual="filled" context="primary" />
                </Row>
            </Section>
        </Page>
    );
};

export { NotFound };
