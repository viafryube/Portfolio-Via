import {useState} from 'react'

import picture from '../assets/hiro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="2500" src={picture} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Alivia Putri Zuhriah</h1>
                    <p class="text-xl font-bold text-gray-300"> Undergraduate Student</p>
                    <p className="text-md font-light text-gray-400 ">I am a student with an ENFP personality, ENFP stands for Extraversion, iNtuition, Feeling, and Perceiving. A highly motivated Undergraduate student, driven by a passion for Data Science and Web Development. I thrive on exploring innovative solutions and developing technology-driven projects that make a meaningful impact. With a commitment to continuous learning, I actively seek opportunities to expand my knowledge and skills in data analysis, programming, and web technologies. I am enthusiastic about collaborating with like-minded professionals and contributing to projects that combine creativity and technology to solve real-world challenges. </p>
                </div>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
