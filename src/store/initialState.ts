import {user} from '../models/models';
import {v1} from 'uuid';
import imgProjectTravel from '../icons/Screenshot_2.png'
import imgProjectMesto from '../icons/Screenshot_3.png'
import imgProjectTodolist from '../icons/Screenshot_4.png'
import imgProjectWD from '../icons/projectWD.png';
import imgProjectGithubSearch from '../icons/githubSearch.png';
import imgReact from '../icons/320px-React.png';
import imgRedux from '../icons/redux.jpg';
import imgJest from '../icons/jest.png';
import imgTypeScript from '../icons/typescript.svg';
import imgDevdocs from '../icons/devdocs.png';
import img30secondsofcode from '../icons/30secondsofcode.jpg';
import imgRapidApi from '../icons/rapidapi.png';
import imgRoadMap from '../icons/roadmap.png';
import imgHomeworkIncubator from '../icons/homework-inceubator.png'


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
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/WD/',
            img: imgProjectWD,
            name: 'WD',
            language: ' HTML, CSS'
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/GitHub-profile/',
            img: imgProjectGithubSearch,
            name: 'GitHub-profile',
            language: ' React, Toolkit, TypeScript, Redux, Tailwind, RTKQuery'
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/homework-incubator/#/pre-junior',
            img: imgHomeworkIncubator,
            name: 'Homework-incubator',
            language: ' React, TypeScript, Redux, Material-UI'
        },
    ],
    blog: [
        {id: v1(), link: 'https://ru.reactjs.org', img: imgReact, name: 'React', alt: 'image React'},
        {id: v1(), link: 'https://redux-toolkit.js.org', img: imgRedux, name: 'Redux', alt: 'image Redux'},
        {id: v1(), link: 'https://jestjs.io/ru', img: imgJest, name: 'Jest', alt: 'image Jest'},
        {
            id: v1(),
            link: 'https://www.typescriptlang.org',
            img: imgTypeScript,
            name: 'TypeScript',
            alt: 'image TypeScript'
        },
        {id: v1(), link: 'https://devdocs.io', img: imgDevdocs, name: 'DevDocs', alt: 'image DevDocs'},
        {
            id: v1(),
            link: 'https://www.30secondsofcode.org',
            img: img30secondsofcode,
            name: '30secondsofcode',
            alt: 'image 30secondsofcode'
        },
        {
            id: v1(),
            link: 'https://rapidapi.com/collection/list-of-free-apis',
            img: imgRapidApi,
            name: 'RapidApi',
            alt: 'image RapidApi'
        },
        {id: v1(), link: 'https://roadmap.sh', img: imgRoadMap, name: 'RoadMap', alt: 'image RoadMap'},
    ]
}