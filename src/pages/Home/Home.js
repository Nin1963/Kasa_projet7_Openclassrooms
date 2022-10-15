import '../../App.css'
import bannerHome from '../../assets/img/bannerHome.png'
import '../../components/Banner/Banner.css'
import Card from '../../components/Card/Card'
import '../../components/Card/Card.css'

function Home() {
    return (
        <div classname="product-section">
            <div className="banner banner-home">
                <img className="img-banner" src={bannerHome} alt="Paysage" />
                <p className="name-home">Chez vous, partout et ailleurs</p>
            </div>
            <div className="card-section">
            <Card />
            </div>
        </div>
    )
}

export default Home