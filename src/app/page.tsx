import kv from "@vercel/kv"
import styles from './page.module.css'

export default async function Home() {
  const res = await fetch("https://api.github.com/repos/annettekk/skeleton",  { next: { revalidate: 1 } })
  const data = await res.json()
  console.log(data)
  //Tim is The Best!
  const pageViews = await kv.incr("views")
  return (
    <main className={styles.main}>
      <p>{pageViews}</p>
      {data.stargazers_count}
    </main>
  )
}
