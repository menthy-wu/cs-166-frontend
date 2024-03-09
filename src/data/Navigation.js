import {
  BsFillPersonFill,
  BsPeopleFill,
  BsBarChartFill,
  BsGlobe2,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";
import { SiDevpost, SiHandshake } from "react-icons/si";

const iconStyle = "mr-2";
const signOut = () => {};

export const TABS = {
  user: {
    dropdown: false,
    Dashboards: {
      expand: true,
      mt: "mt-0",
      tabs: [
        {
          name: "store",
          link: "/user/store",
          icon: <BsFillPersonFill className={iconStyle} />,
        },
        {
          name: "products",
          link: "/admin/teams",
          icon: <BsPeopleFill className={iconStyle} />,
        },
      ],
    },

    " ": [
      {
        name: "sign out",
        link: "/",
        onClick: signOut,
        icon: <BsBoxArrowInRight className={iconStyle} />,
      },
    ],
  },
  manager: {
    Portal: {
      mt: "mt-0",
      tabs: [
        {
          name: "dashboard",
          link: "/user/dashboard",
          icon: <BsFillPersonFill className={iconStyle} />,
        },
        {
          name: "checkin",
          link: "/user/checkin",
          icon: <AiOutlineQrcode className={iconStyle} />,
        },
        {
          name: "feedback",
          link: "/form/feedback",
          icon: <MdFeedback className={iconStyle} />,
        },
      ],
    },
    " ": [
      {
        name: "sign out",
        link: "/",
        onClick: signOut,
        icon: <BsBoxArrowInRight className={iconStyle} />,
      },
    ],
  },
};
