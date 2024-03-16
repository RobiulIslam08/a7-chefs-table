

const Banner = () => {
    return (
        <div className="mb-[100px] flex flex-col lg:flex-row w-[100%] lg:h-[490px] h-full gap-8  bg-[url('https://i.ibb.co/Fhk98Sw/Rectangle-1-1.png')] bg-[#12132D] bg-no-repeat bg-bottom rounded-xl bg-cover lg:rounded-[22px] ">
        
        <div className="w-[900px] flex flex-col justify-center mx-auto items-center text-white">
            <h1 className="mb-6 text-5xl font-bold text-center">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-10 text-[#FFFFFF] text-lg font-normal text-center"> Cooking is more than just sustenance; it is a journey of discovery and delight that brings people together and creates lasting memories.</p>
            <div className="flex gap-4">
            <button className="btn btn-success">Explore Now</button>
            <button className="btn btn-outline text-white hover:outline-none hover:border-none hover:bg-gray-700">Our Feedback</button>
            </div>
        </div>
  
   
        
      </div>
    );
};

export default Banner;