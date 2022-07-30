import React from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
export const SidebarData = [
    {
        title: "Admin",
        icon: <AdminPanelSettingsIcon />,
        link: "/admin"
    },
    {
        title: "Products",
        icon: <ShoppingBasketIcon />,
        link: "/products"
    },
    {
        title: "Stores",
        icon: <StoreMallDirectoryIcon />,
        link: "/stores"
    },
    {
        title: "Delivery Service",
        icon: < DeliveryDiningIcon/>,
        link: "/deliveryservice"
    },
    {
        title: "Advisory Service",
        icon: <SupervisorAccountIcon />,
        link: "/advisoryservice"
    }
];
  