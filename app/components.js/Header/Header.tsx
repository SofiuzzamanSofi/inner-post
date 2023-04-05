import { Button } from "@material-tailwind/react";

const Header : React.FC = () => {

  return(
    <div className="flex items-center ">
      <div>
        This is header
      </div>
      <div>
        <Button color="blue" ripple>Button</Button>
      </div>
    </div>
  );
}

export default Header;
