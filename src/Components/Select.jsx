const Select = ({cart,idx}) => {
    console.log(cart)
  
  return (
    <tr>
    <th>{idx + 1}</th>
    <td>{cart.recipe_name}</td>
    <td>{cart.preparing_time}</td>
    <td>{cart.calories}</td>
    <button className="bg-[#0BE58A] px-4 py-2 rounded-lg mt-[2px]">Preparing</button>
  </tr>
  );
};

export default Select;
