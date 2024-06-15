import { saveAs } from 'file-saver';


function DownloadButton() {
  const handleDownload = () => {
    const canvas = document.getElementById('img-canvas');
    const dataURL = canvas.toDataURL('image/png');
    saveAs(dataURL, 'EidCard.png');
  };

  return (
    <button onClick={handleDownload} style={
      {
        fontSize: '1.5rem',
        backgroundColor: '#efe8e0',
        color: "#1b1b1b",
      }
    }
    className='button z-10 border border-solid mb-48 mt-10 sm:w-[25rem] sm:h-[4rem] w-[13rem] h-[4rem] rounded-md shadow-md sm:text-3xl text-xl'
    
    >احفظ الصورة</button>
  );
}

export default DownloadButton;