import { Icons } from "../components/Icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Colors from "./Colors";

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
}

export const ScreensArray = [
  { route: 'DashBoard', label: 'DashBoard', type: Icons.Feather, icon: 'home', component: Home, },
  { route: 'Profile', label: 'Profile', type: Icons.AntDesign, icon: "user", component: Profile, },
];
export const drawerMenu = [
  {
    title: "Tour Plan",
    bg: Colors.menu1,
    type: Icons.Feather,
    icon: 'settings',
    route: 'Settings',
    menuList: [
      { title: 'Tour Plan Field', screen: 'Field' },
      { title: 'Tour Plan Attendance', screen: 'Attendance' },
      { title: 'Tour Plan Leave', screen: 'Leave' },
    ]
  },
  {
    title: "Daily Call Report",
    bg: Colors.menu2,
    type: Icons.Feather,
    icon: 'check-square',
    route: 'Todo',
    menuList: [
      { title: 'Daily Call Report Field', screen: 'Field' },
      { title: 'Daily Call Report Attendance', screen: 'Attendance' },
      { title: 'Daily Call Report Leave', screen: 'Leave' },
    ]
  },
  {
    title: "Report",
    bg: Colors.menu3,
    type: Icons.Octicons,
    icon: 'project',
    route: 'Project',
    menuList: [
      { title: 'Report Field', screen: 'Field' },
      { title: 'Report Attendance', screen: 'Attendance' },
      { title: 'Report Leave', screen: 'Leave' },
    ]
  },
];
