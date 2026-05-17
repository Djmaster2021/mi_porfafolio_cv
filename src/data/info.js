export const data = {
    es: {
        nav: {
            inicio: "Inicio",
            proyectos: "Experiencia",
            habilidades: "Stack",
            formacion: "Educación",
            contacto: "Contacto"
        },
        infoPersonal: {
            nombre: "Diego Adrian Aceves Magaña",
            nombre_corto: "Diego Magaña",
            iniciales: "DM",
            rol: "Desarrollador de Software",
            especialidad: "Python / Django / QA | Aspirante a Analista de Datos",
            ubicacion: "Puerto Vallarta, Jalisco",
            disponibilidad: "Remoto / Reubicación",
            email: "diegomag2996@gmail.com",
            telefono: "+52 3228892558",
            github: "https://github.com/Djmaster2021",
            linkedin: "https://www.linkedin.com/in/diego-adrian-aceves-maga%C3%B1a-6446453a9",
            descripcion: "Desarrollador de Software Junior con bases sólidas en el ecosistema Python (Django) y bases de datos relacionales. Cuento con experiencia práctica diseñando sistemas de gestión funcionales, integrando metodologías de QA y pruebas para asegurar la calidad del software. Me impulsa un fuerte interés por profundizar en arquitecturas de backend más complejas, así como expandir mis conocimientos hacia la ciberseguridad, el análisis de datos y la inteligencia de negocios (BI). Busco aportar mi capacidad resolutiva y lógica de programación en un entorno dinámico, contribuyendo a la toma de decisiones estratégicas mediante el uso de la tecnología.",
            tag: "Available for Hire",
            heroTitle: "Ingeniería de software centrada en",
            heroTitleAccent: "soluciones reales",
            stats: [
                { val: "3+", label: "Sistemas Reales" },
                { val: "QA", label: "End-to-End Testing" },
                { val: "Backend", label: "Django Expert" }
            ],
            aboutTitle: "Visión Técnica",
            aboutText: "No solo escribo código; diseño flujos que optimizan negocios. Mi enfoque se centra en la estabilidad, la seguridad y la escalabilidad, asegurando que cada sistema sea una herramienta estratégica para la toma de decisiones.",
            projectsTitle: "Experiencia y Proyectos",
            skillsTitle: "Arsenal Técnico",
            educationTitle: "Formación Académica",
            contactTitle: "Hablemos de tu próximo proyecto.",
            contactDesc: "¿Buscas un desarrollador con criterio técnico y hambre de crecimiento?",
            footer: "Diseñado con criterio. Construido con Astro."
        },
        proyectos: [
            {
                nombre: "LaundryPro",
                tipo: "Sistema de gestión para lavandería",
                periodo: "Ago 2025 – Actualidad",
                descripcion: "Desarrollé la lógica de negocio para módulos de Punto de Venta (POS), control de caja, inventario y reportes operativos, centralizando la administración del comercio. Implementé reglas de seguridad mediante middleware, políticas de throttling y validaciones de acceso. Configuré scripts de respaldo y despliegue en entornos Linux usando Gunicorn, Nginx y systemd.",
                impacto: "Automatización total de la operación y blindaje de seguridad en el flujo de caja.",
                tecnologias: ["Python", "Django", "DRF", "PostgreSQL", "Nginx"],
                github: "https://github.com/Djmaster2021/laundrypro",
                estado: "En producción"
            },
            {
                nombre: "Vitalya",
                tipo: "Sistema de farmacia y clínica",
                periodo: "Proyecto Full Stack",
                descripcion: "Diseñé e implementé APIs RESTful para la gestión de inventario, ventas, expedientes y consultas clínicas. Desarrollé un sistema de autenticación por PIN segmentado por sucursal y turno para personal médico. Estructuré la arquitectura utilizando PostgreSQL, Redis y Docker Compose, optimizando el rendimiento de las consultas.",
                impacto: "Optimización del 40% en tiempos de consulta y manejo de datos clínicos.",
                tecnologias: ["Django", "DRF", "Vue 3", "Redis", "Docker"],
                github: "https://github.com/Djmaster2021/vitalya",
                estado: "Finalizado"
            },
            {
                nombre: "Proyecto RC",
                tipo: "Sistema para consultorio dental",
                periodo: "Integración Multiplataforma",
                descripcion: "Desarrollé funcionalidades web para administración de consultorios: agenda, pacientes, pagos y recordatorios. Integré APIs de Google Calendar, MercadoPago y un chatbot para automatizar cobros. Participé en la creación de un módulo móvil nativo en Android con Kotlin.",
                impacto: "Automatización de la agenda y pagos, reduciendo la carga administrativa en un 50%.",
                tecnologias: ["Django", "MySQL", "Android", "Kotlin", "Docker"],
                github: "https://github.com/Djmaster2021/proyecto_rc",
                estado: "Sistema real"
            }
        ],
        habilidades: [
            { grupo: "Core Backend", items: ["Python", "Django", "DRF", "APIs REST", "Django Templates"] },
            { grupo: "Frontend & Web", items: ["Vue 3", "JavaScript", "TypeScript", "HTML5", "CSS3 / Tailwind"] },
            { grupo: "Datos & Infra", items: ["PostgreSQL", "MySQL", "Docker", "Linux (Nginx/Gunicorn)", "Git"] },
            { grupo: "QA & Calidad", items: ["Django Testing", "End-to-End", "Debugging", "Software Quality Metrics"] }
        ],
        educacion: {
            estado: "Egresado",
            carrera: "Ingeniería en Computación",
            universidad: "Centro Universitario CUC Costa (UdeG)",
            periodo: "2021 - 2025"
        },
        idiomas: [
            { nombre: "Español", nivel: "Nativo" },
            { nombre: "Inglés", nivel: "B2 (TOEFL ITP 567)" }
        ],
        certificaciones: [
            { nombre: "Cybersecurity Fundamentals", institucion: "IBM SkillsBuild", fecha: "2026" },
            { nombre: "Python Essentials 1", institucion: "Python Institute", fecha: "2025" },
            { nombre: "Introducción a la Ciberseguridad", institucion: "Cisco", fecha: "2023" },
            { nombre: "English for IT 1", institucion: "Cisco", fecha: "Certified" },
            { nombre: "NDG Linux Unhatched", institucion: "Cisco", fecha: "Certified" }
        ]
    },
    en: {
        nav: {
            inicio: "Home",
            proyectos: "Experience",
            habilidades: "Stack",
            formacion: "Education",
            contacto: "Contact"
        },
        infoPersonal: {
            nombre: "Diego Adrian Aceves Magaña",
            nombre_corto: "Diego Magaña",
            iniciales: "DM",
            rol: "Software Developer",
            especialidad: "Python / Django / QA | Data Analysis Aspirant",
            ubicacion: "Puerto Vallarta, Mexico",
            disponibilidad: "Remote / Relocation",
            email: "diegomag2996@gmail.com",
            telefono: "+52 3228892558",
            github: "https://github.com/Djmaster2021",
            linkedin: "https://www.linkedin.com/in/diego-adrian-aceves-maga%C3%B1a-6446453a9",
            descripcion: "Junior Software Developer with strong foundations in the Python (Django) ecosystem and relational databases. Hands-on experience designing functional management systems, integrating QA methodologies and testing to ensure software quality. Driven by a strong interest in deepening my knowledge of complex backend architectures, as well as expanding into cybersecurity, data analysis, and Business Intelligence (BI). I seek to contribute my problem-solving skills and programming logic in dynamic environments.",
            tag: "Available for Hire",
            heroTitle: "Software engineering focused on",
            heroTitleAccent: "real solutions",
            stats: [
                { val: "3+", label: "Real Systems" },
                { val: "QA", label: "End-to-End Testing" },
                { val: "Backend", label: "Django Expert" }
            ],
            aboutTitle: "Technical Vision",
            aboutText: "I don't just write code; I design workflows that optimize businesses. My focus is on stability, security, and scalability, ensuring that every system serves as a strategic tool for decision-making.",
            projectsTitle: "Experience & Projects",
            skillsTitle: "Technical Arsenal",
            educationTitle: "Academic Background",
            contactTitle: "Let's talk about your next project.",
            contactDesc: "Looking for a developer with technical judgment and a hunger for growth?",
            footer: "Designed with purpose. Built with Astro."
        },
        proyectos: [
            {
                nombre: "LaundryPro",
                tipo: "Laundry Management System",
                periodo: "Aug 2025 – Present",
                descripcion: "Developed business logic for POS, cash control, inventory, and operational reports modules. Implemented security rules via middleware, throttling policies, and access validations. Configured backup scripts and deployment templates in Linux using Gunicorn, Nginx, and systemd.",
                impacto: "Total operational automation and reinforced security for cash flow management.",
                tecnologias: ["Python", "Django", "DRF", "PostgreSQL", "Nginx"],
                github: "https://github.com/Djmaster2021/laundrypro",
                estado: "In Production"
            },
            {
                nombre: "Vitalya",
                tipo: "Pharmacy & Clinic System",
                periodo: "Full Stack Project",
                descripcion: "Designed and implemented RESTful APIs for inventory, sales, patient records, and clinical consultations. Developed a PIN-based authentication system segmented by branch and shift. Structured the architecture using PostgreSQL, Redis, and Docker Compose.",
                impacto: "40% optimization in query times and clinical data management.",
                tecnologias: ["Django", "DRF", "Vue 3", "Redis", "Docker"],
                github: "https://github.com/Djmaster2021/vitalya",
                estado: "Completed"
            },
            {
                nombre: "Proyecto RC",
                tipo: "Dental Clinic System",
                periodo: "Multi-platform Integration",
                descripcion: "Developed web features for clinic administration: scheduling, patients, payments, and reminders. Integrated Google Calendar, MercadoPago, and a chatbot. Participated in creating a native Android module with Kotlin.",
                impacto: "Automation of scheduling and payments, reducing administrative load by 50%.",
                tecnologias: ["Django", "MySQL", "Android", "Kotlin", "Docker"],
                github: "https://github.com/Djmaster2021/proyecto_rc",
                estado: "Real System"
            }
        ],
        habilidades: [
            { grupo: "Core Backend", items: ["Python", "Django", "DRF", "REST APIs", "Django Templates"] },
            { grupo: "Frontend & Web", items: ["Vue 3", "JavaScript", "TypeScript", "HTML5", "CSS3 / Tailwind"] },
            { grupo: "Data & Infra", items: ["PostgreSQL", "MySQL", "Docker", "Linux (Nginx/Gunicorn)", "Git"] },
            { grupo: "QA & Quality", items: ["Django Testing", "End-to-End", "Debugging", "Quality Metrics"] }
        ],
        educacion: {
            estado: "Graduated",
            carrera: "Computer Engineering",
            universidad: "CUC Costa (University of Guadalajara)",
            periodo: "2021 - 2025"
        },
        idiomas: [
            { nombre: "Spanish", nivel: "Native" },
            { nombre: "English", nivel: "B2 (TOEFL ITP 567)" }
        ],
        certificaciones: [
            { nombre: "Cybersecurity Fundamentals", institucion: "IBM SkillsBuild", fecha: "2026" },
            { nombre: "Python Essentials 1", institucion: "Python Institute", fecha: "2025" },
            { nombre: "Introduction to Cybersecurity", institucion: "Cisco", fecha: "2023" },
            { nombre: "English for IT 1", institucion: "Cisco", fecha: "Certified" },
            { nombre: "NDG Linux Unhatched", institucion: "Cisco", fecha: "Certified" }
        ]
    }
};
