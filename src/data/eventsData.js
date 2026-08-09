import alumniImg from '../assets/alumniInteraction.jpg'
import linkedImg from '../assets/linkedInWorkshop.jpg'
import speakoff from '../assets/speakoff.png'
import vichaarSangam from '../assets/vichaarSnagam.png'
import eventillustration1 from '../assets/eventillustration1.png'
import eventillustration2 from '../assets/eventillustration2.png'
import eventillustration3 from '../assets/eventillustration3.jpg'

export const EVENTS_LIST = [
  {
    id: 'linkedin-session',
    heading: 'LinkedIn Session',
    title: 'LinkedIn Session',
    description: "The Persona Club's LinkedIn Workshop: Build Your Legacy, led by TnP Head Coordinator Mr. Prakul Mishra, empowered students to transform their LinkedIn profiles into powerful tools for personal branding and opportunity. Through interactive guidance on crafting headlines, compelling summaries, and strategic networking, participants refined their profiles in real-time and embraced the idea that network is your net worth, leaving the session with renewed confidence and a stronger professional presence.",
    src: linkedImg,
    image: eventillustration1,
    timeline: [
      {
        year: '2025',
        month: 'June',
        tag: 'Workshop',
        title: 'LinkedIn Mastery 3.0',
        body: 'Advanced session on personal branding with industry leaders. 150+ participants learned profile optimization.',
        img: linkedImg,
      },
      {
        year: '2024',
        month: 'Dec',
        tag: 'Workshop',
        title: 'LinkedIn Bootcamp 2.0',
        body: 'Interactive workshop focusing on networking strategies and building professional connections online.',
        img: eventillustration1,
      },
      {
        year: '2024',
        month: 'Aug',
        tag: 'Workshop',
        title: 'LinkedIn Essentials 1.0',
        body: 'First edition introducing students to LinkedIn profile building and professional networking fundamentals.',
        img: linkedImg,
      },
    ],
  },
  {
    id: 'vichaar-sangam',
    heading: 'Vichaar Sangam',
    title: 'Vichaar Sangam',
    description: "The Persona Club's Vichar Sangam brought students together for a dynamic confluence of ideas through three engaging rounds of group discussions on diverse, thought-provoking topics. Guided by skilled moderators, assessed by student leaders, and judged by esteemed faculty and experts, the event fostered critical thinking, public speaking, and respectful debate. With energetic exchanges, collaborative insights, and recognition for standout performances, Vichar Sangam left participants inspired, confident, and more adept at expressing and refining their perspectives.",
    src: vichaarSangam,
    image: eventillustration3,
    timeline: [
      {
        year: '2025',
        month: 'May',
        tag: 'Discussion',
        title: 'Vichaar Sangam 4.0',
        body: 'Fourth edition with heated debates on AI ethics, sustainability, and future of education. 80+ participants engaged.',
        img: vichaarSangam,
      },
      {
        year: '2025',
        month: 'Feb',
        tag: 'Discussion',
        title: 'Vichaar Sangam 3.0',
        body: 'Dynamic discussions on technology, social change, and youth leadership across three engaging rounds.',
        img: eventillustration3,
      },
      {
        year: '2024',
        month: 'Oct',
        tag: 'Discussion',
        title: 'Vichaar Sangam 2.0',
        body: 'Second edition exploring entrepreneurship, mental health awareness, and digital transformation.',
        img: vichaarSangam,
      },
      {
        year: '2024',
        month: 'June',
        tag: 'Discussion',
        title: 'Vichaar Sangam 1.0',
        body: 'Inaugural confluence bringing students together for thought-provoking group discussions.',
        img: eventillustration3,
      },
    ],
  },
  {
    id: 'alumni-interaction',
    heading: 'Alumni Interaction',
    title: 'Alumni Interaction',
    description: "The Persona Club's Alumni Interaction: An Evening of Inspiration and Possibility featured esteemed graduates Asad Khan (Ericsson), Ankit Upadhyay (Google), and Amit Sharma (Meta), who shared inspiring journeys from campus to global tech leadership. Speaking candidly about challenges, adaptability, and balancing ambition with growth, they advised students to cultivate focused learning, explore varied domains, and embrace complexity. An engaging Q&A covered topics from quantum computing to soft skills, fostering a meaningful exchange that bridged alumni and students, leaving participants with renewed ambition, practical guidance, and a strong sense of connection to their alma mater.",
    src: alumniImg,
    image: eventillustration2,
    timeline: [
      {
        year: '2025',
        month: 'April',
        tag: 'Careers',
        title: 'Tech Giants Panel',
        body: 'Alumni from Google, Meta, and Ericsson shared insights on global tech careers and industry transitions.',
        img: alumniImg,
      },
      {
        year: '2024',
        month: 'Nov',
        tag: 'Careers',
        title: 'Startup Founders Meet',
        body: 'Entrepreneurs who built successful startups returned to inspire and mentor current students.',
        img: eventillustration2,
      },
      {
        year: '2024',
        month: 'July',
        tag: 'Careers',
        title: 'Alumni Connect 1.0',
        body: 'First alumni interaction bridging campus learning with professional industry experiences.',
        img: alumniImg,
      },
    ],
  },
  {
    id: 'speak-off',
    heading: 'Speak Off',
    title: 'Speak Off',
    description: "The Persona Club's SpeakOff: Voice Your Vision, held on 17th June 2025 at RGPV, Bhopal, was a vibrant celebration of confidence and communication through three engaging rounds—Debate, Taboo Talks, and Personal Interview. From passionate arguments and witty, language-twisting creativity to honest self-expression, participants showcased sharp thinking, spontaneity, and authenticity. The event fostered respect, connection, and personal growth, with every speaker leaving not just with a swag token, but with greater confidence, clarity, and the courage to be heard—truly embodying Persona's spirit of celebrating every voice.",
    src: speakoff,
    image: eventillustration1,
    timeline: [
      {
        year: '2025',
        month: 'June',
        tag: 'Competition',
        title: 'Speak Off 2025',
        body: 'Latest edition with Debate, Taboo Talks, and Personal Interview rounds celebrating confident communication.',
        img: speakoff,
      },
      {
        year: '2024',
        month: 'Dec',
        tag: 'Competition',
        title: 'Speak Off Winter Edition',
        body: 'Year-end speaking competition focusing on impromptu speaking and persuasive communication.',
        img: eventillustration1,
      },
      {
        year: '2024',
        month: 'May',
        tag: 'Competition',
        title: 'Speak Off Debut',
        body: 'Inaugural speaking competition launching the platform for students to voice their vision.',
        img: speakoff,
      },
    ],
  },
]
