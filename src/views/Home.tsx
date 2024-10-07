import { FC } from 'react';
import { Column, Heading, Page, Row, Section, StyledImage, Typography } from 'phantom-library';
import { Link } from 'react-router-dom';
import { newsGraphDark, PortraitAlexanderNwala, PortraitGanganiAriyarathne, PortraitGreatnessEmmanuelKing, PortraitIsuruAriyarathne, PotraitIanMacDonald } from '@assets';
import { Header } from '@components/page';
import { useAnalytics } from '@hooks';
import style from './Home.module.scss';

const Home: FC = () => {
    useAnalytics();

    return (
        <Page title="NEWS Research Lab" header={<Header inline pageSpace="overlap" context="dark" dynamicSettings={{ enabled: true, hasBackground: true, inline: false }} />}>
            <Section backgroundImage={newsGraphDark} className={style.hero} context="dark" parallax id="home">
                <Heading major subtitle="NEWS Lab @ William & Mary">
                    News, Web, & Social Media (NEWS) Research Lab
                </Heading>
            </Section>
            <Section>
                <div className={style.callout}>
                    <Heading id="about">About</Heading>
                    <Typography.Paragraph>
                        The News Web and Social Media (NEWS) research lab at William & Mary. NEWS Lab studies the web as an entity with a focus on (local) news and vectors of disinformation on social
                        media.
                    </Typography.Paragraph>
                </div>
                <div className={style.callout}>
                    <Heading subtitle="Graduate Students" id="students">
                        Students
                    </Heading>
                    <Column gap="32px">
                        <Row align="start">
                            <StyledImage image={PortraitGanganiAriyarathne} alt="Gangani Ariyarathne" round maxWidth={120} />
                            <Heading minor>
                                <Link to="https://scholar.google.com/citations?user=QKaDEJAAAAAJ&hl=en" target="_blank" rel="noreferrer">
                                    Gangani Ariyarathne
                                </Link>
                            </Heading>
                        </Row>
                        <Row align="start">
                            <StyledImage image={PortraitIsuruAriyarathne} alt="Isuru Ariyarathne" round maxWidth={120} />
                            <Heading minor>
                                <Link to="https://scholar.google.com/citations?user=nAsNJ_8AAAAJ&hl=en" target="_blank" rel="noreferrer">
                                    Isuru Ariyarathne
                                </Link>
                            </Heading>
                        </Row>
                        <Row align="start">
                            <StyledImage image={PortraitGreatnessEmmanuelKing} alt="Greatness Emmanuel-King" round maxWidth={120} />
                            <Heading minor>
                                <Link to="https://www.linkedin.com/in/greatness-emmanuel-king-9915b5217/" target="_blank" rel="noreferrer">
                                    Greatness Emmanuel-King
                                </Link>
                            </Heading>
                        </Row>
                    </Column>
                    <br />
                    <br />
                    <Heading subtitle="Undergraduate Students" />
                    <Row align="start">
                        <StyledImage image={PotraitIanMacDonald} alt="Ian MacDonald" round maxWidth={120} />
                        <Heading minor>
                            <Link to="https://ian-macdonald.com" target="_blank" rel="noreferrer">
                                Ian MacDonald
                            </Link>
                        </Heading>
                    </Row>
                </div>
                <div className={style.callout}>
                    <Heading id="faculty">Faculty</Heading>
                    <Row align="start">
                        <StyledImage image={PortraitAlexanderNwala} alt="Alexander Nwala" round maxWidth={120} />
                        <Column align="start">
                            <Heading minor>
                                <Link to="https://alexandernwala.com/" target="_blank" rel="noreferrer">
                                    Dr. Alexander C. Nwala
                                </Link>
                            </Heading>
                            <Typography.Paragraph>
                                Research interests: <i>Social media/network analysis, computational social science, web/data science, web archiving, (local)news, and NLP</i>.
                            </Typography.Paragraph>
                        </Column>
                    </Row>
                </div>
                <div className={style.callout}>
                    <Heading id="tools">Tools & Datasets</Heading>
                    <Heading minor>
                        <Link to="https://newsresearch.lab.wm.edu/tools/agwagram/" target="_blank" rel="noreferrer">
                            Agwagram
                        </Link>
                    </Heading>
                    <Typography.Paragraph>
                        agwagram is a web tool that enables researchers and journalists to study a broad spectrum of authentic & inauthentic behaviors of Twitter users to understand the behaviors of
                        online accounts.
                    </Typography.Paragraph>
                    <br />
                    <Heading minor>
                        <Link to="https://newsresearch.lab.wm.edu/tools/local-memory/" target="_blank" rel="noreferrer">
                            Local Memory Project
                        </Link>
                    </Heading>
                    <Typography.Paragraph>The Local Memory Project is a service designed to help users discover and visualize local media in various US communities.</Typography.Paragraph>
                    <br />
                    <Heading minor>
                        <Link to="https://osome.iu.edu/tools/coordiscope/" target="_blank" rel="noreferrer">
                            Coordiscope
                        </Link>
                    </Heading>
                    <Typography.Paragraph>Coordiscope is a tool that detects potential coordination between accounts on social media platforms.</Typography.Paragraph>
                    <br />
                    <Heading minor>
                        <Link to="https://web.archive.org/storygraph/" target="_blank" rel="noreferrer">
                            StoryGraph
                        </Link>
                    </Heading>
                    <Typography.Paragraph>
                        StoryGraph provides a collection of tools that analyze the news cycle by computing the similarity of news stories across 17 US news sources.
                    </Typography.Paragraph>
                    <br />
                    <Heading minor>
                        <Link to="https://github.com/anwala/bloc/" target="_blank" rel="noreferrer">
                            BLOC
                        </Link>
                    </Heading>
                    <Typography.Paragraph>
                        The BLOC language framework provides languages that represent the behaviors of social media accounts irrespective of class (e.g., human or cyborg or bot) or intent (e.g.,
                        malicious or benign).
                    </Typography.Paragraph>
                    <br />
                    <Heading minor>
                        <Link to="https://github.com/oduwsdl/sumgram/" target="_blank" rel="noreferrer">
                            Sumgram
                        </Link>
                    </Heading>
                    <Typography.Paragraph>
                        Sumgram is a tool that summarizes a collection of text documents by generating the most frequent "sumgrams" (conjoined ngrams) in the collection.
                    </Typography.Paragraph>
                </div>
            </Section>
        </Page>
    );
};

export { Home };
