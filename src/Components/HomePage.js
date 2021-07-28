import React from 'react'
import FeatureProducts from './FeatureProducts'
import Header from './Header'
import SignUpNewsLetter from './SignUpNewsLetter'
import UnderHeaderPart from './UnderHeaderPart'

function HomePage() {
    return (
        <div>
            <Header />
            <UnderHeaderPart />
            <FeatureProducts />
            <SignUpNewsLetter/>
        </div>
    )
}

export default HomePage
