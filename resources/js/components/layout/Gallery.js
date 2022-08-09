import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Carousel } from 'react-carousel-minimal';
import item5 from "../layout/item5.png"
import item2 from "../layout/item2.png"
import image16 from "../layout/image16.png"
import image10 from "../layout/image10.png"
import image17 from "../layout/image17.png"
import image9 from "../layout/image9.jpg"
import image8 from "../layout/image8.jpg"
import image11 from "../layout/image11.jpg"
import logo from "../layout/logo.png";

function Gallery (){


  
    const data = [
      // {
      //   image: "https://instagram.flos1-2.fna.fbcdn.net/v/t51.2885-15/294414613_718437745886496_3433057117406597200_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flos1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HQQUQiemSBEAX-VY_6H&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NzM5Njg2NTA3OTk0NTgyOA%3D%3D.2-ccb7-5&oh=00_AT-k_Jeeu_z11VSc2K2Forhh6iRKX_iD7f7l0lkUSFb3Jg&oe=62F7B87D&_nc_sid=30a2ef"

      // },
      {
        // image: "https://images.unsplash.com/photo-1584936684506-c3a7086e8212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80",
        image:image11
      },
      {
        image: item2
      },
      {
        image: image8
      },
      {image: image9
      },
      {
        image: item5
      },
      {
        image: image10
      },
      {
        image: image16
      },
      {
        image:image17
      }
    ];
  
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
    return (
      <div className="gallerysection">
        <div style={{ textAlign: "center" }}>
          <h2 style={{"color":"#10b4ab"}} className='secondary-heading'>Our Gallery</h2>
          <p style={{"color":"#fff"}} >Easy to use, responsive and customizable carousel component for React Projects.</p>
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="#10b4ab"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
    );
}

export default Gallery