import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faCoffee, faDog } from '@fortawesome/free-solid-svg-icons'

export interface CardModel {
    title: string;
    subtitle?: string;
    icon: IconProp;
};

export const Cards: CardModel[] = [
    { 
        title: 'Test',
        subtitle: 'Test',
        icon: faCoffee
    },
    { 
        title: 'Test 2',
        subtitle: 'Test 2',
        icon: faDog
    },
];