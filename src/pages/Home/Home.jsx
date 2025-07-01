import React from 'react'
import './Home.css'

const Home = () => {
  return (

    // home page
    <div className="home">
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. 
          Sign up to explore more about crypto.</p>
      <form>
        <input type="text" placeholder='search crypto...' />
        <button type="submit">Search</button>
      </form>
      </div>
      {/* section below the search  */}

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home