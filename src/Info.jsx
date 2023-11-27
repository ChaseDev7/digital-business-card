import chaseLogo from './images/chasedev7-logo.jpg'
import mailLogo from './images/Mail.png'

export default function Info() {
  return (
    <>
      <div className="info-container">
        <img className="chase-logo" src={chaseLogo} />
        <div className="personal-info">
          <h2>ChaseDev7</h2>
          <p className="job-title">Frontend Web Developer</p>
          <p className="job-site">chasedev.website</p>
        </div>
        <div className="button-container">
          <button className="mail-button"><img className="mail-logo" src={mailLogo} />Email</button>
        </div>
      </div>
    </>
  )
}