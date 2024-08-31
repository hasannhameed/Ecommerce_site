import React, { Fragment } from 'react'
import "./Store.css"
const Store = () => {
  return (
    <Fragment>
      <div className='store'>
        <h1>The Generics</h1>
      </div>
                  <h1>MUSIC</h1>
                <div className='music-container'>
                <section className='music-section'>
                  <div className='img-class'>
                    <h2 className='album-title'>Album 1</h2>
                    <img src="https://www.bing.com/images/blob?bcid=SxO-NavqD3MHKgDZY3rx4MBRPBTI.....0w" alt="" />
                    <div className='button-div'>
                      <p>$2.99</p>
                      <button>Add item</button>
                    </div>
                  </div>
                  <div className='img-class'>
                    <h2 className='album-title'>Album 2</h2>
                    <img src="https://www.bing.com/images/blob?bcid=SykmZ8CSYHMHKgDZY3rx4MBRPBTI.....-c" alt="" />
                    <div className='button-div'>
                      <p>$2.99</p>
                      <button >Add item</button>
                    </div>
                  </div>
                </section>
              </div>
              <div className='music-container'>
                <section className='music-section'>
                  <div className='img-class'>
                    <h2 className='album-title'>Album 3</h2>
                    <img src="https://www.bing.com/images/blob?bcid=S7AAKr8CLHMHKgDZY3rx4MBRPBTI.....7Y" alt="" />
                    <div className='button-div'>
                      <p>$2.99</p>
                      <button>Add item</button>
                    </div>
                  </div>
                  <div className='img-class'>
                    <h2 className='album-title'>Album 4</h2>
                    <img src="https://www.bing.com/images/blob?bcid=S-U.L4jHynMHKgDZY3rx4MBRPBTI.....04" alt="" />
                    <div className='button-div'>
                      <p>$2.99</p>
                      <button>Add item</button>
                    </div>
                  </div>
                </section>
              </div>
              <h1>MERCH</h1>
              <div className='music-container'>
                <section className='music-section'>
                  <div className='img-class'>
                    <h2 className='album-title'>Album 5</h2>
                    <img src="https://www.bing.com/images/blob?bcid=S9iWqY.r43MHKgDZY3rx4MBRPBTI.....3s" alt="" />
                    <div className='button-div'>
                      <p>$2.99</p>
                      <button>Add item</button>
                    </div>
                  </div>
                  <div className='img-class'>
                    <h2 className='album-title'>Album 6</h2>
                    <img src="https://www.bing.com/images/blob?bcid=S1ZjPNNrhnMHKgDZY3rx4MBRPBTI.....6s" alt="" />
                    <div className='button-div'>
                      <p>$2.99</p>
                      <button>Add item</button>
                    </div>
                  </div>
                </section>
              </div>
    </Fragment>
  )
}

export default Store
