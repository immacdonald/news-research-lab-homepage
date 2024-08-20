import { Button, Column, Heading, Page, Row, Section, Text } from 'phantom-library';
import { FC } from 'react';
import { Footer, Header } from '@components/page';

const NotFound: FC = () => {
    return (
        <Page title="NEWS Research Lab" header={<Header />} footer={<Footer />}>
            <Section variant="floating">
                <Column>
                    <Heading title="Not Found" align="center" />
                </Column>
                <Text align="center" marginBottom>
                    Unfortunately, the page you entered cannot be found.
                </Text>
                <Row>
                    <Button context="primary" label="Return Home" link="/" visual="filled" />
                </Row>
            </Section>
        </Page>
    );
};

export { NotFound };
