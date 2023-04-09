import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature';

const Features = () => {
  return (
    <div className="gpt3__features section__padding " id="features">
      <div className="gpt3__features-topic">
        <h1 >Features of Employee categorizer</h1>
        <p></p>
      </div>
      <div className="gpt3__features-feature">
        <Feature title={"View Reviews from other hotels"} text={"Before deciding whether to employ an employee, HR can look at the reviews given to the current employee by other restaurant branches for better decision making"} />
        <Feature title={"Do Background Verification"} text={"HR can get insights about employee's background by looking at the background information of employee uploaded by various restaurants"} />
        <Feature title={"Improve your security"} text={"HR can carefully verify each and every employee through real time photo analysis of employee before hiring them"} />
        <Feature title={"Push notifications for red flagged employees"} text={"When an employee is marked as dangerous/hateful by a given restaurant chain, instant push notifications are send to the HRs to warn them"} />
      </div>
    </div>
  )
}

export default Features