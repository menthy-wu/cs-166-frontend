import { BsFillPersonFill, BsPeopleFill } from "react-icons/bs";

const iconStyle = "mr-2";
const signOut = () => {};

export const TABS = [
  {
    name: "View Stores",
    page: "store",
    link: "/table/store",
    icon: <BsFillPersonFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "products",
    page: "products",
    link: "/table/products",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "Order",
    page: "order",
    link: "/form/order",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "My Order",
    page: "myorder",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["customer", "manager", "admin"],
  },
  {
    name: "Update Product",
    page: "update-product",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager", "admin"],
  },
  {
    name: "View Updates",
    page: "view-updates",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "Popular Items",
    page: "popular-items",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "Popular Customers",
    page: "popular-customers",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "Supply Request",
    page: "supply-request",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "All Orders",
    page: "all-orders",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["manager"],
  },
  {
    name: "All Users",
    page: "all-users",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["admin"],
  },
  {
    name: "Update Users",
    page: "update-users",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["admin"],
  },
  {
    name: "Delete Users",
    page: "delete-users",
    link: "/table/myorder",
    icon: <BsPeopleFill className={iconStyle} />,
    type: ["admin"],
  },
];
