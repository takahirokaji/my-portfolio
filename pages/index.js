import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AppButton } from "../components/atom/AppButton";
import { AppCard } from "../components/atom/AppCard";
import { AppHeader } from "../components/atom/AppHeader";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kaji&apos;s portfolio</title>
        <meta name="description" content="portfolio made by kaji takahiro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader></AppHeader>
      <main className={styles.main}>
        <AppButton />
        <AppCard></AppCard>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>Well never share your email.</FormHelperText>
        </FormControl>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/takahirokaji"
          target="_blank"
          rel="noopener noreferrer author"
        >
          梶 貴広のgit hub
          <span className={styles.logo}>
            <Image
              src="/github-icon.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
