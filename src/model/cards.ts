import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDeaf, faDragon, faThumbsUp, faThumbsDown, faVolumeMute, faLightbulb, faHandPointUp, faHandPointRight, faQuestion, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export interface CardModel {
    title?: string;
    subtitle?: string;
    icon: IconProp;
    number?: number;
};

export const Cards: CardModel[] = [
    { 
        title: `Can't hear you`,
        subtitle: '',
        icon: faDeaf,
    },
    { 
        title: 'ELMO!',
        subtitle: `(enough, let's move on)`,
        icon: faDragon,
    },
    { 
        title: 'YES!',
        subtitle: '',
        icon: faThumbsUp,
    },
    { 
        title: 'NO!',
        subtitle: '',
        icon: faThumbsDown,
    },
    { 
        title: `You're on mute`,
        subtitle: '',
        icon: faVolumeMute,
    },
    { 
        title: 'Great idea!',
        subtitle: '',
        icon: faLightbulb,
    },
    { 
        title: 'NEXT',
        subtitle: '',
        icon: faHandPointRight,
    },
    { 
        title: 'I volunteer',
        subtitle: '',
        icon: faHandPointUp,
    },
    {
        icon: faEllipsisH,
        number: 1,
    },
    {
        icon: faEllipsisH,
        number: 2,
    },
    {
        icon: faEllipsisH,
        number: 3,
    },
    {
        icon: faEllipsisH,
        number: 4,
    },
    {
        icon: faEllipsisH,
        number: 5,
    },
    {
        icon: faQuestion,
    }
];