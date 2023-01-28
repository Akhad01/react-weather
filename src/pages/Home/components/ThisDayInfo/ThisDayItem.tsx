import React from 'react'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector'
import { Item } from './ThisDayInfo'
import styles from "./ThisDayInfo.module.scss"

type Props = {
    item: Item
}

const ThisDayItem = ({item}: Props) => {
    const { icon_id, name, text } = item

  return (
    <div className={styles.item}>
        <div className={styles.indicator}>
            <IndicatorSvgSelector id={icon_id} />
        </div>
        <div className={styles.indicator__name}>{name}</div>
        <div className={styles.indicator__text}>{text}</div>
    </div>
  )
}

export default ThisDayItem