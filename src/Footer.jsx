import twitterLogo from './images/Twitter Icon.png'
import githubLogo from './images/Github Icon.png'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <img className="twitter-logo" src={twitterLogo} />
        <img className="github-logo" src={githubLogo} />
      </div>
    </>
  )
}