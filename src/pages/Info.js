import React from 'react'
import Layout from '../components/Layout'
import '../styles/Test.css'
import mountain from '../images/mountain.jpg'

function Info() {
  return (
    <Layout className='bg'>
        <div>
            <h1 className="hede">General Information</h1>
            <div className="flex-container">
                <div className="flex-box">
                  <div><h2 style={{textAlign:'center'}}>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum quasi vitae aliquid rerum esse repellendus iure eveniet praesentium nulla nobis officia est, delectus magni sed, enim laudantium autem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto nihil quibusdam provident molestiae quas perferendis libero ducimus. Blanditiis velit, reiciendis nobis voluptas dolor enim. Ad commodi fugiat rerum perferendis!</p>
                  </div>
                  <div>
                  <img src={mountain} alt="pick" style={{width: '500px',height: '350px'}}/>
                  </div>
                </div>
                <div className="flex-box">
                  <div>
                  <img src={mountain} alt="pick" style={{width: '500px',height: '350px'}}/>
                  </div>
                  <div><h2 style={{textAlign:'center'}}>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum quasi vitae aliquid rerum esse repellendus iure eveniet praesentium nulla nobis officia est, delectus magni sed, enim laudantium autem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto nihil quibusdam provident molestiae quas perferendis libero ducimus. Blanditiis velit, reiciendis nobis voluptas dolor enim. Ad commodi fugiat rerum perferendis!</p>
                  </div>
                </div>
                <div className="flex-box">
                  <div><h2 style={{textAlign:'center'}}>Heading</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum quasi vitae aliquid rerum esse repellendus iure eveniet praesentium nulla nobis officia est, delectus magni sed, enim laudantium autem nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto nihil quibusdam provident molestiae quas perferendis libero ducimus. Blanditiis velit, reiciendis nobis voluptas dolor enim. Ad commodi fugiat rerum perferendis!</p>
                  </div>
                  <div>
                    <img src={mountain} alt="pick" style={{width: '500px',height: '350px'}}/>
                  </div>
                </div>
            </div>
        </div>
    </Layout>    
  )
}

export default Info
