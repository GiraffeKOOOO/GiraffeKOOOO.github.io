import { useState } from 'react';
import '../App.css';


const WorkAccordion = ({ title, image, content }) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
        <div className="border-2 border-gray-500 mb-20 rounded-[10px]">
          <div 
            className="relative h-[180px] border-0 overflow-hidden bg-gray-900 rounded-[10px]" 
            onClick={() => setIsActive(!isActive)}
            >
                <img
                    alt='experience-background'
                    src={image}
                    className='w-full relative md:bottom-[100px] lg:bottom-[200px] xl:bottom-[300px] opacity-60 hover:opacity-90 rounded-[10px]'
                />
                <div className='absolute top-50 text-white text-[20px] md:text-3xl'>{title}{isActive? ' ⮟' : ' ⮝'}</div>
          </div>
          {isActive && <div className="accordion-content bg-gray-200 text-black md:text-lg lg:text-xl p-2">{content}</div>}
        </div>
    </>
  )
}

export default WorkAccordion;