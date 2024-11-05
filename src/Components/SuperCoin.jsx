import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
/**
 * ====== Reflection on the exercise =======
 * I need to pay attention that I am importing the component I'm using
 * I still need to know how these components came together in this way and how to easily replicate this, but it's a good reference now
 * In the end, the store is a central component to have, and the App is where I layout the main components that make up the page, and main is where the store is integrated into the app.
 * */

const EarnPoints = () => {
// Initialize the state of the superCoin
const [superCoin, setSuperCoin] = useState(0);
// Get the state of the cart items using useSelector
const cartItems = useSelector(state => state.cart.cartItems);   
// Algorithm to calcuate the sum of all items
const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

useEffect(() => {
    if(totalAmount >= 100 && totalAmount < 200) {
        setSuperCoin(10);
    } else if (totalAmount >=200 && totalAmount < 300) {
        setSuperCoin(20);
    } else if (totalAmount >= 300) {
        setSuperCoin(30);
      } else {
        setSuperCoin(0);
      }
    }, [totalAmount])

    return(
        <div className="super-coins" style={{textAlign:'center'}}>
        <h2 className="super-coins-title">Super Coins</h2>
        <p className="super-coins-info">You will earn {superCoin} super coins with this purchase.</p>
        </div>
    )};


    export default EarnPoints;