import { BsFillPersonFill, BsPeopleFill } from "react-icons/bs";

const iconStyle = "mr-2";
const signOut = () => {};

export const TABS = [
  {
    name: "View Stores",
    page: "store",
    link: "/store",
    icon: <BsFillPersonFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "products",
    page: "products",
    link: "/products",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "Order",
    page: "order",
    link: "/order",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "My Order",
    page: "myorder",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "Update Product",
    page: "update-product",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager", "admin"],
  },
  {
    name: "View Updates",
    page: "view-updates",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "Popular Items",
    page: "popular-items",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "Popular Customers",
    page: "popular-customers",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "Supply Request",
    page: "supply-request",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "All Orders",
    page: "all-orders",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "All Users",
    page: "all-users",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["admin"],
  },
  {
    name: "Update Users",
    page: "update-users",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["admin"],
  },
  {
    name: "Delete Users",
    page: "delete-users",
    link: "/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["admin"],
  },
];
