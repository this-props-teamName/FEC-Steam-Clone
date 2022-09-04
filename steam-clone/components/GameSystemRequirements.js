import axios from 'axios'

const GameSystemRequirements = () => {
  axios.get('http://localhost:4000/api/min')
    .then(res => console.log(res.data[0]));

  axios.get('http://localhost:4000/api/req')
    .then(res => console.log(res.data[0]));

  return (
    <div className='relative text-[14px] text-[#acb2b8]'>GameSystemRequirements
      <div className='mt-[30px] overflow-hidden max-h-max font-sans'>
        <h2 className='text-[14px] uppercase text-[#fff] pt-[2px] tracking-[0.03em] leading-[26px] bg-[url("https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png")] bg-no-repeat bg-left-bottom'>System Requirements</h2>
        <div className='mt-[10px] text-[14px] text-[#acb2b8] font-sans'>
          <div className='block text-[12px] font-serif text-[#acb2b8]'>
            {/* left column (minimum system Requirements) */}
            <div className='float-left w-[300px] font-serif text-[12px] text-[#acb2b8]'>
              <ul className='leading-[18px] ml-0 list-none list-inside'>
                <strong className='font-sans font-normal text-[10px] text-[#bcc6cd] uppercase inline-block mr-[4px] leading-[18px] list-none list-inside'>Minimum:</strong>
                <br />
                <ul className='list-none ml-0 leading-[18px] list-inside text-[12px] font-serif text-[#acb2b8]'>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] text-[#acb2b8] font-serif'>
                    Requires a 64-bit processor and operating system
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] uppercase font-sans inline-block list-none leading-[18px]'>OS:</strong>
                    Windows 10
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Processor:</strong>
                    Intel Core i5-8400 OR AMD Ryzen 5 2600
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Memory:</strong>
                    8 GB RAM
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Graphics:</strong>
                    NVIDIA GeForce GTX 1070 or AMD RX Vega 56
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>DirectX:</strong>
                    Version 12
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Storage:</strong>
                    85 GB available space
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Additional Notes:</strong>
                    SDD(Preferred), HDD (Supported), 1080p/60 fps, Low Quality Settings, Upscale Performance Setting
                  </li>
                </ul>
              </ul>
            </div>
            {/* right column (recommended system Requirements) */}
            <div className='ml-[8px] float-left w-[300px] text-[12px] font-serif text-[#acb2b8]'>
              <ul className='list-none ml-0 leading-[18px] list-inside text-[12px] font-serif text-[#acb2b8]'>
                <strong className='font-sans font-normal text-[10px] text-[#bcc6cd] uppercase inline-block mr-[4px] leading-[18px] list-none list-inside'>Recommended:</strong>
                <br />
                <ul className='list-none ml-0 leading-[18px] list-inside text-[12px] font-serif text-[#acb2b8]'>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] '>Requires a 64-bit processor and operating system</li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] uppercase font-sans inline-block list-none leading-[18px]'>OS:</strong>
                    Windows 10
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Processor:</strong>
                    Intel Core i7-8700 OR AMD Ryzen 5 3600
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Memory:</strong>
                    16 GB RAM
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Graphics:</strong>
                    NVIDIA GeForce 1080 Ti or AMD RX 5700 XT
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>DirectX:</strong>
                    Version 12
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Storage:</strong>
                    85 GB available space
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Additional Notes:</strong>
                    SSD, 1080p/60 fps, High Quality Settings, Upscale Quality Setting
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameSystemRequirements