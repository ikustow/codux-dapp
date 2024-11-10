import styles from './made-with-images-row.module.scss';
import cx from 'classnames';
import TonImagePng from '../../assets/img/tonImage.png';
import CoduxImagePng from '../../assets/img/coduxImage.png';

export interface MadeWithImagesRowProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MadeWithImagesRow = ({ className }: MadeWithImagesRowProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <img src={CoduxImagePng} className={styles.codux} />
            <img src={TonImagePng} className={styles.ton} />
        </div>
    );
};
