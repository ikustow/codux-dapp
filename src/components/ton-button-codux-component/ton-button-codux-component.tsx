import { TonConnectButton } from '@tonconnect/ui-react';
import styles from './ton-button-codux-component.module.scss';
import cx from 'classnames';

export interface TonButtonCoduxComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TonButtonCoduxComponent = ({ className }: TonButtonCoduxComponentProps) => {
    return (       
             <TonConnectButton />  
    );
};
