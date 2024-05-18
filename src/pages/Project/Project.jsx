import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import {txtDB, storage} from '../../Firebase/firebase'
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import './styles/projectStyle.css'
import { Fade, Slide } from "react-awesome-reveal";
import { v4 } from "uuid";
function Project() {
  const {id} = useParams()
  const [data, setData] = useState([]);
  const [Imgdata, setImgData] = useState([]);
  const [imageList, setimageList] = useState([]);
  const imageListRef = ref(storage, `${id}/`);

  const getData = async () => {
    const valRef = collection(txtDB , 'txtData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val => ({
      ...val.data(), id:val.id
    }))
    setData(allData)
  }
  const getImg = async () => {
    const valRef = collection(txtDB,'imgData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
    setImgData(allData)
  }
  useEffect(()=>{
    getImg()
  })
  useEffect(() => {
    const fetchData = async () => {
        await getData()
        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setimageList((prev) => [...prev, url])
            })
          })
        })
      };
      fetchData();
    }, []);
return (
    <>
      {data.length > 0  ? (
        <section className="project-section">
          <div className="container">
            <h1 className="project-title">{data[id].titleVal}</h1>
            <div className="project-block">
                <p>{data[id].mainTxt}</p>
              <div className="img-list">
                 {imageList.map((url) => (
                     <img  key={v4()}  src={url} />
                  ))} 
              </div>
            </div>
            {<img className="bigImg" src={Imgdata[id].imgUrl} alt="" />}
          </div>
        </section>
      ) : 
      (
        <div className="bg-loader">
            <span className="loader"></span>
        </div>
      )
      }
    </>
  )
}

export default Project


