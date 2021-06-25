import Layout from '../components/layout'
import styles from '../styles/index.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <div>
          <Image src="/banner.png" width={566} height={276} />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id.</p>
        </div>
      </div>
    </Layout>
  )
}
