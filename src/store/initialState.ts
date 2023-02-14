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
import imgIm from '../icons/IM.jpg'
import imgForm from '../icons/form.png'
import reactImg from '../icons/react.svg';
import htmlImg from '../icons/html.jpg';
import cssImg from '../icons/css.png';
import jsImg from '../icons/js.png';
import reduxImg from '../icons/redux_toolkit.png';
import react_hook_formImg from '../icons/react_hook_form.png';
import gitHubImg from '../icons/gitHub.png';
import sassImg from '../icons/sass.png';
import formikImg from '../icons/formik.png';
import muiImg from '../icons/material-ui.png';
import webpackImg from '../icons/webpack.jpg';
import typeScriptImg from '../icons/typeScript.jpg';


export const initialState: user = {
    avatar: imgIm,
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
        {id: v1(), skill: 'html', img: htmlImg,},
        {id: v1(), skill: 'javascript', img: jsImg},
        {id: v1(), skill: 'css', img: cssImg},
        {id: v1(), skill: 'react', img: reactImg},
        {id: v1(), skill: 'github', img: gitHubImg},
        {id: v1(), skill: 'material-ui', img: muiImg},
        {id: v1(), skill: 'typescript', img: typeScriptImg},
        {id: v1(), skill: 'redux-toolkit', img: reduxImg},
        {id: v1(), skill: 'react-hook-form', img: react_hook_formImg},
        {id: v1(), skill: 'formik', img: formikImg},
        {id: v1(), skill: 'webpack', img: webpackImg},
        {id: v1(), skill: 'sass', img: sassImg},
    ],
    project: [
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/russian-travel/index.html',
            img: imgProjectTravel,
            name: 'Russian Travel',
            language: 'HTML, CSS',
            filter: 'high',
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/mesto-react/',
            img: imgProjectMesto,
            name: 'Mesto',
            language: 'React, HTML, JS, CSS',
            filter: 'low',
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/todoList__Material__UI/',
            img: imgProjectTodolist,
            name: 'Todolist',
            language: 'Typescript, React, HTML, Material-UI, Redux',
            filter: 'low',
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/WD/',
            img: imgProjectWD,
            name: 'WD',
            language: 'HTML, CSS',
            filter: 'high',
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/GitHub-profile/',
            img: imgProjectGithubSearch,
            name: 'GitHub-profile',
            language: 'React, Toolkit, TypeScript, Redux, Tailwind, RTKQuery',
            filter: 'low',
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/homework-incubator/#/pre-junior',
            img: imgHomeworkIncubator,
            name: 'Homework-incubator',
            language: 'React, TypeScript, Redux, Material-UI',
            filter: 'low',
        },
        {
            id: v1(),
            link: 'https://aliakseiyausiuk.github.io/Form/',
            img: imgForm,
            name: 'Form',
            language: 'React, TypeScript, Material-UI, React-hook-form',
            filter: 'low',
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