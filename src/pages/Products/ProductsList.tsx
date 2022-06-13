import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import { DotsThreeVertical } from "phosphor-react";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, SetStateAction, useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { AuthContext } from "../../contexts/context";
import './styles.scss';
import firebase from '../../services/firebase';
import { toast } from "react-toastify";
import { Navigate, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";



export function ProductList(){

  const {  products ,pId, setPId} = useContext(AuthContext);
  const [id, setId] = useState('');

  



 async function excluirProduto(id: string | undefined){
    await firebase.firestore().collection('produtos').doc(id)
    .delete()
    .then(()=>{
      toast.success('🚀 Excluído com sucesso!');
    })
  }

  
 

  const HeaderArea =  styled.div`
  width: 100%;
  height: 383px;
  display:flex;
  flex-direction: column;
  align-items:center;
  background: #141515;
  `;

  const ListArea = styled.div`
  box-sizing: border-box;
  margin-top:180px;
  position: absolute;
  width: 1423px;
  height: 675px;
  display:flex;
  flex-direction: column;
  align-items:center;
  padding-top:24px;
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

  const HeaderList = styled.div`
  box-sizing: border-box;

  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:left;
  padding-left:25px;
  width: 1360px;
  height: 78px;
  overflow-y:auto;
  background: #EEEEEE;
  border: 1px solid #7D7D7D;
  border-radius: 10px 10px 0px 0px;
  `;

  const ProductItem = styled.div`
  box-sizing: border-box;
  display:flex;
  flex-direction:row;
  padding-left:25px;
  width: 1360px;
  height: 78px;
  align-items:center;
  background: #EEEEEE;
  border-bottom: 1px solid #7D7D7D;
  border-radius: 0px;
  `;

  const SpanItem = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height */
  
  
  color: #587169;
  
  `;

  return(
    <HeaderArea>
      <Span>Produtos Cadastrados</Span>
      <ListArea>
            <HeaderList>
          
              <span className="one">Código do Produto  </span>
              <span className="two">Categoria</span>
              <span className="three">Nome do Produto</span>
              <span className="four">Nome do Fornecedor</span>
              <span>Valor do Produto</span>
            </HeaderList>
            {products?.map((prod: any)=>(
              <ProductItem key={prod.id}>
                 
              <SpanItem className="id">{prod.codigo}</SpanItem>
              <SpanItem className="category">{prod.categoria}</SpanItem>
              <SpanItem className="name">{prod.nome}</SpanItem>
              <SpanItem className="name-fab">{prod.nomeForn}</SpanItem>
              <SpanItem className="value">{prod.valor}</SpanItem>

              <Popover isLazy>
  <PopoverTrigger>
              <Button borderRadius={200} className="menu"><DotsThreeVertical size={26} color="#050505" weight="bold" /></Button>
              </PopoverTrigger>
  <PopoverContent width={60}>
    <PopoverHeader fontWeight='semibold'>Detalhes</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody alignItems={"center"} >
    <Button marginLeft={5} marginRight={5} onClick={() => excluirProduto(prod.id)} colorScheme={'red'} className="menu">Excluir</Button>
    <Button onClick={() => {setPId(prod.id)}} colorScheme={'green'} className="menu"><Link className="link" to={`/edit/${prod.id}`} >Editar</Link></Button>
    </PopoverBody>
  </PopoverContent>
</Popover>
              </ProductItem>
            ))}
      </ListArea>
    </HeaderArea>
  );
}