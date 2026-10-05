export const brand = {
  red: '#B90124',
  green: '#60BAB1',
  olive: '#6A7B12',
  black: '#000000',
  white: '#FFFFFF',
  logo: 'https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png',
  officialCutouts: {
    scholarStudents: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTNzH_P0ympCuCOa0CM-41QkEudakDSHjo3z2xt_eWw&s=10',
    atTis: 'https://tis.edu.in/_next/static/media/AtTIS.59351600.png',
    basketball: 'https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp'
  }
};

export const navItems = ['About TIS', 'Academics', 'Boarding Life', 'Beyond Academics', 'Events', 'Admission'];

export const sports = [
  ['Archery', 'https://tis.edu.in/_next/static/media/archery.7a805345.png'],
  ['Cycling', 'https://tis.edu.in/_next/static/media/cycling.80dbb9b1.png'],
  ['Hockey', 'https://tis.edu.in/_next/static/media/hockey.219fe552.png'],
  ['Swimming', 'https://tis.edu.in/_next/static/media/swimming.d4285534.png'],
  ['Taekwondo', 'https://tis.edu.in/_next/static/media/taekwando.86e26406.png'],
  ['Football', 'https://tis.edu.in/_next/static/media/football.ca61e5d0.png'],
  ['Shooting Range', 'https://tis.edu.in/_next/static/media/shooting.b0b11d74.png'],
  ['Horse Riding', 'https://tis.edu.in/_next/static/media/horseRiding.8f259127.png'],
  ['Billiards', 'https://tis.edu.in/_next/static/media/billiards-single.a1e831c6.png'],
  ['Squash', 'https://tis.edu.in/_next/static/media/squash.ffa0360a.png'],
  ['Volleyball', 'https://tis.edu.in/_next/static/media/volleyball.045be884.png'],
  ['Basketball', 'https://tis.edu.in/_next/static/media/basketball.fa70909d.png'],
  ['Cricket', 'https://tis.edu.in/_next/static/media/Cricket.b06b18ca.png'],
  ['Lawn Tennis', 'https://tis.edu.in/_next/static/media/lawnTennis.7b3b894a.png'],
  ['Badminton', 'https://tis.edu.in/_next/static/media/badminton.a314ff00.png'],
  ['Table Tennis', 'https://tis.edu.in/_next/static/media/tableTennis.61f6bd56.png']
].map(([name, image]) => ({ name, image, description: {
  'Archery':'Precision, focus and calm decision-making on the range.',
  'Cycling':'Endurance, balance and freedom built through every ride.',
  'Hockey':'Speed, teamwork and tactical thinking on the field.',
  'Swimming':'Strength, stamina and confidence in the water.',
  'Taekwondo':'Discipline, agility and controlled strength through martial arts.',
  'Football':'Team spirit, coordination and competitive energy.',
  'Shooting Range':'Concentration and precision developed with expert guidance.',
  'Horse Riding':'Balance, responsibility and a unique connection with horses.',
  'Billiards':'Strategy, accuracy and patient decision-making.',
  'Squash':'Fast reactions, fitness and tactical movement.',
  'Volleyball':'Communication, timing and collective teamwork.',
  'Basketball':'Agility, confidence and fast-paced team play.',
  'Cricket':'Technique, patience and the spirit of team competition.',
  'Lawn Tennis':'Footwork, focus and individual competitive resilience.',
  'Badminton':'Quick reflexes, speed and precision.',
  'Table Tennis':'Sharp reactions, coordination and tactical play.'
}[name] }));

export const events = [
  { title: '38th National Games Torch Relay', meta: 'SPORT · COMMUNITY · EXCELLENCE', description: 'TIS welcomed the Tejaswini torch and celebrated the spirit of determination with students, faculty and dignitaries.', image: 'https://tis.edu.in/_next/static/media/image1.c5d0c872.webp' },
  { title: 'Ashirwad Ceremony', meta: 'TRADITION · BLESSINGS · FOCUS', description: 'A meaningful ceremony for Classes X and XII, seeking blessings and motivating students ahead of their board examinations.', image: 'https://tis.edu.in/_next/static/media/ashirwad.c7ea385d.webp' },
  { title: 'Dahi Handi Celebration', meta: 'FESTIVAL · TEAMWORK · ENERGY', description: 'Students from all houses came together for a vibrant Janmashtami celebration built around strength, coordination and camaraderie.', image: 'https://tis.edu.in/_next/static/media/dahiHandi.259bafd6.webp' },
  { title: 'Inter-House Folk Dance Competition', meta: 'CULTURE · PERFORMANCE · TALENT', description: 'Students celebrated India’s diverse cultural traditions through a spirited inter-house folk dance competition.', image: 'https://tis.edu.in/_next/static/media/folkDance.e31b85f9.webp' },
  { title: 'Chai Pe Charcha', meta: 'STUDENT VOICE · LEADERSHIP · COMMUNITY', description: 'The student cabinet shared ideas and challenges in a relaxed, semi-formal conversation with school leadership.', image: 'https://tis.edu.in/_next/static/media/chaiPeCharcha.fd3dc920.webp' },
  { title: 'House Feast', meta: 'HOUSE SPIRIT · CELEBRATION · BELONGING', description: 'A memorable house gathering combining games, music, performances, speeches and shared celebrations.', image: 'https://tis.edu.in/_next/static/media/houseFeast.fd261acc.webp' },
  { title: 'Dramatics Competition', meta: 'THEATRE · CREATIVITY · EXPRESSION', description: 'Inter-house theatre brought student acting, teamwork and storytelling to the stage before a panel of judges.', image: 'https://tis.edu.in/_next/static/media/dramitics.32c306ad.webp' },
  { title: 'Chandrayaan by VR', meta: 'SCIENCE · IMMERSION · DISCOVERY', description: 'A virtual-reality workshop gave students and teachers an immersive experience around Chandrayaan missions and science.', image: 'https://tis.edu.in/_next/static/media/chandrayaan.ae05ea97.webp' },
  { title: 'Faculty Skill Development', meta: 'LEARNING · RESILIENCE · GROWTH', description: 'A demanding mountaineering experience at NIMAS turned professional training into a lesson in discipline and endurance.', image: 'https://tis.edu.in/_next/static/media/facultySkillDev.d80bcbc6.webp' },
];

