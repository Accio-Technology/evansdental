export type TeamPhoto = 'jeff' | 'cathy' | 'zunobia' | 'nila' | 'sisi';

export interface TeamMember {
    name: string;
    role: string;
    bio: string[];
    photo: TeamPhoto;
    imageAlt: string;
    layout: 'feature' | 'text-left' | 'image-left';
}

export interface TeamMemberWithImage extends TeamMember {
    image: string;
}

export const team: TeamMember[] = [
    {
        name: 'Dr. Jeff Evans, DDS',
        role: 'General Dentist',
        bio: [
            'Dr. Jeff earned his Bachelor of Science in Exercise Science from Brigham Young University in 2015. In 2020, he graduated from the Virginia Commonwealth University School of Dentistry.',
            'After completing dental school, he joined his father in practice in July of 2020.',
            'Dr. Jeff met his wife while studying at BYU, and they were married in 2014. They have three children, a barn cat, and four chickens.',
            'In his spare time, Dr. Jeff enjoys building and DIY projects, reading science fiction and fantasy, hiking the Appalachian trail, and playing with his kids. He currently has his blue belt in Brazilian Jiu-Jitsu.',
        ],
        photo: 'jeff',
        imageAlt:
            'Dr. Jeff smiling at the camera, standing outdoors near the water with rocks and greenery in the background. He has short brown hair and a beard.',
        layout: 'feature',
    },
    {
        name: 'Cathy Lemberg, RDH',
        role: 'Dental Hygienist',
        bio: [],
        photo: 'cathy',
        imageAlt: 'Portrait of Cathy Lemberg',
        layout: 'text-left',
    },
    {
        name: 'Zunobia Shaik',
        role: 'Office Manager',
        bio: [],
        photo: 'zunobia',
        imageAlt: 'Portrait of Zunobia Shaik',
        layout: 'image-left',
    },
    {
        name: 'Nila Huynh',
        role: 'Dental Assistant',
        bio: [
            'Nila was born and raised in Northern Virginia and has been in the dental field for 13 years. She is happily married and a proud dog mom to three fur babies.',
            'Outside of work, she loves spending quality time with her family and friends, going camping, and anything related to cars and motorcycles. She owns a 2025 Kawasaki Ninja 500.',
            'She’s also a huge BTS fan and loves attending music festivals and concerts! In her downtime, you may find her watching scary movies, listening to crime podcasts, getting hooked on k-dramas, or binge-watching anime.',
            'She enjoys making memories, exploring new experiences, and finding fun ways to spend her free time.',
        ],
        photo: 'nila',
        imageAlt: 'Portrait of Nila Huynh',
        layout: 'text-left',
    },
    {
        name: 'Sisi Aguirre',
        role: 'Dental Assistant',
        bio: [
            'Sisi is friendly, caring, and patient. She strives to make every patient feel comfortable and welcome. She enjoys learning new things and continuing to grow in the dental field.',
            'Outside of work, she loves spending quality time with her family. Her goal is to keep learning, growing, and providing patients with a positive and comfortable dental experience.',
        ],
        photo: 'sisi',
        imageAlt: 'Portrait of Sisi Aguirre',
        layout: 'image-left',
    },
];
