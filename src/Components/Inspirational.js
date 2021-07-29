import React from 'react'
import insImg1 from '../imgs/blog-10-2-465x290.jpg'
import insImg2 from '../imgs/blog-10-1-465x290.jpg'
import insImg3 from '../imgs/blog-j-465x290.jpg'


function Inspirational() {
    return (
        <div className='inspirationalWrapper'>
            <h2>Inspirational Posts</h2>            
            <div className='inspirationalBox'>
                <ul>
                    <li className='inspirationalList'>
                        <div className='inspirationalImg'>
                            <img src={insImg1} alt="insImg1" />
                            <div className='inspirationalMark'>
                                <span>23</span>
                                <span>Dec</span>
                            </div>
                        </div>
                        <p>Fashion, Modern</p>
                        <h3>The City of London wants To Have</h3>
                    </li>

                    <li className='inspirationalList'>
                        <div className='inspirationalImg'>
                            <img src={insImg2} alt="insImg2" />
                            <div className='inspirationalMark'>
                                <span>23</span>
                                <span>Dec</span>
                            </div>
                        </div>
                        <p>Fashion, Modern</p>
                        <h3>The City of London wants To Have</h3>
                    </li>

                    <li className='inspirationalList'>
                        <div className='inspirationalImg'>
                            <img src={insImg3} alt="insImg3" />
                            <div className='inspirationalMark'>
                                <span>23</span>
                                <span>Dec</span>
                            </div>
                        </div>
                        <p>Fashion, Modern</p>
                        <h3>The City of London wants To Have<br/>Brexit Cake available</h3>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Inspirational
