import { WithAuthentication } from "..";
import Navs from "../../components/Navs/Navs";

function Maths(mathProps: any) {
  //let component=props.Component;
  return (
    <div>
      {" "}
      <div>
        <Navs />
      </div>
      <div>Maths</div>
    </div>
  );
}
export default WithAuthentication(Maths);
