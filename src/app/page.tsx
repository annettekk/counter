import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  const res = await fetch("https://api.github.com/repos/annettekk/skeleton",  { next: { revalidate: 1 } })
  const data = await res.json()
  console.log(data)
  
  return (
    <main className={styles.main}>
      {data.stargazers_count}
    </main>
  )
}
