import React from 'react'; 
import { CircleUserRound } from "lucide-react";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';

function UsernameMenu() {
    const { user, logout } = useAuth0(); 

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-pink-500 gap-2">
            <CircleUserRound className="text-pink-500" />
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to="/manage-restaurant"
                className="font-bold hover:text-pink-500">
                Manage Restaurant
                </Link>
            </DropdownMenuItem>
            
            <Separator />
            
            <DropdownMenuItem>
                <Link to="/user-profile"
                className="font-bold hover:text-pink-500">
                User Profile
                </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button onClick={()=> logout()}className="flex flex-1 font-bold bg-pink-500">
                Logout
                </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Button onClick={()=> logout()}className="flex flex-1 font-bold bg-pink-500">
                Logout
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

 export default UsernameMenu; 