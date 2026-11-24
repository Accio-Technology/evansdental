export interface HistoryTimelineEntry {
    year: string;
    paragraphs: string[];
}

export interface HistorySection {
    image: 'joel' | 'office';
    imageAlt: string;
    entries: HistoryTimelineEntry[];
    closingLine?: string;
}

export const historyHero = {
    headline: 'Rooted in a family legacy, Evans Dental blends time-honored values with modern dental excellence.',
};

export const historySections: HistorySection[] = [
    {
        image: 'joel',
        imageAlt: 'A smiling man with gray hair in a suit and red tie, standing indoors',
        entries: [
            {
                year: '1986',
                paragraphs: [
                    'Dr. Joel Evans graduated from MCV School of Dentistry and moved to northern Virginia with his family to start his solo practice. Long-time patients will remember his first office, located in a strip mall off of Route 50 in Fairfax. Some may even remember the smell of fresh donuts from the shop next door.',
                ],
            },
            {
                year: '1992',
                paragraphs: [
                    'Dr. Joel moved his practice to its current location at 4501 Daly Drive. The mature ornamental pear trees along the street were barely saplings, and on clear days the Bull Run and Blue Ridge mountains were visible from the office windows on the third floor. Route 28 was a two lane road.',
                ],
            },
            {
                year: '2020',
                paragraphs: [
                    'Chantilly grew, the practice grew, and Dr. Evans’ son, Jeff, grew. In July of 2020, Dr. Jeff Evans joined his father in practice.',
                ],
            },
        ],
    },
    {
        image: 'office',
        imageAlt: 'Evans Dental team members smiling together in the office',
        entries: [
            {
                year: '2023',
                paragraphs: [
                    'Dr. Jeff assumed ownership of the practice. Dr. Joel stayed on to work in a mentorship role, helping Dr. Jeff navigate the new challenges of business ownership while continuing to provide his nearly forty years of dental experience to the practice.',
                ],
            },
            {
                year: '2026',
                paragraphs: [
                    'Dr. Joel Evans officially retired. He now enjoys traveling with his wife, working on his farm with his cows, and spending time with his 14 grandchildren.',
                    'Dr. Jeff continues to provide care to our patients, hoping to continue the standard of excellence they have come to know.',
                ],
            },
        ],
        closingLine: 'Our practice is more than a business: it’s a family legacy.',
    },
];
