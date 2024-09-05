import Image from "next/image";
import styles from '@/styles/discription.module.scss';
import img3d from '@/public/images/dcchan-3d.webp';
import Link from "next/link";

export default function Discription( { title, subtitle, button }: { title: string, subtitle: string, button: string }) {
  return (
    <div className={styles.container}>
    <span className={styles.triangle}></span>
    <div className={styles.content}>

        <div className={styles.imageContainer}>
            <Image
            className={styles.image}
            src="/images/dcchan-with-friends.webp"
            width={600}
            height={600}
            alt="でじこんちゃん"
        />
        </div>

        <div className={styles.discriptionContainer}>
            <h1 className={styles.title}>{ title }</h1>
            <h2 className={styles.subtitle}>{ subtitle }</h2>
            <div className={styles.paraContainer}>

                <p className={styles.p}>
                    <em className={styles.em}>東京都市大学デジタルコンテンツ研究会</em> の公式キャラクターである。<br />
                    <strong>2014年</strong>に当時のイラスト班会員である&ldquo;<code>あいしろ</code>&ldquo;氏によってデザインされ、
                    無名のキャラとしてキャラクタ原案が公開。DTM班のCDのパッケージに飾られた。<br />
                </p>
                <p className={styles.p}>
                    <strong>2020年</strong>に&ldquo;<code>Garnet氏</code>&ldquo;と&ldquo;<code>ほし氏</code>&ldquo;によって3Dモデリングが行われ、<strong>2021年</strong>にヴァーチャルキャラクタとして公式キャラクタとしての位置を確立させた。
                    <strong>2022年</strong>に当時のボイスモデルであった&ldquo;<code>カップ焼きそば食べたい</code>&ldquo;を書類上副会長に任命することで、本格的にでじこんちゃんをキャラクタとしてPR。ボイスモデルを&ldquo;<code>Garnet氏</code>&ldquo;(ver1.0), &ldquo;<code>カップ焼きそば食べたい</code>&ldquo;(ver2.0), &ldquo;<code>聖乳くるみ</code>&ldquo;(ver3.0)が担当し、Xアカウントによる広報、グッズ化やアニメ化(キャラクタデザイン: <code>&ldquo;山下マナト&ldquo;</code>, <code>&ldquo;Shika&ldquo;</code>)などを行った。
                    なお、誕生日は<em className={styles.em}>2014年6月4日</em>と決定されたのもこの頃で、&ldquo;<code>Garnet</code>氏&ldquo;によると、「デジコンのロゴから由来している」という。
                </p>
                <p className={styles.p}>
                    現在もLINEスタンプや、作品の中に登場するなど、デジコンの象徴として活躍しており、会員から愛されている。
                </p>
            </div>
            
            <Link href="/talk">
                <button type="button" className={styles.button}>
                    <span className={styles.circle} aria-hidden="true">
                    <span className={`${styles.arrow} ${styles.icon}`}></span>
                    </span>
                    <span className={styles.buttonText}>{ button }</span>
                </button>
            </Link>
        </div>
    </div>
  </div>
  );
}