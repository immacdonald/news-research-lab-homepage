import { FC } from 'react';
import { Heading, Page, Section, Text } from 'phantom-library';
import { newsGraphDark } from '@assets';
import { Header } from '@components/page';
import style from './Home.module.scss';

const Home: FC = () => {
    return (
        <Page title="NEWS Research Lab" header={<Header inline pageSpace="overlap" context="dark" dynamicSettings={{ enabled: true, hasBackground: true, inline: false }} />}>
            <Section backgroundImage={newsGraphDark} className={style.hero} context="dark">
                <Heading title="News, Web, & Social Media (NEWS) Research Lab" subtitle="NEWS Lab @ William & Mary" />
            </Section>
            <Section>
                <div className={style.callout}>
                    <Heading minor title="About" />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum sapien placerat, dignissim mauris a, faucibus nisl. Donec imperdiet enim ipsum, at porta enim
                        gravida nec. Ut iaculis, eros nec hendrerit fringilla, leo metus blandit arcu, in posuere sem quam tincidunt felis. Aliquam sit amet blandit urna, semper eleifend dolor. Etiam
                        pellentesque turpis sit amet magna ultrices hendrerit. Integer neque nisi, varius in euismod eget, tristique ut dolor. Mauris sodales, massa at pulvinar sollicitudin, ante nunc
                        convallis ante, eget auctor neque leo porta orci.
                    </Text>
                </div>
                <div className={style.callout}>
                    <Heading minor title="Students" />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum sapien placerat, dignissim mauris a, faucibus nisl. Donec imperdiet enim ipsum, at porta enim
                        gravida nec. Ut iaculis, eros nec hendrerit fringilla, leo metus blandit arcu, in posuere sem quam tincidunt felis. Aliquam sit amet blandit urna, semper eleifend dolor. Etiam
                        pellentesque turpis sit amet magna ultrices hendrerit. Integer neque nisi, varius in euismod eget, tristique ut dolor. Mauris sodales, massa at pulvinar sollicitudin, ante nunc
                        convallis ante, eget auctor neque leo porta orci.
                    </Text>
                </div>
                <div className={style.callout}>
                    <Heading minor title="Faculty" />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum sapien placerat, dignissim mauris a, faucibus nisl. Donec imperdiet enim ipsum, at porta enim
                        gravida nec. Ut iaculis, eros nec hendrerit fringilla, leo metus blandit arcu, in posuere sem quam tincidunt felis. Aliquam sit amet blandit urna, semper eleifend dolor. Etiam
                        pellentesque turpis sit amet magna ultrices hendrerit. Integer neque nisi, varius in euismod eget, tristique ut dolor. Mauris sodales, massa at pulvinar sollicitudin, ante nunc
                        convallis ante, eget auctor neque leo porta orci.
                    </Text>
                </div>
            </Section>
        </Page>
    );
};

export { Home };
