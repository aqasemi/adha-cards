import { useState } from 'react';
import UserInput from './components/UserInput';
import CardPreview from './components/CardPreview';
import ToTopBtn from './components/ToTopBtn';

function App() {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('');
  const [cardImage, setCardImage] = useState(`card${Math.floor(Math.random() * 5) + 1}`);

  const palletBtnHandler = (card) => {
    setCardImage(card);
    setClicked(false);
  }

  const handleGenerateCard = (userName) => {
    setName(userName);
    setClicked(true);
  };

  if (cardImage === '') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  const isWhiteBg = cardImage === 'card5' || cardImage === 'card4'? true : false;
  const previewButtonsIcons = {
    card1: 'glasses.png',
    card2: 's.png',
    card3: 'a.webp',
    card4: 'mustach.png',
    card5: 't.webp'
  }

  const side_bar_div = (
    <div className="flex flex-col justify-center items-end absolute right-0" style={{
      top: "30%",
      transform: "translateY(-30%)",
    }}>
      <button className="bg-[#0a4faaca] pl-1 blue-btn shadow-sm shadow-gray-500 my-1 w-8 right-0 card-btn" onClick={() => palletBtnHandler('card1')}>
        <img src={"./assets/cards-buttons/"+previewButtonsIcons.card1} className='max-w-9 btn-img'/>
      </button>
      <button className="bg-[#0a4faaca] blue-btn pl-2 shadow-sm shadow-gray-500 my-1 w-8 right-0 card-btn" onClick={() => palletBtnHandler('card2')}>
        <img src={"./assets/cards-buttons/"+previewButtonsIcons.card2} className='max-w-9 btn-img'/>
        </button>
      <button className="bg-[#0a4faaca] pl-1 blue-btn shadow-sm shadow-gray-500 my-1 w-8 right-0 card-btn" onClick={() => palletBtnHandler('card3')}>
        <img src={"./assets/cards-buttons/"+previewButtonsIcons.card3} className='max-w-9 btn-img'/>
      </button>
      <button className="bg-[#fffcf8] pl-1 white-btn shadow-sm shadow-gray-500 my-1 w-8 right-0 card-btn" onClick={() => palletBtnHandler('card4')}>
        <img src={"./assets/cards-buttons/"+previewButtonsIcons.card4} className='max-w-9 btn-img'/>
      </button>
      <button className="bg-[#fffcf8] pl-1 white-btn shadow-sm shadow-gray-500 my-1 w-8 right-0 card-btn" onClick={() => palletBtnHandler('card5')}>
        <img src={"./assets/cards-buttons/"+previewButtonsIcons.card5} className='max-w-9 btn-img'/>
      </button>
      <button title="اختر لي" className="bg-[#1b1b1b] shadow-inner shadow-gray-500 my-1 w-full max-h-6 right-0 magic-btn" onClick={() => {
        const randomCardNumber = Math.floor(Math.random() * 3) + 1;
        palletBtnHandler(`card${randomCardNumber}`) ? !cardImage : cardImage;
      }}>
        <img src="./assets/star.png" alt="Star" id='magic-icon' className='max-w-6'/>
      </button>
    </div>
  );
  console.log(cardImage, isWhiteBg)

  return (
    <div>
      <div className="flex justify-center p-1"> 
        <div className="noise relative w-full max-w-[66rem] h-screen flex justify-center md:items-center">
          <div className="container max-w-80 h-fit md:max-w-xl lg:max-w-2xl mt-[35%] md:mt-0 lg:mt-0">
            <div className="page container mx-0.5">
              <div className="titlebar flex items-center justify-center pt-5 pb-7 ps-2 relative" dir="rtl">
                <div className="absolute right-0">
                  <div className="dot close mx-3"></div>
                  <div className="dot minimise"></div>
                </div>
                <h1>اكتب اسمك على الصورة</h1>
              </div>
              <div className="container flex flex-row justify-center relative">
                <div className="flex flex-col justify-center text-center p-3">
                  <img src={"./assets/"+cardImage+".webp"} alt="Wishes" className="w-56 md:w-72 lg:w-96 mx-auto mt-4" />
                  <UserInput onGenerateCard={handleGenerateCard} />
                </div>
                {side_bar_div}
              </div>
            <img src="./assets/GDSC.png" alt="Logo" className="logo w-24 absolute top-0 right-0 mt-8 mr-8" />
          </div>
        </div>
      </div>
    </div>
    {clicked && <CardPreview name={name} template={cardImage} isWhiteBg={isWhiteBg} />} 
    {clicked && <ToTopBtn />}
    </div>
  );
}

export default App;