import Link from "next/link"

//getStaticProps
export const getStaticProps = async () => {

  const API_URL = "https://www.teki.ch/api/v2/pages/"
  const request = await fetch(API_URL)
  const data = await request.json()
  return{
    props:{
        data
    },
  }
}

//route
export default function Game({ data }) {
  return (
<div>
   {data.items.map((item, key) => (
   <div>
       <p>{item.title}</p>
       <p>{item.id}</p>...   </div>
   ))}
</div>

  )
}
