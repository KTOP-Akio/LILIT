'use client';

import {
    Box,
    Container,
    Modal,
    Button,
    Text
} from '@mantine/core';
import {
    IconChevronDown,
    IconMap,
    IconSun,
    IconMoon,
    IconStar,
    IconMail,
    IconBell,
    IconMenu2,
    IconUser,
    IconPlus,
    IconAlignLeft2,
    IconBolt,
} from '@tabler/icons-react';
import { useHeadroom } from '@mantine/hooks';
import styles from './Header.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const cities = [
    { label: 'Москва', value: 'Москва' },
    { label: 'Санкт-Петербург', value: 'Санкт-Петербург' },
    { label: 'Казань', value: 'Казань' },
    { label: 'Ростов-на-дону', value: 'Ростов-на-дону' },
    { label: 'Новосибирск', value: 'Новосибирск' },
    { label: 'Екатеринбург', value: 'Екатеринбург' },
    { label: 'Нижний Новгород', value: 'Нижний Новгород' },
    { label: 'Красноярск', value: 'Красноярск' },
    { label: 'Воронеж', value: 'Воронеж' },
    { label: 'Пермь', value: 'Пермь' },
    { label: 'Омск', value: 'Омск' },
    { label: 'Саратов', value: 'Саратов' },
    { label: 'Самара', value: 'Самара' },
    { label: 'Тольятти', value: 'Тольятти' },
    { label: 'Уфа', value: 'Уфа' },
    { label: 'Краснодар', value: 'Краснодар' },
    { label: 'Волгоград', value: 'Волгоград' },
    // ...
];

type LinkItem = {
    label: string;
    path: string;
};

type HeaderProps = {
    links: LinkItem[];
    username: string;
    status: string;
};



