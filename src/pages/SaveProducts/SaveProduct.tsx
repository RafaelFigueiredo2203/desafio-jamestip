import firebase from '../../services/firebase';
import { useState } from "react";
import styled from "styled-components";
import './styles.scss';
import { useForm } from "react-hook-form";
import  {Navigate, useNavigate}  from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

interface Product {
  id: number;
  categoria: string;
  nome: string;
  nomeForn: string;
  valor: number;
}


 export function SaveProduct(){
  const [products, setProducts] = useState<Product[]>([]);
  const { register, handleSubmit,  reset, formState: { errors }  } = useForm( {defaultValues: {
    codigo: "",
    categoria: "",
    nome: "",
    nomeForn: "",
    valor: ""
  }});
  const navigate =  useNavigate();
  

 async function onSubmit  (data: any)  {

    await  firebase.firestore().collection('produtos')
    .doc()
      .set({
      codigo: data.codigo,
      categoria: data.categoria,
      nome: data.nome,
      nomeForn: data.nomeForn,
      valor: data.valor
      })
     .then(() => {
       toast.success('🚀 Salvo com sucesso!');
       setTimeout(function(){
         navigate(0)
       },2000);
       // ...
      })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
   console.log(errorMessage);

      toast.error('⭕  erro no sistema!');
       
        // ..
      });
    
    }

  const HeaderArea =  styled.div`
  width: 100%;
  height: 383px;
  display:flex;
  flex-direction: column;
  align-items:center;
  background: #141515;
  `;

  const FormArea = styled.div`
  box-sizing: border-box;
  margin-top:170px;
  position: absolute;
  width: 1258px;
  height: 642px;
  display:flex;
  flex-direction:column;
  background: #EEEEEE;
  border: 2px solid #00D0B5;
  border-radius: 10px;
  `;

  const Span = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 68px;
  
  color: #00D0B5;
  
  text-align:left;
  margin-top:70px;
  `;

  const Button = styled.button`

  margin-top:38px;
  margin-left:531px;
  width: 175px;
  height: 55px;
  
  background: #00D0B5;
  border-radius: 10px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 39px;
  border:none;
  cursor:pointer;
  color: #000000;

  :hover{
    background:#288A7D;
  }
  :active{
    background:#00D0B5;
  }
  `;

 



   return(
      <HeaderArea>

        <Span>Cadastrar Produto</Span>
        <FormArea>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label >Código do Produto:</label>
                <input  defaultValue="" required className="code" type="text" {...register("codigo", {required: true})}/>

                <label>Categoria do Produto:</label>
                <input type="text"  {...register("categoria", {required: true})}/>

                <label>Nome do Produto:</label>
                <input type="text"  {...register("nome", {required: true})}/>

                <label>Nome do Fornecedor:</label>
                <input type="text" {...register("nomeForn", {required: true})} />

                <label className="code">Valor do Produto:</label>
                <input className="code" type="text" {...register("valor", {required: true})} />

                <Button type="submit" >Salvar</Button>
            </form>
        </FormArea>
       
      </HeaderArea>
      
   );
 }