import { MenuItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function MenuItems(props) {
    menuitems: MenuItem; 
    addToCart: () => void; 
};

const MenuItem = ({ menuItem, addToCart }): 
  
return (
    <Card className="cursor-pointer" onClick={addToCart}>
        <CardHeader>
            <CardTitle>{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent className="font-bold"> USE{(MenuItem.price / 100).toFixed(2)}</CardContent>
    </Card>
  );
};

// MenuItems.propTypes = {}

export default MenuItem;
