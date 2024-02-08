import React from 'react'
import Layout from '../components/Layout'
import '../styles/Test.css'

function Info() {
  return (
    <Layout className='bg'>
        <div>
            <h1 className="hede">General Information</h1>
            <div class="flex-container">
                <div class="flex-box"></div>
                <div class="flex-box"></div>
                <div class="flex-box"></div>
            </div>
        </div>
    </Layout>    
  )
}

export default Info
