
import { useEffect, useState, useRef, FormEvent } from 'react';
import './App.scss';


interface ProductProps {
  id: string;
  name: string
  price: number
  oldPrice: number
  image: string
}

function App() {

  const [data, setData] = useState<ProductProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/shoes.json')
      .then(response => response.json())
      .then(setData)

  }, [])

  const carousel = useRef<any>(null)

  if (!data || !data.length) return null

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current?.offsetWidth
  }

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current?.offsetWidth
  }

  return (
    <div className="container">
      <div className='logo'>
        <img src="/images/super-shoes.png" alt="Logo shoes" className='img' />
      </div>
      <div className='carousel' ref={carousel}>

        {data.map(item => {
          return (
            <div className='item' key={item.id}>

              <div className='image'>
                <img src={item.image} alt={item.name} />
              </div>

              <div className='info'>
                <span className='name'>{item.name}</span>
                <span className='oldPrice'>USD{item.oldPrice}</span>
                <span className='price'>USD{item.price}</span>
              </div>

            </div>
          )
        })}

      </div>
      <div className='buttons'>
        <button
          onClick={handleLeftClick}
          className="left">
          <img src="/images/arrow.png" alt="left arrow" />
        </button>
        <button
          onClick={handleRightClick}
          className="right">
          <img src="/images/arrow.png" alt="Right arrow" />
        </button>
      </div>

    </div>
  );
}

export default App;
