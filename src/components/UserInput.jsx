import { useState } from 'react';

function UserInput({ onGenerateCard }) {
  const [name, setName] = useState('');

  const handleChange = (event) => setName(event.target.value);

  const handleClick = () => {
    if (name.trim() !== '') {
      onGenerateCard(name);
    } else {
      alert('Please enter your name!'); // You can replace this with a nicer error message
    }
  };

  return (
    <div className='p-6 w-full mb-4'>
      <div className='text-center flex flex-col items-center'>
        <div id="input-div">
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={handleChange}
            className='shadow-sm w-48'
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                handleClick();
              }
            }}
          />
          <span className='mx-1'>مـن</span>
        </div>
        <button className="button btn mt-3" onClick={handleClick}>معاينة</button>
      </div>
    </div>
  );
}

export default UserInput;