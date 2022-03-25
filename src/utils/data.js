import dashboardIcon from '../assets/images/ic-dashboard.png'
import * as IoIcons from 'react-icons/io';

export const facultyArr = [
  {
    faculty: "Science",
    departments: [
      { department: 'Medicine', },
      { department: 'Engineering', },
      { department: 'Pharmacy', }
    ]
  },

  {
    faculty: "Arts",
    departments: [
      { department: 'Law', },
      { department: 'Theater Arts', },
      { department: 'Wood Works', },
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
      { code: 'ENG101', title: "Introduction To English Oliophogsis and Satuaraton", score: 0, units: 5 },
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
  { title: "S/N" },
  { title: "First Name" },
  { title: "Last Name" },
  { title: "Gender" },
  { title: "Email" },
  { title: "Actions" }
]

export const tableAcademics = [
  { title: "S/N" },
  { title: "Code" },
  { title: "Title" },
  { title: "Score", show: false, },
  { title: "Units" }
]

export const tableRegisterCourses = [
  { title: "S/N" },
  { title: "Code" },
  { title: "Title" },
  { title: "Units" },
  { title: "Action" }
]