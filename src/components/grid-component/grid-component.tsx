import styles from './grid-component.module.scss';
import cx from 'classnames';
import data from '/Users/iliakustov/Documents/codux_dev/coduxDapp/public/data.json';
import { useState } from 'react';

interface ItemType {
    id: number;
    title: string;
    image: string;
}

export interface GridComponentProps {
    className?: string;
    onSelect?: (item: ItemType) => void;
}

export const GridComponent = ({ onSelect, className }: GridComponentProps) => {
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    const handleItemClick = (item: ItemType) => {
        setSelectedItemId(item.id);
        if (onSelect) {
            onSelect(item);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent, item: ItemType) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleItemClick(item);
        }
    };

    return (
      <div className={cx(styles.flexContainer, className)}>
          {data.map((item) => (
            <div
              key={item.id}
              className={cx(
                styles.flexItem,
                { [styles.active]: item.id === selectedItemId } // Добавляем класс, если элемент выбран
              )}
              role="button"
              tabIndex={0}
              onClick={() => handleItemClick(item)}
              onKeyDown={(event) => handleKeyDown(event, item)}
            >
                <h3 className={styles.header}>{item.title}</h3>
            </div>
          ))}
      </div>
    );
};
