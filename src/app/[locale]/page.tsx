import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Container, MantineProvider } from '@mantine/core';
import { Header } from '@/components/header/Header';
import { Footer } from './../../components/footer/Footer';
import Profile from '../../components/profile/Profile';

const Home: FC = () => {
    const t = useTranslations('main');

    return (
        <MantineProvider>
            <Container size={'xl'}>
                <Header links={[]} username={'Van Darkholm'} status={'Мастер Секса'} />
                {/* <Profile profile={{ rating: 4, name: 'Анастасия', age: 18, bustSize: 34, weight: 45, height: 160, phoneNumber: '+7 (999) 999-99-99', amountOne: 1500, amountTwo: 1500, amountNight: 1500 }} /> */}
                <Footer/>
            </Container>
        </MantineProvider>
    );
};

export default Home;
