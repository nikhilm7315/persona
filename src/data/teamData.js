import shrishtiImg from '../assets/TeamImages/shrishti.png'
import luckyImg from '../assets/TeamImages/lucky.png'
import anshImg from '../assets/TeamImages/ansh.png'
import leadBgImg from '../assets/TeamImages/leadbg.png'
import execBgImg from '../assets/TeamImages/execoordinatorbg.png'
import vedanshiImg from '../assets/TeamImages/vedanshi.png'
import suyashImg from '../assets/TeamImages/suyash.png'

export const TEAM_MEMBERS = [
  {
    id: 'shrishti-tamrakar',
    name: 'Shristi Tamrakar',
    role: 'Student Coordinator',
    image: shrishtiImg,
    bgImage: execBgImg,
    isLead: false,
    rotationClass: '-rotate-6 hover:rotate-0',
    imgClass: 'translate-y-3',
  },
  {
    id: 'lucky-chelani',
    name: 'Lucky Chelani',
    role: 'Executive Coordinator',
    image: luckyImg,
    bgImage: execBgImg,
    isLead: false,
    rotationClass: '-rotate-3 hover:rotate-0',
  },
  {
    id: 'ansh-upadhyay',
    name: 'Ansh Upadhyay',
    role: 'Club Lead',
    image: anshImg,
    bgImage: leadBgImg,
    isLead: true,
    rotationClass: 'rotate-0',
    imgClass: 'scale-[1.2] translate-y-11',
  },
  {
    id: 'vedanshi-shrivastava',
    name: 'Vedanshi Shrivastava',
    role: 'Executive Coordinator',
    image: vedanshiImg,
    bgImage: execBgImg,
    isLead: false,
    rotationClass: 'rotate-3 hover:rotate-0',
    imgClass: 'scale-[1.45] origin-bottom translate-x-5',
  },
  {
    id: 'suyash-pandey',
    name: 'Suyash Pandey',
    role: 'Executive Coordinator',
    image: suyashImg,
    bgImage: execBgImg,
    isLead: false,
    rotationClass: 'rotate-6 hover:rotate-0',
  },
]
