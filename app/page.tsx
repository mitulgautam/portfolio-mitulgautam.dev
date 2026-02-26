import { Navbar } from "@/components/navbar"
import { CV_DATA } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-4xl px-4 py-12 md:py-24 space-y-24">

          {/* HERO SECTION */}
          <section id="hero" className="flex flex-col space-y-6">
            <h1 className="text-5xl font-black tracking-tighter sm:text-7xl retro:font-mono retro:text-blue-800 retro:uppercase retro:tracking-normal retro:border-b-4 retro:border-black retro:pb-4">
              {CV_DATA.name}
            </h1>
            <div className="flex flex-col gap-2 retro:p-4 retro:border-4 retro:border-black retro:bg-card">
              <h2 className="text-2xl font-semibold tracking-tight text-primary retro:font-mono retro:text-black">
                {CV_DATA.role}
              </h2>
              <p className="text-lg text-muted-foreground retro:text-black retro:font-bold">
                {CV_DATA.location} • {CV_DATA.email}
              </p>
            </div>
            <p className="max-w-[800px] text-lg leading-relaxed text-muted-foreground mt-4 retro:text-black retro:font-mono retro:leading-snug">
              {CV_DATA.summary}
            </p>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight retro:font-mono retro:uppercase retro:bg-black retro:text-white retro:p-2 retro:inline-block">Experience</h2>
            <div className="space-y-12 border-l-2 border-muted pl-6 retro:border-l-4 retro:border-black retro:pl-8">
              {CV_DATA.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-background border-2 border-primary retro:-left-[42px] retro:h-6 retro:w-6 retro:rounded-none retro:border-4 retro:border-black retro:bg-yellow-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-xl font-bold retro:font-mono">{exp.company}</h3>
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full retro:rounded-none retro:border-2 retro:border-black retro:bg-white retro:text-black retro:font-bold">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-primary font-medium retro:bg-gray-200 retro:p-1 retro:inline-block retro:w-fit retro:border-2 retro:border-black">
                      {exp.role} {exp.location && `• ${exp.location}`}
                    </div>
                    {exp.achievements.length > 0 && (
                      <ul className="list-disc list-outside ml-4 mt-2 space-y-2 text-muted-foreground retro:text-black retro:list-square">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight retro:font-mono retro:uppercase retro:bg-black retro:text-white retro:p-2 retro:inline-block">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {CV_DATA.skills.map((skillGroup, index) => (
                <div key={index} className="space-y-3 p-6 rounded-2xl bg-card border shadow-sm retro:rounded-none retro:border-4 retro:border-black retro:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-bold text-lg retro:font-mono retro:uppercase">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary retro:rounded-none retro:bg-white retro:border-2 retro:border-black retro:text-black retro:font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight retro:font-mono retro:uppercase retro:bg-black retro:text-white retro:p-2 retro:inline-block">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {CV_DATA.projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md retro:rounded-none retro:border-4 retro:border-black retro:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] retro:hover:translate-x-1 retro:hover:translate-y-1 retro:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="mb-2 text-xl font-bold retro:font-mono retro:underline">{project.name}</h3>
                  <p className="mb-6 text-sm text-muted-foreground retro:text-black">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase text-muted-foreground retro:rounded-none retro:border-2 retro:border-black retro:bg-black retro:text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION SECTION */}
          <section id="education" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight retro:font-mono retro:uppercase retro:bg-black retro:text-white retro:p-2 retro:inline-block">Education</h2>
            <div className="grid gap-6">
              {CV_DATA.education.map((edu, index) => (
                <div key={index} className="flex flex-col p-6 rounded-2xl bg-card border shadow-sm retro:rounded-none retro:border-4 retro:border-black retro:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-lg retro:font-mono">{edu.institution}</h3>
                    <span className="text-sm font-medium text-muted-foreground break-keep retro:bg-white retro:border-2 retro:border-black retro:px-2 retro:py-1 retro:text-black retro:font-bold">
                      {edu.period}
                    </span>
                  </div>
                  <p className="font-medium text-primary retro:text-black">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground retro:text-gray-800">{edu.location}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-12 md:py-16 retro:border-t-4 retro:border-black retro:bg-card">
        <div className="container max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground retro:text-black retro:font-mono retro:font-bold">
            © {new Date().getFullYear()} Mitul Gautam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href={`mailto:${CV_DATA.email}`} className="text-sm font-medium text-foreground hover:underline retro:bg-blue-600 retro:text-white retro:px-3 retro:py-1 retro:border-2 retro:border-black retro:hover:bg-blue-800">
              Email Me
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
