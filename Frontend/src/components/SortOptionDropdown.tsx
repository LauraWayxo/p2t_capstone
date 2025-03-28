import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";


function SortOptionDropdown(props) {
    onChange: (value: string) => void; 
    sortOption: string; 
};

    const SORT_OPTIONS = [
        {
            label: "Best match",
            value: "bestMatch",
        }, 
        {
            label: "Delivery price",
            value: "deliveryPrice",
        }, 
        {
            label: "Estimated delivery time",
            value: "estimatedDeliveryTime"
        },
    ];

    const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
        const selectedSortLabel =
          SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
          SORT_OPTIONS[0].label;

  return (
    <DropdownMenu>
    <DropDownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full">
            Sort by: {selectedSortLabel}
        </Button>
    </DropDownMenuTrigger>
    <DropDownMenuContent>
        {SORT_OPTIONS.map((option) => (
            <DropdownMenuItem className="cursor-pointer" onClick={() => onChange(option.value)}>
                {option.label}
            </DropDownMenuItem>
        ))}
    </DropDownMenuContent>
    </DropdownMenu>
  );
};

// SortOptionDropdown.propTypes = {}

export default SortOptionDropdown;
