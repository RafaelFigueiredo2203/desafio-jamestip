import  {  useContext  }  from  "react" ;

import  {  AuthContext  }  from  "../../src/contexts/context" ;

export function useAuth(){
  const value = useContext(AuthContext);

  return value;
}