'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Profile.module.css';
import { Button } from '@mantine/core';
import {
    IconPhone,
    IconBrandTelegram,
    IconBrandWhatsapp,
    IconSun,
    IconMoon
} from '@tabler/icons-react';

interface Props {
    profile: {
      rating: number;
      name: string;
      age: number;
      bustSize: number;
      weight: number;
      height: number;
      phoneNumber: string;
      amountOne: number;
      amountTwo: number;
      amountNight: number;
    };
  }

  const Profile: React.FC<Props> = ({ profile }) => {
    const { rating, name, age, bustSize, weight, height, phoneNumber, amountOne, amountTwo, amountNight } = profile;
    const [showPhoneNumber, setShowPhoneNumber] = React.useState(false);
  
    const handleShowPhoneNumber = () => {
      setShowPhoneNumber(true);
    };

  return (
    <div className={style.profile}>
        <div className={style.infoBlock}>
            <Image src='/blank.jpg' width={278} height={319} alt="/" className={style.image}/>
            <div className={style.staticInfo}>
            <div className={style.rating}>
                {Array.from({ length: rating }, (_, i) => (
                <span key={i}>&#9733;</span>
                ))}
            </div>
                <div className={style.name}>{name}</div>
                <div className={style.characteristics}>
                    <div className={style.charItem}>Возраст <span className={style.item}>{age}</span></div>
                    <div className={style.charItem}>Грудь <span className={style.item}>{bustSize}</span></div>
                    <div className={style.charItem}>Вес <span className={style.item}>{weight}</span></div>
                    <div className={style.charItem}>Рост <span className={style.item}>{height}</span></div>
                </div>
            </div>
        </div>

        <div className={style.socialBlock}>
            <Button className={style.socilalButton} onClick={handleShowPhoneNumber}>
                <IconPhone size={24} className={style.icon} />
                <span className={style.btnText}>{showPhoneNumber ? phoneNumber : 'Показать телефон'}</span>
            </Button>

            <Button className={style.socilalButtonIcon}>
                <Link href="/" target="_blank">
                    <IconBrandTelegram size={24} className={style.icon} />
                </Link>
            </Button>
            <Button className={style.socilalButtonIcon}>
                <Link href="#" target="_blank">
                    <IconBrandWhatsapp size={24} className={style.icon} />
                </Link>
            </Button>
        </div>

        <div className={style.timeBlock}>
            <Button className={style.timeBtn}>
                <IconSun size={24} className={style.sun} />
                <span className={style.timeBtnText}>1 час - {amountOne}</span>
            </Button>

            <Button className={style.timeBtn}>
                <IconSun size={24} className={style.sun} />
                <span className={style.timeBtnText}>2 часа - {amountTwo}</span>
            </Button>

            <Button className={style.timeBtn}>
                <IconMoon size={24} className={style.moon} />
                <span className={style.timeBtnText}>Ночь - {amountNight}</span>
            </Button>
        </div>
    </div>
  );
};

export default Profile;
