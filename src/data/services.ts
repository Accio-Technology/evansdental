export interface ServiceAccordionItem {
    title: string;
    paragraphs: string[];
}

export const serviceAccordionItems: ServiceAccordionItem[] = [
    {
        title: 'Preventative Oral Health',
        paragraphs: [
            '“An ounce of prevention is worth a pound of cure.”',
            'Regular dental check-ups and cleanings (for most people this is every six months) allow us to evaluate your oral health, educate on diet and hygiene strategies to minimize risk of disease, and hopefully catch any problems while they are small and manageable.',
        ],
    },
    {
        title: 'Restorations',
        paragraphs: [
            'Have a cavity, broken, or chipped tooth? We’re here to help!',
            'For fillings, we use only tooth colored materials. Resin modified and traditional glass ionomer materials offer strength, durability and chemical adhesion, while composite resins offer the best esthetics for front teeth.',
            'Some teeth require more care than just a filling, and that’s okay! We are experienced in crowns, bridges, and veneers.',
            'For missing teeth requiring implants, we work closely with local oral surgeons who place the implant (a titanium screw that goes under the gums and into the bone). Once the implant has healed, we restore it with a crown.',
        ],
    },
    {
        title: 'Pediatrics',
        paragraphs: [
            'We are happy to see patients of all ages!',
            'The ADA recommends your child to have their first visit within 6 months of their first tooth, and no later than their first birthday. After that, we hope to see them every 6 months!',
            'For children, we offer dental cleanings, fluoride treatment, sealants, fillings, extractions, and space maintenance.',
            'We also work closely with various local pediatric dentists for any cases that require special attention.',
        ],
    },
    {
        title: 'Periodontal Therapy',
        paragraphs: [
            'When dental plaque and hardened tartar (called calculus) invade the tissues that hold the teeth in place, periodontal therapy may be needed.',
            'The aim of this therapy is to restore a healthy environment for tissues to naturally heal and reattach to the teeth.',
            'We offer scaling and root planing (deep cleaning) services for most cases, and work closely with local periodontal specialists for any cases that are more involved or require different treatment.',
        ],
    },
    {
        title: 'Endodontic Therapy',
        paragraphs: [
            'Abscesses and inflamed nerves can cause severe tooth pain and discomfort. We can help!',
            'Sometimes a toothache becomes so bad that removing the nerve is necessary. This is called a root canal.',
            'Root canals get a bad rap, but modern anesthetics and techniques have made the process much more comfortable, so don’t be worried if this treatment is something you need. Trust us, you’ll feel much better once it’s done!',
            'We offer root canal therapy on most teeth, and work closely with local endodontic specialists for any cases requiring more intensive treatment.',
        ],
    },
    {
        title: 'Oral Surgery',
        paragraphs: [
            'Sometimes a tooth is so far gone that it needs to be pulled.',
            'If it is broken, cracked, or painful and is not a good candidate for other restorative treatment, an extraction may be required.',
            'We offer extraction treatment for most cases, and work closely with local oral surgeons for implant placement, wisdom tooth and complex extractions, or other advanced surgical treatments.',
        ],
    },
];
