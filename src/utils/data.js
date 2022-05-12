import dashboardIcon from '../assets/images/ic-dashboard.png'
import {
  Books, Timer, Binoculars, TreeEvergreen,
  User, Student, Book, Users, Gear, ChalkboardSimple, SignOut
} from 'phosphor-react'

export const facultyArr = [
  {
    faculty: "Clinical Sciences",
    departments: [
      { department: 'Mental Health', },
      { department: 'Surgery', },
      { department: 'Paediatrics and Child Health', },
      { department: 'Nursing', },
      { department: 'Internal Medicine', },
      { department: 'Obstetrics & Gynaecology', },
    ]
  },

  {
    faculty: "Engineering",
    departments: [
      { department: 'Computer Engineering', },
      { department: 'Chemical Engineering', },
      { department: 'Gas Engineering', },
      { department: 'Environmental Engineering', },
      { department: 'Mechanical Engineering', },
    
    ]
  },

  {
    faculty: "Pharmaceutical Sciences",
    departments: [
      { department: 'Clinical Pharmacy and Management', },
      { department: 'Pharmaceutical and Medicinal Chemistry', },
      { department: 'Pharmaceutical Microbiology and Biotechnology', },
      { department: 'Experimental Pharmacology and Toxicology', },
    ]
  },

  {
    faculty:"Law",
    departments: [
      { department: 'Public Law', },
      { department: 'Private Law', },
      { department: 'Commercial and Industrial Law', },
      { department: 'Jurisprudence and International', },
     
    ]
  },

  {
    faculty:"Management Sciences",
    departments: [
      { department: 'Accounting', },
      { department: 'Finance and Banking', },
      { department: 'Management', },
      { department: 'Marketing', },
      { department: 'Hospitality Management and Tourism', },
     
    ]
  },

]

export const courseArr = [
  {
    department: 'Mental Health',
    courses: [
      { code: 'MNT101', title: "Suicide Prevention", score: 0, units: 4 },
      { code: 'MNT102', title: "Mental and Physical Self Care", score: 0, units: 4 },
      { code: 'MNT103', title: "Phycological First Aid", score: 0, units: 3 },
      { code: 'PSY107', title: "The Science Of Well-Beign", score: 0, units: 3 },
      { code: 'PSY106', title: "Physcology", score: 0, units: 3 },
      { code: 'PSY104', title: "Introduction to Add-Physcology", score: 0, units: 3 },
      { code: 'PSY104', title: "The Addicted Brain", score: 0, units: 2 },
    ]
  },
  {
    department: 'Engineering',
    courses: [
      { code: 'ENG101', title: "Introduction To English Oliophogsis and Satuaraton", score: 0, units: 5, status: false },
      { code: 'ENG102', title: "Eng-2", score: 0, units: 5, status: false }
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

export const spreadsheetHeader = [
  { title: "Course Code" },
  { title: "Course Title"},
  { title: "Credit Unit (CU)" },
  { title: "Score" },
  { title: "Letter Grade" },
  { title: "Grade Point (GP)" },
  { title: "Quality Point (QP) = CU x GP" },
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

