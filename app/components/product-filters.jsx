"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Racks", label: "Racks" },
      { value: "Accessories", label: "Accessories" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "lcs", label: "Low-Clearance Single" },
      { value: "hcs", label: "High-Clearance Single" },
      { value: "lcd", label: "Low-Clearance Double" },
      { value: "hcd", label: "High-Clearance Double" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "Black", label: "Black" },
      { value: "White", label: "White" },
    ],
  },
];

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchValues = filters.map((section) => {
    const value = searchParams.get(section.id);
    return { id: section.id, value: value ? value : null };
  });

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {/* {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ""} */}
                  {searchValues.some(
                    (item) => item.id === section.id && item.value
                  )
                    ? `(${
                        searchValues.find((item) => item.id === section.id)
                          ?.value
                      })`
                    : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >                   
                    <Checkbox
                      id={`filter-${section.id}-${optionIdx}`}
                      checked={searchValues.some(
                        (item) =>
                          item.id === section.id && item.value === option.value
                      )}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams);
                        const checked =
                          event.currentTarget.dataset.state === "checked";
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value);
                        router.replace(`/?${params.toString()}#store`);
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  );
}
