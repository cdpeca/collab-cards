import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDeaf, faDragon, faThumbsUp, faThumbsDown, faVolumeMute, faLightbulb, faHandPointUp, faHandPointRight, faQuestion, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export interface CardModel {
    title?: string;
    subtitle?: string;
    icon: IconProp;
    number?: boolean;
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
        title: '1',
        number: true,
    },
    {
        icon: faEllipsisH,
        title: '2',
        number: true,
    },
    {
        icon: faEllipsisH,
        title: '3',
        number: true,
    },
    {
        icon: faEllipsisH,
        title: '4',
        number: true,
    },
    {
        icon: faEllipsisH,
        title: '5',
        number: true,
    },
    {
        icon: faQuestion,
    }
];