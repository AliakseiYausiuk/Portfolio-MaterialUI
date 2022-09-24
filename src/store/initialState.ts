import {user} from '../models/models';
import {v1} from 'uuid';
import imgProjectTravel from '../icons/Screenshot_2.png'
import imgProjectMesto from '../icons/Screenshot_3.png'
import imgProjectTodolist from '../icons/Screenshot_4.png'
import imgProjectWD from '../icons/projectWD.png';


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
        {id: v1(), skill: 'html', progress: 70},
        {id: v1(), skill: 'javascript', progress: 60},
        {id: v1(), skill: 'css', progress: 70},
        {id: v1(), skill: 'react', progress: 60},
        {id: v1(), skill: 'github', progress: 60},
        {id: v1(), skill: 'material-ui', progress: 50},
        {id: v1(), skill: 'typescript', progress: 50},
        {id: v1(), skill: 'redux-toolkit', progress: 50},
    ],
    project: [
        {id: v1(), link: 'https://aliakseiyausiuk.github.io/russian-travel/index.html', img: imgProjectTravel},
        {id: v1(), link: 'https://aliakseiyausiuk.github.io/mesto-react/', img: imgProjectMesto},
        {id: v1(), link: 'https://aliakseiyausiuk.github.io/todoList__Material__UI/', img: imgProjectTodolist},
        {id: v1(), link: 'https://aliakseiyausiuk.github.io/WD/', img: imgProjectWD},
    ]
}