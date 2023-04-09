import React from 'react'
import './whatGPT3.css'
import speed from '../../assets/speed.png'
import artificial from '../../assets/artificial.png'
import userfriendly from '../../assets/userfriendly.png'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__wgpt3 section__margin " id="wgpt3">
      <div className="gpt3__wgpt3-content">
        <div className="gpt3__wgpt3-content__what">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <p>What is Find Your Emp?</p>
        </div>
        <div className="gpt3__wgpt3-content__answer">
          <p>A centralized database that contains various information about prevoius restaurant employees</p>
        </div>
      </div>
      <div className="gpt3__wgpt3-possibility">
        <div className="gpt3__wgpt3-possibility__para ">
          <p>Features of Our Site</p>
        </div>
        {/* <div className="gpt3__wgpt3-possibility__explore">
          <p><a href="#home">Explore our Products</a></p>
        </div> */}
      </div>
      <div className="gpt3__wgpt3-features">
        <div className="gpt3__wgpt3-features__chatbots">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <div className="gpt3__wgpt3-content__logo">

          </div>
          <div className="gpt3__wgpt3-features__chatbots-topic">
            <div className="gpt3__wgpt3-features__chatbots-img">
              <img src={artificial}></img>
            </div>
            <p>AI based identification</p>
          </div>
          <div className="gpt3__wgpt3-features__chatbots-desc">
            <p>Our AI-based employee background verification system is designed to help restaurant managers find the best employees for their branches by automating the screening and verification process. The system uses advanced machine learning algorithms to analyze various data points, such as employment history, education, and criminal records, to provide a comprehensive report on each candidate's background.</p>
          </div>
        </div>
        <div className="gpt3__wgpt3-features__knowledgebase">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <div className="gpt3__wgpt3-features__knowledgebase-topic">
            <div className="gpt3__wgpt3-features__chatbots-img">
              <img src={userfriendly}></img>
            </div>
            <p>User Friendly Platform</p>
          </div>
          <div className="gpt3__wgpt3-features__knowledgebase-desc">
            <p>Our employee background verification system features an easy-to-use interface that simplifies the hiring process for restaurant managers. The user-friendly interface is designed to be intuitive and easy to navigate, allowing managers to quickly access the system and start screening candidates.The interface is optimized for efficiency, with clear and concise instructions that guide managers through each step of the process.  </p>
          </div>
        </div>
        <div className="gpt3__wgpt3-features__education">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <div className="gpt3__wgpt3-features__education-topic">
          <div className="gpt3__wgpt3-features__chatbots-img">
              <img src={speed}></img>
            </div>
            <p>Seamless Experience</p>
          </div>
          <div className="gpt3__wgpt3-features__education-desc">
            <p>Our employee background verification system saves time and reduces manual interference by utilizing advanced AI technology to automate the screening and verification process. The system is designed to process large volumes of data quickly and accurately, eliminating the need for manual data entry and review.Using machine learning algorithms, the system can analyze multiple data points, such as employment history, education,</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3