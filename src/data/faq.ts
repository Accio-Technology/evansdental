import type { AccordionParagraph, ServiceAccordionItem } from './services';

export const faqTitle = 'Your Questions, Answered';

export const faqItems: ServiceAccordionItem[] = [
    {
        title: 'What services do you offer?',
        paragraphs: [
            [
                'We offer a wide range of treatments — see our ',
                { text: 'services', href: '/services' },
                ' page for a comprehensive summary.',
            ],
            'If your case requires treatment that we do not offer, we work closely with various local specialists and will refer you to whomever can best help.',
        ],
    },
    {
        title: 'What insurances do you take?',
        paragraphs: [
            'We accept most major dental insurances. To verify that we participate with your insurance, you can check via your carrier’s participating doctors portal or call our office to confirm.',
            'We also offer an in-house discount plan for those who don’t have insurance.',
        ],
    },
    {
        title: 'What if I need to cancel my appointment?',
        paragraphs: [
            'We understand that life happens.',
            [
                'However, to respect our time and that of our other patients, we ask that you cancel at least 24 hours prior to your appointment time. No-shows and cancellations without 24 hours notice will incur a fee. See our ',
                { text: 'office policies', href: '/new-patients' },
                ' for more information.',
            ],
        ],
    },
    {
        title: 'Do you perform pediatric dentistry?',
        paragraphs: [
            'Yes, we happily see patients of all ages!',
            [
                'See our ',
                { text: 'services', href: '/services' },
                ' page for more information on what we offer.',
            ],
        ],
    },
    {
        title: 'How can I contact you?',
        paragraphs: [
            'The best way to get in touch is to call us during open office hours. If we are unable to answer when you call, leave a message and we will return your call as soon as we are able.',
            'If you have an emergency after hours, you can reach Dr. Jeff directly on the emergency line.',
            [
                'See our ',
                { text: 'contact us', href: '/contact' },
                ' page for more information.',
            ],
        ],
    },
    {
        title: 'What if I have an emergency after office hours?',
        paragraphs: [
            'True dental emergencies can be very serious, but thankfully are very rare. If you are experiencing swelling that is making it difficult to breathe, call 911 or go to the emergency room immediately.',
            [
                'For any other after hours issues, Dr. Jeff can be reached via the emergency line. See our ',
                { text: 'contact us', href: '/contact' },
                ' page for more information.',
            ],
        ],
    },
];

const paragraphText = (paragraph: AccordionParagraph) =>
    typeof paragraph === 'string'
        ? paragraph
        : paragraph.map((part) => (typeof part === 'string' ? part : part.text)).join('');

export const faqPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.title,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.paragraphs.map(paragraphText).join('\n\n'),
        },
    })),
};
