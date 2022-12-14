import Head from 'next/head'
import Image from 'next/image'
import ProgressBarv1 from '../components/progressBars/ProgressBarv1'
import ProgressBarv2 from '../components/progressBars/ProgressBarV2'
import ProgressLine from '../components/progressBars/ProgressLine'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ProgressBarv1 value={65} />
        <ProgressBarv2 value={65} text="next js" animName='next' />
        <ProgressLine name='html' value={95} delay={0.2} />
        <ProgressLine name='html' value={15} delay={0.2} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
