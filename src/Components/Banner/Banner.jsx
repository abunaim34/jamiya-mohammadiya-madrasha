
import PropTypes from 'prop-types';

const Banner = () => {
    return (
        <div>
            <div className="hero my-12 min-h-screen rounded-[36px]" style={{backgroundImage: 'url(https://i.ibb.co/WK50b6D/jamiya.jpg)'}}>
                <div className=" hero-overlay bg-opacity-60 rounded-[36px]"></div>
                    <div className="hero-content text-center text-white my-28">
                        <div className="lg:mx-auto lg:max-w-[800px]">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold leading-loose ">Jamiya Mohammadiya Khajuriya Madrasha</h1>
                        <p className="mb-5 ">Learn how to be a master chef. And cooking delicious food and authentic food. Its my passion, people still cook some foods over an open flame, in addition to using tools like microwaves, toasters, and stovetops.</p> 
                        <div className='space-x-8'>
                        <button className='btn btn-success rounded-3xl'>Explore Now</button>
                        <button className='btn btn-outline  btn-secondary border-white rounded-3xl font-bold'><span className="text-white">Our Feedback</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    PropTypes
};

export default Banner;