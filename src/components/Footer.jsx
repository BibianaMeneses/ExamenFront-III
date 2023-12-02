const Footer = () => {
  return (
    <footer className="w-full py-0 ">
      <div>
        <div className="grid grid-cols-2 gap-4 mt-10 ">
          <div>
            <img src="/images/DH.png" 
            alt="DH-logo" 
            className="px-3 pt-1 py-1"
            />
          </div>
          <div className="flex object-right justify-end pt-10 px-2">
            <img
              src="/images/ico-facebook.png"
              alt="facebook-logo"
              className="bg-black h-10 px-3 pt-1 py-1"
            />
            <img
              src="/images/ico-instagram.png"
              alt="instagram-logo"
              className="bg-black h-10 px-3 pt-1 py-1"
            />
            <img
              src="/images/ico-tiktok.png"
              alt="tiktok-logo"
              className="bg-black h-10 px-1 pt-1 py-1"
            />
            <img
              src="/images/ico-whatsapp.png"
              alt="whatsapp-logo"
              className="bg-black h-10 px-1 pt-1 py-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
