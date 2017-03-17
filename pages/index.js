import Layout from '../components/layout'

export default () => (
  <Layout title='Red'>
    <div className='red'>
      <div>Red</div>
      <style jsx>{`
      .red {
        font: 15px Helvetica, Arial, sans-serif;
        background: #ff0000;
        color: #fff;
        padding: 100px;
        text-align: center;
      }
    `}</style>
    </div>

  </Layout>
)
