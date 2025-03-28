export type User = {
    _id: string,
    email: string, 
    name: string, 
    addressLine1: string, 
    city: string, 
    country: string, 
}; 

export type: MenuType

export type Restaurant = {
    _id: string; 
    user: string; 
    restaurantName: string; 
    city: string; 
    country: string; 
    deliveryPrice: number; 
    estimatedDeliveryTime: number;
    cuisines: string[]; 
    menuItems:  MenuItems[]; 
    imageUrl: string; 
    lastUpdated: string; 
};