import bannerHome from '../../assets/img/banner.png'
import bannerMobile from '../../assets/img/banner-mobile.png'
import '../Home/Home.css'
import Card from '../../components/Card/Card'
import '../../components/Card/Card.css'

function Home() {
    return (
        <div className="product-section">
            <div className="banner banner-home">
                <img className="img-banner" src={bannerHome} alt="Paysage" />
                <img className="img-banner-mobile" src={bannerMobile} alt="Paysage" />
                <p className="name-home">Chez vous, partout et ailleurs</p>
            </div>
            <div className="card-section">
            <Card />
            </div>
        </div>
    )
}

export default Home