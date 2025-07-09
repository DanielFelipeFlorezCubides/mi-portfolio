"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  MessageCircle,
  Code,
  Database,
  Palette,
  GitBranch,
  Globe,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const skills = [
    { name: "Python", icon: Code, color: "bg-blue-500" },
    { name: "JavaScript", icon: Code, color: "bg-yellow-500" },
    { name: "React", icon: Cpu, color: "bg-cyan-500" },
    { name: "Next.js", icon: Globe, color: "bg-black" },
    { name: "HTML/CSS", icon: Palette, color: "bg-orange-500" },
    { name: "Git", icon: GitBranch, color: "bg-red-500" },
    { name: "Database", icon: Database, color: "bg-green-500" },
  ]

  const projects = [
    {
      title: "DB Progressive Project",
      description:
        "Proyecto colaborativo de base de datos progresiva con funcionalidades avanzadas de gestión y consulta.",
      link: "https://github.com/DavidAdolfoGomezUribe/proyectoprogresivobd",
      tech: ["Database", "SQL", "Backend"],
    },
    {
      title: "BuyCar Crypto Project",
      description: "Plataforma de compraventa de vehículos con sistema de pagos basado en blockchain de Cardano.",
      link: "https://github.com/DavidAdolfoGomezUribe/ProyectoSerPitch",
      tech: ["Blockchain", "Cardano", "React", "Crypto"],
    },
    {
      title: "D&D Dragon Ball Characters",
      description: "Aplicación para crear personajes personalizados mezclando elementos de D&D con Dragon Ball.",
      link: "https://github.com/Mateo-Paternina-Mercado/Proyecto_JavaScript_FlorezDaniel_PaterninaMateo",
      tech: ["JavaScript", "Game Development", "Frontend"],
    },
  ]

  const experience = [
    {
      title: "Desarrollador Full Stack",
      company: "Proyectos Académicos",
      period: "2023 - 2024",
      description: "Desarrollo de aplicaciones web con enfoque en frontend, participando en proyectos colaborativos.",
    },
    {
      title: "Salvavidas",
      company: "Holiday Inn Hotel",
      period: "2024 - 2025",
      description: "Encargado de la piscina, atención al cliente, operador de químicos y maquinaria de filtrado.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ top: "20%", right: "10%" }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              DANIEL
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FLOREZ CUBIDES
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ✨ Desarrollador Full Stack • 21 años ✨
          </motion.p>

          <motion.p
            className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Joven trabajando día a día para ser mejor. Especializado en desarrollo frontend con React, con experiencia
            en proyectos colaborativos y tecnologías blockchain.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Proyectos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contactar
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sobre Mí
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Desarrollador full stack con enfoque en frontend, especializado en Python, HTML, CSS, JavaScript,
                    React y control de versiones con Git.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    He participado en proyectos innovadores como una plataforma de creación de personajes para Dungeons
                    & Dragons y un sitio de compraventa de vehículos que integra pagos basados en blockchain de Cardano.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Con experiencia en el sector hotelero y turismo, he fortalecido mis habilidades de comunicación,
                    trabajo en equipo y eficiencia bajo presión.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-blue-400" />
                <span>San Gil, Santander, Colombia</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-blue-400" />
                <span>campusflorezcubides@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-blue-400" />
                <span>+57 323 207 8114</span>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Idiomas</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Español</span>
                    <span className="text-blue-400">Nativo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inglés</span>
                    <span className="text-blue-400">B2</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Habilidades Técnicas
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experiencia
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-blue-400">{exp.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-blue-500 text-blue-400 mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Proyectos Destacados
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white group-hover:scale-105 transition-all duration-300 bg-transparent"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ¡Conectemos!
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estoy siempre abierto a nuevas oportunidades y colaboraciones
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-110 transition-all duration-300"
              onClick={() => window.open("mailto:campusflorezcubides@gmail.com")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://github.com/DanielFelipeFlorezCubides", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://fb.com/dani cubides", "_blank")}
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transform hover:scale-110 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://instagram.com/dani cubides2711", "_blank")}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transform hover:scale-110 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://discord.gg/danielfelipeflorezcubides", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discord
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2025 Daniel Felipe Florez Cubides. Hecho con ❤️ y React
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
