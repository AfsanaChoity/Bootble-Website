import Heading from '@/UI/Heading'
import Paragraph from '@/UI/Paragraph'
import React from 'react'

const terms= [
    'We specialize in authentic collectible items, including Pokémon sealed products, sports card singles, and licensed sportswear. Product availability and descriptions are subject to change without notice.',
    'We strive to provide accurate product images and details.',
    'All product sales are subject to stock availability.',
    'We reserve the right to limit quantities or cancel orders at our discretion.'
]

export default function TermsConditionsPage() {
  return (
    <div className='space-y-6'>
        {/* Heading */}
        <div>
            <Heading text="Terms & Conditions"/>
        </div>

        {/* text */}
        <div>
            <Paragraph text='Welcome to [Your Store Name]! By accessing or using our website (the "Site"), you agree to be bound by the following Terms and Conditions. Please read them carefully.'/>

        </div>

        {/* lists */}
        <div className='space-y-4'>
            {/* title */}
            <div>
                <Heading text="1. General"/>
            </div>

            {/* list */}

            <div>
                <ul className='list-disc pl-4.5 space-y-3'>
                    {
                        terms.map((term, index) => {
                            return (
                                <li key={index}>
                                    <Paragraph text={term}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
