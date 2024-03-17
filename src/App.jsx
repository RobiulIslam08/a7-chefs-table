import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Food from "./Components/Food";
import Header from "./Components/Header";
import Select from "./Components/Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [coutn, setCount] = useState(0);
  const [increse, setIncrese]= useState(0)
  const [cards, setCards] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cooking, setCooking] = useState([])
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  function addItem(card) {
  
    // const newCard = [[...setCards],card]
    const isExit = carts.find((item) => item.recipe_id === card.recipe_id);

    if (!isExit) {
      setCarts([...carts, card]);

      setCount(coutn + 1);
    } else {
      toast("Already Exit");
    }
  }



  function removeItem(cart){
   setCooking([...cooking,cart])
   
    const removeCart = carts.filter(item => item.recipe_id != cart.recipe_id);
    if(removeCart){
      setCarts(removeCart)
      setCount(coutn - 1);
      setIncrese(increse + 1)
   
    }

  }
 console.log(cooking)




  return (
    <div className="w-11/12 mx-auto   mt-6 ">
      <Header></Header>
      <Banner></Banner>

      {/* our recipes section start here */}
      <div>
        {/* header */}
        <div className="w-[830px] mx-auto text-center mb-[62px]">
          <h1 className="text-[40px] font-semibold text-[#150B2B] mb-[25px]">
            Our Recipes
          </h1>
          <p className="text-[#150B2B99] font-normal ">
            {" "}
            let s embrace the art of cooking, celebrate the diversity of
            flavors, and savor every bite of the delicious journey that food
            recipes offer
          </p>
        </div>

        {/* main design start here */}
        <div className="grid grid-cols-12 mb-11 gap-6">
          <div className="col-span-7 grid grid-cols-2  ">
            {cards.map((card) => (
              <Food addItem={addItem} key={card.recipe_id} card={card}></Food>
            ))}
          </div>
          <div className="col-span-5 h-auto border rounded-lg">
            <div>
              <h1 className="p-5 text-center text-[#282828] text-2xl font-semibold mb-3">
                Want to Cook:{coutn}
              </h1>
              <hr className="w-[80%] mb-6 mx-auto" />
              <div className="">
                <table className="table ">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-base">Name</th>
                      <th className="text-base">Time</th>
                      <th className="text-base">Calories</th>
                    </tr>

                    {carts.map((cart, idx) => (
                      <Select
                      removeItem={removeItem}
                        cart={cart}
                        idx={idx}
                        key={cart.recipe_id}
                      ></Select>
                    ))}
                  </thead>
                </table>
              </div>
            </div>
            {/* second part start here */}

            <h1 className="p-5 text-center text-[#282828] text-2xl font-semibold mt-5 mb-3">
                Currently Cooking: {increse}
              </h1>
              <hr className="w-[80%] mb-6 mx-auto" />

              <div className="">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-base">Name</th>
                      <th className="text-base">Time</th>
                      <th className="text-base">Calories</th>
                    </tr>

                    {cooking.map((cart, idx) => (
                      <Select
                     
                        cart={cart}
                        idx={idx}
                        key={cart.recipe_id}
                      ></Select>
                    ))}
                  </thead>
                </table>
              </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
