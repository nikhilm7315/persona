import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import Title from '../ui/Title';

const STAGES = [
  {
    id: 'day-01',
    tabLabel: 'Day 01',
    tabSubtitle: 'Hesitation',
    tag: 'The Starting Point',
    heading: 'Hesitation & Stage Fear',
    description: 'Heart beats fast when your name is called. You know what to say, but fear holds your tongue.',
    bullets: [
      'Fear of speaking in English',
      'Avoiding eye contact in groups',
      'Overthinking before opening your mouth',
      'Hesitation during spontaneous questions'
    ],
    quote: '"I used to stand in the back row, terrified of making eye contact with the speaker."',
    author: 'Rohan M. (1st Year CSE)'
  },
  {
    id: 'month-01',
    tabLabel: 'Month 01',
    tabSubtitle: 'Breaking',
    tag: 'Initial Breakthrough',
    heading: 'Icebreaking & Group Comfort',
    description: 'First stage exposure done. You realize no one is judging you, and mistakes are celebrated as learning.',
    bullets: [
      'Comfortable raising hands in JAM sessions',
      'Speaking 60 seconds without freezing',
      'Structuring thoughts quickly in GDs',
      'Smiling and connecting with an audience'
    ],
    quote: '"After my first JAM session, the fear vanished. The audience applause was so encouraging!"',
    author: 'Ananya P. (1st Year IT)'
  },
  {
    id: 'month-03',
    tabLabel: 'Month 03',
    tabSubtitle: 'Commanding',
    tag: 'Core Transformation',
    heading: 'Stage Mastery & Vocal Clarity',
    description: 'Vocal clarity, body posture, and quick thinking become natural habits during college events.',
    bullets: [
      'Commanding body language & posture',
      'Impromptu extempore fluency',
      'Handling counter-arguments respectfully',
      'Moderating campus team discussions'
    ],
    quote: '"I anchored our departmental showcase in front of 300+ students. 3 months ago I couldn\'t speak 2 sentences."',
    author: 'Devendra S. (2nd Year ECE)'
  },
  {
    id: 'month-06',
    tabLabel: 'Month 06+',
    tabSubtitle: 'Inspiring',
    tag: 'Peer Mentor & Lead',
    heading: 'Magnetic Leadership & Interview Ease',
    description: 'You guide freshers, anchor flagship campus debates, and walk into placement interviews with unshakeable poise.',
    bullets: [
      'Mock HR & Technical interview confidence',
      'Mentoring junior club members',
      'Dynamic vocal pitch modulation',
      'Leadership across campus societies'
    ],
    quote: '"Persona didn\'t just fix my stage fear; it helped me crack my campus placement interview with complete confidence."',
    author: 'Shrishti G. (3rd Year CSE)'
  }
];

export default function TransformationSection() {
  const [activeStageId, setActiveStageId] = useState('day-01');
  const activeStage = STAGES.find(s => s.id === activeStageId) || STAGES[0];

  return (
    <section className="relative py-16 px-4 md:px-8 max-w-6xl mx-auto w-full">
      {/* Title & Subtitle (No top 'Transformation Engine' badge element) */}
      <Title
        title="From Hesitation to Commanding the Room"
        subtitle="You don't need to be an extrovert to start. Click through the timeline to see how Persona reshapes student confidence over time."
      />

      {/* Timeline Stage Switcher Buttons (No borders, Blue/Cyan active styles) */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-10">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border-none outline-none ${
                isActive
                  ? 'bg-[#0052FF] text-white shadow-[0_0_25px_rgba(0,82,255,0.55)] scale-105'
                  : 'bg-[#081033]/80 text-neutral-400 hover:text-white hover:bg-[#0c184a]'
              }`}
            >
              <span>{stage.tabLabel}</span>
              <span className={`text-[11px] font-normal px-2 py-0.5 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-neutral-400'
              }`}>
                {stage.tabSubtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card Container (No borders, dark navy glass style) */}
      <div className="relative rounded-3xl bg-[#040c2e]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[360px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-neutral-200 font-semibold">
                  {activeStage.tag}
                </span>
              </div>

              {/* Stage Heading & Description */}
              <div>
                <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-2">
                  {activeStage.heading}
                </h3>
                <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {activeStage.description}
                </p>
              </div>

              {/* Bullet Points (No tick icons) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeStage.bullets.map((bullet, idx) => (
                  <div key={idx} className="text-xs sm:text-sm text-neutral-200">
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quote Card Block (No borders, deep navy card) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#02071a] p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-lg">
                <div className="flex items-start justify-between">
                  <p className="font-sans italic text-sm sm:text-base text-neutral-200 leading-relaxed">
                    {activeStage.quote}
                  </p>
                  <Quote className="w-8 h-8 text-[#00B4D8]/40 shrink-0 ml-2" />
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-white">
                      {activeStage.author}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
