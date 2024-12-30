import React from 'react'
import './Instructors.css'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'

const Instructors = () => {
    return (
        <div className='instructors'>
            <div className='head'>
                <h1 >Our Instructors</h1>

            </div>
            <div className='fir-Instructors'>
                <img src={image4} alt="" className='inst-img' />
                <div>
                    <h3 className='name'>Ravi Patel</h3>
                    <p>Sarah has been practicing yoga for over 12 years and is a certified Hatha yoga instructor.
                        She believes in creating a calm, focused environment where each student can explore their
                        body’s capabilities. Her classes are a balanced mix of posture work, breath control, and
                        mindfulness. Sarah emphasizes alignment and uses props to ensure that every student feels
                        supported in their practice. Whether you’re a beginner or experienced yogi, Sarah’s
                        classes will help you build strength, flexibility, and peace of mind.</p></div>
            </div>

            <div className='sec-Instructors'>
                
                <div>
                    <h3 >Sarah Lee</h3>
                    <p>Ravi’s dynamic teaching style infuses creative sequencing with energetic flows. His
                        classes are designed to challenge both the body and the mind, blending breath with
                        movement to create a powerful and invigorating practice. With a focus on building
                        strength, flexibility, and balance, Ravi ensures that students stay in tune with
                        their breath as they flow through each sequence. He encourages students to explore
                        their limits while maintaining a strong mind-body connection.</p></div>
                        <img src={image5} alt="" className='inst-img' />
            </div>

            <div className='thr-Instructors'>
                <img src={image6} alt="" className='inst-img' />
                <div>
                    <h3 className='name'>Lila Thompson</h3>
                    <p>Lila brings a calming, nurturing energy to her restorative and yin yoga classes. With a
                        background in mindfulness and therapeutic yoga, she focuses on deep relaxation and
                        long-held stretches that allow the body to release tension. Her soothing voice and
                        gentle guidance help students slow down, breathe deeply, and cultivate inner peace.
                        Lila's classes are perfect for those looking to de-stress, recover from physical
                        exertion, or simply enjoy a restful practice.</p>
                </div>

            </div>


        </div>
    )
}

export default Instructors
