import Link from "next/link";
import styles from "./styles.module.css"; // Import your CSS file

export default function About() {
    return (
        <div className={styles.main}>
            <h1>About</h1>
            <p className={`${styles.centeredParagraph} ${styles.elementSpacing}`}>
                Hello, I'm Mithra, a passionate individual embarking on my journey in web development. Currently working on my very first Next.js project, I am enthusiastic about learning and building exciting things on the web. As I navigate through the world of coding, I'm eager to explore new technologies, overcome challenges, and ultimately contribute to the ever-evolving landscape of web development. Join me on this exciting journey, where curiosity meets code, and every line written is a step closer to turning ideas into reality.
            </p>
            <Link href="/" className={styles.elementSpacing}>
                Back to home
            </Link>
        </div>
    );
}
