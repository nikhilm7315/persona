import { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

import anshphoto from "../assets/Member_images/ansh.png";
import vedphoto from "../assets/Member_images/vedhanshi.png";
import luckyphoto from "../assets/Member_images/lucky.png";
import suyashphoto from "../assets/Member_images/suyash.png";
import aparnaphoto from "../assets/Member_images/aparna.png";
import titkphoto from "../assets/Member_images/titiksha.png";
import paragphoto from "../assets/Member_images/parag.png";
import shrishtiphoto from "../assets/Member_images/shrishti.png";
import shifaphoto from "../assets/Member_images/shifa.png";
import adityaphoto from "../assets/Member_images/aditya.png";
import adityasphoto from "../assets/Member_images/adityas.png";
import rashiphoto from "../assets/Member_images/rashi.png";
import mahimaphoto from "../assets/Member_images/mahima.png";
import uditaphoto from "../assets/Member_images/udita.png";
import amishaphoto from "../assets/Member_images/amisha.png";
import muneezahphoto from "../assets/Member_images/muneezah.png";
import aryanphoto from "../assets/Member_images/aryan.png";
import rajveerphoto from "../assets/Member_images/rajveer.png";
import devendraphoto from "../assets/Member_images/devendra.png";
import abhiphoto from "../assets/Member_images/abhi.png";

/**
 * TeamPage
 * --------
 * Left: an auto-scrolling name list (the item at the arrow is sharp/bold,
 * everything else blurs out the further it drifts — same effect as the
 * reference clip). Right: a detail panel with that person's photo, bio,
 * and contact info. Clicking a name snaps the scroller to center it and
 * swaps the right panel.
 *
 * Drop this INSIDE your existing page shell (below your <Navbar />) — it
 * intentionally does not render its own nav bar.
 *
 * `members` shape:
 * {
 *   id: "paryul",
 *   name: "Paryul Jain",
 *   role: "President",              // or "Club Lead" / "Executive Coordinator" etc.
 *   bio: "Short description...",
 *   email: "paryul.jain@company.com",
 *   phone: "+91 98765 43210",
 *   expertise: "Leadership, Strategy, Project Management",
 *   experience: "4+ Years",
 *   photo: "/src/assets/Member_photos/paryul-jain.png", // optional
 *   socials: { linkedin: "#", instagram: "#" },          // optional
 * }
 */

export default function TeamPage({ members = defaultMembers }) {
  const [activeId, setActiveId] = useState(members[0]?.id);
  const active = members.find((m) => m.id === activeId) ?? members[0];

  return (
    <section
      className="relative flex-1 flex flex-col overflow-hidden text-white"
    >

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 md:px-8 py-8 md:py-16">
          <p className="text-blue-400 text-xs font-semibold tracking-[0.15em] mb-2 sm:mb-3">
            OUR TEAM
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-6 md:mb-10">
            The People Behind Our Success
          </h1>

          <div className="flex flex-row gap-4 sm:gap-6 lg:gap-10">
            <div className="w-[130px] sm:w-[180px] md:w-[240px] lg:w-[340px] shrink-0">
              <NameScroller
                members={members}
                activeId={activeId}
                onSelect={setActiveId}
              />
              <p className="hidden sm:block text-slate-500 text-xs mt-3">
                Scroll or drag to browse the team.
              </p>
            </div>

            <div className="relative flex-1 min-w-0">
              <MemberDetail member={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Scrolling name selector                                             */
/* ------------------------------------------------------------------ */

const ITEM_HEIGHT = 64;

function NameScroller({ members, activeId, onSelect }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const yRef = useRef(0);
  const rafRef = useRef(null);
  const draggingRef = useRef(false);
  const pointerIdRef = useRef(null);
  const dragStartYRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const [containerHeight, setContainerHeight] = useState(300);

  const list = [...members, ...members];
  const singleHeight = members.length * ITEM_HEIGHT;
  const wrap = (v) => ((v % singleHeight) + singleHeight) % singleHeight;

  useEffect(() => {
    const updateHeight = () => {
      setContainerHeight(window.innerWidth < 1024 ? 280 : 460);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

useEffect(() => {
  const index = members.findIndex((m) => m.id === activeId);
  if (index === -1) return;
  const centerY = containerHeight / 2;
  const target = index * ITEM_HEIGHT + ITEM_HEIGHT / 2 - centerY;
  yRef.current = wrap(target);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [containerHeight]);

  // Mouse wheel scrolls the list manually (needs a non-passive listener
  // so we can preventDefault and stop the page itself from scrolling).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
  e.preventDefault();
  yRef.current = wrap(yRef.current + e.deltaY * 0.6);
};
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [singleHeight]);

  useEffect(() => {
const tick = () => {
  const centerY = containerHeight / 2;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateY(${-yRef.current}px)`;
      }

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const itemTop = i * ITEM_HEIGHT - yRef.current;
        const itemCenter = itemTop + ITEM_HEIGHT / 2;
        const dist = Math.abs(itemCenter - centerY);
        const norm = Math.min(dist / (ITEM_HEIGHT * 2.1), 1);

        const blur = norm * 6;
        const opacity = 1 - norm * 0.75;
        const scale = 1 - norm * 0.2;
        const focused = norm < 0.15;

        el.style.filter = `blur(${blur}px)`;
        el.style.opacity = opacity;
        el.style.transform = `scale(${scale})`;
        el.style.fontWeight = focused ? "800" : "500";
        el.style.color = focused ? "#ffffff" : "#64748b";
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [containerHeight, singleHeight, members.length]);

  const handleClick = (member, index) => {
onSelect(member.id);
const centerY = containerHeight / 2;
    const target = index * ITEM_HEIGHT + ITEM_HEIGHT / 2 - centerY;
    yRef.current = wrap(target);
  };

  const handlePointerDown = (e) => {
    draggingRef.current = false;
    pointerIdRef.current = e.pointerId;
    dragStartYRef.current = e.clientY;
    dragStartPosRef.current = yRef.current;
  };

  const handlePointerMove = (e) => {
    if (pointerIdRef.current !== e.pointerId) return;
    const delta = dragStartYRef.current - e.clientY;

    yRef.current = wrap(dragStartPosRef.current + delta);
  };

  const handlePointerUp = (e) => {
    if (draggingRef.current) {
      containerRef.current?.releasePointerCapture?.(e.pointerId);
    }
    draggingRef.current = false;
    pointerIdRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
      style={{ height: containerHeight, touchAction: "none" }}

      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >

      <div
        ref={trackRef}
        className="absolute inset-x-0 top-0 flex flex-col will-change-transform"
      >
        {list.map((m, i) => {
          const isActive = m.id === activeId;
          return (
            <button
              type="button"
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => handleClick(m, i)}
              className="flex items-center gap-2 sm:gap-3 pl-6 sm:pl-9 md:pl-12 pr-2 sm:pr-4 w-full text-left shrink-0"
              style={{ height: ITEM_HEIGHT }}
            >
              <Avatar member={m} />
              <span className="flex flex-col min-w-0">
                <span className="text-xs sm:text-base md:text-2xl leading-tight truncate max-w-full flex items-center gap-1.5">
                  {m.name}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  )}
                </span>
                <span className="hidden sm:block text-[10px] md:text-xs uppercase tracking-wide text-slate-500 -mt-0.5">
                  {m.role}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Avatar({ member }) {
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full overflow-hidden bg-blue-950/40 border border-blue-500/20 shrink-0 flex items-center justify-center text-[10px] md:text-xs font-semibold text-slate-400">
      {member.photo ? (
        <img
          src={member.photo}
          alt=""
          className="w-full h-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Detail panel                                                        */
/* ------------------------------------------------------------------ */

function MemberDetail({ member }) {
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(member);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setShown(member);
      setVisible(true);
    }, 150);
    return () => clearTimeout(t);
  }, [member]);

  return (
    <div
      style={{ opacity: visible ? 1 : 0, transition: "opacity 150ms ease" }}
      className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 sm:gap-8 xl:gap-14 items-start"
    >
      <div>
        <p className="text-blue-400 text-[10px] sm:text-xs font-semibold tracking-[0.15em] mb-2 sm:mb-3 uppercase">
          {shown.role}
        </p>
        <h2 className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
          {shown.name}
        </h2>
        <span className="block w-8 sm:w-10 h-0.5 bg-blue-500 mb-4 sm:mb-6" />
        <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mb-4 sm:mb-6">
          {shown.bio}
        </p>
        <div className="flex items-center gap-4">
          <SocialRow socials={shown.socials} />
          {shown.team && (
            <span className="px-3 py-2 rounded-lg border border-blue-500/50 text-xs sm:text-sm">
              <span className="text-blue-400 font-semibold tracking-wide mr-1">TEAM:</span>
              <span className="text-slate-200">{shown.team}</span>
            </span>
          )}
        </div>
      </div>

      <Photo member={shown} />
    </div>
  );
}

function Field({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-blue-400 text-[10px] sm:text-xs font-semibold tracking-[0.15em] mb-1 uppercase">
        {label}
      </p>
      <p className="text-slate-200 text-xs sm:text-sm break-words">{value}</p>
    </div>
  );
}

function SocialRow({ socials }) {
  return (
    <div className="flex gap-2">
      {socials?.linkedin && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 rounded-lg border border-blue-500/50 flex items-center justify-center text-blue-400 hover:bg-blue-500/10 transition-colors"
        >
          <FaLinkedin size={16} />
        </a>
      )}
    </div>
  );
}

function Photo({ member }) {
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative w-full aspect-[4/5] max-w-[150px] sm:max-w-[220px] lg:max-w-none mx-0">
      <div className="absolute inset-0 bg-blue-500/40 rounded-full scale-90 blur-3xl" />
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0a1030] border border-blue-500/15">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 text-2xl font-bold">
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Member data — grouped the same way as Community.jsx (club lead,     */
/* executive coordinators, student coordinators, volunteers), using    */
/* the same imported photo pattern. Fill in bio / email / phone /      */
/* expertise / experience / socials for each person, then swap the     */
/* placeholder Aparna photo on the volunteers once their real photos   */
/* are ready.                                                          */
/* ------------------------------------------------------------------ */

const clubLead = {
  id: "ansh",
  name: "Ansh Upadhyay",
  role: "Club Lead",
  photo: anshphoto,
  bio: "Ansh leads Persona with vision and dedication, ensuring every idea turns into impactful results and drives the club towards excellence.",
  team: "Core Team",
  socials: { linkedin: "#" },
};

const executiveCoordinators = [
  {
    id: "vedansh",
    name: "Vedansh Srivastava",
    role: "Executive Coordinator",
    photo: vedphoto,
    bio: "Vedansh keeps every initiative on track, coordinating across teams to make sure deadlines and quality never slip.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "lucky",
    name: "Lucky Chelani",
    role: "Executive Coordinator",
    photo: luckyphoto,
    bio: "Lucky bridges design and execution, turning plans into events people actually remember.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "suyash-ec",
    name: "Suyash Pandey",
    role: "Executive Coordinator",
    photo: suyashphoto,
    bio: "Suyash drives outreach and partnerships, growing the community one connection at a time.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
];

const studentCoordinators = [
  {
    id: "aparna",
    name: "Aparna",
    role: "Student Coordinator",
    photo: aparnaphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "titiksha",
    name: "Titiksha",
    role: "Student Coordinator",
    photo: titkphoto,
    bio: "Titiksha handles content and communication, keeping the community informed and engaged.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "parag",
    name: "Parag Chauhan",
    role: "Student Coordinator",
    photo: paragphoto,
    bio: "Parag manages logistics and on-ground execution for every Persona event.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "shrishti",
    name: "Shrishti Tamrakar",
    role: "Student Coordinator",
    photo: shrishtiphoto,
    bio: "Parag manages logistics and on-ground execution for every Persona event.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "shifa",
    name: "Shifa",
    role: "Student Coordinator",
    photo: shifaphoto,
    bio: "Parag manages logistics and on-ground execution for every Persona event.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "aditya",
    name: "Aditya Malviya",
    role: "Student Coordinator",
    photo: adityaphoto,
    bio: "Parag manages logistics and on-ground execution for every Persona event.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "adityas",
    name: "Aditya Sharma",
    role: "Student Coordinator",
    photo: adityasphoto,
    bio: "Parag manages logistics and on-ground execution for every Persona event.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "rashi",
    name: "Rashi Meena",
    role: "Student Coordinator",
    photo: rashiphoto,
    bio: "Parag manages logistics and on-ground execution for every Persona event.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "mahima",
    name: "Mahima",
    role: "Student Coordinator",
    photo: mahimaphoto,
    bio: "Parag manages logistics and on-ground execution for every Persona event.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
];

const studentVolunteers = [
  {
    id: "udita",
    name: "Udita Sharma",
    role: "Student Volunteer",
    photo: uditaphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "amisha",
    name: "Amisha Tiwari",
    role: "Student Volunteer",
    photo: amishaphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "muneezah",
    name: "Muneezah Habib",
    role: "Student Volunteer",
    photo: muneezahphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "aryan",
    name: "Aryan Rai",
    role: "Student Volunteer",
    photo: aryanphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "rajveer",
    name: "Rajveer",
    role: "Student Volunteer",
    photo: rajveerphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "devendra",
    name: "Devendra Rathore",
    role: "Student Volunteer",
    photo: devendraphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "abhi",
    name: "Abhi Agrawal",
    role: "Student Volunteer",
    photo: abhiphoto,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "mahak",
    name: "Mahak Kapse",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "nikhil",
    name: "Nikhil Mishra",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "brijesh",
    name: "Brijesh Patel",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "paryul",
    name: "Paryul Jain",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "anshuman",
    name: "Anshuman Ahirwar",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "navni",
    name: "Navni Shriwastava",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "anushka",
    name: "Anushka Choubey",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "siddhesh",
    name: "Siddhesh Verma",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "utkarsh",
    name: "Utkarsh Bawankar",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "mayank",
    name: "Mayank Parmar",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "sejal",
    name: "Sejal Dohare",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "priyesha",
    name: "Priyesha Bharwaya",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "mansu",
    name: "Mansu Singh",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "shiv",
    name: "Shiv Vishwakarma",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "mantra",
    name: "Mantra Gupta",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
  {
    id: "aliya",
    name: "Aliya Izma Khan",
    role: "Student Volunteer",
    photo: null,
    bio: "Aparna works closely with volunteers, making sure every member has what they need to contribute.",
    team: "Core Team",
    socials: { linkedin: "#" },
  },
];

const defaultMembers = [
  clubLead,
  ...executiveCoordinators,
  ...studentCoordinators,
  ...studentVolunteers,
];
