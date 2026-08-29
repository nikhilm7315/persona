import alumniImg from '../assets/EventImages/alumniInteraction.jpg'
import linkedImg from '../assets/EventImages/linkedInWorkshop.jpg'
import speakoff from '../assets/EventImages/speakoff.png'
import vichaarSangam from '../assets/EventImages/vichaarSangam.jpg'
import laCasaPoster from '../assets/EventImages/LaCasaDeDiscussionsPoster.jpg'
import eventillustration1 from '../assets/eventillustration1.png'
import eventillustration2 from '../assets/eventillustration2.png'
import eventillustration3 from '../assets/eventillustration3.jpg'

export const upcomingEvent = {
  id: "next-flagship",
  title: "The Stage Unlocked: Extempore & JAM Championship",
  subtitle: "Step onto the spotlight. 60 seconds. Zero preparation. Maximum adrenaline.",
  date: "Saturday, August 22, 2026",
  time: "04:30 PM IST",
  venue: "SOIT Main Auditorium, RGPV Campus",
  category: "Flagship Session",
  entryFee: "Free Entry (SOIT Students)",
  badge: "Registration Open",
  description: "Join us for an electrifying evening of spontaneous speaking, audience cheers, and constructive feedback from senior campus anchors. Designed specifically for freshers who want to test their speed and conquer stage nervousness.",
  perks: [
    "1-on-1 feedback from senior anchors",
    "Stage certificate of participation",
    "High-energy zero-judgment audience",
    "Refreshments & networking"
  ]
};

export const pastEventHighlights = [
  {
    id: 1,
    title: "Mock Placement GD Marathon",
    date: "July 2026",
    tag: "Career Ready",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Parliamentary Debate Showcase",
    date: "June 2026",
    tag: "Critical Thinking",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Body Language & Vocal Masterclass",
    date: "May 2026",
    tag: "Workshop",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
  }
];

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
    description: "The Persona Club's Alumni Interaction: An Evening of Inspiration and Possibility featured esteemed graduates Asad Khan (Ericsson), Ankit Upadhyay (Google), and Amit Sharma (Meta), who shared inspiring journeys from campus to global tech leadership. Speaking candidly about challenges, adaptability, and balancing ambition with growth, they advised students to cultivate focused learning, explore varied domains, and embrace complexity. An engaging Q&A covered topics from quantum computing to soft skills, fostering a meaningful exchange that bridged alumni and students.",
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
  {
    id: 'la-casa-de-discussions',
    heading: 'La Casa De Discussions',
    title: 'La Casa De Discussions',
    description: `La Casa De Discussion was an online group discussion event focused on communication skills, clarity of thought, and presence of mind.It encouraged meaningful conversations, diverse opinions, and confident expression.The event aimed to enhance public speaking, logical thinking, and respectful debating.It also helped participants build confidence while providing a competitive yet collaborative platform.
    
    The event was conducted in three online rounds :
    
    Round 1 (The Main Hall): It was an elimination round testing basic discussion skills.
    Round 2 (The Royal Mint): It challenged participants with dynamic topics and critical thinking.
    The Final Round (The Gold Vault): It featured the top 10 participants in an intense discussion.

    More than 100 students participated from which only 11 reached the finals. 3 winners were selected based on leadership, articulation, and overall impact
`,
    src: laCasaPoster,
    image: laCasaPoster,
    timeline: []
  }
];
