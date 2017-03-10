import Link from 'next/link'
export default () => (
  <div className='hello'>
    <div>Hello World. <Link href='/about'><a>About</a></Link></div>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
  </div>
)
