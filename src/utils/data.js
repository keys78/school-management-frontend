
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
  // clinical sciences
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
    department: 'Surgery',
    courses: [
      { code: 'MBS101', title: "Basic Surgical Skills (Intercollegiate BSS)", score: 0, units: 4 },
      { code: 'MBS102', title: "Advanced Trauma Life Support", score: 0, units: 4 },
      { code: 'MBS103', title: "3D for Medicine and Orthopedic Surgery", score: 0, units: 5 },
      { code: 'NUT107', title: "Nutrition Science", score: 0, units: 3 },
      { code: 'MBS106', title: "Acute Surgical Care PGCerty", score: 0, units: 3 },
      { code: 'MBS114', title: "Orthopaedics", score: 0, units: 3 },
      { code: 'MBS104', title: "Minor Injuries", score: 0, units: 2 },
    ]
  },
  {
    department: 'Paediatrics and Child Health',
    courses: [
      { code: 'PCH101', title: "Basic Child Health", score: 0, units: 4 },
      { code: 'PCH102', title: "Mum and Baby", score: 0, units: 4 },
      { code: 'PCH103', title: "The EMT Specialist", score: 0, units: 5 },
      { code: 'TUT107', title: "Pregnancy Emergency", score: 0, units: 3 },
      { code: 'PCH106', title: "Hearing Loss In Children", score: 0, units: 3 },
      { code: 'PCH114', title: "Understanding Adolesencts", score: 0, units: 3 },
      { code: 'PCH104', title: "Anatomy of Chest, Neck, Abdomen and Pelvis", score: 0, units: 2 },
    ]
  },
  {
    department: 'Nursing',
    courses: [
      { code: 'NUR101', title: "Avoiding Nurse Eliza 101", score: 0, units: 4 },
      { code: 'NUR102', title: "The Body and Vital Signs", score: 0, units: 4 },
      { code: 'NUR103', title: "Infecton Prevention In Nursing Homes", score: 0, units: 5 },
      { code: 'GST107', title: "Introduction to Integrative Nursing", score: 0, units: 3 },
      { code: 'NUR106', title: "Essentials In Clinical Simlations", score: 0, units: 3 },
      { code: 'NUR114', title: "Anatomy and Beyond", score: 0, units: 3 },
      { code: 'NUR104', title: "Clinical Terminologies  for International Students", score: 0, units: 2 },
    ]
  },
  {
    department: 'Internal Medicine',
    courses: [
      { code: 'ITM101', title: "Introducton To Internal Medicine", score: 0, units: 4 },
      { code: 'ITM102', title: "Useful Vs Dangerous Chemicals", score: 0, units: 4 },
      { code: 'ITM103', title: "The Covid Sage", score: 0, units: 5 },
      { code: 'GEN113', title: "Musculoskeletal course ", score: 0, units: 3 },
      { code: 'ITM106', title: "Medical NueroScience", score: 0, units: 3 },
      { code: 'ITM114', title: "Foundaton ForInternational Psychiatry", score: 0, units: 3 },
      { code: 'ITM104', title: "Chinese Medicine", score: 0, units: 2 },
      { code: 'ITM119', title: "Renal & Endocrine Course", score: 0, units: 2 },
    ]
  },
  {
    department: 'Obstetrics & Gynaecology',
    courses: [
      { code: 'OBG101', title: "Understanding Obstetrics & Gynaecology", score: 0, units: 4 },
      { code: 'OBG102', title: "Cellular and Molecular Immunology", score: 0, units: 4 },
      { code: 'OBG103', title: "Family Planning", score: 0, units: 5 },
      { code: 'GEN113', title: "Urogynecology Advanced Elective", score: 0, units: 3 },
      { code: 'OBG106', title: "Reproductive Endocrinology", score: 0, units: 3 },
      { code: 'OBG114', title: "Foundaton ForInternational Psychiatry", score: 0, units: 3 },
      { code: 'OBG104', title: "Antepartum Obstetrics", score: 0, units: 2 },
      { code: 'OBG119', title: "Clinical Obstetrics and Gynecology", score: 0, units: 2 },
    ]
  },

  // Engineering.. 

  {
    department: 'Computer Engineering',
    courses: [
      { code: 'CEG101', title: "Introduction To Computer Engineering", score: 0, units: 4 },
      { code: 'CEG102', title: "Artificial Intelligence", score: 0, units: 4 },
      { code: 'CEG103', title: "Programming and Data Structures", score: 0, units: 5 },
      { code: 'GEN113', title: "Computing Data Warehousing and Data Mining", score: 0, units: 3 },
      { code: 'CEG106', title: "Design and Analysis of Algorithms", score: 0, units: 3 },
      { code: 'CEG114', title: "Advanced Computer Architecture", score: 0, units: 3 },
      { code: 'CEG104', title: "Computer Networking", score: 0, units: 2 },
    ]
  },
  {
    department: 'Chemical Engineering',
    courses: [
      { code: 'CHE101', title: "Introduction To Bioengineering", score: 0, units: 4 },
      { code: 'CHE102', title: "Introduction To Biotechnology", score: 0, units: 4 },
      { code: 'CHE103', title: "Materials Science", score: 0, units: 5 },
      { code: 'QWP193', title: "Microelectronics", score: 0, units: 3 },
      { code: 'CHE106', title: "Understanding Nanotechnology", score: 0, units: 3 },
      { code: 'CHE114', title: "Engineering mechanics", score: 0, units: 3 },
      { code: 'CHE104', title: "Process Dynamics", score: 0, units: 2 },
    ]
  },
  {
    department: 'Gas Engineering',
    courses: [
      { code: 'GAE101', title: "Fundamentals Of Oil And Gas", score: 0, units: 4 },
      { code: 'GAE102', title: "Advanced Well and Wireline Test", score: 0, units: 4 },
      { code: 'GAE103', title: "Applied Drillng", score: 0, units: 5 },
      { code: 'MOY113', title: "Cathodic Protection System", score: 0, units: 3 },
      { code: 'GAE106', title: "Clastic Reservoir Characterization", score: 0, units: 3 },
      { code: 'GAE114', title: "Control & Safety In Oil and Gas Complex", score: 0, units: 3 },
      { code: 'GAE104', title: "Energy Optimization in Wells", score: 0, units: 2 },
    ]
  },
  {
    department: 'Environmental Engineering',
    courses: [
      { code: 'EVE101', title: "Global Environmental Management", score: 0, units: 4 },
      { code: 'EVE102', title: "Introduction To Sustainability", score: 0, units: 4 },
      { code: 'EVE103', title: "Exploring Renewable Energy Schemes", score: 0, units: 5 },
      { code: 'KNY113', title: "Science & Engineering Of Climate Change", score: 0, units: 3 },
      { code: 'EVE106', title: "Global Warming I", score: 0, units: 3 },
      { code: 'EVE114', title: "Global Warming II", score: 0, units: 3 },
      { code: 'EVE104', title: "GIS Data Formats, Design and Quality", score: 0, units: 2 },
    ]
  },
  {
    department: 'Mechanical Engineering',
    courses: [
      { code: 'MCE101', title: "Introduction To Engineering Mechanics", score: 0, units: 4 },
      { code: 'MCE102', title: "Introduction To Thermodynamics", score: 0, units: 4 },
      { code: 'MCE103', title: "Fundamentals Of Fluid Power", score: 0, units: 5 },
      { code: '00P113', title: "MATLAB Programming", score: 0, units: 3 },
      { code: 'MCE106', title: "Machine Design Part I", score: 0, units: 3 },
      { code: 'MCE114', title: "Machine Design Part II", score: 0, units: 3 },
      { code: 'MCE104', title: "Material Behaviour", score: 0, units: 2 },
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

