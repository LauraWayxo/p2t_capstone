import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

function MenuItemInput(props) {
    const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-2">
        <FormField control={control} name={`menuItems.${index}.name`} render={({ field })} => (
            <FormItem>
                <FormLabel className="flex items-center gap-1">Price (USD) <FormMessage /> </FormLabel>
                <FormControl>
                    <Input {...field} placeholder="8.00" className="bg-white" />
                </FormControl>
            </FormItem>
            )} /> 

            <Button type="button" onClick={removeMenuItem} className="bg-red-500 max-h-fit">

            </Button>
    </div>
  );
};

MenuItemInput.propTypes = {}

export default MenuItemInput
