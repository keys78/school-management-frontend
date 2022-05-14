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
    faculty: "Law",
    departments: [
      { department: 'Public Law', },
      { department: 'Private Law', },
      { department: 'Commercial and Industrial Law', },
      { department: 'Jurisprudence and International', },

    ]
  },

  {
    faculty: "Management Sciences",
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
    // pharmaceutical sciences
  {
    department: 'Clinical Pharmacy and Management',
    courses: [
        { code: 'PCL101', title: "Introduction to Pharmacy Practice", score: 0, units: 2 },
        { code: 'PCL162', title: "Pharmacokinetics and Biopharmaceutics", score: 0, units: 3 },
        { code: 'PCL171', title: "Introduction to Pharmacy Administration & Pharmacy Management", score: 0, units: 3 },
        { code: 'PCL161', title: "Pathology for Pharmacy students", score: 0, units: 2 },
        { code: 'PCL162', title: "Introduction to Clinical and Public Health Pharmacy", score: 0, units: 1 },
        { code: 'PCL171', title: "Pharmacy Ethics & Jurisprudence", score: 0, units: 3 },
        { code: 'PCL161', title: "Pathophysiology & Pharmacotherapeutics", score: 0, units: 3 },
    ]
},
{
    department: 'Pharmaceutical and Medicinal Chemistry',
    courses: [
        { code: 'PCH101', title: "Pharmaceutical Chemistry I (Physical and Inorganic Pharmaceutical Chemistry)", score: 0, units: 3 },
        { code: 'PCH103', title: "Pharmaceutical Analysis I (Basic & Electroanalytical Methods)", score: 0, units: 2 },
        { code: 'PCH104', title: "Medicinal Chemistry I (Introduction to Medicinal Chemistry)", score: 0, units: 2 },
        { code: 'PCH121', title: "Chemotherapeutic Agents & Drug Design", score: 0, units: 2 },
        { code: 'PCH123', title: "Drug Metabolism and Analysis ", score: 0, units: 2 },
        { code: 'PHA136', title: "Biochemistry for Pharmacy Students", score: 0, units: 3 },
        { code: 'PHA133', title: "Chemistry of the Pharmacodynamic Agents", score: 0, units: 3 },
    ]
},
{
    department: 'Pharmaceutical Microbiology and Biotechnology',
    courses: [
        { code: 'PMB103', title: "Introductory Pharmacognosy", score: 0, units: 3 },
        { code: 'PMB102', title: "Pharmaceutical Biotechnology", score: 0, units: 2 },
        { code: 'PMB112', title: "Principles and Applications of Microbial Fermentation", score: 0, units: 3 },
        { code: 'PMB113', title: "Clinical Applications of Pharmaceutical Microbiology", score: 0, units: 2 },
        { code: 'PMB123', title: "Basic Pharmaceutical Biotechnology and immunology ", score: 0, units: 2 },
        { code: 'PCL162', title: "Introduction to Clinical and Public Health Pharmacy", score: 0, units: 1 },
        { code: 'PCL171', title: "Pharmacy Ethics & Jurisprudence", score: 0, units: 3 },
    ]
},
{
    department: 'Experimental Pharmacology and Toxicology',
    courses: [
        { code: 'PCO111', title: "Human Gross Anatomy/Neuroanatomy", score: 0, units: 2 },
        { code: 'PCO112', title: "Human Genetic Anatomy/Histology", score: 0, units: 2 },
        { code: 'PCO113', title: "Introduction to Human Physiology I", score: 0, units: 2 },
        { code: 'PCO115', title: "Principles of Pharmacology", score: 0, units: 2 },
        { code: 'PCO143', title: "General Principles of Toxicology", score: 0, units: 3 },
        { code: 'PCO121', title: "Veterinary Pharmacy and Agrochemicals", score: 0, units: 2 },
        { code: 'PCO114', title: "Chemotherapy", score: 0, units: 3 },
    ]
},

      // law firm
  {
    department: 'Public Law',
    courses: [
        { code: 'LAW101', title: "Legal Methods", score: 0, units: 2 },
        { code: 'LAW143', title: "Nigerian Legal System", score: 0, units: 3 },
        { code: 'LPI102', title: "Criminal Law", score: 0, units: 4 },
        { code: 'LPI109', title: "Criminology", score: 0, units: 4 },
        { code: 'LPI106', title: "Human Right Law", score: 0, units: 3 },
        { code: 'LPI106', title: "Administrative Law", score: 0, units: 3 },
        { code: 'LPI104', title: "Constitutional Law", score: 0, units: 2 },
    ]
},
{
    department: 'Private Law',
    courses: [
        { code: 'LAW101', title: "Legal Methods", score: 0, units: 2 },
        { code: 'LAW143', title: "Nigerian Legal System", score: 0, units: 3 },
        { code: 'LAW112', title: "Law of Contract", score: 0, units: 2 },
        { code: 'LAW123', title: "Principle of Equity and Trust", score: 0, units: 2 },
        { code: 'LAW113', title: "Law of Tort", score: 0, units: 2 },
        { code: 'LAW141', title: "Family Law and Succession", score: 0, units: 3 },
        { code: 'LAW121', title: "Human Rights Law", score: 0, units: 2 },
    ]
},
{
    department: 'Commercial and Industrial Law',
    courses: [
        { code: 'LAW103', title: "Environmental Law", score: 0, units: 3 },
        { code: 'LAW102', title: "Law of Banking", score: 0, units: 2 },
        { code: 'LAW112', title: "Law of International Trade And Investmentt", score: 0, units: 3 },
        { code: 'LAW113', title: "Law of Business Association", score: 0, units: 2 },
        { code: 'LAW123', title: "Conflict Of Laws ", score: 0, units: 2 },
        { code: 'LAW115', title: "Intellectual Property Law", score: 0, units: 2 },
        { code: 'LAW144', title: "Maritime And Shipping Law", score: 0, units: 3 },
    ]
},
{
    department: 'Jurisprudence and International',
    courses: [
        { code: 'LAW101', title: "Public International Law", score: 0, units: 2 },
        { code: 'LAW101', title: "Jurisprudence And Legal Theory", score: 0, units: 2 },
        { code: 'LAW101', title: "Law of International Trade And Investment", score: 0, units: 2 },
        { code: 'LAW101', title: "Legal Methods", score: 0, units: 2 },
        { code: 'LAW143', title: "Nigerian Legal System", score: 0, units: 3 },
        { code: 'LAW121', title: "Information Communication and Technology", score: 0, units: 2 },
        { code: 'LAW113', title: "Law of Business Association", score: 0, units: 2 },
    ]
},


      // Management Sciences
  {
    department: 'Accounting',
    courses: [
      { code: 'MTH101', title: "Business Mathematics 1 (FC)", score: 0, units: 4 },
      { code: 'ACC102', title: "Introduction to Business", score: 0, units: 4 },
      { code: 'ACC103', title: "Taxation 1, auditing and Investigation", score: 0, units: 3 },
      { code: 'ACC107', title: "Introduction to Financial Accounting II Business Law", score: 0, units: 3 },
      { code: 'ACC106', title: "International Accounting", score: 0, units: 3 },
      { code: 'ACC104', title: "Executorship Law Bankruptcy & Accounts", score: 0, units: 3 },
      { code: 'ACC104', title: "Public Sector Accounting", score: 0, units: 2 },
    ]
  },
  {
    department: 'Finance and Banking',
    courses: [
      { code: 'MTH100', title: "Mathematics for social science I", score: 0, units: 2 },
      { code: 'LAW143', title: "Nigerian Legal System I", score: 0, units: 2 },
      { code: 'MAN103', title: "Principle of Management I", score: 0, units: 2 },
      { code: 'BAF111', title: "Micro Economics Theory", score: 0, units: 2 },
      { code: 'BAF113', title: "Intermediate Financial Accounting I", score: 0, units: 2 },
      { code: 'BAF111', title: "Elements of  Banking", score: 0, units: 3 },
      { code: 'BAF104', title: "Principles of Accounting I", score: 0, units: 2 },
    ]
  },
  {
    department: 'Management',
    courses: [
      { code: 'MAN102', title: "Human Resource Management", score: 0, units: 2 },
      { code: 'MAN103', title: "Quantitative Methods for Business", score: 0, units: 2 },
      { code: 'MAN101', title: "Principles of Small Business Management", score: 0, units: 2 },
      { code: 'MAN112', title: "Principle of Management I", score: 0, units: 2 },
      { code: 'MAN110', title: "Elements of Business Economics I", score: 0, units: 3 },
      { code: 'BAF101', title: "Introduction to Finance", score: 0, units: 2 },
      { code: 'MTH101', title: "Business Mathematics 1 (FC)", score: 0, units: 2 },
    ]
  },
  {
    department: 'Marketing',
    courses: [
      { code: 'MKT101', title: "Introduction to Co-operative", score: 0, units: 2 },
      { code: 'MKT101', title: "Introduction to Business I", score: 0, units: 2 },
      { code: 'MKT201', title: "Principles of Marketing I", score: 0, units: 3 },
      { code: 'MKT213', title: "Business Statistics I", score: 0, units: 2 },
      { code: 'ACC101', title: "Principles of Accounting I", score: 0, units: 2 },
      { code: 'BAF201', title: "Elements of  Banking", score: 0, units: 2 },
      { code: 'PSY101', title: "Introduction to Psychology I", score: 0, units: 2 },
    ]
  },
  {
    department: 'Hospitality Management and Tourism',
    courses: [
      { code: 'HMT101', title: "Quality Managment in hospitality sector", score: 0, units: 2 },
      { code: 'HMT102', title: "Marketing and Advertising in Hotel Industry", score: 0, units: 2 },
      { code: 'HHT103', title: "Hotel and Hospitality Management Diploma", score: 0, units: 2 },
      { code: 'HMT104', title: "Recruitment and Selection in Hospitality Industry", score: 0, units: 2 },
      { code: 'HMT105', title: "Hospitality Supervision and Leadership", score: 0, units: 3 },
      { code: 'HMT111', title: "Certified Restaurant Manager", score: 0, units: 2 },
      { code: 'HMT113', title: "Advanced Certificate in Strategic Hospitality", score: 0, units: 2 },
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
  { title: "Course Title" },
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

