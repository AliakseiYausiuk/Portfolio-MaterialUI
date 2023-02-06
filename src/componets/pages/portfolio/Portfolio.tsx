import React, {useState} from 'react';
import styles from './porfolio.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {BtnColorTheme} from '../../btnColorTheme/btnColorTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {Card} from '../../card/Card';
import {FilterProject, Project} from '../../../models/models';


type FilterType = 'all' | FilterProject


export const Portfolio = React.memo(() => {
    const state = useSelector((state: RootState) => state);

    const [data, setData] = useState<Array<Project>>(state.user.project)
    const [filter, setFilter] = useState<FilterType>('all')

    const handlerFilterAll = (data: Array<Project>, filter: FilterType) => {
        if (filter === 'all') return data
        else if (filter === 'high') return data.filter((el: Project) => el.filter === 'high')
        else if (filter === 'low') return data.filter((el: Project) => el.filter === 'low')

        return state.user.project
    }

    const filterCards = handlerFilterAll(data, filter);

    const isProject = filterCards.map((el: Project, i: number) => {
        return <Card data={el} index={i}/>
    })

    return (
        <section className={styles.portfolio}>
            <div className={commonStyle.container}>
                <div className={styles.portfolio__item}>
                    <BtnColorTheme/>
                    <Title title="MY" titleYellow="Portfolio" subtitle="Works"/>
                    <ul className={styles.portfolio__lists}>
                        <li className={styles.portfolio__list}>
                            <button className={styles.portfolio__btn} onClick={() => setFilter('all')}>all</button>
                        </li>
                        <li className={styles.portfolio__list}>
                            <button className={styles.portfolio__btn} onClick={() => setFilter('high')}>HTML/CSS
                            </button>
                        </li>
                        <li className={styles.portfolio__list}>
                            <button className={styles.portfolio__btn}
                                    onClick={() => setFilter('low')}>React/TypeScript
                            </button>
                        </li>
                    </ul>
                    <div className={styles.portfolio__wrapper}>
                        {isProject}
                    </div>
                </div>
            </div>
            <Navbar/>
        </section>
    )
})