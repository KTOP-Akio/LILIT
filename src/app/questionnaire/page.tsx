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
import { Sidebar } from '@/components/sidebar/Sidebar';


const Qestionnaire = () => {
  return (
    <MantineProvider>
      <Container size={'xs'}>
        <Header links={[]} username={'Van Darkholm'} status={'Мастер Секса'} />

        <div className={styles.section}>
          <Sidebar/>
          <Separator/>

        </div>
        
        <Footer/>
      </Container>
    </MantineProvider>
  );
};

export default Qestionnaire;