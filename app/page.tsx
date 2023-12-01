import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (

      <div className='body'>
        <h1>La Melkart En Chiffres</h1>
      <div className='container'>
         <div className='img1 img'>
         <Image
      src="/1.png"
      width={ 135.65}
      height={140}
      alt="Picture of the author"
    />
         </div>
         <div className='img2 img'>
         <Image
      src="/2.png"
      width={ 140.96}
      height={140}
      alt="Picture of the author"
    />
         </div>
         <div className='img3 img'>
         <Image
      src="/3.png"
      width={ 141.61}
      height={140}
      alt="Picture of the author"
    />
         </div>
         <div className='img4 img'>
         <Image
         src="/4.png"
     width={168.6}
     height={140}
      alt="Picture of the author"
    />
    </div>
    
    <div className='stat1'>+30</div>
       <div className='stat2'>+80%</div>
       <div className='stat3'>+50</div>
       <div className='stat4'>+60</div>
       <div className='ecriture1'>Projets</div>
       <div className='ecriture2'>Satisfaction</div>
       <div className='ecriture3'>Sponsors</div>
       <div className='ecriture4'>Melkartiens</div>
    
    </div>
    <div className='img5'><Image
         src="/5.png"
     width={1550}
     height={580}
      alt="Picture of the author"
    /> 
    <div> <h2>Nos Partenaires</h2></div>
    </div>
      <div className='container2'>
        <div className='part1'>
        <Image
       
         src="/melkart.png"
     width={430}
     height={430}
      alt="Picture of the author"
    /> 
    </div>
    <div className='part2'>
        <Image
       
         src="/appel.png"
     width={40}
     height={40}
      alt="Picture of the author"
    />+216 29 619 677 | +216 92 631 204
    </div>
    <div className='part3'>
        <Image
       
         src="/enveloppe.png"
     width={40}
     height={40}
      alt="Picture of the author"
    /> enicarthage.junior.entreprise@gmail.com
    </div>
    <div className='part4'>
        <Image
       
         src="/map.png"
     width={45}
     height={45}
      alt="Picture of the author"
    /> 45 Rue des Entrepreneurs 2035 Charguia II , 2035
    </div>
    <div className='part5'>
        <Image
       
         src="/lnk.png"
     width={50}
     height={50}
      alt="Picture of the author"
    /> 
    <Image
       
       src="/insta.png"
   width={50}
   height={50}
    alt="Picture of the author"
  /> 
   <Image
        
        src="/fb.png"
    width={50}
    height={50}
     alt="Picture of the author"
   /> 
    </div>
   


    </div>
    <div className='footer'>© Copyright 2023 Melkart Junior Entreprise All Rights Reserved.</div>
    </div>
   
         
      




    
  )
}
