import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import './styles.scss';


export  function Header(){

  
  const Header =  styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background: #141515;
  align-items:center;
  `;

  const Logo = styled.img`
  margin-top:4px;
  margin-left:171px;
  width: 66px;
  height: 69px;
  `;
 const Menu = styled.div`
 
    width: 313px;
    height: 57px;
    margin-left:83px;
    background: #141515;
    display: flex;
  flex-direction: row;
  align-items:center;
 `;

  return(
    
        <Header>
          <Logo src={logo} alt="logo" />
            
            <Menu>
               <Link to="/"><span>Cadastro</span></Link>
               <Link to="/products"><span>Produtos</span></Link>
            </Menu>


        </Header>
    
  );
}