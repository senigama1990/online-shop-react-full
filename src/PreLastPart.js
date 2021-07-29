import React from 'react'
import { Link } from 'react-router-dom'
import preLast1 from './imgs/133850832_308705830501835_7838048382889998569_nlow.jpg'
import preLast2 from './imgs/133951534_159310758888661_2604966363783982993_nlow.jpg'
import preLast3 from './imgs/133707997_732658234328560_5386510884630991970_nlow.jpg'
import preLast4 from './imgs/133709733_149308713394133_3184643633541822646_nlow.jpg'
import preLast5 from './imgs/133741770_1318800921811678_4721521856182177142_nlow.jpg'
import preLast6 from './imgs/133712627_313849136542795_8040827235657705832_nlow.jpg'
import preLast7 from './imgs/133921053_714590119196386_1658219483417317801_nlow.jpg'
import preLast8 from './imgs/133516554_391509835474338_5315586887147902187_nlow.jpg'
import instagram from './imgs/instagram.png'

function PreLastPart() {
    return (
        <div className='preLastPartWrapper'>
            <img src={preLast1 } alt="" />
            <img src={preLast2} alt="" />
            <img src={preLast3} alt="" />
            <img src={preLast4 } alt="" />
            <img src={preLast5 } alt="" />
            <img src={preLast6} alt="" />
            <img src={preLast7} alt="" />
            <img src={preLast8 } alt="" />
            <div className='preLastPartInsta'>
                <Link to='#'>
                    <img src={instagram} alt="instagram" />
                    <span>instagram</span>
                </Link>
            </div>
        </div>
    )
}

export default PreLastPart
