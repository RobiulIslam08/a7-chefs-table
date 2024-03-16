import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div >
           {/* navbar start here */}
           <div className="navbar flex justify-between  items-center">
  <div className="">
    <a className="font-bold text-[#150B2B] text-3xl">Recipe Calories</a>
  </div>
  <div className='  '>
    <ul className='flex flex-row gap-11 text-base font-normal text-[#150B2BB3]'>
    <li>home</li>
    <li>Recipes</li>
    <li>About</li>
    <li>Search</li>
    </ul>
  </div>
  <div className="gap-2">
  <label className="input input-bordered flex items-center gap-2">
  <CiSearch />
  <input type="text" className="grow" placeholder="Email" />
</label>
    <div className="">
    <CgProfile className="text-4xl bg-[#0BE58A] p-[4px] rounded-full"/>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;