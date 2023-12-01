
const Footer = () => {
  return (
    <footer className="w-full py-0 ">
      <div >
        <div className="mt-16">
            <p className='bg-red-600 h-10 text-white text-center py-2'>Volver arriba</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-10 ">

          <div >
              <img src="/images/DH.png" alt='DH-logo' />
          </div>
          <div className="flex object-right justify-end pt-12 px-2">
              <img src="/images/ico-facebook.png" alt='facebook-logo' className="bg-black h-8 px-2" />
              <img src="/images/ico-instagram.png" alt='instagram-logo' className="bg-black  h-8 px-2"  />
              <img src="/images/ico-tiktok.png" alt='tiktok-logo' className="bg-black h-8 px-2" />
              <img src="/images/ico-whatsapp.png" alt='whatsapp-logo' className="bg-black h-8 px-2"/>
          </div>

        </div>

      </div>
      
    </footer>
    
  )
}

export default Footer

