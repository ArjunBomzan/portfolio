export interface Datat {
    title: string;
    category: string;
    image: string,
    gitLink: string;
    liveLink: string

}
export interface ExperienceType {
    caterogry: {
        category: string,
        title: string,
        position: string,
        company: string,
    }[],
   
}
export const experience: ExperienceType[] = [
    {
        caterogry: [{
            category: "Technical",
            title: "Front-end Developer",
            position: "Junior",
            company: "MindRisers Technology"
        },
        {
            category: "Technical",
            title: "Mern Stack Developer",
            position: "Intern",
            company: "MindRisers Technology"
        }
        ]
    }
    ,
    {
        caterogry:[{
            category: "Non Technical",
            title: "Secondary School Teacher",
            position: "Computer Teacher",
            company: "Eurokingdom School"
        },
        {
            category: "Non Technical",
            title: "Secondary School Teacher",
            position: "Computer Teacher",
            company: "Triveni Public School"
        }
        ]

    }

]








export const Project: Datat[] =
    [{
        title: "Ecommerce",
        image: "ecommerce.jpg",
        gitLink: "https://github.com/ArjunBomzan/",
        liveLink: "https://tea.digitalpalika.org/",
        category: 'Next'
    },
        {
            title: "Doctor Appoitmet",
            image: "appointment.png",
            gitLink: "https://github.com/ArjunBomzan/",
            liveLink: "#",
            category: 'MERN'
        },
        {
            title: "Job Portal",
            image: "jobportal.jpg",
            gitLink: "https://github.com/ArjunBomzan/",
            liveLink: "#",
            category: 'MERN'
        },
        {
            title: "Attendance System",
            image: "attendance.jpg",
            gitLink: "https://github.com/ArjunBomzan/",
            liveLink: "#",
            category: 'python'
        },
        
        


    ]
