import { User } from "./type.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner"; 


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0(); 

    const getMyUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently(); 

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "GET", 
            headers: {
                Authorization: `Bearer ${accessToken}`, 
                "Content-Type: "application/json", 
            },
        });
        if(!response.ok) {
            throw new error("failed to fetch user"); 
        }

        return response.json(); 
    };

    const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getMyUserRequest); 

    if(error) {
        toast.error(error.toString())
    }

    return {currentUser, isLoading }; 
};

type CreateUserRequest = {
    auth0Id: string; 
    email: string; 
};

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0(); 


    const createMyUserRequest = async (user: CreateUserRequest): Promise<void> => {
        const accessToken = await getAccessTokenSilently(); 
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST", 
            headers: {
                Authorization: `Bearer ${accessToken}`, 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(user), 
        }); 

        if(!response.ok) {
            throw new Error("Failed to create user"); 
        };
    };
}

        const useCreateMyUser = () => {
        const mutation = useMutation<void, Error, CreateUserRequest>(createMyUserRequest);
        { getAccessTokenSilently } = useAuth0();


    const { mutateAsync: createUser } = useMutation<void, Error, CreateUserRequest>(createMyUserRequest); 

    return {
        createUser: mutation.mutateAsync,
        isLoading: mutation.isLoading, 
        isError: mutation.isError, 
        isSuccess: mutation.isSuccess, ,
    };
};

type UpdateMyUserRequest = {
    name: string; 
    addressLine1: string; 
    city: string; 
    country: string; 
}; 

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0(); 

    const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently(); 
        const response = await fetch(`${API_BASE_URL}/api/,y/user`, {
            method: "PUT", 
            headers: {
                Authorization: `Bearer ${accessToken}`, 
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(formData), 
        });


        if(!response.ok) {
            throw new Error("Failed to update user")
        }
        return response.json();
    };

    const { mutateAsync: updateUser, isLoading, isSuccess, error, reset } = useMutation(updateMyUserRequest); 

    //when user updates profile, confirmation messages display
    if (isSuccess) {
        toast.success("User Profile Udpate!"); 
    }

    if (error) {
        toast.error(error.toString()); 
        reset(); //clear error state from request
    }

    return {
        updateUser, 
        isLoading
    };
};
