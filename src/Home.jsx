import Card from './common/Card'
import angular_img from "./assets/angular.png"
import react_img from "./assets/react.svg"
import mongodb_img from "./assets/mongodb.png"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className='heading-home'>Docs</h1>
            <div className="container-home">
                <Link to='/react'>
                    <Card img={react_img} title='React' desc='Read this awsome react documentation' />
                </Link>
                <Link to='/angular'>
                    <Card img={angular_img} title='Angular' desc='Read this awsome angular documentation' />
                </Link>
                <Link to='/mongodb'>
                    <Card img={mongodb_img} title='MongoDb' desc='Read this awsome mongoDB documentation' />
                </Link>
            </div>
        </>
    )
}
export default Home;