import React from 'react'
import VRglasses from '../imgs/vr.jpg'
import keyboard from '../imgs/keyboard.jpg'
import speaker from '../imgs/bluetooth_speaker-360x432.jpg'
import headphone from '../imgs/p_5-111-360x432.jpg'
import lens from '../imgs/l-360x432.jpg'
import blutoothSpeaker from '../imgs/electronics_2-360x432.jpg'
import gadgetsCollection from '../imgs/p_11-360x432.jpg'
import smartWatch from '../imgs/p_4-1-360x432.jpg'
import graphicCard from '../imgs/card-360x432.jpg'

function FeatureProducts() {
    return (
        <div>
            <div className='featuredPartWrapper'>
                <h1>Featured Products</h1>
                <div className='featuredBox'>
                    <div className='featuredBoxLeft'>
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
                    <div className="featuredBoxRight">                        
                        <div className='featuredBoxRighttop'>
                            <div className='keyboard box'>
                                <div className='keyboardSale sale'>
                                    <span>-4%</span>
                                </div>
                                <div className="keyboardImage">
                                    <img src={keyboard} alt="keyboard" />
                                </div>
                                <div className='keyboardPrice price'>
                                    <p>Keyboard</p>
                                    <span className='keySale'>$390.00</span>
                                    <span>$375.00</span>
                                </div>
                            </div>

                            <div className='speaker box'>
                                <div className="speakerImage">
                                    <img src={speaker} alt="speaker" />
                                </div>
                                <div className='speakerPrice price'>
                                    <p>Speakerr</p>
                                    <span>$80.00</span>
                                </div>
                            </div>
                        </div>

                        <div className='featuredBoxRightBottom'>
                            <div className='headphone box'>
                                <div className="headphoneImage">
                                    <img src={headphone} alt="headphone" />
                                </div>
                                <div className='headphonePrice price'>
                                    <p>Headphone</p>
                                    <span>$35.00</span>
                                </div>
                            </div>

                            <div className='ultraLense box'>
                                <div className="ultraLenseImage">
                                    <img src={lens} alt="lens" />
                                </div>
                                <div className='ultraLensePrice price'>
                                    <p>Ultra Lense</p>
                                    <span>$630.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                
                <div className="featuredMainPart2">
                    <div className='blueTooth box2'>
                        <div className="blueToothImage">
                            <img src={blutoothSpeaker} alt="blutoothSpeaker" />
                        </div>
                        <div className='blueToothPrice price2'>
                            <p>Blurtooth</p>
                            <span>$90.00</span>
                        </div>
                    </div>
                    <div className='gadgetsCollection box2'>
                        <div className='gadgetsCollectionSale sale'>
                            <span>0%</span>
                        </div>
                        <div className="gadgetsCollectionImage">
                            <img src={gadgetsCollection} alt="gadgetsCollection" />
                        </div>
                        <div className='gadgetsCollectionPrice price2'>
                            <p>Gadgets Collection</p>
                            <span>$35.00 - $375.00</span>
                        </div>
                    </div>
                    <div className='hobbyistWatch box2'>
                        <div className="hobbyistWatchImage">
                            <img src={smartWatch} alt="smartWatch" />
                        </div>
                        <div className='hobbyistWatchPrice price2'>
                            <p>Hobbyist Watch</p>
                            <span>$160.00</span>
                        </div>
                    </div>
                    <div className='graphicsCArd box2'>
                        <div className="graphicsCArdImage">
                            <img src={graphicCard} alt="graphicCard" />
                        </div>
                        <div className='graphicsCArdPrice price2'>
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
