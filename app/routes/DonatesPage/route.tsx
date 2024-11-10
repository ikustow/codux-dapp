import React, { useEffect } from 'react';
import { TonButtonCoduxComponent } from '../../../src/components/ton-button-codux-component/ton-button-codux-component';
import { useTonWallet } from '@tonconnect/ui-react';
import { useNavigate } from '@remix-run/react';
import styles from './route.module.scss';
export default function Donatespage() {
    const wallet = useTonWallet();

    const navigate = useNavigate();

    useEffect(() => {
        if (!wallet) {
            // navigate('/');
        }
    }, [wallet, navigate]);

    return (
        <div className={styles.root}>
            <div className={styles.subdiv}>
                Choose Donate
                <div className={styles.button}>
                    <TonButtonCoduxComponent />
                </div>
            </div>
        </div>
    );
}
