import React from 'react'
import PropTypes from 'prop-types'

function CuisineCheckbox({ cuisine, field }) {
    cuisine: string; 
    field: ControllerRenderProps<FieldValues, "cuisines">;

    //field.value = ["pasta, "pizza"]
    // cuisine = "pizza"
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
        <FormControl>
            <Checkbox className="bg-white" checked={field.value.includes(cuisine)} onCheckoutChange={(checked) => {
                if (checked) {
                   field.onChange([...field.value, cuisine]); 
                } else {
                    field.onChange(field.value.filter((value) => value !== cuisine));
                }
            }}/>
        </FormControl>
        <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  )
}

CuisineCheckbox.propTypes = {}

export default CuisineCheckbox
