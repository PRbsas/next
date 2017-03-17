import Layout from '../components/layout'

export default () => (
  <Layout title='Blue'>
    <div className='blue'>
      <div>Blue</div>
      <style jsx>{`
      .blue {
        font: 15px Helvetica, Arial, sans-serif;
        background: #0000ff;
        color: #fff;
        padding: 100px;
        text-align: center;
      }
    `}</style>
    </div>
    
  </Layout>
)
