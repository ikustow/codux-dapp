import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { useNavigate } from '@remix-run/react';


export interface TonButtonCoduxComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TonButtonCoduxComponent = () => {

    return (
             <TonConnectButton />  
    );
};
