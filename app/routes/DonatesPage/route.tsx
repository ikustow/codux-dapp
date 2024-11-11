import { TonButtonCoduxComponent } from '../../../src/components/ton-button-codux-component/ton-button-codux-component';
import { useTonWallet } from '@tonconnect/ui-react';
import { useNavigate } from '@remix-run/react';
import styles from './route.module.scss';
import { GridComponent } from '../../../src/components/grid-component/grid-component';
//import routeStyles from '../_index/route.module.scss';
import { useEffect, useState } from 'react';
import {  useTonConnectUI } from '@tonconnect/ui-react';
import { beginCell, toNano } from '@ton/ton';

interface ItemType {
    id: number;
    title: string;
    image: string;
}

export default function Donatespage() {
    const [tonConnectUI] = useTonConnectUI();
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(null); // Исправлено: правильно объявляем selectedItem и setSelectedItem

    //const wallet = useTonWallet(); // Убедитесь, что useTonWallet импортирован и определен


    const handleSelectItem = (item: ItemType) => {
        setSelectedItem(item);
    };


    // Обработка клика по кнопке "Pay"
    const handlePayClick = () => {
        if (selectedItem) {
            // Создаем body с динамическим текстом на основе selectedItem.title
            const body = beginCell()
              .storeUint(0, 32) // 32 нулевых бита для указания комментария
              .storeStringTail(selectedItem.title) // Используем title выбранного элемента
              .endCell();

            // Создаем объект транзакции с использованием body в payload
            const myTransaction = {
                validUntil: Math.floor(Date.now() / 1000) + 360, // Время действия 360 секунд
                messages: [
                    {
                        address: "UQDtRg8IddgzMZ8qpVtjb4k4uApdY8i-iOeCzjgJWOmJ5DYG", // Замените на нужный адрес
                        amount: toNano("0.01").toString(),
                        payload: body.toBoc().toString("base64") // Преобразуем body в строку base64
                    }
                ]
            };

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