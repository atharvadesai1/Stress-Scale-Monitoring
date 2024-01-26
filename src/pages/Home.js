import React from 'react'
import Layout from '../components/Layout'
import '../styles/Home.css'
import ImageCenter from '../images/bag.png'

function Home() {
  return (
    <Layout>
        <div>
        <div className='imagecenter' style={{backgroundImage:`url(${ImageCenter})`}}>
          {/* <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ipsam sapiente magni ab fugiat? Eligendi sed sapiente doloribus praesentium laudantium doloremque dolorum pariatur aspernatur soluta quis, voluptates, ex necessitatibus architecto!</h4> */}
        </div>
        </div>
    </Layout>
  )
}

export default Home;
