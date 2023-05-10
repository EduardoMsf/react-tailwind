import { useState, useEffect } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"



function Home() {
  const [items, setitems] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then( data => setitems(data))
      
  }, [])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 justify-items-center w-full max-w-screen-lg">
        { items?.map( item => ( 
            <Card key={item.id} description={item.description} category={item.category.name} title={item.title} price={item.price} image={item.  images[0]} id={item.id}/>
          ))
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
