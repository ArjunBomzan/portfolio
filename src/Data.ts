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
    [
        {
            title: "Doctor Appoitmet",
            image: "banner.png",
            gitLink: "non",
            liveLink: "nolive",
            category: 'MERN'
        },
        {
            title: "Job Portal",
            image: "jobportal.avif",
            gitLink: "non",
            liveLink: "nolive",
            category: 'MERN'
        },
        {
            title: "Attendance System",
            image: "attendace.webp",
            gitLink: "non",
            liveLink: "nolive",
            category: 'python'
        },
        {
            title: "Ecommerce",
            image: "jobportal.avif",
            gitLink: "non",
            liveLink: "nolive",
            category: 'React'
        },
        {
            title: "Ecommerce",
            image: "jobportal.avif",
            gitLink: "non",
            liveLink: "nolive",
            category: 'Node'
        },


    ]
