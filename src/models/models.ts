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
    project: Array<project>
}

export interface skills {
    id: string;
    skill: string;
}

export interface project {
    id: string;
    link: string;
    img: string;
    name: string;
    language: string
}