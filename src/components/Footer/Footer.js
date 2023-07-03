import React from 'react';
import { Container, Section } from '../Common';
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconPhoneCall,
} from '@tabler/icons-react';
import styles from './Styles.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <Section>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerWrap}>
            <div className={styles.footerMeta}>
              <Link href="/" className={styles.footerLogo}>
                <svg className={styles.footerIcon}>
                  <use href="/images/sprite.svg#icon-logo" />
                </svg>
              </Link>
              <p className={styles.footerText}>
                Приношу біль для вашого задоволення
              </p>
            </div>

            <ul className={styles.socials}>
              <a href="https://www.instagram.com/">
                <li className={styles.socialsItem}>
                  <IconBrandInstagram />
                </li>
              </a>
              <a href="https://www.facebook.com/">
                <li className={styles.socialsItem}>
                  <IconBrandFacebook />
                </li>
              </a>
              <a href="tel:+577807595">
                <li className={styles.socialsItem}>
                  <IconPhoneCall />
                </li>
              </a>
            </ul>
          </div>
        </Container>
      </footer>
    </Section>
  );
};

export default Footer;
