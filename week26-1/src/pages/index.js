import Link from "next/link";

export default function Home() {
  return(
    <div>
      <h1>Next.js를 이용해서 SSR 실습해보기</h1>
      <Link href="/users">users로 바로가기</Link>
    </div>
  )
}