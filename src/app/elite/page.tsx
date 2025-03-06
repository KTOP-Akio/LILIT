import {
  Container,
  MantineProvider,
  Text,
  Grid,
} from '@mantine/core';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import Profile from '@/components/profile/Profile';
import React from 'react';
import '../../assets/scss/_base.scss';
import '../../assets/scss/_variables.scss';
import '../../assets/scss/_mixins.scss';
import '../../assets/fonts/_fonts.scss';
import Separator from './../../components/separator/separator';
import styles from './page.module.css';
import MainButton from '@/components/mainButton/mainButton';


const Elite = () => {
  return (
    <MantineProvider>
      <Container size={'xs'}>
        <Header links={[]} username={'Van Darkholm'} status={'Мастер Секса'} />

        <div className={styles.section}>
          <header>
            <Text className={styles.title}>Элитные проститутки рядом</Text>
          </header>
          <div className={styles.main}>
            <div className={styles.item}><Profile profile={{ rating: 4, name: 'Анастасия', age: 18, bustSize: 34, weight: 45, height: 160, phoneNumber: '+7 (999) 999-99-99', amountOne: 1500, amountTwo: 1500, amountNight: 1500 }} /></div>
            <div className={styles.item}><Profile profile={{ rating: 4, name: 'Анастасия', age: 18, bustSize: 34, weight: 45, height: 160, phoneNumber: '+7 (999) 999-99-99', amountOne: 1500, amountTwo: 1500, amountNight: 1500 }} /></div>
            <div className={styles.item}><Profile profile={{ rating: 4, name: 'Анастасия', age: 18, bustSize: 34, weight: 45, height: 160, phoneNumber: '+7 (999) 999-99-99', amountOne: 1500, amountTwo: 1500, amountNight: 1500 }} /></div>
            <div className={styles.item}><Profile profile={{ rating: 4, name: 'Анастасия', age: 18, bustSize: 34, weight: 45, height: 160, phoneNumber: '+7 (999) 999-99-99', amountOne: 1500, amountTwo: 1500, amountNight: 1500 }} /></div>
            <div className={styles.item}><Profile profile={{ rating: 4, name: 'Анастасия', age: 18, bustSize: 34, weight: 45, height: 160, phoneNumber: '+7 (999) 999-99-99', amountOne: 1500, amountTwo: 1500, amountNight: 1500 }} /></div>
            <div className={styles.item}><Profile profile={{ rating: 4, name: 'Анастасия', age: 18, bustSize: 34, weight: 45, height: 160, phoneNumber: '+7 (999) 999-99-99', amountOne: 1500, amountTwo: 1500, amountNight: 1500 }} /></div>
          </div>
          <Separator/>

          <MainButton buttonText={'Загрузить ещё'} />
        </div>
        
        <Footer/>
      </Container>
    </MantineProvider>
  );
};

export default Elite;