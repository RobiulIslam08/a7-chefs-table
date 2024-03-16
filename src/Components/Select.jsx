const Select = ({cart,idx}) => {
    console.log(cart)
  
  return (
    <tr>
    <th className="text-base py-5 ">{idx + 1}</th>
    <td className="text-base py-5">{cart.recipe_name}</td>
    <td className="text-base py-5">{cart.preparing_time}</td>
    <td className="text-base py-5">{cart.calories}</td>
    <button className="bg-[#0BE58A] px-4 py-3 rounded-lg mt-1 ">Preparing</button>
  </tr>
  );
};

export default Select;
