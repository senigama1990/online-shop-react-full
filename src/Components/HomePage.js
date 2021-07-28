import React from 'react'
import FeatureProducts from './FeatureProducts'
import Header from './Header'
import UnderHeaderPart from './UnderHeaderPart'

function HomePage() {
    return (
        <div>
            <Header />
            <UnderHeaderPart />
            <FeatureProducts/>
        </div>
    )
}

export default HomePage