export const stats = [
  { value: 22, suffix: '', label: 'ACRE POLLUTION FREE CAMPUS' },
  { value: 16, suffix: '+', label: 'OLYMPIC SPORTS' },
  { value: 24, suffix: '×7', label: 'MEDICAL ASSISTANCE' },
  { value: 6, suffix: ':1', label: 'STUDENT TEACHER RATIO' }
];

export const rankings = [
  { rank: '#1', label: 'DEHRADUN', description: 'Education Today survey recognition for TIS in Dehradun, 2021–22.', image: 'https://tis.edu.in/_next/static/media/2022.80dca251.png' },
  { rank: '#2', label: 'UTTARAKHAND', description: 'Education Today survey recognition for TIS across Uttarakhand, 2021–22.', image: 'https://tis.edu.in/_next/static/media/2018.671572e8.png' },
  { rank: '#1', label: 'NORTH INDIA', description: 'TIS has received repeated North India recognition, including The Times of India award.', image: 'https://tis.edu.in/_next/static/media/2019.4627b387.png' },
  { rank: '#4', label: 'INDIA', description: 'Education Today placed TIS at No.4 in India in its 2021–22 survey.', image: 'https://tis.edu.in/_next/static/media/2017.aa20ce2c.png' }
];

export const personalities = [
  ['Shri Abhinav Kumar Ji', 'ADG and former DGP of Uttarakhand Police', 'https://tis.edu.in/_next/static/media/AbhinavKumar.8cbdb15a.webp'],
  ['Shri Janmejaya Khanduri Ji', 'IG Dehradun — Government of India', 'https://tis.edu.in/_next/static/media/JanmejayaKhanduri.18ae0527.webp'],
  ['Shri Ashok Kumar Ji', 'Former DGP, Uttarakhand', 'https://tis.edu.in/_next/static/media/AshokKumar.b9a984fa.webp'],
  ['Shri Amit Kumar Sinha Ji', 'ADG, Principal Secretary Sports, Uttarakhand', 'https://tis.edu.in/_next/static/media/AmitKumarSinha.5e245cdc.webp'],
  ['Shri Sunil Uniyal Gama Ji', 'Former Mayor Municipal Corporation, Dehradun', 'https://tis.edu.in/_next/static/media/SunilUniyalGama.55361603.webp'],
  ['Shri Sahdev Singh Pundir Ji', 'MLA Sahaspur, Uttarakhand', 'https://tis.edu.in/_next/static/media/SahdevSinghPundir.7aa9859f.webp']
];

export const leaders = [
  ['01', 'VISION', 'Education is not only about filling minds with knowledge, but shaping lives with purpose.', 'https://tis.edu.in/_next/static/media/image1.a3011dda.png'],
  ['02', 'LEADERSHIP', 'A modern Gurukul gives students the confidence to think independently and lead responsibly.', 'https://tis.edu.in/_next/static/media/image2.d1c6ce4f.webp'],
  ['03', 'POSSIBILITY', 'When curiosity leads and creativity thrives, every day becomes an opportunity to discover.', 'https://tis.edu.in/_next/static/media/chandrayaan.ae05ea97.webp']
];

export const testimonials = [
  ['Tashi Tsering', 'F/O Jigmet Skaldon', 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.'],
  ['Namita Agarwal', 'M/O Krishna Agarwal', 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.'],
  ['Sandeep Kumar', 'F/O Aryan', 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.'],
  ['Pinky Sharma', 'M/O Swastik Sharma', 'I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good and always available when I need them.'],
  ['Amit Agrawal', 'F/O Samruddhi Agrawal', 'Being a parent it is a big challenge to find a Boarding School that qualifies your parameters of security, health, hygiene, academics and discipline.']
];

export const collaborations = [
  { name: 'Universidad Autónoma de Chile', logo: 'https://tis.edu.in/_next/static/media/1.fcc2b6f4.webp' },
  { name: 'University of the Highlands and Islands', logo: 'https://tis.edu.in/_next/static/media/2.e85738b8.webp' },
  { name: 'Universitat d’Andorra', logo: 'https://tis.edu.in/_next/static/media/3.1181bb06.webp' },
  { name: 'University of Texas at Dallas', logo: 'https://tis.edu.in/_next/static/media/4.e48123ef.webp' },
  { name: 'University of Washington Tacoma', logo: 'https://tis.edu.in/_next/static/media/5.34e06b89.webp' },
  { name: 'INSEEC U.', logo: 'https://tis.edu.in/_next/static/media/6.261ed3fd.webp' },
  { name: 'University of Cincinnati', logo: 'https://tis.edu.in/_next/static/media/7.fa8f8f5c.webp' },
  { name: 'The University of Iowa', logo: 'https://tis.edu.in/_next/static/media/8.3ea0d12b.webp' }
];

export const footerGroups = {
  Explore: ['About TIS', 'Academics', 'Boarding Life', 'Beyond Academics'],
  Connect: ['Events', 'Admission', 'Virtual Tour', 'Contact Us'],
  Policies: ['FAQ', 'Brochure', 'Privacy Policy', 'Terms & Conditions', 'Child Welfare & Safety Policy']
};
