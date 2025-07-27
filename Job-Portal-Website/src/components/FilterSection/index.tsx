import { Checkbox } from "@/components/ui/checkbox";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FilterSection = ({
  title,
  items,
  filterKey,
  selectedFilters,
  updateFilter,
}) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="text-sm font-medium">
        {title}
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2 pt-2">
          {items?.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                className="dark:!border-white"
                id={`${filterKey}-${item}`}
                checked={selectedFilters.includes(item)}
                onCheckedChange={() => updateFilter(filterKey, item)}
              />
              <label
                htmlFor={`${filterKey}-${item}`}
                className="text-sm text-muted-foreground"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterSection;
