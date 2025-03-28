import { useUpdateMyRestaurant } from '@/api/MyRestaurantApi';
import ManageRestaurantForm from '@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm';
import React from 'react'


function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateMyRestaurant(); 
  const { restaurant } = useGetMyRestaurant(); 
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant(); 

  const isEditing = !!restaurant; 

  return <ManageRestaurantForm restaurant={restaurant}onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreateLoading || isUpdateLoading}/>;
};

export default ManageRestaurantForm;