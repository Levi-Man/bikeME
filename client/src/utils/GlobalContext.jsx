import { createContext, useContext } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_BIKES } from "../utils/queries";




// Initialize new context for students
const RentalContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useRentalContext = () => useContext(RentalContext);

// The provider is responsible for holding our state, updating the state, and persisting values to the children
export const RentalProvider = ({ children }) => {

  const { loading, data } = useQuery(QUERY_BIKES);
  const AllBikesData = data?.bikes || [];

  // console.log(AllBikesData);

  const AllBikes = AllBikesData;


  // The value prop expects an initial state object
  return (
    <RentalContext.Provider
      value={{ AllBikes }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </RentalContext.Provider>
  );
};
