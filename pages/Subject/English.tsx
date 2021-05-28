import { WithAuthentication } from "..";
import { useEffect } from "react";
import Navs from "../../components/Navs/Navs";

const English = (mathProps: any) => {
  //let component=props.Component;
  // useEffect(()=>{

  // },[])
  return (
    <div>
      <div>
        <Navs />
      </div>
      <div>English</div>
    </div>
  );
};
export default WithAuthentication(English);
