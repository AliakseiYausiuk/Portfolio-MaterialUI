export interface user {
    avatar: string;
    firstName: string;
    lastName: string;
    age: number;
    job: string;
    nationality: string;
    address: string;
    email: string;
    langages: string;
    phone: string;
    skype: string;
    freelance: string;
    skills: Array<skills>;
    street: string
    project: Array<Project>
    blog: Array<myBlog>
}

export interface skills {
    id: string;
    skill: string;
}

export interface Project {
    id: string;
    link: string;
    img: string;
    name: string;
    language: string;
    filter: FilterProject
}

export interface myBlog {
    id: string
    link: string
    img: string
    name: string
    alt: string
}

export interface DataNav {
    id: string
    img: string
    alt: string
    text: string
    path: string
}

export type FilterProject = 'high' | 'low'