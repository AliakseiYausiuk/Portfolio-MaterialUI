import React from 'react';
import styles from './popUp.module.scss'
import img from '../../icons/whybuildemaillist.png'
import projectImg from '../../icons/icons8-page-32.png';
import clientImg from '../../icons/icons8-user-24.png';
import codeImg from '../../icons/icons8-code-32.png';
import previewImg from '../../icons/icons8-preview-32.png';
import quoteImg from '../../icons/icons8-quote-left-50.png';
import {Title} from '../title/Title';

type popupType = {
    closePopup: () => void
}

export const PopUp = ({closePopup}: popupType) => {
    return (
        <div className={styles.popUp__blackout} onClick={closePopup}>
            <div className={styles.popUp}>
                <Title title={'post'} subtitle={'posts'} titleYellow={'details'}/>
                <ul className={styles.popUp__list}>
                    <li className={styles.popUp__lists}>
                        <img className={styles.popUp__icons} src={projectImg} alt="icon page"/>
                        <p className={styles.popUp__text}>Project:</p>
                    </li>
                    <li className={styles.popUp__lists}>
                        <img className={styles.popUp__icons} src={clientImg} alt="icon user"/>
                        <p className={styles.popUp__text}>Client:</p>
                    </li>
                    <li className={styles.popUp__lists}>
                        <img className={styles.popUp__icons} src={codeImg} alt="icon code"/>
                        <p className={styles.popUp__text}>Language:</p>
                    </li>
                    <li className={styles.popUp__lists}>
                        <img className={styles.popUp__icons} src={previewImg} alt="icon preview"/>
                        <p className={styles.popUp__text}>
                            Preview:
                            <a className={styles.popUp__link} href="#">ldkskds</a>
                        </p>
                    </li>
                </ul>
                <h2 className={styles.popUp__subtitle}>Email lists are Important</h2>
                <div className={styles.popUp__item}>
                    <img className={styles.popUp__img} src={img} alt=""/>
                    <p className={styles.popUp__textNews}>
                        Mailing lists may seem "old-school" to many business owners because email has been around for so
                        long. However email marketing, on average, still performs significantly better than most (if not
                        all) forms of marketing - digital or otherwise and delivers a much higher ROI.
                        The key to achieving the 42:1 average ROI of email marketing is building a strong mailing list.
                        Even brilliant email campaigns will fall short if you don’t have a quality, targeted, and large
                        mailing list. In 2021, building and managing your list organically should be a top priority.
                        How Do Mailing Lists Work? What Are They?
                    </p>
                    <ul className={styles.popUp__item_lists}>
                        <li className={styles.popUp__item__list}>
                            <img className={styles.popUp__item_img} src={quoteImg} alt="quote image"/>
                        </li>
                        <li className={styles.popUp__item_list}>
                            <p className={styles.popUp__textNews}>
                                Put simply, a mailing list is a list of email contacts that are used for communications,
                                information sharing, and marketing outreach.
                            </p>
                        </li>
                    </ul>
                    <p className={styles.popUp__textNews}>
                        Mailing lists allow businesses to connect with and engage leads, prospects, and existing
                        customers. You can send email messages to subscribers of your mailing list about relevant
                        content, news, events, products, and services.
                        Depending on your organizational goals, processes, and email platform, you can use your mailing
                        lists to send one-off emails, sales emails, and triggered emails based on engagements.
                        Or you can send a series of automated email campaigns customized for each recipient or segment
                        of your mailing list based on their marketing persona. Automated email campaigns are also called
                        drip campaigns, lifecycle emails, and marketing automation.
                        Today, there are even AI-driven auto-personalization email platforms that automatically send
                        tailored content based on each subscriber’s previous email interactions to maximize engagement
                        and value.
                    </p>
                </div>
            </div>
        </div>
    )
}
