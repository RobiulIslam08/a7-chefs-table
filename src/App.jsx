import { useEffect, useState } from "react"
import Banner from "./Components/Banner"
import Food from "./Components/Food"
import Header from "./Components/Header"
import Select from "./Components/Select"


function App() {
  const [coutn, setCount] = useState(0)
  const [cards, setCards] = useState([])
  const [carts, setCarts] = useState([])
  useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])


  function addItem(card){
    // const newCard = [[...setCards],card]
    setCarts([...carts,card])
    setCount(coutn+ 1)
  }
  console.log(carts)




 
  return (
   <div className='w-11/12 mx-auto   mt-6 '>
    <Header></Header>
    <Banner></Banner>

    {/* our recipes section start here */}
    <div>
      {/* header */}
      <div className="w-[830px] mx-auto text-center mb-[62px]">
        <h1 className="text-[40px] font-semibold text-[#150B2B] mb-[25px]">Our Recipes</h1>
        <p className="text-[#150B2B99] font-normal "> let s embrace the art of cooking, celebrate the diversity of flavors, and savor every bite of the delicious journey that food recipes offer</p>
      </div>

      {/* main design start here */}
      <div className="grid grid-cols-12 h-[500px] mb-11 gap-6">
        <div className="col-span-7 grid grid-cols-2  ">
          {
            cards.map(card => <Food addItem={addItem} key={card.recipe_id} card={card}></Food>)
          }
          
        </div>
        <div className="col-span-5 bg-purple-300">
        <div>
      <h1 className="p-5 text-center text-[#282828] text-2xl font-semibold" >Want to Cook:{coutn} </h1>
      <hr className="w-[80%] mx-auto"/>
      <div className="overflow-x-auto p-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
            
              {
            
                carts.map((cart,idx) =>  <Select cart={cart} idx={idx}  key={cart.recipe_id}></Select>)
              }
            
          </thead>
          <tbody>
            

            

           
          </tbody>
        </table>
      </div>
    </div>

       
          
          
         
        </div>

      </div>

    </div>
   </div>
  )
}

export default App
