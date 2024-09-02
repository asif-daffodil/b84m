import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [country, setCountry] = useState("Bangladesh");

  const changeCountry = () => {
    if (country === "Bangladesh") {
      setCountry("Bangladesh 2.O");
      document.querySelector('html').classList.add('dark');
    }else{
      setCountry("Bangladesh");
      document.querySelector('html').classList.remove('dark');
    }
  }

  useEffect(() => {
    console.log("Component Mounted");
  }, [country]);

  return (
    <div className='w-[calc(100%-20px)] md:w-2/3 xl:w-1/2 mx-auto border rounded-sm pb-2 md:pb-3 xl:pb-4 shadow-md my-2 md:my-3 xl:my-4 dark:bg-gray-800 dark:text-white'>
      <h1 className='text-2xl md:text-4xl xl:text-6xl text-blue-600 md:text-red-600 xl:text-green-600 bg-blue-100 md:bg-red-100 xl:bg-green-100 text-center py-3 md:py-5 xl:py-8 hover:bg-black hover:text-white'>Hello World</h1>
      <p className='p-2 md:p-3 xl:p-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae expedita facere doloremque neque, adipisci, voluptatibus harum eius animi unde tenetur necessitatibus porro vel, vero dolorum nemo. Dolorum, eos nesciunt! {country}
      </p>
      <button className='border border-blue-600 border-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:shadow-md hover:shadow-blue-600 hover:bg-blue-800 ml-2 md:ml-3 xl:ml-4' onClick={changeCountry}>Read more</button>
    </div>
  )
}

export default App
