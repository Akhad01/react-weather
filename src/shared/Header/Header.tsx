import React from 'react'

import styles from "./Header.module.scss"
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'

type Props = {}

const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Ташкент' },
        { value: 'city-2', label: 'Минск' },
        { value: 'city-3', label: 'Москва' }
      ]
    
    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: "rgba(71, 147, 255, 0.2)",
            width: "194px",
            height: "37px",
            border: "none",
            borderRadius: "10px",
            zIndex: 100,
        })
     }
  return (
    <div className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <GlobalSvgSelector id="header-logo" />
            </div>
            <div className={styles.title}>React weather</div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.change_theme}>
                <GlobalSvgSelector id="change-theme" />
            </div>
            <Select defaultValue={options[0]} options={options} styles={colorStyles} />
        </div>


    </div>
  )
}

export default Header