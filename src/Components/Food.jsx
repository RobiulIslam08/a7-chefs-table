import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Food = ({card, addItem}) => {
   
   const {recipe_name,short_description,ingredients,preparing_time,calories,recipe_image} = card
  return (
    <div className="p-3 ">
      <div>
        <div className="card  bg-base-100 shadow-xl">
        
            <img
              className="p-6 h-[200px] rounded-[40px]"
              src={recipe_image}
              alt="Shoes"
            />
         
          <div className="px-6">
            <h2 className="card-title  mb-3 text-[#282828]">{recipe_name}</h2>
            <p className="text-[#878787] text-base font-normal mb-4">{short_description}</p>
            <h3 className="text-[#282828] text-[17px] font-semibold">Ingredients:{ingredients.length}</h3>
            <p className="pl-4 text-[#878787] text-base font-normal">
              {
                ingredients.map((i,idx) => {
                  return <li key={idx}>{i}</li>
                })
              }
            </p>

            <div className="mt-4 mb-4 flex gap-1 text-[#282828CC] justify-between ">
              <div className="flex gap-2 justify-center  items-center">
              <CiClock2 className="text-[22px]" />
              <p className="">{preparing_time} </p>
              </div>
              <div className="flex gap-2 justify-center items-center">
              <FaFire />
              <p>{calories} </p>
              </div>
            </div>
            <div className="card-actions justify-start">
              <button onClick={()=>addItem(card)} className="btn mb-4 bg-[#0BE58A] font-medium text-[17px] text-[#150B2B] rounded-full">Want to Cook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
