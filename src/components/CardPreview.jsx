import DownloadButton from './DownloadButton';
import { useRef, useEffect } from 'react';



function CardPreview({ name, template, isWhiteBg }) {
  const imagePath = `./assets/${template}`;
  const canvasRef = useRef(null);

  const init = () => {
    const canvas = canvasRef.current;
    const layout = canvas.getContext("2d");
    let img = new Image();
    img.src = imagePath+'.webp';
    img.width = 1024;
    img.height = 1024;
    var fontWeight = '400';
    var fontColor = 'white';

    var coords = {
      width: 935,
      height: 798,
    }

    if (isWhiteBg) {
      coords.height = 817;
      fontWeight = '430'
      fontColor = '#0a50aa';
  }

    img.onload = () => {
      window.scrollTo({
        top: document.getElementById('card').offsetTop + 50,
        behavior: 'smooth',
      });
      

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      layout.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
      layout.save();

      let txt = name
      layout.font = fontWeight + " 2.4rem 'Noto Sans Arabic', sans-serif";
      layout.fillStyle = fontColor;
      layout.textAlign = "right";
      layout.fillText(txt, coords.width, coords.height);
      layout.restore(); 
      
    };
  };

  useEffect(() => {
   setTimeout(init, 100);
  }, [name]);

  return (
    <div className="jumbotron bg-info mt-48">
      <div className="flex justify-center left-0 right-0 ">
        <div className="flex items-center flex-col">
          <div id="card" className="CardPreview outline outline-2 outline-offset-4 outline-white">
            <canvas ref={canvasRef} id='img-canvas' className='z-10 w-[20rem] h-[20rem] md:h-[48rem] md:w-[48rem] lg:h-[66rem] lg:w-[66rem] object-contain'></canvas> 
          </div>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

export default CardPreview;

