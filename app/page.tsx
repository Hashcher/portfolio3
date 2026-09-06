'use client'
import Script from 'next/script'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import SkillRow from './components/SkillRow'
import ContactButton from './components/ContactButton'
import DropdownCard from './components/DropdownCard'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (id: string) => {
    const container = document.getElementById('right_side')
    const section = document.getElementById(id)

    if (!container || !section) return

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  useEffect(() => {
    const container = document.getElementById('right_side')
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            setActiveSection(el.dataset.section!)
          }
        })
      },
      {
        root: container,
        threshold: 0.4,
      }
    )

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])


  return (

    <div className="hero min-h-screen lg:h-screen lg:flex lg:flex-col overflow-y-auto lg:overflow-hidden">
      <canvas id="dot-bg"></canvas>
      <Script src="/js/index.js" strategy="afterInteractive" />
      <div className="content flex flex-col lg:flex-row gap-10 lg:gap-0 lg:flex-1 lg:min-h-0">
        <div className="flex flex-col lg:h-full lg:justify-between">
          <div className="about_me flex flex-col ">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
            <div className="name text-3xl lg:text-5xl mb-6">

              Demetrius Elchinou <br></br>Gobardja


            </div>
            </motion.div>
            <div className="title text-md lg:text-xl mb-8 text-gray-400">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                Software Engineer | 2nd Semester Masters of Cyber Security
              </motion.div>
              </div>
            <div className="title text-sm lg:text-lg text-gray-500">
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                  Built with NextJS
                </motion.div>
              </div>
          </div>

          {/* Nav tabs: sticky bar on mobile, normal sidebar on desktop */}
          <div className="pagesection sticky top-0 z-20 lg:static flex flex-row lg:flex-col mt-10 gap-3 sm:gap-6 py-2 sm:py-3 lg:py-0 -mx-4 sm:-mx-6 px-4 sm:px-6 lg:mx-0 lg:px-0">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-row lg:flex-col gap-3 sm:gap-6">

            <div
              onClick={() => scrollToSection('about')}
              className={`section_button cursor-pointer text-sm sm:text-lg lg:text-2xl transition-colors
                ${activeSection === 'about'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              <span className="hidden lg:inline">01. </span>ABOUT
            </div>

            <div
              onClick={() => scrollToSection('projects')}
              className={`section_button cursor-pointer text-sm sm:text-lg lg:text-2xl transition-colors
                ${activeSection === 'projects'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              <span className="hidden lg:inline">02. </span>PROJECTS
            </div>

            <div
              onClick={() => scrollToSection('experience')}
              className={`section_button cursor-pointer text-sm sm:text-lg lg:text-2xl transition-colors
                ${activeSection === 'experience'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              <span className="hidden lg:inline">03. </span>EXPERIENCE
            </div>

            <div
              onClick={() => scrollToSection('contact')}
              className={`section_button cursor-pointer text-sm sm:text-lg lg:text-2xl transition-colors
                ${activeSection === 'contact'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              <span className="hidden lg:inline">04. </span>CONTACT
            </div>
            </motion.div>
          </div>

          {/* Desktop only: links row sticks to bottom of left column */}
          <div className="links hidden lg:flex flex-row lg:mt-0 border-b border-white/20
                pb-4">

            <div className="">
              <a
                href="https://github.com/hashcher"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                <FaGithub size={28} />
              </a>
            </div>
            <div className=" ml-7">
              <a
                href="https://linkedin.com/in/elchinou"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
            <div className="text-gray-500 ml-5">© 2026 Demetrius Elchinou Gobardja</div>
          </div>
        </div>

        <div className="lg:w-[60%] lg:h-full lg:overflow-y-auto lg:overflow-x-hidden hide-scrollbar" id="right_side">
          <div className="grid lg:grid-cols-[10%_90%] w-full " id="about" data-section="about">
            {/* about */}
            <div className="flex-[1] ">
              <div className="flex items-center gap-2 text-4xl">
                <h2 className="text-xl name uppercase tracking-widest text-neutral-100 md:[writing-mode:sideways-lr] border-l-2 pl-4 md:pl-0 md:border-l-0 md:border-r-2">01. About</h2>
              </div>
            </div>
            {/* about content */}
            <div className="">
              <div className="" >
              {/* about */}
              <div className="text-xl subtitle">
                <p className="">
                  Hi, my name's Demetrius, a Masters student at University of Melbourne studying Cyber Security.
                  While my coursework is deep in Cyber Security,
                  I'm equally passionate and self-taught in front-end development and building great user experiences with tools like React and Next.js.
                  I've combined these interests to build a
                  <a className="text-cyan-200" href="https://sekolahgis.sch.id"> website </a>
                  for a school in my hometown, where I built a management system for teachers.
                  I'm interested in any opportunities involving either AI or front-end development, and especially both! Please feel free to
                  <a className="text-cyan-200" href="mailto:elchinou.bz@gmail.com"> reach out</a>
                  </p>
                <p className="mt-6">
                  When I'm not coding, you'll probably find me programming for my indie game project.
                  I'm a huge cult of the lamb fan, and I also play badminton, and lately, jogging.
                </p>
              </div>
              {/* divider */}
              <div className="flex items-center w-full gap-4">
                <div className="flex-grow h-px bg-gray-300" />

                <span className="text-sm title uppercase text-xl m-10">
                  SKILLS
                </span>

                <div className="flex-grow h-px bg-gray-300" />
              </div>
              {/* skills */}
              <div className="grid grid-cols-3 gap-4 subtitle">
                <SkillRow skill="Python" level={5} color="bg-cyan-300" />
                <SkillRow skill="Claude Code" level={5} color="bg-cyan-300" />
                <SkillRow skill="MySQL" level={5} color="bg-cyan-300" />
                <SkillRow skill="Next.js" level={5} color="bg-cyan-300" />
                <SkillRow skill="React" level={5} color="bg-cyan-300" />
                <SkillRow skill="Tailwind CSS" level={5} color="bg-cyan-300" />

                <SkillRow skill="Unity" level={4} color="bg-cyan-300" />
                <SkillRow skill="C#" level={4} color="bg-cyan-300" />
                <SkillRow skill="JavaScript" level={4} color="bg-cyan-300" />
                <SkillRow skill="Django" level={4} color="bg-cyan-300" />
                <SkillRow skill="AI/ML" level={4} color="bg-cyan-300" />

                <SkillRow skill="NodeJS" level={3} color="bg-cyan-300" />

                <SkillRow skill="Blender" level={1} color="bg-cyan-300" />
                <SkillRow skill="Krita" level={1} color="bg-cyan-300" />
              </div>

            </div>
          </div>
          </div>
          {/* Project Card */}
          <div className="pt-5 mt-20 grid lg:grid-cols-[10%_90%] w-full" id="projects" data-section="projects">
            <div className="">
              <div className="flex items-center gap-2 text-4xl">
                <h2 className="text-xl name uppercase tracking-widest text-neutral-100 md:[writing-mode:sideways-lr] border-l-2 pl-4 md:pl-0 md:border-l-0 md:border-r-2">02. projects</h2>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="
                group
                flex flex-col items-start gap-4
                w-full px-6 py-6
                border-l-3 border-white
                bg-gray-100/10
                transition-all duration-200
                hover:-translate-y-1
              ">
                <div className="flex items-center justify-between w-full">
                  <div className="flex title text-2xl group-hover:text-cyan-300 transition-colors">
                    Dice guys | Gamejam
                    </div>
                  <div className="">
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300 transition-colors"
                    >
                      <FaExternalLinkAlt size={15} />
                    </a>
                  </div>
                </div>
                <div className="subtitle">
                  Joined as Programmer and arts for the game jam.
                  I develop the animation, camera effects, and game design.
                  I also contribute as an artist, drawing some logos for the UI.
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300">
                    Unity
                  </span>
                  <span className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300">
                    Krita
                  </span>
                  <span className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300">
                    C#
                  </span>
                </div>
              </div>
            </div>

        </div>

          {/* experience */}
          <div className="pt-5 mt-15 grid lg:grid-cols-[10%_90%] w-full" id="experience" data-section="experience">
            <div className="items-center gap-2 text-4xl">
              <h2 className="text-xl name uppercase tracking-widest text-neutral-100 md:[writing-mode:sideways-lr] border-l-2 pl-4 md:pl-0 md:border-l-0 md:border-r-2">03. experience</h2>
            </div>
            <div className="flex flex-col gap-5">
            <DropdownCard
            title="Student Engineer/Contractor | Onethird"
            description={[
              "Communicated project scope and technical limitations to the client, aligning expectations with realistic delivery timeframes",
              "Spearheaded development of the User Interaction and a mock testing layer to simulate and validate communication between software and hardware components ahead of physical device availability",
              "Applied structured decision-making frameworks to balance competing stakeholder interests in multi-party cybersecurity decisions, particularly around data storage and handling",
            ]}
            tags={['Cyber Security', 'NextJS', 'Tailwind', 'Docker', 'MySQL', 'Technical Communication']}
            ></DropdownCard>
            <DropdownCard
            title="Student Hub Assistant | Trinity College"
            description={[
              "Co-coordinated a 300-person college ball alongside a team of 8, managing logistics and crowd flow under time pressure to ensure a smooth, well-run event",
              "Guided students to academic and wellbeing resources with empathy and cultural sensitivity, supporting a diverse student population",
              "Acted as a first point of contact for parents, clearly conveying college pathways and expectations to build trust and confidence",
            ]}
            tags={['Team Management', 'Event Coordination', 'Communication']}
            ></DropdownCard>
            <DropdownCard
            title="School Website | Freelance"
            description={[
              "Defined project requirements in collaboration with school board stakeholders",
              "Built intuitive front-end interfaces with a strong focus on usability and UX",
              "Developed backend systems for teacher management and news content",
              "Proposed a student attendance system using Computer Vision to look through the license plate registry, reducing pickup time from 5 to 2 minutes",
            ]}
            tags={['Python', 'Django', 'JavaScript', 'Html', 'CSS']}
            ></DropdownCard>
            <DropdownCard
            title="Hackathon Director | HackMelbourne"
            description={[
              "Led and delivered five hackathon events as director, managing technical systems and coordination",
              "Coordinated a 15-person cross-functional team across marketing, education and logistics for a 3-day flagship hackathon with 200 attendees",
              "Built a game system with a Python interface for contestants to program agents that battle each other",
              "Developed a JavaScript client that communicates with the Pokémon Showdown server via API calls for contestant gameplay"
            ]}
            tags={['Python', 'Unity', 'C#', 'NodeJS', 'React']}
            ></DropdownCard>
            <DropdownCard
            title="Events Officer | Youth Charity Society"
            description={[
              "Accommodated accessibility for people with disabilities by prioritising access",
              "Monitored event areas to ensure a safe and family-friendly environment",
            ]}
            tags={['Event Management', 'Accessibility']}
            ></DropdownCard>
            </div>

          </div>
          {/* Contact */}
          <div className=" mt-20 pb-20 grid lg:grid-cols-[10%_90%] w-full" id = "contact" data-section="contact">
            <div className="flex items-center gap-2 text-4xl">
              <h2 className="text-xl name uppercase tracking-widest text-neutral-100 md:[writing-mode:sideways-lr] border-l-2 pl-4 md:pl-0 md:border-l-0 md:border-r-2">04. contact</h2>
            </div>
            <div className="mt-6">
              <div className="subtitle text-lg">
                I'm always open to new opportunities and collaborations. If you think I'd be a good fit for your team or just want to say hi, feel free to send me an email.
              </div>
              <div className="mt-5">
                <ContactButton></ContactButton>
              </div>

            </div>
          </div>

          </div>
        </div>

        {/* Mobile only: true footer, scroll down to reach it */}
        <div className="links flex lg:hidden flex-row mt-10 border-b border-white/20
                pb-4">
          <div className="">
            <a
              href="https://github.com/hashcher"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              <FaGithub size={28} />
            </a>
          </div>
          <div className=" ml-7">
            <a
              href="https://linkedin.com/in/elchinou"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
          <div className="text-gray-500 ml-5">© 2026 Demetrius Elchinou Gobardja</div>
        </div>
      </div>
  );
}