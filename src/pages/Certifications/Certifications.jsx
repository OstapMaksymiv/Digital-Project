import './styles/certificationsStyle.css'
import fCertf from '@assets/fcertf.jpg'
import SCertf from '@assets/scertf.png'

function Certifications() {
  return (
    <section className='certifications-section'>
        <div className="container">
            <h1 className="title">
                Company
                <span>Certifications</span>
            </h1>
            <ul className="list-certf">
                <li className="certf">
                    <h2>Construction Expert Certificate</h2>
                    <img src={fCertf} alt="" />
                </li>
                <li className="certf">
                    <h2>Professional Builder Certificate</h2>
                    <img src={SCertf} alt="" />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Certifications