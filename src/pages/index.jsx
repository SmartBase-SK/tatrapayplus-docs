import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import JsSvg from './assets/js.svg';
import PythonSvg from './assets/python.svg';
import PhpSvg from './assets/php.svg';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Explore guides, code samples, and API reference documentation for tatrapay+ payment gateway.">
      <HomepageHeader />
        <h2 className={"platforms__title"}>Choose your platform</h2>
      <div className="platforms">
          <Link href={'/docs/libraries/node/v1.0.0'} className="platforms__item">
            <JsSvg></JsSvg>
          </Link>
          <Link href={'/docs/libraries/python/v1.0.0'} className="platforms__item">
              <PythonSvg></PythonSvg>
          </Link>
          <Link href={'/docs/libraries/php/v1.0.0'} className="platforms__item">
              <PhpSvg></PhpSvg>
          </Link>
      </div>
      <main>
      </main>
    </Layout>
  );
}
