import { createContext, useContext, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_BIKES } from "../utils/queries";




// Initialize new context for bikes
const RentalContext = createContext();

// We create a custom hook to provide immediate usage of the bike context value (bikes) in other components
export const useRentalContext = () => useContext(RentalContext);

// The provider is responsible for holding our state, updating the state, and persisting values to the children
export const RentalProvider = ({ children }) => {


  // get Allbike data on app load
  const { loading, data } = useQuery(QUERY_BIKES);

  const AllBikesData = data?.bikes || [];

  const AllBikes = AllBikesData;



  // holds loggedIn user's data at global app level
  const [user, setUser] = useState();

  const addUser = (currentUser) => {
    if (!currentUser) {
      return;
    }
    setUser(currentUser);

  }
  const removeUser = () => {
    setUser('');
  }

  // holds the current potential contract in the shopping cart
  const [shoppingCart, setShoppingCart] = useState({});

  // const addShoppingCart = (currentContract) => {
  //   if (!currentContract) {
  //     return;
  //   }
  //   setShoppingCart(shoppingCart => ({
  //     ...shoppingCart,
  //     ...currentContract
  //   }));
  //   console.log("global", shoppingCart);
  // }


  // const removeShoppingCart = () => {
  //   setShoppingCart('');
  // }
  //console.log('global', shoppingCart);



  // The value prop expects an initial state object
  return (
    <RentalContext.Provider
      value={{ AllBikes, user, addUser, removeUser, shoppingCart, setShoppingCart }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </RentalContext.Provider>
  );
};
