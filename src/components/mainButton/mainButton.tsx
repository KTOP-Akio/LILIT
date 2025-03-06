import styles from './mainButton.module.css';
import { Button } from '@mantine/core';

interface MainButtonProps {
  buttonText: string;
}

const MainButton: React.FC<MainButtonProps> = ({ buttonText }) => {
  return (
    <div className={styles.buttonBox}>
        <Button className={styles.button}>
            {buttonText}
        </Button>
    </div>
  );
};

export default MainButton;