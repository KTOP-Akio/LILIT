import React from 'react';
import styles from './Footer.module.css';
import { Container, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Container className={styles.footer}>
        <div className={styles.iconBox}>
            <Image className={styles.image} src="/logo1.svg" width={38} height={38} alt='/'></Image>
        </div>

        <div className={styles.infoBox}>
            <div className={styles.copyright}>
                <Text className={styles.copyrightText} fw={'500'}>Copyright 2025 LILIT</Text>
            </div>

            <div className={styles.links}>
                <Link className={styles.linkItem} href={'/'}>Политика Конфиденциальности</Link>
                <Link className={styles.linkItem} href={'/'}>Cookie</Link>
                <Link className={styles.linkItem} href={'/'}>Контакт</Link>
            </div>
        </div>
    </Container>
  );
};