export const Header = ({ links, username, status }: HeaderProps) => {

    const [opened, setOpened] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [selectedCity, setSelectedCity] = useState('Москва');

    const handleCityChange = (city: string) => {
        setSelectedCity(city);
        setOpened(false);
    };
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const pinned = useHeadroom({ fixedAt: 120 });

    return (
        <div>
            <Box className={`headerBox ${pinned ? 'pinned' : 'not-pinned'}`}>
                <Container size={'xl'} className={styles.container}>
                    <div className={styles.headerTop}>
                        <div className={styles.region}>
                            <div className={styles.regionText}>
                                <Text>Ваш регион:</Text>
                                <Text fw={700}>📍{selectedCity}</Text>
                                <Button className={styles.btn} onClick={() => setOpened(true)}>Другой город</Button>
                            </div>

                            <Modal
                                centered
                                size="md"
                                className={styles.modal}
                                opened={opened}
                                onClose={() => setOpened(false)}
                                title="Выберите город"
                                padding="xl"
                                radius="md"
                            >
                                {cities.map((city) => (
                                    <Button
                                        className={styles.modalBtn}
                                        key={city.value}
                                        onClick={() => handleCityChange(city.value)}
                                    >
                                        <span className={styles.cityName}>{city.label}</span>
                                    </Button>
                                ))}
                            </Modal>
                        </div>

                        <div className={styles.business}>
                            <Link className={styles.link} href={'/'}>Cутенерам</Link>
                            <Link className={styles.link} href={'/'}>Студиям</Link>
                            <Link className={styles.link} href={'/'}>B2B</Link>
                            <Link className={styles.link} href={'/'}>Сотрудничество с нами</Link>
                        </div>

                        <div className={styles.lang}>
                            <Text fw={700}>🌎 Язык:
                                <Button className={styles.btn}>RU</Button>
                                /
                                <Button className={styles.btn}>EN</Button>
                            </Text>
                        </div>
                    </div>

                    <div className={styles.headerMain}>
                        <Link href="/">
                            <div className={styles.logo}>
                                <Image src="/logo1.svg" alt="/" width={50} height={42} />
                                <Image src="/logo2.svg" alt="/" width={94} height={30} />
                            </div>
                        </Link>
                        <div className={styles.searchBox}>
                            <div className={styles.search}>
                                <div className={styles.searchBar}>
                                    <input type="text" className={styles.searchInput} placeholder="Поиск" />
                                </div>
                                <div className={styles.toggleArrow}>
                                    <IconChevronDown size={24} className={styles.iconArrow} />
                                </div>
                                <div className={styles.dropdownList}>
                                    {isOpen && (
                                        <ul>
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className={styles.mapBox}>
                                <Button className={styles.mapBtn}>
                                    <IconMap size={24}></IconMap>
                                    <Text fw={700} className={styles.mapText}>
                                        <span className={styles.mapSpan}>На карте</span>
                                    </Text>
                                </Button>
                            </div>
                        </div>

                        <div className={styles.account}>
                            {isLoggedIn ? (
                                <div className={styles.loggedIn}>
                                    <Image className={styles.avatarPng} src="/avatar.svg" width={48} height={38} alt='/'></Image>

                                    <div className={styles.userInfo}>
                                        <div className={styles.username}>
                                            <Text className={styles.statusTextName}>{username}</Text>
                                        </div>
                                        <div className={styles.status}>
                                            <IconStar size={16}></IconStar>
                                            <Text className={styles.statusText}>{status}</Text>
                                        </div>
                                    </div>

                                    <div className={styles.buttons}>
                                        <Button className={styles.userButton}>
                                            <IconMail className={styles.userImg} size={20}></IconMail>
                                        </Button>
                                        <Button className={styles.userButton}>
                                            <IconBell className={styles.userImg} size={20}></IconBell>
                                        </Button>
                                        <Button className={styles.menuButton}>
                                            <IconMenu2 className={styles.userImgMenu} size={24}></IconMenu2>
                                            <Text className={styles.menuText} fw={700}>Меню</Text>
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.loggedOut}>
                                    <Button className={styles.button} onClick={handleLogin}>
                                        <IconUser className={styles.iconUser}></IconUser>
                                        <span className={styles.text}>Войти</span>
                                    </Button>
                                    <Link href="/questionnaire">
                                        <Button className={styles.buttonApplication}>
                                            <IconPlus className={styles.plus}></IconPlus>
                                            <span className={styles.text}>Добавить анкету</span>
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.categories}>
                            <Button className={styles.categoriesBtn} onClick={handleToggle}>
                                <IconAlignLeft2 color='white' size={20}></IconAlignLeft2>
                                <Text fw={700} className={styles.categoriesText}>Все Категории</Text>
                            </Button>
                        </div>

                        <div className={styles.mainLinks}>
                            <div className={styles.linkContainer}>
                                <Link className={styles.linkItem} href="/elite">
                                    <IconStar size={16}></IconStar>
                                    <Text className={styles.linkText}>Элитные</Text>
                                </Link>
                            </div>

                            <div className={styles.linkContainer}>
                                <Link className={styles.linkItem} href={'/'}>
                                    <IconMoon className={styles.linkImg} size={16}></IconMoon>
                                    <Text className={styles.linkText}>Массажистки</Text>
                                </Link>
                            </div>

                            <div className={styles.linkContainer}>
                                <Link className={styles.linkItem} href={'/'}>
                                    <IconBolt size={16}></IconBolt>
                                    <Text className={styles.linkText}>Альтушки</Text>
                                </Link>
                            </div>

                            <div className={styles.linkContainer}>
                                <div className={styles.linkItem}>
                                    <Text className={styles.separator}>|</Text>
                                </div>
                            </div>

                            <div className={styles.linkContainer}>
                                <Link className={styles.linkItem} href={'/'}>
                                    <Text className={styles.linkText}>Салоны</Text>
                                </Link>
                            </div>

                            <div className={styles.linkContainer}>
                                <Link className={styles.linkItem} href={'/'}>
                                    <Text className={styles.linkText}>Индивидуалки</Text>
                                </Link>
                            </div>

                            <div className={styles.linkContainer}>
                                <Link className={styles.linkItem} href={'/'}>
                                    <Text className={styles.linkText}>Эскорт</Text>
                                </Link>
                            </div>

                            <div className={styles.linkContainer}>
                                <Link className={styles.linkItem} href={'/'}>
                                    <Text className={styles.linkText}>Студии массажа</Text>
                                </Link>
                            </div>

                        </div>

                    </div>
                </Container>
            </Box>
        </div>
    );
};

