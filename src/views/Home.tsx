import type { FC } from 'react';
import { Column, Heading, Row, Section, StyledImage, tokens, Typography, UnstyledLink } from 'phantom-library';
import { newsGraphDark, PortraitAlexanderNwala, PortraitGanganiAriyarathne, PortraitGreatnessEmmanuelKing, PortraitIsuruAriyarathne, PotraitIanMacDonald } from '@assets';
import { Layout } from '@components/Layout';
import style from './View.module.scss';

const Home: FC = () => {
    const imageSize = '120px';

    return (
        <Layout>
            <Section backgroundImage={newsGraphDark} className={style.hero} data-theme="dark" parallax id="home">
                <Heading size="major" subheading="NEWS Lab @ William & Mary">
                    News, Web, & Social Media (NEWS) Research Lab
                </Heading>
            </Section>
            <Section id='about'>
                <div className={style.callout}>
                    <Heading>About</Heading>
                    <Typography.Paragraph>
                        The News Web and Social Media (NEWS) research lab at William & Mary. NEWS Lab studies the web as an entity with a focus on (local) news and vectors of disinformation on social
                        media.
                    </Typography.Paragraph>
                </div>
            </Section>
            <Section id="students">
                <div className={style.callout}>
                    <Heading subheading="Graduate Students">
                        Students
                    </Heading>
                    <Column gap={tokens.space.lg}>
                        <Row align="start" gap={tokens.space.md} style={{ marginTop: tokens.space.md }}>
                            <StyledImage image={PortraitGanganiAriyarathne} alt="Gangani Ariyarathne" round maxWidth={imageSize} />
                            <Heading size="minor">
                                <UnstyledLink to="https://scholar.google.com/citations?user=QKaDEJAAAAAJ&hl=en" external>
                                    Gangani Ariyarathne
                                </UnstyledLink>
                            </Heading>
                        </Row>
                        <Row align="start" gap={tokens.space.md}>
                            <StyledImage image={PortraitIsuruAriyarathne} alt="Isuru Ariyarathne" round maxWidth={imageSize} />
                            <Heading size="minor">
                                <UnstyledLink to="https://scholar.google.com/citations?user=nAsNJ_8AAAAJ&hl=en" external>
                                    Isuru Ariyarathne
                                </UnstyledLink>
                            </Heading>
                        </Row>
                        <Row align="start" gap={tokens.space.md}>
                            <StyledImage image={PortraitGreatnessEmmanuelKing} alt="Greatness Emmanuel-King" round maxWidth={imageSize} />
                            <Heading size="minor">
                                <UnstyledLink to="https://www.linkedin.com/in/greatness-emmanuel-king-9915b5217/" external>
                                    Greatness Emmanuel-King
                                </UnstyledLink>
                            </Heading>
                        </Row>
                    </Column>
                    <br />
                    <br />
                    <Heading subheading="Undergraduate Students" />
                    <Row align="start" gap={tokens.space.md} style={{ marginTop: tokens.space.md }}>
                        <StyledImage image={PotraitIanMacDonald} alt="Ian MacDonald" round maxWidth={imageSize} />
                        <Heading size="minor">
                            <UnstyledLink to="https://ian-macdonald.com" external>
                                Ian MacDonald
                            </UnstyledLink>
                        </Heading>
                    </Row>
                </div>
            </Section>
            <Section id="faculty">
                <div className={style.callout}>
                    <Heading>Faculty</Heading>
                    <Row align="start" gap={tokens.space.md}>
                        <StyledImage image={PortraitAlexanderNwala} alt="Alexander Nwala" round maxWidth={imageSize} />
                        <Column align="start">
                            <Heading size="minor">
                                <UnstyledLink to="https://alexandernwala.com/" external>
                                    Dr. Alexander C. Nwala
                                </UnstyledLink>
                            </Heading>
                            <Typography.Paragraph>
                                Research interests: <i>Social media/network analysis, computational social science, web/data science, web archiving, (local) news, and NLP</i>.
                            </Typography.Paragraph>
                        </Column>
                    </Row>
                </div>
            </Section>
            <Section id="tools">
                <div className={style.callout}>
                    <Heading>Tools & Datasets</Heading>
                    <Heading size="minor">
                        <UnstyledLink to="https://newsresearch.lab.wm.edu/tools/agwagram/" external>
                            Agwagram
                        </UnstyledLink>
                    </Heading>
                    <Typography.Paragraph>
                        agwagram is a web tool that enables researchers and journalists to study a broad spectrum of authentic & inauthentic behaviors of Twitter users to understand the behaviors of
                        online accounts.
                    </Typography.Paragraph>
                    <br />
                    <Heading size="minor">
                        <UnstyledLink to="https://newsresearch.lab.wm.edu/tools/local-memory/" external>
                            Local Memory Project
                        </UnstyledLink>
                    </Heading>
                    <Typography.Paragraph>The Local Memory Project is a service designed to help users discover and visualize local media in various US communities.</Typography.Paragraph>
                    <br />
                    <Heading size="minor">
                        <UnstyledLink to="https://osome.iu.edu/tools/coordiscope/" external>
                            Coordiscope
                        </UnstyledLink>
                    </Heading>
                    <Typography.Paragraph>Coordiscope is a tool that detects potential coordination between accounts on social media platforms.</Typography.Paragraph>
                    <br />
                    <Heading size="minor">
                        <UnstyledLink to="https://newsresearch.lab.wm.edu/tools/storygraph/" external>
                            StoryGraph
                        </UnstyledLink>
                    </Heading>
                    <Typography.Paragraph>
                        StoryGraph provides a collection of tools that analyze the news cycle by computing the similarity of news stories across 17 US news sources.
                    </Typography.Paragraph>
                    <br />
                    <Heading size="minor">
                        <UnstyledLink to="https://github.com/anwala/bloc/" external>
                            BLOC
                        </UnstyledLink>
                    </Heading>
                    <Typography.Paragraph>
                        The BLOC language framework provides languages that represent the behaviors of social media accounts irrespective of class (e.g. human or cyborg or bot) or intent (malicious or
                        benign).
                    </Typography.Paragraph>
                    <br />
                    <Heading size="minor">
                        <UnstyledLink to="https://github.com/oduwsdl/sumgram/" external>
                            Sumgram
                        </UnstyledLink>
                    </Heading>
                    <Typography.Paragraph>
                        Sumgram is a tool that summarizes a collection of text documents by generating the most frequent "sumgrams" (conjoined ngrams) in the collection.
                    </Typography.Paragraph>
                </div>
            </Section>
        </Layout>
    );
};

export { Home };
