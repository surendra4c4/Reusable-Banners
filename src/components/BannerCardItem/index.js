// Write your code here.
import './index.css'

const BannerList = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`listItem ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="sm-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerList
