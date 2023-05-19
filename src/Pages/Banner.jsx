import img from '../assets/images/dr-strange1.jpg'
import './Banner.css';
const Banner = () => {
    return (
        <div className="relative w-full my-10 ">
           <img src={img} className="w-full  rounded-lg" alt="" /> 
           <div className="absolute top-0 flex w-full bg-gradient-to-r from-[#151515] to-[#15151500]  transform h-[520px] rounded-lg ">
            <div className='w-2/3 m-10 mt-36'>
            <h1 className='title mb-4 text-4xl font-bold text-blue-500 mt-5 '>Avengers Toys</h1>
            <p className=' text-blue-400'>
            Kids love for superheroes is unexplainable. More often than not, kids love to imitate their favourite superheroes. Its okay for kids to love these characters as they preach goodness and kindness in the world. If your kid is an Avengers fan, you can give him/her some Avengers toys that will surely put them on cloud 9. Online stores have Avengers Endgame toys, Marvel Avengers toys, Thanos toys, Iron Man toys, Hulk toys
            </p>
            <button className='btn mt-5 btn-primary  px-4 w-40 '>register</button>
            </div>
           </div>
        </div>
    );
};

export default Banner;