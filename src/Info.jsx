import chaseLogo from './images/chasedev7-logo.jpg'
import mailLogo from './images/Mail.png'
import linkedinLogo from './images/linkedin-logo.png'

export default function Info() {
  return (
    <>
      <div className="container">
        <img className="chase-logo" src={chaseLogo} />
        <div className="personal-info">
          <h2>ChaseDev7</h2>
          <p className="job-title">Junior React Developer</p>
          <p className="job-site">chasedev.website</p>
        </div>
        <div className="button-container">
          <button className="mail-button"><img className="mail-logo" src={mailLogo} />Email</button>
          <button className="linkedin-button"><img className="linkedin-logo" src={linkedinLogo} />LinkedIn</button>
        </div>
      </div>
    </>
  )
}