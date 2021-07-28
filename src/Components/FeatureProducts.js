import React from 'react'
import VRglasses from '../imgs/vr.jpg'
import keyboard from '../imgs/keyboard.jpg'
import speaker from '../imgs/bluetooth_speaker-360x432.jpg'
import headphone from '../imgs/p_5-111-360x432.jpg'
import lens from '../imgs/l-360x432.jpg'

function FeatureProducts() {
    return (
        <div>
            <div className='featuredPartWrapper'>
                <h1>Featured Products</h1>
                <div className='featuredPartContent'>
                    <div className="featuredMainPart">
                        <div className='VRglassesWr'>
                            <div className='VRglasses'>
                                <div className='VRglassesSale sale'>
                                    <span>-4%</span>
                                </div>
                                <div className="VRglassesImage">
                                    <img src={VRglasses} alt="VRglasses" />
                                </div>
                                <div className='VRglassesPrice'>
                                    <p>Game Controller</p>
                                    <span>$390.00</span>
                                    <span>$375.00</span>
                                </div>
                            </div>
                        </div>
                        <div className='vrbox'>
                            <div className='vrtop'>
                                <div className='VRglassesSecond'>
                                    <div className='keyboard box'>
                                        <div className='keyboardSale sale'>
                                            <span>-4%</span>
                                        </div>
                                        <div className="keyboardImage">
                                            <img src={keyboard} alt="keyboard" />
                                        </div>
                                        <div className='keyboardPrice'>
                                            <p>Keyboard</p>
                                            <span>$390.00</span>
                                            <span>$375.00</span>
                                        </div>
                                    </div>
                                    <div className='speaker box'>
                                        <div className="speakerImage">
                                            <img src={speaker} alt="speaker" />
                                        </div>
                                        <div className='speakerPrice'>
                                            <p>Speakerr</p>
                                            <span>$80.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Vrthird'>
                                <div className='headphone box'>
                                    <div className="headphoneImage">
                                        <img src={headphone} alt="headphone" />
                                    </div>
                                    <div className='headphonePrice'>
                                        <p>Headphone</p>
                                        <span>$35.00</span>
                                    </div>
                                </div>
                                <div className='ultraLense box'>
                                    <div className="ultraLenseImage">
                                        <img src={lens} alt="lens" />
                                    </div>
                                    <div className='ultraLensePrice'>
                                        <p>Ultra Lense</p>
                                        <span>$630.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="featuredMainPart2">
                    <div className='blueTooth'>
                        <div className="blueToothImage"></div>
                        <div className='blueToothPrice'>
                            <p>Blurtooth</p>
                            <span>$90.00</span>
                        </div>
                    </div>
                    <div className='gadgetsCollection'>
                        <div className='gadgetsCollectionSale sale'>
                            <span>0%</span>
                        </div>
                        <div className="gadgetsCollectionImage"></div>
                        <div className='gadgetsCollectionPrice'>
                            <p>Gadgets Collection</p>
                            <span>$35.00 - $375.00</span>
                        </div>
                    </div>
                    <div className='hobbyistWatch'>
                        <div className="hobbyistWatchImage"></div>
                        <div className='hobbyistWatchPrice'>
                            <p>Hobbyist Watch</p>
                            <span>$160.00</span>
                        </div>
                    </div>
                    <div className='graphicsCArd'>
                        <div className="graphicsCArdImage"></div>
                        <div className='graphicsCArdPrice'>
                            <p>Graphics CArd</p>
                            <span>$180.00</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default FeatureProducts
