import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Details = () => {
    const [details, getDetails] = useState();
    
    useEffect(() => {
        axios.get('http://localhost:4000/api/carousel')
        .then(res => getDetails(res.data[0]));
    }, []);


    if (details) {
        return (
            <div className="bg-black-rgba p-[16px] mb-[8px] mt-0 text-[#8f98a0] leading-[20px] block">
                <div className="block">
                    <div className="block">
                        <div className="block">
                            <b className="font-sans text-[#556772] font-normal uppercase text-[10px]">Title: &nbsp;</b>
                            {details.title}
                            <br/>
                            <b className="font-sans text-[#556772] font-normal uppercase text-[10px]">Genre: &nbsp;</b>
                            <span>
                                <a href="https://store.steampowered.com/genre/Action/?snr=1_5_9__408" className="font-serif font-[300] text-[#67c1f5] hover:text-[#fff]">{details.genres[0]}</a>
                                , &nbsp;
                                <a href="https://store.steampowered.com/genre/Adventure/?snr=1_5_9__408" className="font-serif font-[300] text-[#67c1f5] hover:text-[#fff]">{details.genres[1]}</a>
                                , &nbsp;
                                <a href="https://store.steampowered.com/genre/RPG/?snr=1_5_9__408" className="font-serif font-[300] text-[#67c1f5] hover:text-[#fff]">{details.genres[2]}</a>
                            </span>
                            <br/>
                            <div>
                                <b className="font-sans text-[#556772] font-normal uppercase text-[10px]">Developer: &nbsp;</b>
                                <a href="https://store.steampowered.com/developer/WBGames?snr=1_5_9__408" className="font-serif font-[300] text-[#67c1f5] hover:text-[#fff]">{details.developer}</a>
                            </div>
                            <div>
                                <b className="font-sans text-[#556772] font-normal uppercase text-[10px]">Publisher: &nbsp;</b>
                                <a href="https://store.steampowered.com/publisher/WBGames?snr=1_5_9__408" className="font-serif font-[300] text-[#67c1f5] hover:text-[#fff]">{details.publisher}</a>
                            </div>
                            <b className="font-sans text-[#556772] font-normal uppercase text-[10px]">Release Date: &nbsp;</b>
                            {details.release_date}
                            <br/>
                        </div>
                        {/* details block */}
                        <div className="pt-[14px] font-[300]">
                            <a className="min-h-[17px] pt-[4px] pl-[8px] pb-[4px] leading-[17px] bg-blue-rgba-2 text-[#67c1f5] rounded-[1px] flex mb-[2px] font-serif hover:text-[#fff] hover:bg-[#67c1f5]" href="https://steamcommunity.com/linkfilter/?url=https://www.hogwartslegacy.com/" target="blank" rel="noreferrer noopener">
                            Visit the website &nbsp;
                            <img src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif" className="max-h-[12px] max-h-[8px] pr-[4px] pb-0 border-none"/>
                            </a>
                            <a className="min-h-[17px] pt-[4px] pl-[8px] pb-[4px] leading-[17px] bg-blue-rgba-2 text-[#67c1f5] rounded-[1px] flex mb-[2px] font-serif hover:text-[#fff] hover:bg-[#67c1f5]" href="https://store.steampowered.com/newshub/?appids=990080&snr=1_5_9__408" target="blank" rel="noreferrer noopener">
                            View Update History
                            </a>
                            <a className="min-h-[17px] pt-[4px] pl-[8px] pb-[4px] leading-[17px] bg-blue-rgba-2 text-[#67c1f5] rounded-[1px] flex mb-[2px] font-serif hover:text-[#fff] hover:bg-[#67c1f5]" href="https://store.steampowered.com/newshub/app/990080?snr=1_5_9__408" target="blank" rel="noreferrer noopener">
                            Read Related News
                            </a>
                            <a className="min-h-[17px] pt-[4px] pl-[8px] pb-[4px] leading-[17px] bg-blue-rgba-2 text-[#67c1f5] rounded-[1px] flex mb-[2px] font-serif hover:text-[#fff] hover:bg-[#67c1f5]" href="https://steamcommunity.com/app/990080/discussions/" target="blank" rel="noreferrer noopener">
                            View discussions
                            </a>
                            <a className="min-h-[17px] pt-[4px] pl-[8px] pb-[4px] leading-[17px] bg-blue-rgba-2 text-[#67c1f5] rounded-[1px] flex mb-[2px] font-serif hover:text-[#fff] hover:bg-[#67c1f5]" href="https://steamcommunity.com/actions/Search?T=ClanAccount&K=Hogwarts%20Legacy" target="blank" rel="noreferrer noopener">
                            Find Community Groups
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Details