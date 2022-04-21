import * as React from 'react';
import Checkbox from '../../../Controls/Checkbox';
import Paragraph14 from '../../../Texts/Basics/Left/Paragraph14';
import SectionTitle from "../../../Texts/Basics/Left/SectionTitle";
import styles from "./BulletList.styles";

/**
 * @param title title of the component
 * @param description description text of component
 * @param items items that will be shown in bullets
 * @param checkboxColor must be and HEX color. e.g : '#5BC500'
 */
function BulletList(props: {title?: string, description?: string, items: string[], checkboxColor?: string}) {
  return (
    <div>
      {props.title && <SectionTitle text={props.title}/>}
      {props.description && <Paragraph14  text={props.description}/>}
      {props.items.length > 0 &&
        props.items.map((item, key) => 
          <div className={styles.bulletContainer} key={key}>
            <div className={styles.bulletIconContainer}>
              <Checkbox checkboxColor={props.checkboxColor}/>
            </div>
            <div className={styles.bulletText}>
              {item}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default BulletList;