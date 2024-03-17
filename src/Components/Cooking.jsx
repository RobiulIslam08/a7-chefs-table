import React from 'react';

const Cooking = () => {
    return (
        <tr className='bg-slate-100'>
    <th className="text-[14px]  ">{idx + 1}</th>
    <td className="text-[14px] py-5 ">{cart.recipe_name}</td>
    <td className="text-[14px] py-5">{cart.preparing_time}</td>
    <td className="text-[14px] py-5">{cart.calories}</td>
    <button onClick={()=>removeItem(cart)} className="bg-[#0BE58A] hover:bg-[#0be58ad7] px-4 py-3 rounded-lg mt-1 text-black text-[12px] font-semibold">Preparing</button>
    {/* <button class="btn bg-[#0BE58A] mt-1">Preparing</button> */}
  </tr>
    );
};

export default Cooking;