import React from 'react'

const GameRelevance = () => {
  return (
    <div className="text-[#acb2b8] text-[14px] leading-[22px] p-[16px] mb-[8px] mt-0 bg-black-rgba">
        <p>
            Sign in to see reasons why you may or may not like this based on your games, friends, and curators you follow.
        </p>
        <br/>
        <a className="rounded-[2px] pt-0 pb-0 pl-[15px] pr-[15px] text-[15px] leading-[30px] bg-blue-rgba mb-[4px] border-none p-[1px] inline-block cursor-pointer no-underline text-[#67c1f5] hover:bg-[#67c1f5] hover:text-[#fff]" href="https://store.steampowered.com/login/?redir=app/990080">
            <span>Sign In</span>
        </a>
        &nbsp; or &nbsp;
        <a className="rounded-[2px] pt-0 pb-0 pl-[15px] pr-[15px] text-[15px] leading-[30px] bg-blue-rgba mb-[4px] border-none p-[1px] inline-block cursor-pointer no-underline text-[#67c1f5] hover:bg-[#67c1f5] hover:text-[#fff]" href="https://store.steampowered.com/login/?redir=app/990080">
            <span>Open in Steam</span>
        </a>
    </div>
  )
}

export default GameRelevance