import img from '../assets/images/dr-strange1.jpg'
import './Banner.css';
const Banner = () => {
    return (
        <div className="relative w-full my-10 ">
           <img src={img} className="w-full  rounded-lg" alt="" /> 
           <div className="absolute top-0 flex w-full bg-gradient-to-r from-[#151515] to-[#15151500]  transform md:h-[520px] rounded-lg ">
            <div data-aos="animation_name" className='w-2/3 md:mt-16   mx-auto text-center'>
                <h1 data-aos="animation_name" className='md:text-8xl text-3xl  text-red-100'>WEllCOME to AVENGER-TOY STORE</h1>
            
            <p className=' text-red-100 '>
            Kids love for superheroes is unexplainable. More often than not, kids love to imitate their favourite superheroes.
            </p>
            <button className='btn mt-5 btn-primary  px-4 w-40 '>GetStarted</button>
            </div>
           </div>
           
        </div>
    );
};

export default Banner;