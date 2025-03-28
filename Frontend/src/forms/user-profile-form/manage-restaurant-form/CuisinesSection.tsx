import { cuisineList } from '@/config/restaurant-options-config';
import React from 'react'

export default function CuisinesSection() {

    const { control } = useFormContext(); 

  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Cuisines</h2>
            <FormDescription>
                Select the cuisines that your restaurant serves
            </FormDescription>
        </div>
        <FormField control={control} name="cuisines" render={({ field }) => (
            <FormItem>
                <div className="grid md:grid-col-5 gap-1"> {cuisineList.map((cuisineItem) => ( <CuisineCheckbox cuisine={cuisineItem} field={field} />
                ))}
                </div>
            <FormMessage />
            </FormItem>
            
        )}
         />
    </div>
  )
};
