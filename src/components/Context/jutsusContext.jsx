import { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const JutsusContext = createContext();

export const JutsusProvider = ({ children }) => {
  const [jutsus, setJutsus] = useState([]);
  const loadJutsus = () => {
    AsyncStorage.getItem("jutsus").then((res) => {
      setJutsus(res?JSON.parse(res):[]);
    });
  };
  useEffect(() => {
    loadJutsus()
  }, [])
  return (
      <JutsusContext.Provider value={{jutsus, setJutsus, loadJutsus}}>
          {children}
      </JutsusContext.Provider>
  );
};

export const useJutsus = () => {
    return useContext(JutsusContext)
} 