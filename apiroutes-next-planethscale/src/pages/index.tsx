import { GetStaticProps } from "next"
import { getUsers } from "../lib/users"

export default function Home({users}: any) {
  console.log(users)

  return (
   <h1>Hello world</h1>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers()
  return {
    props: {
      users
    },
    revalidate: 5
  }
}