import {user} from '../models/models';
import {v1} from 'uuid';
import imgProjectTravel from '../icons/Screenshot_2.png'
import imgProjectMesto from '../icons/Screenshot_3.png'
import imgProjectTodolist from '../icons/Screenshot_4.png'
import imgProjectWD from '../icons/projectWD.png';
import imgProjectGithubSearch from '../icons/githubSearch.png';


export const initialState: user = {
    avatar: 'https://tunis.ibthemespro.com/static/media/dark.fcd7feb934db7b81903a.jpg',
    firstName: 'Aliaksei',
    lastName: 'Yausiuk',
    age: 25,
    job: 'Front‑end developer',
    nationality: 'Belarus',
    address: 'Minsk',
    email: 'aliakseiyausiuk@gmail.com',
    langages: 'Russia, English',
    phone: '+375259351665',
    skype: 'No',
    freelance: 'available',
    street: '49/165 Rokossovsky Ave.',
    skills: [
        {id: v1(), skill: 'html'},
        {id: v1(), skill: 'javascript'},
        {id: v1(), skill: 'css'},
        {id: v1(), skill: 'react'},
        {id: v1(), skill: 'github'},
        {id: v1(), skill: 'material-ui'},
        {id: v1(), skill: 'typescript'},
        {id: v1(), skill: 'redux-toolkit'},
    ],
    project: [
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/russian-travel/index.html',
            img: imgProjectTravel,
            name: 'Russian Travel',
            language: ' HTML, CSS'
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/mesto-react/',
            img: imgProjectMesto,
            name: 'Mesto',
            language: ' React, JS, HTML, CSS'
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/todoList__Material__UI/',
            img: imgProjectTodolist,
            name: 'Todolist',
            language: ' Typescript, React, HTML, Material-UI, Redux'
        },
        {id: v1(), link: 'https://aliakseiyausiuk.github.io/WD/', img: imgProjectWD, name: 'WD', language: ' HTML, CSS'},
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/GitHub-profile/',
            img: imgProjectGithubSearch,
            name: 'GitHub-profile',
            language: ' React, Toolkit, TypeScript, Redux, Tailwind, RTKQuery'
        },
    ]
}