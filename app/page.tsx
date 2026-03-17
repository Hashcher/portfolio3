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
    
    <div className="hero min-h-screen lg:h-screen">
      <canvas id="dot-bg"></canvas>
      <Script src="/js/index.js" strategy="afterInteractive" />
      <div className="content flex flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="flex flex-col">
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
          <div className="pagesection flex flex-row lg:flex-col mt-10 gap-6">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
            
            <div
              onClick={() => scrollToSection('about')}
              className={`section_button cursor-pointer text-xl lg:text-2xl transition-colors
                ${activeSection === 'about'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              01. ABOUT
            </div>

            <div
              onClick={() => scrollToSection('projects')}
              className={`section_button cursor-pointer text-xl lg:text-2xl transition-colors
                ${activeSection === 'projects'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              02. PROJECTS
            </div>

            <div
              onClick={() => scrollToSection('experience')}
              className={`section_button cursor-pointer text-xl lg:text-2xl transition-colors
                ${activeSection === 'experience'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              03. EXPERIENCE
            </div>

            <div
              onClick={() => scrollToSection('contact')}
              className={`section_button cursor-pointer text-xl lg:text-2xl transition-colors
                ${activeSection === 'contact'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'}
              `}
            >
              04. CONTACT
            </div>
            </motion.div>
          </div>
          <div className="links flex flex-row mt-10 lg:mt-30 border-b border-white/20
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

        <div className="lg:w-[60%] h-full overflow-y-auto overflow-x-hidden hide-scrollbar" id="right_side">
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
                {/* <SkillRow skill="Github" level={5} color="bg-cyan-300" /> */}
                <SkillRow skill="Unity" level={4} color="bg-cyan-300" />

                <SkillRow skill="C#" level={4} color="bg-cyan-300" />
                <SkillRow skill="JavaScript" level={4} color="bg-cyan-300" />
                <SkillRow skill="Django" level={4} color="bg-cyan-300" />
                
                <SkillRow skill="NodeJS" level={3} color="bg-cyan-300" />
                <SkillRow skill="Tailwind CSS" level={3} color="bg-cyan-300" />
                <SkillRow skill="React" level={3} color="bg-cyan-300" />

                <SkillRow skill="ML" level={2} color="bg-cyan-300" />
                <SkillRow skill="TensorFlow" level={2} color="bg-cyan-300" />
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
            title="School Website | Freelance"
            description={[
              "Defined project requirements in collaboration with school board stakeholders",
              "Built intuitive front-end interfaces with a strong focus on usability and UX",
              "Developed backend systems for teacher management and news content",
            ]}
            tags={['Python', 'Django', 'JavaScript', 'Html', 'CSS']}
            ></DropdownCard>
            <DropdownCard
            title="Hackathon Director | HackMelbourne"
            description={[
              "Led and delivered five hackathon events as director, managing technical systems and coordination",
              "Built a game system with a Python interface for contestants to program agents that battle each others",
              "Developed a JavaScript client that communicates with the Pokémon Showdown server via API calls for contestant gameplay"
            ]}
            tags={['Python', 'Unity', 'C#', 'NodeJS', 'React']}
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
      </div>
  );
}
