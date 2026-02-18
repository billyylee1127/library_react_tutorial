import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Highlights = () => {
  return (
    <section id="hightlights">
        <div className="container">
            <div className="row"> 
                <h2 className="section__title">Why choose <span className='purple'>Library</span>
                </h2>
                <div className="hightlight_wrapper">
                    <div className="hightlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="bolt" />                      
                        </div>
                        <h3 className="highlight__subtitle">Easy and Quick</h3>
                        <p className="hightlight__para">Get access to the book you purchased online instantly.
                        </p>
                    </div>
                    <div className="hightlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="book-open" />                      
                        </div>
                        <h3 className="highlight__subtitle">10,000+ Books</h3>
                        <p className="hightlight__para">Library has books in all your favorite categories.
                        </p>
                    </div>
                    <div className="hightlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="tags" />                      
                        </div>
                        <h3 className="highlight__subtitle">Affordable</h3>
                        <p className="hightlight__para">Get your hands on popular books for as little as $10.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights
