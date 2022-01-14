import img_homePage from '../assets/img_homePage.jpg';
import '../styles/Banner.css';

function Banner(){
    return( <>
        <div className='banner'>
            <div className='bg_filter'></div>
            <img src={img_homePage} alt="img cote sauvage"/>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    </>
    )
}

export default Banner