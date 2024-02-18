import React from 'react'
import Layout from '../components/Layout'
import '../styles/Home.css'
import '../styles/Test.css'


function Chatbot() {
  return (
    <div>
      <Layout>
      <div className="chatbotkadabba">
        <h2 style={{textAlign:'center', margin:'5px'}} className='hedd'>Chat With Me</h2><br />
        <iframe
            className='chatbotlink'
            title='chatbott'
            src="https://www.chatbase.co/chatbot-iframe/AaHHLpt2CiUtroCKL4iPp"
            frameborder="0"
        ></iframe>
        </div>
      </Layout>
    </div>
  )
}

export default Chatbot
