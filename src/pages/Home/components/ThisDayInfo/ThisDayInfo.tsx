
import styles from "./ThisDayInfo.module.scss"
import cloud from "../../../../assets/images/cloud.png"
import ThisDayItem from "./ThisDayItem"

type Props = {}

export interface Item {
  icon_id: string,
  name: string,
  text: string,
}

const ThisDayInfo = (props: Props) => {
  const items = [
    { 
      icon_id: "temp",
      name: "Температура",
      text: "20° - ощущается как 17°",
     },
     { 
      icon_id: "pressure",
      name: "Давление ",
      text: "765 мм ртутного столба - нормальное",
     },
     { 
      icon_id: "precipitation",
      name: "Осадки",
      text: "Без осадков",
     },
     { 
      icon_id: "wind",
      name: "Ветер",
      text: "3 м/с юго-запад - легкий ветер",
     },
  ]
  return (
    <div className={styles.this__day_info}>
      <div className={styles.this__day_info_items}>
        {
          items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))
        }
      </div>
      <img className={styles.cloud__img} src={cloud} alt="cloud" />
    </div>
  )
}

export default ThisDayInfo