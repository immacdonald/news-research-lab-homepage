import { Fragment, useMemo, type FC } from 'react';
import { Column, Heading, orUndefined, Row, Section, StyledImage, StyledLink, tokens, Typography } from 'phantom-library';
import { newsGraphDark, PortraitAlexanderNwala, PortraitGanganiAriyarathne, PortraitGreatnessEmmanuelKing, PortraitIsuruAriyarathne, PotraitIanMacDonald } from '@assets';
import { Layout } from '@components/Layout';
import style from './View.module.scss';

const Home: FC = () => {
    const imageSize = '120px';

    const students = useMemo(
        () => [
            {
                name: 'Gangani Ariyarathne',
                image: PortraitGanganiAriyarathne,
                link: 'https://scholar.google.com/citations?user=QKaDEJAAAAAJ&hl=en',
                status: 'Graduate Student'
            },
            {
                name: 'Isuru Ariyarathne',
                image: PortraitIsuruAriyarathne,
                link: 'https://scholar.google.com/citations?user=nAsNJ_8AAAAJ&hl=en',
                status: 'Graduate Student'
            },
            {
                name: 'Ian MacDonald',
                image: PotraitIanMacDonald,
                link: 'https://ian-macdonald.com',
                status: 'Undergraduate Student'
            },
            {
                name: 'Greatness Emmanuel-King',
                image: PortraitGreatnessEmmanuelKing,
                link: 'https://www.linkedin.com/in/greatness-emmanuel-king-9915b5217/',
                status: 'Lab Alumni'
            }
        ],
        []
    );

    const tools = useMemo(
        () => [
            {
                name: 'agwagram',
                link: 'https://newsresearch.lab.wm.edu/tools/agwagram/',
                description:
                    'agwagram is a web tool that enables researchers and journalists to study a broad spectrum of authentic & inauthentic behaviors of Twitter users to understand the behaviors of online accounts.'
            },
            {
                name: 'Local Memory Project',
                link: 'https://newsresearch.lab.wm.edu/tools/local-memory/',
                description: 'The Local Memory Project is a service designed to help users discover and visualize local media in various US communities.'
            },
            {
                name: 'Coordiscope',
                link: 'https://osome.iu.edu/tools/coordiscope/',
                description: 'Coordiscope is a tool that detects potential coordination between accounts on social media platforms.'
            },
            {
                name: 'StoryGraph',
                link: 'https://newsresearch.lab.wm.edu/tools/storygraph/',
                description: 'StoryGraph provides a collection of tools that analyze the news cycle by computing the similarity of news stories across 17 US news sources.'
            },
            {
                name: 'BLOC',
                link: 'https://github.com/anwala/bloc/',
                description:
                    'The BLOC language framework provides languages that represent the behaviors of social media accounts irrespective of class (e.g. human or cyborg or bot) or intent (malicious or benign).'
            },
            {
                name: 'Sumgram',
                link: 'https://github.com/oduwsdl/sumgram/',
                description: 'Sumgram is a tool that summarizes a collection of text documents by generating the most frequent "sumgrams" (conjoined ngrams) in the collection.'
            }
        ],
        []
    );

    return (
        <Layout>
            <Section backgroundImage={newsGraphDark} className={style.hero} data-theme="dark" parallax id="home">
                <Heading size="major" subheading="NEWS Lab @ William & Mary">
                    News, Web, & Social Media (NEWS) Research Lab
                </Heading>
            </Section>
            <Section id="about">
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
                    <Heading>Students</Heading>

                    {['Graduate Student', 'Undergraduate Student', 'Lab Alumni'].map((group, index) => {
                        const groupStudents = students.filter((student) => student.status === group);
                        if (groupStudents.length === 0) return null;

                        return (
                            <Fragment key={group}>
                                <Typography.Text size="lg" soft>
                                    {group.endsWith('Student') ? `${group}s` : group}
                                </Typography.Text>
                                <Column gap={tokens.space.lg} style={orUndefined(index < 2, { marginBottom: tokens.space.layout.xs })}>
                                    {groupStudents.map((student, index) => (
                                        <Row key={index} align="start" gap={tokens.space.md} style={{ marginTop: tokens.space.md }}>
                                            <StyledImage image={student.image} alt={student.name} round maxWidth={imageSize} />
                                            <Heading size="minor">
                                                <StyledLink to={student.link} external base={null} hover="underline">
                                                    {student.name}
                                                </StyledLink>
                                            </Heading>
                                        </Row>
                                    ))}
                                </Column>
                            </Fragment>
                        );
                    })}
                </div>
            </Section>
            <Section id="faculty">
                <div className={style.callout}>
                    <Heading>Faculty</Heading>
                    <Row align="start" gap={tokens.space.md}>
                        <StyledImage image={PortraitAlexanderNwala} alt="Alexander Nwala" round maxWidth={imageSize} />
                        <Column align="start">
                            <Heading size="minor">
                                <StyledLink to="https://alexandernwala.com/" external base={null} hover="underline">
                                    Dr. Alexander C. Nwala
                                </StyledLink>
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
                    {tools.map((tool, index) => (
                        <Fragment key={index}>
                            <Heading size="minor" style={orUndefined(index > 0, { marginTop: tokens.space.xl })}>
                                <StyledLink to={tool.link} base={null} hover="underline" external>
                                    {tool.name}
                                </StyledLink>
                            </Heading>
                            <Typography.Paragraph>{tool.description}</Typography.Paragraph>
                        </Fragment>
                    ))}
                </div>
            </Section>
        </Layout>
    );
};

export { Home };
