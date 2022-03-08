import dashboardIcon from '../assets/images/ic-dashboard.png'
import * as IoIcons from 'react-icons/io';

export const facultyArr = [
  {
    faculty: "science",
    departments: [
      {
        department: 'Medicine',
        courses: [
          { subject: "Med-1" },
          { subject: "Med-2" }
        ]
      },
      {
        department: 'Engineering',
        courses: [
          { subject: "Eng-1" },
          { subject: "Eng-2" }
        ]
      },
      {
        department: 'Pharmacy',
        courses: [
          { subject: "Pharm-1" },
          { subject: "Pharm-2" }
        ]
      }
    ]
  },

  {
    faculty: "arts",
    departments: [
      {
        department: 'Law',
        courses: [
          { subject: "Law-1" },
          { subject: "Law-2" }
        ]
      },
      {
        department: 'Theater Arts',
        courses: [
          { subject: "Theaeter-1" },
          { subject: "Theaeter-2" }
        ]
      },
      {
        department: 'Wood Works',
        courses: [
          { subject: "Wood-1" },
          { subject: "Wood-2" }
        ]
      },

    ]
  },

]

export const courseArr = [
  {
    department: 'Law',
    courses: [
      { subject: "Law-1" },
      { subject: "Law-2" }
    ]
  },
  {
    department: 'Theater Arts',
    courses: [
      { subject: "Theaeter-1" },
      { subject: "Theaeter-2" }
    ]
  },
  {
    department: 'Wood Works',
    courses: [
      { subject: "Wood-1" },
      { subject: "Wood-2" }
    ]
  },
  {
    department: 'Medicine',
    courses: [
      { subject: "Med-1" },
      { subject: "Med-2" }
    ]
  },
  {
    department: 'Engineering',
    courses: [
      { subject: "Eng-1" },
      { subject: "Eng-2" }
    ]
  },
  {
    department: 'Pharmacy',
    courses: [
      { subject: "Pharm-1" },
      { subject: "Pharm-2" }
    ]
  }
]


export const navLinks = [
  {
    role:['admin', 'teacher', 'student'],
    title: "Dashboard",
    path: '/dashboard',
    icon: dashboardIcon,
  },
  {
    role:['admin', 'teacher', 'student'],
    title: "My Profile",
    path: "/profile",
    icon: dashboardIcon,
  },
  {
    role:['admin', 'teacher', 'student'],
    title: "Courses",
    path: "/courses",
    icon: dashboardIcon,
  },
  {
    role:['admin', 'teacher'],
    title: "Students",
    path: "/students",
    icon: dashboardIcon,
  },
  {
    role:['admin', 'teacher'],
    title: "Lecturers",
    path: "/lecturers",
    icon: dashboardIcon,
  },
  {
    role:['admin', 'teacher', 'student'],
    title: "Settings",
    path: "/settings",
    icon: dashboardIcon,
  },
  {
    role:['admin', 'teacher', 'student'],
    title: "Support",
    path: "/support",
    icon: dashboardIcon,
  },
  
]