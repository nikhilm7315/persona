import shrishtiImg from '../assets/TeamImages/shrishti.png'
import luckyImg from '../assets/TeamImages/lucky.png'
import anshImg from '../assets/TeamImages/ansh.png'
import vedanshiImg from '../assets/TeamImages/vedanshi.png'
import suyashImg from '../assets/TeamImages/suyash.png'
import leadBgImg from '../assets/TeamImages/leadbg.png'
import execBgImg from '../assets/TeamImages/execoordinatorbg.png'

export const TEAM_MEMBERS = [
  {
    id: 'shrishti-tamrakar',
    name: 'Shristi Tamrakar',
    role: 'Student Coordinator',
    image: shrishtiImg,
    bgImage: execBgImg,
    isLead: false,
    rotation: -6,
    rotationClass: '-rotate-6 hover:rotate-0',
    desktopYOffset: 'lg:translate-y-4',
    starColor: '#38bdf8', // Cyan
    starType: 'cyan',
    starPos: 'top-2.5 right-2.5',
    imgClass: 'translate-y-2 scale-[1.05]',
    featured: false,
  },
  {
    id: 'lucky-chelani',
    name: 'Lucky Chelani',
    role: 'Executive Coordinator',
    image: luckyImg,
    bgImage: execBgImg,
    isLead: false,
    rotation: -2,
    rotationClass: '-rotate-2 hover:rotate-0',
    desktopYOffset: 'lg:translate-y-1',
    starColor: '#c084fc', // Purple
    starType: 'purple',
    starPos: 'top-2.5 right-2.5',
    imgClass: 'translate-y-1 scale-[1.05]',
    featured: false,
  },
  {
    id: 'ansh-upadhyay',
    name: 'Ansh Upadhyay',
    role: 'Club Lead',
    image: anshImg,
    bgImage: leadBgImg,
    isLead: true,
    rotation: 0,
    rotationClass: 'rotate-0',
    desktopYOffset: 'lg:-translate-y-2',
    starColor: '#fbbf24', // Warm Yellow/Gold
    starType: 'amber',
    starPos: 'top-3 right-3',
    imgClass: 'translate-y-3 scale-[1.12]',
    featured: true,
  },
  {
    id: 'vedanshi-shrivastava',
    name: 'Vedanshi Shrivastava',
    role: 'Executive Coordinator',
    image: vedanshiImg,
    bgImage: execBgImg,
    isLead: false,
    rotation: 2,
    rotationClass: 'rotate-2 hover:rotate-0',
    desktopYOffset: 'lg:translate-y-1',
    starColor: '#38bdf8', // Cyan
    starType: 'cyan',
    starPos: 'top-2.5 right-2.5',
    imgClass: 'translate-y-1 scale-[1.50] origin-bottom',
    featured: false,
  },
  {
    id: 'suyash-pandey',
    name: 'Suyash Pandey',
    role: 'Executive Coordinator',
    image: suyashImg,
    bgImage: execBgImg,
    isLead: false,
    rotation: 5,
    rotationClass: 'rotate-5 hover:rotate-0',
    desktopYOffset: 'lg:translate-y-4',
    starColor: '#c084fc', // Purple
    starType: 'purple',
    starPos: 'top-2.5 right-2.5',
    imgClass: 'translate-y-2 scale-[1.05]',
    featured: false,
  },
]
