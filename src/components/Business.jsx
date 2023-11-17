import React from 'react'
import styles, { layout } from '../style'
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) =>(
  <div>
    <div>
      <img src={icon} alt="icon" />
    </div>
  </div>
    
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.section}>
      <h2 className={styles.heading2}>You do the business,<br className='sm:block hidden'/> we'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia, aliquam sed consequatur molestias placeat suscipit odit reprehenderit vitae ipsum alias 
        laudantium totam culpa, dolores tenetur ut. Dolore, ullam veniam.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business