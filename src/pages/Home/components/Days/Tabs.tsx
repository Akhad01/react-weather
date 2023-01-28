import React from 'react'

import styles from "./Days.module.scss"

interface Props {}

const Tabs = (props: Props) => {
    const tabs = [
        {
            value: "На неделю",
        },
        {
            value: "На месяц",
        },
        {
            value: "На 10 дней",
        },
    ]
  return (
    <div className={styles.tabs}>
        <div className={styles.tabs__wrapper}>
            {
                tabs.map(tab => (
                    <div className={styles.tab + " " + styles.active}>{tab.value}</div>
                ))
            }
        </div>
        <div className={styles.cancel}>Отменить</div>
    </div>
  )
}

export default Tabs