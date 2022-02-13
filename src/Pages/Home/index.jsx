import React from 'react'
import './Home.css'
import GalleryList from './../../config/gallery'

const Home = () => {
  const galleryList = GalleryList.map(gallery => {
    return (
      <img className="gallery" src={gallery.img} alt={gallery.name} key={gallery.id} />
    )
  })

  return (
    <>
      <div className="Home">
        <h1>Satriwitthaya 2</h1>
        <h1>Virtual World</h1>
      </div>
      <div className="homeContent">
        <h2>SW2 Virtual คืออะไร</h2>
        <p>&emsp;&emsp;SW2 Virtual คือโลกเสมือนที่จำลองโรงเรียนสตรีวิทยา ๒ ในพระราชูปถัมภ์ฯ ไว้ในเกม Minecraft ด้วยขนาด 1:1 เมื่อเทียบกับขนาดจริง</p>
        <div className="gallery-grid">
          {galleryList}
        </div>
      </div>
    </>
  )
}

export default Home