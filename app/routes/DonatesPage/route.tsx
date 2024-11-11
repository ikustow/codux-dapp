import { TonButtonCoduxComponent } from '../../../src/components/ton-button-codux-component/ton-button-codux-component';
import { useTonWallet } from '@tonconnect/ui-react';
import { useNavigate } from '@remix-run/react';
import styles from './route.module.scss';
import { GridComponent } from '../../../src/components/grid-component/grid-component';
//import routeStyles from '../_index/route.module.scss';
import { useEffect, useState } from 'react';
import {  useTonConnectUI } from '@tonconnect/ui-react';

interface ItemType {
    id: number;
    title: string;
    image: string;
}

export default function Donatespage() {
    const [tonConnectUI] = useTonConnectUI();
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(null); // Исправлено: правильно объявляем selectedItem и setSelectedItem

    const wallet = useTonWallet(); // Убедитесь, что useTonWallet импортирован и определен
    const navigate = useNavigate();

    useEffect(() => {
        if (!wallet) {
            // navigate('/');
        }
    }, [wallet, navigate]);

    const handleSelectItem = (item: ItemType) => {
        setSelectedItem(item); // Устанавливаем выбранный элемент
    };

    const myTransaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: "UQDtRg8IddgzMZ8qpVtjb4k4uApdY8i-iOeCzjgJWOmJ5DYG",
                amount: "10000000",
                // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
            }
        ]
    };

    // Обработка клика по кнопке "Pay"
    const handlePayClick = () => {
        if (selectedItem) {
            tonConnectUI.sendTransaction(myTransaction);
        } else {
            console.log('Элемент не выбран');
        }
    };

    return (
      <div className={styles.root}>
          <div className={styles.subdiv}>
              Choose Donate
              <div className={styles.button}>
                  <TonButtonCoduxComponent />
              </div>
              <div className={styles.grid}>
                  <GridComponent onSelect={handleSelectItem} className={styles.gridComponent} />
              </div>
              <div className={styles.div1}>
                  <button className={styles['donate-button']} onClick={handlePayClick}>Pay</button>
              </div>
          </div>
      </div>
    );
}