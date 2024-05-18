import { useEffect, useState } from 'react';
import {txtDB} from '../../Firebase/firebase'
import { Link } from 'react-router-dom';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import arrow from '@assets/arrow.svg';
import './styles/projectsStyle.css'
import { v4 } from 'uuid';
import { Fade, Slide } from "react-awesome-reveal";
function Projects() {
  const [data, setData] = useState([]);
  const [photosLoaded, setPhotosLoaded] = useState(false);
  const getData = async () => {
    const valRef = collection(txtDB , 'txtData')
    const dataDb = await getDocs(valRef)
    const adllData = dataDb.docs.map(val => ({
      ...val.data(), id:val.id
    }))
    setData(adllData)
  }
  useEffect(() => {
    const fetchData = async () => {
        await getData();
        setPhotosLoaded(true);
    };
    fetchData();
  }, []);
  return (
    <>
    {photosLoaded ? (
      <section className='projects-container'>
        <div className="container">
          <h1 className="projects_title">
            Our
            <span>Projects</span>
          </h1>
          <div className='project-list'>
            <Fade triggerOnce={true} delay={300}>
              {data.map(val => 
              <div className='project' key={v4()}>
                <img className='project-img' src={val.imgUrl}/>
                <div className='project-mainInf'>
                <Fade triggerOnce={true} delay={500}>
                    <Slide direction='down' triggerOnce={true}>
                      <h1 >{val.titleVal}</h1>
                    </Slide>
                  </Fade>
                  <p >{val.txtVal}</p>
                  <Fade triggerOnce={true} delay={700}>
                    <Slide direction='up' triggerOnce={true}>
                      <Link to={{
                        pathname: `/Project/${val.projectID}`}} >
                        <span>View Project</span>
                        <img src={arrow} alt=""/>
                      </Link>
                    </Slide>
                  </Fade>
                </div>
              </div>)}
            </Fade>
          </div>
        </div>
      </section>)
      : 
      (
        <div className="bg-loader">
            <span className="loader"></span>
        </div>
    )
    }
    </>
  )
}

export default Projects
