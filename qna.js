const bucketQna = [
  { //0
    q: "Tell me more about Enrollment!",
    a: `To enroll, you can access the enrollment schedule and process through the President University Information System (PUIS). The enrollment schedule and instructions will be posted on PUIS, and you can follow the steps provided to complete your enrollment. 

Is there anything you would like to know about enrollment?`,
  },
  { //1
    q: "Tell me more about Judicium!",
    a: `As students are finishing up their studies at President University, graduating students will have to be cleared for judicium before being declared eligible for graduation. This process is requested by students on PUIS.

What would you like to know regarding Judicium?
    `,
  },
  { //2
    q: "Tell me more about the English Policy!",
    a: `President University is a university where all lectures are presented in English and students are also required to speak in English. 

President University also has a minimum standard of English language proficiency as a student graduation requirement. To help fulfill this requirement, 0 Credit English Classes and The President English Test (PET) are provided.`,
  },
  { //3
    q: "What is President University?",
    a: "President University, often referred to as PU or PresUniv, is one of the best private universities in Indonesia and has been accredited \"A\" by BAN-PT. President University offers strong international learning and research environment. The lectures at President University are carried out in English. The number of international students at President University is one of the highest among all universities across Indonesia. The motto/tagline/slogan of President University is \"Where Tomorrow's Leaders Come Together\"."
  },
  { //4
    q: "What are the Faculties in PresUniv?",
    a: "Faculty of Computer Science (FoC), Faculty of Engineering (FoE), Faculty of Business (FoB), Faculty of Humanities (FoH)."
  },
  { //5
    q: "What are the bureaus in PresUniv?",
    a: `Bureaus are multiple departments designed to handle each student's specific needs, which are reachable through email. Therefore, for general inquiries or feedback about President University can be submitted through info@president.ac.id. \n Which of the bureaus would you like to hear more about?`
  },
  { //6
    q: "Can't enroll on enrollment period",
    a: "Your access to enrollment is blocked if you have not conducted a consultation session with your Academic Advisor beforehand. You need to at least conduct 2 consultation meetings with your Academic Advisor."
  },
  { //7
    q: "I want to drop classes I have enrolled in.",
    a: "No, you can't drop any subjects that you have taken before."
  },
  { //8
    q: "Package Enrollment notification",
    a: "Before the start of every new semester, the academic bureau will send each student's President University Email regarding the specific date each study program will open the enrollment."
  },
  { //9
    q: "I want to change my concentration.",
    a: "No, you can't change your concentration of study at President University."
  },
  { //10
    q: "I want to change my major.",
    a: "Only after you finish 1 academic year. However, please remember that not all subjects you have taken can be converted. This might result in an extension of your graduation time. Changing your major will affect your status as a transfer student at President University. Thus, you will not be eligible for distinguishing graduation predicate (cum laude, magna cum laude, and summa cum laude)."
  },
  { //11
    q: "Why am I not cleared for Judicium?",
    a: "Judicium clearance requires verification from various aspects such as the completion of credits taken, subjects validity, a minimum score that can be tolerated by each study program, etc. If you have not been cleared for Judicium, it is highly possible that we are still coordinating the said essential aspects with the relevant departments."
  },
  { //12
    q: "Bureaus for Judicium Clearance",
    a: `Admission Bureau, Library, Academic Bureau, English Language and Literature Center (ELLC)
  
  Which of the bureau's requirements in Validation for Judicium Clearance would you like to learn more about?`,
  },
  { //13
    q: "What to do after Judicium clearance?",
    a: "Students are usually asked to submit photos (digital/physical) for their diploma, transcript, and yearbook after judicium clearance validation (during graduation enrollment). The minimum standard for these photos may vary from time to time. Students are encouraged to pay full attention to the announcement regarding diploma and transcript photos (Academic Bureau) and yearbook photos (graduation committee)."
  }, 
  { //14
    q: "How to waive the English Classes?",
    a: "According to the Rector Regulation Number 12 Year 2022 (https://puis.president.ac.id/decrees/2022/2022-12-12_-_Rector_Regulation_Number_12_Year_2022.pdf) Article 6, in order to waive the 0 credit Fluency courses you would need to have certification on achieving: \na. Minimum score of 60 for TOEFL IBT, \nb. Minimum score of 500 for TOEFL ITP, \nc. Minimum score of 5.5 for IELTS, \nd. Minimum score of 625 for TOEIC, \ne. Minimum score of 85 for DET, \nf. Minimum score of 80 for ELLC test \nAll of the mentioned certification need to be validated by ELLC before a student waives the English Classes."
  },
  { //15
    q: "Where is the official Location of President University?",
    a: "The address of President University is Jl. Ki Hajar Dewantara, Jababeka Education Park, Kota Jababeka, Cikarang Utara, Bekasi, Jawa Barat 17530. President University is located in one of the largest industrial estates in Southeast Asia called Jababeka Industrial Estate where various companies from many countries establish and run their business."
  },
  { //16
    q: "Who are the founders of President University?",
    a: "President University is found by S.D. Darmono / Setyono Djuandi Darmono (Chairman, Jababeka Group), and Prof. Dr. Juwono Sudarsono (Minister of Education & Culture 1998-1999, Minister of Defense 2004-2009)."
  },
  { //17
    q: "Can you tell me the rectorate structure of PresUniv?",
    a: "The Current Rector of President University is Prof. Dr. Ir. Chairy, S.E., M.M. \nThe Vice-Rector for Academics is Handa S. Abidin, S.H., LL.M., Ph.D. \nThe Vide-Rector for Resources is Maria Jacinta Arquisola BA, MHRM, PhD"
  },
  { //18
    q: "Tell me the Visions and Missions of PresUniv",
    a: "Vision: \nTo be an eminent university that produces leaders with an entrepreneurial spirit, multicultural and global mindset.\n\nMission: \n- To establish an education system with a high standard of excellence. \n- Strengthen and encourage self-development to become creative, innovative, inclusive, and broad-minded leaders. \n- Conduct high-quality, effective, and sustainable research and community service. \n- Develop a professional culture in managing university resources. \n- Establish mutually beneficial cooperation with various national, regional, and international/global institutions in implementing the Tri Dharma of Higher Education."
  },
  { //19
    q: "What are the programs under the FoC?",
    a: "Faculty of Computing is responsible for the programs mentioned below: \n- Undergraduate: \n- Information Technology / Informatics (IT / CIT), \n- Information System (IS / CIS) \n- Visual Communication Design (VCD) \n- Interior Design \n- Postgraduate: \n- Master of Information Technology"
  },
  { //20
    q: "Who are the Head of Study Programs of FoC?",
    a: " - Cutifa Safitri, Ph.D. (Information Technology / Informatics) \n- Ronny Juwono, S.Pd., M.T. (Information System) \n- Fransiska Rachel, S.Sn., M.Ds (Visual Communication Design) \n- Pratiwi Purnama Suradhuhita, ST, M.Ars. (Interior Design)"
  },
  { //21
    q: "What are the majors under FoE?",
    a: "Faculty of Engineering is responsible for the programs mentioned below: \n- Civil Engineering (CE) \n- Electrical Engineering (EE) \n- Environmental Engineering (ENV) \n- Industrial Engineering (IE) \n- Architecture (ARC) \n- Mechanical Engineering (ME)"
  },
  { //22
    q: "Who are the Head of Study Programs of FoE?",
    a: " - Dr. Ir. B. M. A. S Anaconda Bangkara, M.T., M.SM. (Civil Engineering) \n- Drs. Antonius Suhartomo, M.Eng.Sc., Ph.D. (Electrical Engineering) \n- Ir. Temmy Wikaningrum, M.Si. (Environmental Engineering) \n- Andira Taslim, S.T., M.T. (Industrial Engineering) \n- Erina Asyera, S.Ars. (Architecture) \n- Dr.Eng. Lydia Anggraini, S.T., M.Eng. (Mechanical Engineering)"
  },
  { //23
    q: "What are the majors under FoB?",
    a: "Faculty of Business is responsible for the programs mentioned below: \n- Undergraduate: \n- Accounting (ACC) \n- Actuarial Science (ACS) \n- Business Administration (BA) \n- Management (MGT / MGMT) \n- Agribusiness (AB) - Postgraduate: \n- Master of Technology Management"
  },
  { //24
    q: "Who are the Head of Study Programs of FoB?",
    a: " - Mila Reyes, CPA., M.BA. (Accounting) \n- Maria Yus Trinity Irsan, S.Si., M.Si. (Actuarial Science) \n- Suresh Kumar, S.T., M.Si. (Business Administration) \n- Assoc. Prof. Dr. Dra. Genoveva, M.M.  (Management) \n- Dr. Dani Lukman Hakim, SP (Agribusiness)"
  },
  { //25
    q: "What are the majors under FoH?",
    a: "Faculty of Humanities is responsible for the programs mentioned below: \n- Communications (COM) \n- International Relations (IRE / IR) \n- Law \n- Primary School Teacher Education (PSTE)"
  },
  { //26
    q: "Who are the Head of Study Programs of FoH?",
    a: " - M. Raudy Gathmyr, S.Sos., M.Si. (Communication) \n- Drs. Muhammad A.S. Hikam, MA., Ph.D. (International Relations) \n- Bayu Imantoro, S.H., M.H. (Law) \n- Ani Pujiastuti, Ph.D. (Primary School Teacher Education)"
  },
  { //27
    q: "Who are the Deans of Faculties?",
    a: " - Rila Mandala, Ph.D. is the Dean of FoC \n- Dr.-Ing. Erwin Sitompul, M.Sc is the Dean of FoE \n- Maria Jacinta Arquisola, BA, MHRM, Ph.D. is the Dean of FoB \n- Dr. Endi Haryono, M.Si. is the Dean of FoH"
  },
  { //28
    q: "What do study programs handle?",
    a: "There are administrative services provided by the Study Program and handled by the representative staff of study programs, which are: \n- Consultation related to Study Program's authority; \n- Recommendation letter; \n- Academic Leave approval (by Head of Study Program and Academic Advisor); \n- Resign approval (by Head of Study Program); \n- List for elective courses; \n- Final project/academic/internship advisors arrangement; \n- Inputting subjects into PUIS along with the assigned lecturer; \n- Inputting defense results (by the staff of the study program); \n- Inputting subjects' scores (by the lecturer) \n- Submission for final project report; \n- SKPI validation; \n- Clashing class schedule confirmation; \n- Transfer Students' conversion (including the input process on PUIS); \n- Kampus Merdeka conversion; and \n- Final project defense registration."
  },
  { //29
    q: "Tell me the contacts for FoC",
    a: " - Master in Information Technology: [msit@president.ac.id] \n- Information Technology: [informatics@president.ac.id] \n- Information System: [is@president.ac.id] \n- Visual Communication Design: [vcd@president.ac.id] \n- Interior Design: [interior.design@president.ac.id]"
  },
  { //30
    q: "Tell me the contacts for FoE",
    a: " - Civil Engineering: [cen@president.ac.id] \n- Industrial Engineering: [ien@president.ac.id] \n- Mechanical Engineering: [mechanical@president.ac.id] \n- Electrical Engineering: [een@president.ac.id] \n- Environmental Engineering: [envadmin@president.ac.id] \n - Architecture: [architecture@president.ac.id]"
  },
  { //31
    q: "Tell me the contacts for FoB",
    a: " - Master of Management in Technology: [mmtech@president.ac.id] \n- Accounting: [acc@president.ac.id] \n- Business Administration: [bus@president.ac.id] \n- Management: [management_presuniv@president.ac.id] \n- Actuarial Science: [actuarial@president.ac.id] \n - Agribusiness: [agri@president.ac.id]"
  },
  { //32
    q: "Tell me the contacts for FoH",
    a: " - International Relations: [irsp_studentservice@president.ac.id] \n- Communication: [comm_presuniv@president.ac.id] \n- Law: [law@president.ac.id] \n- Primary School Teacher Education (PSTE): [pste@president.ac.id]"
  },
  { //33
    q: "Can you mention all the bureaus in PU",
    a: `Here are the list of bureaus in President University:\n- Finance and Accounting \n- Academic \n- PUIS Software Development (Soft-Dev) \n- IT and Hardware Development \n- English Language and Literature Center / ELLC (Previously named Culture and Language Center / CLC)\n- E-Campus\n- President University Student Housing\n- Student Affairs (SA)\n- President Psychological Consulting / PPC\n- International Office\n- Alumni Relations\n- Admission
- Internship and Career Center (ICC)
- General Affairs (GA), Sustainability, and Climate Change Office
- President Development Center (PDC)
- SetSail BizAccel / Entrepreneurship and Business Incubator Bureau
- Library Bureau (Adam Kurniawan Library)`
  },
  { //34
    q: "Finance and Accounting Bureau",
    a: `Finance and Accounting Bureau Handles:
Tuition fee, installment, late payment, outstanding payment validation for enrollment, financial assistance, extension fee, thesis defense fee, graduation enrollment fee, student resignation fee, academic leave fee, and other payment matters.
    
They are located at Building A, 1st Floor
    
You can contact them through: 
    
Email: finance@president.ac.id, or 
Whatsapp: +62-81282720092`
  },
  { //35
    q: "Academic Bureau",
    a: `Academic Bureau Handles:
Enrollments schedule, class schedule, GPA, diploma & transcript, resign, drop out, academic leave, general document request, judicium clearance.
    
They are located at Building A, 1st Floor
    
You can contact them through: 
    
Email: academic@president.ac.id`
  },
  { //36
    q: "PUIS Soft-Dev Bureau",
    a: `PUIS Soft-Dev Handles:
PUIS development, PUIS management, and PUIS maintenance.
    
They are located at Building A, 2nd Floor
    
You can contact them through: 
    
Email: soft-dev@president.ac.id`
  },
  { //37
    q: "IT and Hardware Development Bureau",
    a: `IT and Hardware Development Bureau Handles:
Computer laboratory, WiFi, PresUniv email, hardware management, and maintenance.
    
They are located at Building A, 2st Floor
    
You can contact them through: 
    
Email: it_admin@president.ac.id`
  },
  { //38
    q: "ELLC",
    a: `English Language and Literature Center / ELLC Handles:
President English Test (PET), Translation/proofreading certificate (for Lecturers/Staffs Only), English competency score validation, Minimum standard for English proficiency, judicium clearance validation on English Proficiency, English proficiency development program, non-credits English subjects.
    
They are located at Building A, 3rd Floor
    
You can contact them through: 
    
Email: clc@president.ac.id
Instagram: @ellcpresuniv`
  },
  { //39
    q: "E-Campus Bureau",
    a: `E-Campus Bureau handles online learning / e-campus.

They are located at Building A, 3rd Floor - Faculty of Computing
    
You can contact them through: 
    
Email: ecampus@president.ac.id`
  },
  { //40
    q: "PUSH",
    a: `President University Student Housing (PUSH) handles For PUSH residents in the dormitory.

You can contact them through: 
    
Email: push@president.ac.id`
  },
  { //41
    q: "Student Affairs (SA) Bureau",
    a: `Student Affairs (SA) Bureau handles:
Kampus Merdeka, non-academic activities, competitions, etc.
    
They are located at Building A, 3rd Floor
    
You can contact them through: 
    
Email: studentaffairs@president.ac.id`
  },
  { //42
    q: "PPC",
    a: `President Psychological Consulting / PPC handles:
For psychological counseling and aptitude test.
    
Their website is at https://ppc.president.ac.id/ 
    
You can contact them through: 
    
Email: ppc@president.ac.id`
  },
  { //43
    q: "International Office",
    a: `International Office handles:
Scholarship stream, student visa, student exchange, KITAS (stay permit), and other matters related to foreign students.
    
They are located at Building A, 3rd Floor
    
You can contact them through: 
    
Email: international.office@president.ac.id`
  },
  { //44
    q: "Alumni Relations Bureau",
    a: `Alumni Relations Bureau handles:
Alumni reunion, President University Tracer Study, alumni liaison.
    
They are located at Building A, 4th Floor
    
You can contact them through: 
    
Email: alumni@president.ac.id`
  },
  { //45
    q: "Admission Bureau",
    a: `Admission Bureau handles:
Placement test, new student admission documents (information, documents), and judicium clearance.
    
Their website is at https://admission.president.ac.id/ 
    
They are located at Building A, 1st Floor
    
You can contact them through: 
    
Email: admission@president.ac.id, or 
Whatsapp: +62-81398606495`
  },
  { //46
    q: "the ICC",
    a: `Internship and Career Center (ICC) handles:
Professional stream, managing professional stream, and all matters regarding the internship program.
    
They are located at Building A, 1st Floor
    
You can contact them through: 
    
Email: icc_pu@president.ac.id`
  },
  { //47
    q: "GA, Sustainability, and Climate Change",
    a: `General Affairs (GA), Sustainability, and Climate Change Office handles:
COVID-19 task force, classroom arrangement, transportation arrangement for campus events, bus schedule.
    
They are located at Building A, 2nd Floor
    
You can contact them through: 
    
Email: gapresuniv@president.ac.id`
  },
  { //48
    q: "PDC",
    a: `President Development Center (PDC) handles:
Languages and other supporting intensive programs.
    
Their website is at https://pupdc.com 
    
You can contact them through: 
    
Email: pdc@president.ac.id`
  },
  { //49
    q: "SetSail BizAccel",
    a: `SetSail BizAccel / Entrepreneurship and Business Incubator Bureau handles Start-up stream and entrepreneurship incubator.

Their website is at https://setsail.president.ac.id/ 
    
You can contact them through: 
    
Email: setsail@president.ac.id`
  },
  { //50
    q: "Library Bureau",
    a: `Library Bureau handles:
- Borrowing and returning books, Judicium clearance: [circulation@president.ac.id]
- Library clearance: [library.clearance@president.ac.id]
- E-resources search: [reference@president.ac.id]
- Turnitin check: [library.turnitin@president.ac.id]
    
They are located at Building A, 1st Floor
    
Their website is at https://library.president.ac.id/`
  },
  { //51
    q: "What are 0 credit English Classes?",
    a: `English Non Credit level 1-6 is an English course considered as one of the graduation requirements for President University students in accordance with the rector regulation. Even though it is a 0 credit class, students who do not have any eligible certification and obtain grades below B may retake the course until they get the minimum grade of B.`
  },
  { //52
    q: "What is PET?",
    a: `PET (President English Test) is a test that is conducted offline as one of the forms of English Proficiency Proof of President University Students. 

The test is divided into three parts. Listening comprehension with 50 questions within 45 minutes. Second is Structure and Written expression with 40 questions within 25 minutes. Third is reading comprehension with 50 questions within 55 minutes.
Is there anything else you would like to know?`
  },
  { //53
    q: "Admission Bureau",
    a: `The Admission Bureau requires students to provide:
Hard copy of high school Diploma and SKHUN for students batch 2019 and earlier. SKHUN is not mandatory for students batch 2020 – recent;
Soft copy of:
- Letter of Acceptance (LoA);
- High school diploma (both pages);
- High school study report of class 10 - 12 (rapor);
- National Registered Identification Card (NRIC/KTP)/Passport; and
- Pass photo (4x6) with plain red/blue background`
  },
  { //54
    q: "Library",
    a: `The Library Bureau requires students to fulfill:
- Email that contains the final and revised version of Undergraduate Thesis (UGT)/Postgraduate Thesis (PGT)/Final Project. Content of the file along with the email format complies with the Rector’s Regulation Number 4 Year 2023 regarding President University Library Clearance accessible at https://puis.president.ac.id/decrees/2023/2023-02-07_-_Peraturan_Rektor_Nomor_4_Tahun_2023.pdf and
- Book return and fine completion (if any).`
  },
  { //55
    q: "Academic Bureau",
    a: `The Academic Bureau requires students to fulfill the criterias below:
- PUIS data profile:
  - Full name (in accordance with your latest diploma);
  - Gender;
  - NRIC/KTP number for domestic students or passport number for international students;
  - Chosen concentration (if any);
  - Place and date of birth; and
  - Thesis/Final Project's title;
- No double subjects;
- Has fulfilled 144 total credits (no E scores).  
  Further policy on minimum accepted score is regulated by the respective study program if any);
- GPA minimum of 2,00 for Bachelor's or 3,00 for Master's program; and
- University's subjects are mandatory to be taken and recorded on the students' transcript.`
  },
  { //56
    q: "English Language and Literature Center (ELLC)",
    a: `The ELLC requires students' English proficiency validation. This can be fulfilled by participating in President English Test (PET) held by the ELLC with minimum score of 500, or substituted by submitting TOEIC/TOEFL/IELTS certificates, issued by the authorized institutions which will be equalized by the ELLC, or English course certificate issued by President Development Program (PDC).`
  },
  { //57
    q: "Describe Academic Degrees in PresUniv!",
    a: `President University complies with the prevailing laws and regulations when awarding academic degrees to prospective graduates. Students should also comply with the degrees when stating it on their Final Project / Undergraduate Thesis (UGT) / Postgraduate Thesis (PGT) cover page and all the other relevant pages/documents that might contain their Academic Degree.\n\nWould you like to see the list of Academic Degrees?`
  },
  { //58
    q: "Academic Degrees in FoC",
    a: `Here are a complete list of degree for each major in FoC:
- \"Informatika\" or Informatics, Sarjana Komputer (S.Kom.);
- \"Sistem Informasi \" or Information Systems, Sarjana Komputer (S.Kom.);
- \"Desain Komunikasi Visual\" or Visual Communication Design, Sarjana Desain (S.Ds.);
- \"Desain Interior\" or Interior Design, Sarjana Desain (S.Ds.);
- \"(Magister) Informatika\" or Master in Informatics, Magister Komputer (M.Kom.)`
  },
  { //59
    q: "Academic Degrees in FoE",
    a: `Here are a complete list of degree for each major in FoC:
- \"Teknik Elektro\" or Electrical Engineering, Sarjana Teknik (S.T.);
- \"Teknik Industri \" or Industrial Engineering, Sarjana Teknik (S.T.);
- \"Teknik Lingkungan\" or Environmental Engineering, Sarjana Teknik (S.T.);
- \"Teknik Mesin\" or Mechanical Engineering, Sarjana Teknik (S.T.);
- \"Teknik Sipil\" or Civil Engineering, Sarjana Teknik (S.T.); and
- \"Arsitektur\" or Architecture, Sarjana Arsitektur (S.Ars.).`
  },
  { //60
    q: "Academic Degrees in FoB",
    a: `Here are a complete list of degree for each major in FoB:
- \"Akuntansi\" or Accounting, Sarjana Akuntansi (S.Ak.);
- \"Aktuaria \" or Actuarial Science, Sarjana Aktuaria (S.Aktr.);
- \"Administrasi Bisnis\" or Business Administration, Sarjana Administrasi Bisnis (S.A.B.);
- \"Manajemen\" or Management, Sarjana Manajemen (S.M.);
- \"Agribisnis\" or Agribusiness, Sarjana Pertanian (S.P.);
- \"(Magister) Manajemen Teknologi\" or Technology Management, Magister Manajemen (M.M.)`
  },
  { //61
    q: "Academic Degrees in FoH",
    a: `Here are a complete list of degree for each major in FoH:
- \"Ilmu Komunikasi\" or Communication Science, Sarjana Ilmu Komunikasi (S.I.Kom.);
- \"Hubungan Internasional \" or International Relations, Sarjana Sosial (S.Sos.);
- \"Hukum\" or Law, Sarjana Hukum (S.H.); and
- \"Pendidikan Guru Sekolah Dasar\" or Elementary Teacher Education, Sarjana Pendidikan (S.Pd.)`
  },
  { //62
    q: "Tell me about Credits and GPA",
    a: `Credits and Grade Point Average are the two things which determines whether a student is eligible to graduate in President University. There is a minimum number of credits and GPA to graduate. This number differs for Undergraduate Programs (Regular and Executive) and Graduate Programs. \n \nIs there anything you would like to hear more in the topic of Credits and GPA?`
  },
  { //63
    q: "Undergraduate Program's requirement to graduate",
    a: `To graduate in Undergraduate Program (Regular and Executive), students need: \n- Minimum Credits of 144; \n- Minimum Grade Point Average of 2.00; and \n- Study period of 3.5 to 7 years maximum.`
  },
  { //64
    q: "Graduate Program's requirement to graduate",
    a: `To graduate in Graduate Program students need: \n- Minimum Credits of 36; \n- Minimum Grade Point Average of 3.00; and \n- Study period of 1 to 4 years maximum.`
  },
  { //65
    q: "GPA Classification",
    a: `In classifying the GPAs of students, President University uses the classification as follows. \n1. Score ≥ 85, A (4.00) \n2. 80 ≤ Score < 85, A- (3.67) \n3. 75 ≤ Score < 80, B+ (3.33) \n4. 70 ≤ Score < 75, B (3.00) \n5. 67 ≤ Score < 70, B- (2.67) \n6. 64 ≤ Score < 67, C+ (2.33) \n7. 60 ≤ Score < 64, C (2.00) \n8. 55 ≤ Score < 60, D (1.00) \n9. Score < 55, E (0.00)`
  },
  { //66
    q: "GPA Calculation",
    a: `In calculating students GPA, President University uses the formula: \n \nGPA = ∑(Grade Number x Credits) / ∑Credits `
  },
  { //67
    q: "Grading Submission, Deadline, and Result",
    a: `In every academic year, the Academic Bureau always sets deadline for grading submission. However, lecturers also have the discretion to input any score in their own convenient time so long as it does not exceed the scheduled deadline. \n \nBased on 090/SKep-R/KMNM/XI/2019/Presuniv, in the event that a certain lecturer fail to comply with the grading input deadline, Academic Bureau has the authority to give an A to all students enrolled in the subject in question.`
  },
  { //68
    q: "What is Academic Minor?",
    a: `Academic minor is a learning program that may be taken by students from outside of their initial study program.\n\nIs there anything related to the Academic Minor you would like to know?`
  },
  { //69
    q: "How to take an Academic Minor?",
    a: `Students planning to take this Academic Minor should report to the Head and Dean of their initial Study Program and Faculty. Additionally, students are also required to take all of the subjects determined to be the Minor subjects. These are required, so they can obtain the Academic Minor Degree acknowledgement.`
  },
  { //70
    q: "Credits of Academic Minor",
    a: `The minimum credits to obtain the said degree acknowledgement may vary from one Study Program to another. This depends on what’s regulated under the Dean’s Decree.
    
Students may find the Decrees at https://puis.president.ac.id/manual/arp/student/decrees `
  },
  { //71
    q: "What is Code of Ethics?",
    a: `To support the implementation of safe and peaceful teaching and learning environment, all students and lecturers’ activities are limited by the application of code of ethics. Please take notes on the below information regarding such limitations. In the event that you experience or witness the below acts, please notify the Ethics Board through email at ethics@president.ac.id.\n\nWould you like to look at either the Students' Code of Ethics or the Lecturers' Code of Ethics?`
  },
  { //72
    q: "Students' Code of Ethics",
    a: `In compliance with Article 11 of the President University Rector's Regulation Number 001/PR-R/III/KE.Dosen/2017/PresUniv, which can be accessed in https://puis.president.ac.id/decrees/2017/2017-03-14_-_002_PR-R_III_KE.Mhs_2017_PresUniv.pdf 
    below are the acts prohibited under the above regulation:
1. Plagiarism, document forgery, and other types of fraudulence that is carried out either individually or in group;
2. Disrespectful acts against a certain religion/belief that might be classified as blasphemy;
3. Sexual violation including pornography, sexual harassment, and free sex within the University area;
4. Violent crime, gambling, adultery, defamation, theft, fight, mental and physical abuse, distribution of illegal substances, and cyber crime;
5. Carrying/using firearms and penetrating weapon within the University area;
6. Possession, dealing, and use of narcotics, psychotropic, and alcohol;
7. Destruction towards the University’s facility dan/or using the University’s facility without permission;
8. Provocation that might interfere with the peace and the implementation of the University’s programs;
9. Sexual harassment, rape, acts of prostitution (prostitutes and pimp), visualization of pornography in form of pictures, electronic media, and/or other documents;
10. Wearing indecent clothing which might demonstrate harassment against a certain ethnicity, race, religion, and group;
11. Other acts that violate and are prohibited under the prevailing laws and regulations of the Republic of Indonesia.`
  },
  { //73
    q: "Lecturers' Code of Ethics",
    a: `In compliance with:
- Article 12 of President University Rector’s Regulation Number 001/PR-R/III/KE.Dosen/2017/PresUniv regarding President University Lecturers’ Code of Ethics accessible at https://puis.president.ac.id/decrees/2017/2017-03-14_-_001_PR-R_III_KE.Dosen_2017_PresUniv_-_KODE_ETIK_DOSEN_21017.pdf 
- Article 1 and 2 of the Rector’s Regulation Number 6 Year 2020 regarding the Amendment of Rector’s Regulation Number 001/PR-R/III/KE.Dosen/2017/PresUniv regarding President University Lecturers’ Code of Ethics accessible at https://puis.president.ac.id/decrees/2020/2020-02-18_-_Peraturan_Rektor_Nomor_6_Tahun_2020.pdf 

Below are the acts prohibited under the above regulations:
1. Defamation of honor and reputation of the University;
2. Failure to fulfill the _Tri Dharma Perguruan Tinggi_ obligations assigned by the University;
3. Acts that might incur losses to the University, Civitas Academica, Educational Staff, and Society;
4. Provocation and destruction of harmony among group within the University;
5. Abuse of power against students throughout both academic and non-academic activities;
6. Leaking confidential information related to the University, Colleagues, Educational Staff, and Students;
7. Distribution of false information regarding the University to Students, Colleagues, Educational Staff, and Society;
8. Plagiarism and/or Auto-plagiarism in scientific research;
9. Both physical and psychological sexual harassment carried out directly and/or indirectly against the students;
10. Arbitrary and unfair acts towards Students, Colleagues, and Educational Staff in carrying out _Tri Dharma Perguruan Tinggi_ obligations;
11. Asking and/or receiving gifts from Students or other parties in relation to their authority and contradictory to their _Tri Dharma Perguruan Tinggi_ obligations;
12. Dating and/or having romantic relationship with students;
13. Other acts that violate and contradict with the prevaling laws and regulations of the Republic of Indonesia;
14. Attempting to get close to students on romantic purposes;
15. Utters, writes, signals, or commits harsh/violent and unreasonable acts directly and/or indirectly to students.`
  },
  { //74
    q: "What is Code of Conduct?",
    a: `Students should always behave themselves in a manner that is polite, respectful, and responsible, and which conforms to the generally accepted rules of behavior, customs, and traditions of Indonesia.\n\nIs there anything else you would like to know of the Code of Conduct?`
  },
  { //75
    q: "List of Students' Code of Conduct",
    a: `Dress and Appearance
- President University expects students to be modest and decent in dress and appearance.
- The University desires students to come to class neat and tidy, wearing appropriate and decent clothing.
- Inappropriate decoration is not suitable as general garb for attending classes.
- A clean and neat appearance and maintenance of personal hygiene is required on campus.
- Slippers or sandals are not allowed.
- Dress, shirts and pants should be properly ironed.`
  },
  { //76
    q: "Consequences of not fulfilling Code of Conduct",
    a: `Students who do not conform to these expectations may be prohibited from attending classes.`
  },
  { //77
    q: "Getting Started as a New Student",
    a: `When getting started as a new student, there are 5 points to be cautious about. These 5 points are:
- Moving-in;
- Registration Process;
- PREUNI - New Students' Orientation;
- Package Enrollment;
- Student ID Card and Almamater Distribution.
    
Which point above would you like to hear more about?`
  },
  { //78
    q: "Moving-in",
    a: `Over time, all new students in President University are obligated to reside the in President University dormitory for one full year. For detailed information please seek assistance to Finance and Accounting Bureau (for residence payment) or Admission Bureau (for technical matters regarding the moving-in process).`
  },
  { //79
    q: "Registration Process",
    a: `New students are required to conduct re-registration before proceeding to the next steps as scheduled by the University. In this step, students are required to submit the following essential documents to President University Admission Bureau:

a. Copy of legalized high school diploma (for new students) OR copy of legalized diploma issued by previous university (for transfer/prospective master’s program students).
b. Copy of legalized high school SKHUN (for new students) OR  copy of legalized transcript issued by previous university (for transfer/prospective master’s program students).
c. Original Letter of Acceptance (LoA) that has been signed by parents.
d. Legalized version of original SKHUN/SKL
e. Both sides' legalized version of original diploma/package C diploma (if you take the package C diploma program)
f. Original report from class X, XII and XII (report from all classes in high school)
g. Scanned copy of original national ID Card/driving license/passport
h. Digital passport photo in 4x6 size (min. size of 300 dpi in jpg/png format); not selfie or other social media photo(s); red/blue/white background; wearing plain formal apparel (no T-Shirt).`
  },
  { //80
    q: "Submission method details",
    a: `- Point a and b should be submitted directly to the President University Admission office by choosing one of the following methods:
  1. In person: Visit the Office of Admission, drop-off documents are available on Monday-Friday from 9 AM to 4 PM; or
  2. Send documents: via PT POS Indonesia to the Office of Admission, President University, Jl. Ki Hajar Dewantara, Jababeka Education Park, Kota Jababeka, Cikarang, Bekasi 17530.
- Documents mentioned in point c until h are submitted online via PUIS.`
  },
  { //81
    q: "Further Queries",
    a: `Further queries regarding new students admission documents should be addressed to the Admission Bureau.`
  },
  { //82
    q: "PREUNI",
    a: `PREUNI-versity is a program designed to help students for their first encounter with the university’s life, starting from introducing the students to the campus environment (classrooms, canteen, laboratories, work unit rooms, etc.), in-class lessons, overview of the chosen primary course, and other preliminary preparation. PREUNI program is usually followed by the implementation of new students’ orientation organized by the President University Student Union (PUSU). However, the new students’ orientation program may or may not be implemented every year. This depends on the higher officials’ decisions on the matter.`
  },
  { //83
    q: "Package Enrollment",
    a: `Upon the completion of the aforementioned schedules, students will receive an announcement regarding package enrollment for their 1st semester. Explanation on package enrollment may be found at https://puis.president.ac.id/manual/arp/student/academic-matters#enrollment `
  },
  { //84
    q: "Student ID Card and Almamater Distribution",
    a: `The schedule for student ID Card and almamater distribution usually varies from time to time as we have specific period for this type of distribution. For some reason, several student(s) fail to comply with the announced deadline for claiming student ID card. In this case, the student(s) in question are encouraged to wait for the next following schedule to claim this card. Students should coordinate with the Academic Bureau (for batch 2020 and above academic@president.ac.id) or Marketing (for batch 2021 until recent admission@president.ac.id).`
  },
  { //85
    q: "Getting Started as a First Year Student",
    a: `When getting started as a First Year student, there are 4 points to be cautious about. These 4 points are:
- Entrance Survey
- Concentration Enrollment
- Package and Elective Courses Enrollment
- English 0 Credit Implementation
    
Which point above would you like to hear more about?`
  },
  { //86
    q: "Entrance Survey",
    a: `For starters, students will be asked to fill out an entrance survey coordinated by the President University Academic Bureau to solely map the distribution of students’ interests including their Streams choice. On that premise, this survey is not a platform to officially and legitimately enroll for Streams.`
  },
  { //87
    q: "Concentration Enrollment",
    a: `In semester 2, students will have to update their PUIS profile in accordance with the concentration they are choosing. Upon update, students will then have to enroll for the concentration they have chosen. Each of these actions should be conducted within their respective schedule as set out on the academic calendar. be classified into their selected concentration. PUIS’ profile update regarding your chosen concentration is important as we extract this data for the content of your transcript. For whatever reason, students cannot change their concentration once they have been enrolled in.`
  },
  { //88
    q: "Package and Elective Courses Enrollment",
    a: `In addition to the concentration enrollment, at the end of their first academic year students will be asked to conduct another package enrollment followed by elective courses enrollment. Package and elective (or adding retake for transfer students) enrollment schedule may be different depending on the period set out in the academic calendar.`
  },
  { //89
    q: "English 0 Credit Implementation",
    a: `The implementation of English 0 Credits will be started in the first year. Students will enroll themselves in a package enrollment which already includes one English 0 credit course. The dissemination of the courses are as follows:

- Semester 1: English 0 credit level 1 (Survival English);
- Semester 2: English 0 credit level 2 (Fluency and Speed Development); and
- Semester 3 / Short Semester 1: English 0 credit level 3 (Accuracy Development).`
  },
  { //90
    q: "Getting Started as a Second Year Student",
    a: `When getting started as a Second Year student, there are 4 points to be cautious about. These 4 points are:
- Internship Enrollment
- Stream Enrollment
- Package/Elective Enrollment
- English 0 Credit Implementation
    
Which point above would you like to hear more about?`
  },
  { //91
    q: "Internship Enrollment",
    a: `As the students will start their mandatory internship program in semester 7, students who have passed requirements will be asked to conduct enrollment as scheduled on the enrollment schedule available on the PUIS' home page.`
  },
  { //92
    q: "Stream Enrollment",
    a: `Aside from internship enrollment, at the end of their second academic year, students will be asked to conduct Streams enrollment. Unlike mandatory internship enrollment, in this step students will be asked to enroll into the chosen subject for Streams (e.g.: students choosing Stream mentorship in semester 8 are directed to enroll into Mentorship 1 and so forth). This enrollment period is also scheduled on the academic calendar. One thing that is special with Streams program is that student(s) may transfer into different subject after they finish with the chosen one. To do this, students should enroll into a different type of the provided Stream subject in the next following semester.`
  },
  { //93
    q: "Package or Elective Enrollment",
    a: `Students will have to enroll for the subjects they are choosing each semester throughout the whole academic year in President University, including this second one. Subjects available for this enrollment depends on the chosen concentration.`
  },
  { //94
    q: "English 0 Credit Implementation",
    a: `The implementation of English 0 Credits will be finished in the second year. Students will enroll themselves in a package enrollment which already includes one English 0 credit course. The dissemination of the courses are as follows:

- Semester 4: English 0 credit level 1 (English for Professional Purposes);
- Semester 5: English 0 credit level 2 (Academic Writing); and
- Semester 6 / Short Semester 2: English 0 credit level 3 (Research Writing).`
  },
  { //95
    q: "Getting Started as a Third Year Student",
    a: `When getting started as a Third Year student, there are 4 points to be cautious about. These 4 points are:
- Mandatory Internship Program Implementation
- Stream Implementation
- Final Project Enrollment
- Final Project Implementation
    
Which point above would you like to hear more about?`
  },
  { //96
    q: "Mandatory Internship Program Implementation",
    a: `Students will start their 3rd year (in semester 7) by carrying out the mandatory internship program they have enrolled for previously. Students are free to conduct internship in companies / institutions of their own choosing. Students in need for an internship Reference Letter or other supporting document and information regarding this implementation should contact ICC directly.`
  },
  { //97
    q: "Stream Implementation",
    a: `After enrolling for Streams' subject in the previous semester, students will start to implement the Streams’ sessions of their choosing in semester 8 and semester 9. Students who wish to change their chosen stream may re-enroll before starting the first meeting in semester 9.`
  },
  { //98
    q: "Final Project Enrollment",
    a: `Students eligible for taking final project are obligated to conduct enrollment beforehand. In this step, students are offered the options for final project depending on the taken program degree (Bachelor/Master’s). Students are encouraged to read through the Rector Regulation to find out more on requirements and the options for final project.`
  },
  { //99
    q: "Final Project Implementation",
    a: `After successfully enrolling for final project, students can start the production/implementation of the chosen final project. In addition, students should also take notes on the following points:
- Defense Registration Deadline; and 
- Others
    
Which of the points above would you like to hear more about?`
  },
  { //100
    q: "Defense Regulation Deadline",
    a: `All of the aforementioned final project types require students to present the result through final project defense procedure. Below are deadlines for defense registration that are divided into 3 categories depending on the enrollment and completion term of the said final project:
    - 31 January of the following year at the latest (for students who enrolled and completed their final project in between September and December);
    - 31 May of the same current year (for students who enrolled and completed their final project in between January and April); or
    - 30 September of the same current year (for students who enrolled and completed their final project in between May and August).
    
    Students failing to meet one of the afore-mentioned deadlines are required to enroll for a semester extension** to finish their final project (only available for final project except for by-course). For every extension, students will be charged an extend fee as follows:
    - Regular morning students batch 2016: Rp900.000/SKS;
    - Regular morning students batch 2017 onwards***: Rp1.000.000/SKS; or
    - Regular evening students: 50% of Biaya Kuliah Pokok (BKP) plus fare per SKS in accordance with their class (batch).
    
    \*pursuant to Rector’s Decree number **134/Skep2-R/Tgs.Akhir/X/2016/PresUniv**_  
    \*\*pursuant to Rector’s Decree number **160/Skep2-R/Ket.Bia.Extend/XII/2016/PresUniv**, starting from semester 11 onwards._  
    \*\*\*thesis/ final project extension in **semester 11 (for batch 2017 - 2019)/ in semester 10 (for batch 2020 onwards)** is free of charge (enrollment that exceeds the said time frame is subject to payment according to the above policy). Students enrolling for Final Project AND other courses will be charged extension fee with illustration as follow:`
  },
  { //101
    q: "Others",
    a: `- Throughout its process, students are required to fulfill the minimum final project consultation requirement set out in the Rector Regulation regarding Final Project.

- Subsequent to defense/other forms of final project presentation, students will be asked to submit a report of their chosen final project in hard copies and one CD of such report as a requirement to finish up with their final project. The respective staff of study program will usually input their final project score upon receipt of the aforementioned requirement. The Academic Bureau will only be able to proceed with syncing the score after all of the above steps are completed. Thus, students are encouraged to contact their staff of study program on the matter.`
  },
  { //102
    q: "",
    a: ``
  }
];

const recMap = new Map([
  [0, [6, 7, 8, 9, 10]],
  [1, [11, 12, 13]],
  [12, [53, 54, 55, 56]],
  [2, [14, 51, 52]],
  [3, [15, 16, 17, 18]],
  [4, [19, 21, 23, 25, 27, 28, 57]],
  [19, [20]],
  [21, [22]],
  [23, [24]],
  [25, [26]],
  [28, [29, 30, 31, 32]],
  [5, [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]],
  [52, [38]],
  [57, [58, 59, 60, 61]],
  [62, [63, 64, 65, 66, 67]],
  [68, [69, 70]],
  [71, [72, 73]],
  [74, [75, 76]],
  [77, [78, 79, 82, 83, 84]],
  [79, [80, 81]],
  [85, [86, 87, 88, 89]],
  [90, [91, 92, 93, 94]],
  [95, [96, 97, 98, 99]],
  [99, [100, 101]]
])

let bucketQ = [];
bucketQna.forEach(element => {
  bucketQ.push(element.q)
});

export { bucketQna, recMap, bucketQ }