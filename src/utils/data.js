import dashboardIcon from '../assets/images/ic-dashboard.png'
import * as IoIcons from 'react-icons/io';

export const facultyArr = [
  {
    faculty: "Science",
    departments: [
      {
        department: 'Medicine',
        courses: [
          { code: 'MED101', subject: "Med-1", score: 0, units: 5 },
          { code: 'MED102', subject: "Med-2", score: 0, units: 5 }
        ]
      },
      {
        department: 'Engineering',
        courses: [
          { code: 'ENG101', subject: "Eng-1", score: 0, units: 5 },
          { code: 'ENG102', subject: "Eng-2", score: 0, units: 5 }
        ]
      },
      {
        department: 'Pharmacy',
        courses: [
          { code: 'PHRM-101', subject: "Pharm-1", score: 0, units: 5 },
          { code: 'PHRM-102', subject: "Pharm-2", score: 0, units: 5 }
        ]
      }
    ]
  },

  {
    faculty: "Arts",
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
    department: 'Medicine',
    courses: [
      { code: 'MED101', title: "Med-1", score: 0, units: 5 },
      { code: 'MED102', title: "Med-2", score: 0, units: 5 }
    ]
  },
  {
    department: 'Engineering',
    courses: [
      { code: 'ENG101', title: "Eng-1", score: 0, units: 5 },
      { code: 'ENG102', title: "Eng-2", score: 0, units: 5 }
    ]
  },
  {
    department: 'Pharmacy',
    courses: [
      { code: 'PHRM-101', title: "Pharm-1", score: 0, units: 5 },
      { code: 'PHRM-102', title: "Pharm-2", score: 0, units: 5 }
    ]
  },
  {
    department: 'Law',
    courses: [
      { code: 'LAW-101', title: "Law-1", score: 0, units: 5 },
      { code: 'LAW-102', title: "Law-2", score: 0, units: 5 }
    ]
  },
  {
    department: 'Accounts',
    courses: [
      { code: 'ACC-101', title: "Accounts-1", score: 0, units: 5 },
      { code: 'ACC-102', title: "Accounts-2", score: 0, units: 5 }
    ]
  },
  {
    department: 'Theater Arts',
    courses: [
      { code: 'TRT-101', title: "Theater-1", score: 0, units: 5 },
      { code: 'TRT-102', title: "Theater-2", score: 0, units: 5 }
    ]
  },
]


export const navLinks = [
  {
    role: ['admin', 'teacher', 'student'],
    title: "Dashboard",
    path: '/dashboard',
    icon: dashboardIcon,
  },
  {
    role: ['admin', 'teacher', 'student'],
    title: "My Profile",
    path: "/profile",
    icon: dashboardIcon,
  },
  {
    role: ['student'],
    title: "Courses",
    path: "/courses",
    icon: dashboardIcon,
  },
  {
    role: ['admin', 'teacher'],
    title: "Students",
    path: "/students",
    icon: dashboardIcon,
  },
  {
    role: ['admin'],
    title: "Lecturers",
    path: "/lecturers",
    icon: dashboardIcon,
  },
  {
    role: ['admin', 'teacher', 'student'],
    title: "Settings",
    path: "/settings",
    icon: dashboardIcon,
  },
]

export const lessons = [
  {
    time: '9:00 AM',
    lesson: 'PPP 200'
  },
  {
    time: '9:00 AM',
    lesson: 'CHM 120'
  },
  {
    time: '9:00 AM',
    lesson: 'MTH 110'
  },
  {
    time: '9:00 AM',
    lesson: 'CHM 120'
  },
  {
    time: '9:00 AM',
    lesson: 'MTH 110'
  },
]


export const tableHeading = [
  {
    title: "S/N"
  },
  {
    title: "First Name"
  },
  {
    title: "Last Name"
  },
  {
    title: "Gender"
  },
  {
    title: "Email"
  },

  {
    title: "Actions"
  }
]

export const tableAcademics = [
  {
    title: "S/N"
  },
  {
    title: "Code"
  },
  {
    title: "Title"
  },
  {
    title: "Score"
  },
  {
    title: "Units"
  }
]