import React, { useEffect } from 'react'

import styles from "./Header.module.scss"
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme'

type Props = {}

const Header = (props: Props) => {
    const theme = useTheme()

    const options = [
        { value: 'city-1', label: 'Ташкент' },
        { value: 'city-2', label: 'Минск' },
        { value: 'city-3', label: 'Москва' }
      ]
    
    const colorStyles = { 
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === "dark" ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
            width: "194px",
            height: "37px",
            border: "none",
            borderRadius: "10px",
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === "dark" ? "#fff" : "#000"
        })
    }


    const changeTheme = () => {
        theme.changeTheme(theme.theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;

        const components = ["body-background", "components-background", "card-backround", "card-shadow", "card-color"]

        components.forEach((component) => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme.theme})`
            )
        })


    }, [theme.theme])

  return (
    <div className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <GlobalSvgSelector id="header-logo" />
            </div>
            <div className={styles.title}>React weather</div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.change_theme} onClick={changeTheme}>
                <GlobalSvgSelector id="change-theme" />
            </div>
            <Select defaultValue={options[0]} options={options} styles={colorStyles} />
        </div>


    </div>
  )
}

export default Header