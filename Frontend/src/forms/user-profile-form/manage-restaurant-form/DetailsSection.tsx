import { FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useFormContext } from "react-hook-form";

cont DetailsSection = () => {
    const { control } = useFormContext();
    return (
        <Form {...form}>
            <form onSubmit={format.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection />
            </form>
        </Form>

        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Details</h2>
                <FormDescription>
                    Enter the details about your restaurant
                </FormDescription>
            </div>

            <FormField control={control} name="restaurantName" render={( {field} ) => (<FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
            </FormItem>)}/>

            <div className="flex gap-4">
            <FormField control={control} name="city" render={( {field} ) => (<FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
            </FormItem>)}/>  

            <FormField control={control} name="country" render={( {field} ) => (<FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
            </FormItem>)}/> 
            </div>
            
            <div>    
            <FormField control={control} name="deliveryPrice" render={( {field} ) => (<FormItem className="max-w-[25%]">
                <FormLabel>Delivery Delivery Time (minutes)</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
            </FormItem>)}/>

            <FormField control={control} name="deliveryPrice" render={( {field} ) => (<FormItem className="max-w-[25%]">
                <FormLabel>Delivery Price (USD)</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white" placeholder="1.50" />
                </FormControl>
                <FormMessage />
            </FormItem>
        
        <FormField control={control} name="estimatedDeliveryTime" render={( {field} ) => (<FormItem className="max-w-[25%]">
            <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="30" />
            </FormControl>
            <FormMessage />
        </FormItem>)}/>
        </div>
    )
}