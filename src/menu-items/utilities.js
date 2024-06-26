// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
} from "@tabler/icons-react";

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: "utilities",
  title: "Menu Management",
  type: "group",
  children: [
    {
      id: "Counter",
      title: "Counter & Bills",
      type: "item",
      url: "/utils/Counter",
      icon: icons.IconShadow,
      breadcrumbs: false,
    },
    {
      id: "util-typography",
      title: "Menu Management",
      type: "item",
      url: "/utils/menu",
      icon: icons.IconPalette,
      breadcrumbs: false,
    },
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/utils/util-color',
    //   icon: icons.IconPalette,
    //   breadcrumbs: false
    // },

    {
      id: "icons",
      title: "Sell Transaction",
      type: "item",
      url: "/icons/tabler-icons",
      icon: icons.IconWindmill,
      breadcrumbs: false,
    },
    // {
    //   id: 'icons',
    //   title: 'Icons',
    //   type: 'collapse',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ],
};

export default utilities;
