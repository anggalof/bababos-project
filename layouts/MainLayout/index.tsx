import Router, { useRouter } from 'next/router';
import Navbar from '../../components/common/Navbar';
import Type from './type';
import styles from './style.module.css';

export default function Layout(props: Type.Layout) { 
  const { asPath } = useRouter();
  return (
    <div className={styles.root}>
      {asPath !== '/login' && (
        <Navbar />
      )}
      {props.children}
    </div>
  )
}
