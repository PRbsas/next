import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />    
    </Head>
    <header className='center'>
      <nav>
        <Link href='/'><a>Red</a></Link> |
        <Link href='/green'><a>Green</a></Link> |
        <Link href='/blue'><a>Blue</a></Link>
      </nav>
    </header>

    { children }

    <footer className='center'>
      This stays
    </footer>
    <style jsx>{`
      .center {
        font: 15px Helvetica, Arial, sans-serif;
        text-align: center;
      }
    `}</style>
  </div>
)
