import { createContext, useContext, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_BIKES } from "../utils/queries";




// Initialize new context for bikes
const RentalContext = createContext();

// We create a custom hook to provide immediate usage of the bike context value (bikes) in other components
export const useRentalContext = () => useContext(RentalContext);

// The provider is responsible for holding our state, updating the state, and persisting values to the children
export const RentalProvider = ({ children }) => {

  

  const { loading, data } = useQuery(QUERY_BIKES);

  const AllBikesData = data?.bikes || [];

  // const [userData, setUserData] = useState(null);
 
  const AllBikes = AllBikesData;
  // const userStatus = {
  //    userData: userData,
  //   setUserData: setUserData // Function to update user data
  // };
  const [ user, setUser ] = useState();

  const addUser = (currentUser) => {
    if (!currentUser) { 
      return; 
    } 
    setUser(currentUser);
  
  }

  const removeUser = () => {
    setUser('');
   }
  // const [ loggedInUserId, setLoggedInUserId ] = useState();

  // const addLoggedInUserId = (currentUser) => {
  //   if (!currentUser) { 
  //     return; 
  //   } 
  //   setUser(currentUser);
  // }

  // const removeLoggedInUserId = (currentUser) => {
  //   setUser('');
  // }
 

  // The value prop expects an initial state object
  return (
    <RentalContext.Provider
      value={{AllBikes, user, addUser, removeUser}}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </RentalContext.Provider>
  );
};
