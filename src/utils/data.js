import dashboardIcon from '../assets/images/ic-dashboard.png'
import {
  Books, Timer, Binoculars, TreeEvergreen,
  User, Student, Book, Users, Gear, ChalkboardSimple, SignOut
} from 'phosphor-react'

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
    icon: <ChalkboardSimple />,
  },
  {
    role: ['admin', 'teacher', 'student'],
    title: "My Profile",
    path: "/profile",
    icon: <User />,
  },
  {
    role: ['student'],
    title: "Courses",
    path: "/courses",
    icon: <Book />,
  },
  {
    role: ['admin', 'teacher'],
    title: "Students",
    path: "/students",
    icon: <Student />,
  },
  {
    role: ['admin'],
    title: "Lecturers",
    path: "/lecturers",
    icon: <Users />,
  },
  {
    role: ['admin', 'teacher', 'student'],
    title: "Settings",
    path: "/settings",
    icon: <Gear />,
  },
  {
    role: ['admin', 'teacher', 'student'],
    title: "Logout",
    path: "/login",
    icon: <SignOut />,
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

export const homeContentData = [
  {
    title: 'Our Culture',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quaerat quae tempore quibusdam repudiandae illo, aliquid animi consectetur porro reiciendis, fuga mollitia facere cupiditate sit consequuntur voluptatibus voluptates a totam? Quod reiciendis dolores eaque adipisci sunt quam debitis aperiam, modi a sit doloremque omnis numquam facere, praesentium, officiis expedita.',
    icon: <Books size={30} color="#163bd0" />,
  },
  {
    title: 'Our History',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quaerat quae tempore quibusdam repudiandae illo, aliquid animi consectetur porro reiciendis, fuga mollitia facere cupiditate sit consequuntur voluptatibus voluptates a totam? Quod reiciendis dolores eaque adipisci sunt quam debitis aperiam, modi a sit doloremque omnis numquam facere, praesentium, officiis expedita.',
    icon: <Timer size={30} color="#ff3838" />,
  },
  {
    title: 'Foresight',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quaerat quae tempore quibusdam repudiandae illo, aliquid animi consectetur porro reiciendis, fuga mollitia facere cupiditate sit consequuntur voluptatibus voluptates a totam? Quod reiciendis dolores eaque adipisci sunt quam debitis aperiam, modi a sit doloremque omnis numquam facere, praesentium, officiis expedita.',
    icon: <Binoculars size={30} color="#e0d01f" weight="bold" />,
  },
  {
    title: 'Our Core Values',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quaerat quae tempore quibusdam repudiandae illo, aliquid animi consectetur porro reiciendis, fuga mollitia facere cupiditate sit consequuntur voluptatibus voluptates a totam? Quod reiciendis dolores eaque adipisci sunt quam debitis aperiam, modi a sit doloremque omnis numquam facere, praesentium, officiis expedita.',
    icon: <TreeEvergreen size={30} color="#1ea207" weight="bold" />,
  },
]


export const testi = [
  {
    role: "student",
    level: "student",
    firstName: "Onyeyaforoooo",
    lastName: "Emmanuelelele",
    email: "admin@schcsasool.com",
    phone: "08108243267",
    address: "Port Harcourt",
    dob: "2022-03-18",
    soo: "Imo",
    profileImg: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    courses: [],
    department: "",
    faculty: "",
    pic: "uploads/2022-05-02T20-37-45.124Z-IMG_20180530_172544.jpg"
},
  {
    role: "student",
    level: "student",
    firstName: "koro",
    lastName: "bb",
    email: "admin@schofaacol.com",
    phone: "08108243267",
    address: "Port Harcourt",
    dob: "2022-03-18",
    soo: "Imo",
    profileImg: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    courses: [],
    department: "",
    faculty: "",
    pic: "uploads/2022-05-02T20-37-45.124Z-IMG_20180530_172544.jpg"
}
]