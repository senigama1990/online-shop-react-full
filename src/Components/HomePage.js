import React from 'react'
import PreLastPart from '../PreLastPart'
import FeatureProducts from './FeatureProducts'
import Header from './Header'
import Inspirational from './Inspirational'
import SignUpNewsLetter from './SignUpNewsLetter'
import UnderHeaderPart from './UnderHeaderPart'

function HomePage() {
    return (
        <div>
            <Header />
            <UnderHeaderPart />
            <FeatureProducts />
            <SignUpNewsLetter />
            <Inspirational />
            <PreLastPart/>
        </div>
    )
}

export default HomePage
