import { useState, createContext, useEffect, ReactNode, SetStateAction } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import firebase from '../services/firebase';


export const AuthContext = createContext({} as AuthContextType);

interface ProductProps {
  id:number,
  codigo: string,
  categoria: string,
  nome:string,
  nomeForn:string,
  valor: string
}

type AuthContextProviderProps ={
  children: ReactNode;
}

type AuthContextType = {
   products: ProductProps | any;
   produto: ProductProps | any;
   loadProducts: () => void;
   setPId:  ProductProps | any;
   pId: ProductProps | any;
}

export function AuthContextProvider(props: AuthContextProviderProps){
  
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [produto,setProduto] = useState<ProductProps[]>([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pId, setPId] = useState('');
  const {id} = useParams();

  useEffect(()=>{
   
   
    loadProducts();
    
    console.log(produto);
    console.log(products);
  
  },[]);

 async function loadProducts(){

  

    await firebase.firestore().collection('produtos')
    .onSnapshot((doc)=>{

      let prods: SetStateAction<ProductProps[]> = [];

      doc.forEach((produto)=>{
      (prods as unknown as any[]).push({
      id:produto.id,
      codigo: produto.data().codigo,
      categoria: produto.data().categoria,
      nome:produto.data().nome,
      nomeForn:produto.data().nomeForn,
      valor: produto.data().valor     

    })
  });
 setProducts(prods);
 localStorage.setItem('produtos', JSON.stringify(products));

    })

    }

    
  



  return(
    <AuthContext.Provider value={{products,loadProducts,produto,setPId, pId}}  >
      {props.children}
      </AuthContext.Provider>
  );
}