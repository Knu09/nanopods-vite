import img1 from '../assets/airpods-3rd-generation.png'
import img2 from '../assets/airpods-pro.png'
import img3 from '../assets/airpod-max.png'

export const PRODUCTS = [
    {
        img: img1,
        name: 'AirPods',
        gen: '3rd Generation',
        price: '10,990',
        feature: [
            'Personalized Spatial Audio',
            'Sweate and water resistant',
            'Lightning Charging Case',
            'Up to 6 hours of listening time',
        ],
        isCurrent: true,
    },
    {
        img: img2,
        name: 'AirPods Pro',
        gen: '2nd Generation',
        price: '14,990',
        feature: [
            'Personalized Spatial Audio',
            'Dust, Sweaut and water resistant',
            'MagSafe Charging Case',
            'Up to 6 hours of listening time',
            'Active Noise Cancellation and Transparency mode',
            'Converstaion Awareness',
        ],
        isCurrent: false,
    },
    {
        img: img3,
        name: 'AirPods Max',
        gen: '',
        price: '32,990',
        feature: [
            'Personalized Spatial Audio',
            'Smart Case',
            'Up to 20 hours of listening time',
            'Adaptive Audio',
            'Active Noise Cancellation and Transparency mode',
        ],
        isCurrent: false,
    },
]
