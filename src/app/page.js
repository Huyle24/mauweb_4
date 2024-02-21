"use client"

import styles from "./page.module.scss";
import Carousels from "@/app/components/Carousels";

const ImageList = [
    {label: '', src: 'https://demo.nhanhtravel.com/upload/balotour/f09ac7dc76d53c4b0940d02b3268c00a.png', content: ' '},
    {label: '', src: 'https://demo.nhanhtravel.com/upload/balotour/f09ac7dc76d53c4b0940d02b3268c00a.png', content: ' '},
    {label: '', src: 'https://demo.nhanhtravel.com/upload/balotour/f09ac7dc76d53c4b0940d02b3268c00a.png', content: ' '},
    {label: '', src: 'https://demo.nhanhtravel.com/upload/balotour/f09ac7dc76d53c4b0940d02b3268c00a.png', content: ' '}

]
export default function Home() {

    return (
        <main className={styles.main}>
            <Carousels images={ImageList}/>
        </main>
    );
}
