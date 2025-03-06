'use client';

import {
    Box,
    Container,
    Modal,
    Button,
    Text
} from '@mantine/core';
import {
    IconStar,
    IconMail,
    IconBell,
    IconUser,
    IconMessageCircle2,
    IconCircleOff,
} from '@tabler/icons-react';
import { useHeadroom } from '@mantine/hooks';
import styles from './Sidebar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Sidebar = () => {

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.list} style={{color: "#BE185D"}}>
                    <IconUser className={styles.icon}></IconUser>
                    <span>Профиль</span>
                </div>
                <div className={styles.sublist}>
                    <span>Проститутки</span>
                    <span>Элитные</span>
                    <span>Салоны</span>
                    <span>Массажистки</span>
                    <span>Черновики</span>
                </div>
                <div className={styles.list}>
                    <IconMessageCircle2 className={styles.icon}></IconMessageCircle2>
                    <span>Мои комеентарии</span>
                </div>
                <div className={styles.list}>
                    <IconMail className={styles.icon}></IconMail>
                    <span>Мои ответы</span>
                </div>
                <div className={styles.list}>
                    <IconBell className={styles.icon}></IconBell>
                    <span>Уведомления</span>
                </div>
                <div className={styles.list} style={{marginTop: "18px"}}>
                    <IconStar className={styles.icon}></IconStar>
                    <span>Избранное</span>
                </div>
                <div className={styles.list}>
                    <IconCircleOff className={styles.icon} style={{color: "#EF4444"}}></IconCircleOff>
                    <span>Уведомления</span>
                </div>
            </div>
        </div>
    );
};

