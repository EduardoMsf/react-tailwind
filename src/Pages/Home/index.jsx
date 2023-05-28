
import { useContext } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"



function Home() {
  
  const { items, setSearchByTitle, searchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    if( searchByTitle?.length > 0){
      if(filteredItems?.length > 0 ){
        
        return (
          filteredItems?.map(item => (
            <Card key={item.id} description={item.description} category={item.category.name} title={item.title} price={item.price} image={item.  images[0]} id={item.id}/>
          ))
        )
      } else {
        return ( <div>No hay productos con ese nombre </div> )
      }
    } else {
      return (
        items?.map( item => ( 
          <Card key={item.id} description={item.description} category={item.category.name} title={item.title} price={item.price} image={item.  images[0]} id={item.id}/>
        ))
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl mb-4">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product" 
        className="rounded-lg border border-black w-80 p-2 mb-6 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 justify-items-center w-full max-w-screen-lg">
        { renderView()
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
