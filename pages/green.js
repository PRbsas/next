import Layout from '../components/layout'

export default () => (
  <Layout title='Green'>
    <div className='green'>
      <div>Green</div>
      <style jsx>{`
      .green {
        font: 15px Helvetica, Arial, sans-serif;
        background: #00ff00;
        color: #fff;
        padding: 100px;
        text-align: center;
      }
    `}</style>
    </div>
    
  </Layout>
)