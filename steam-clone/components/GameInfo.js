import Link from 'next/link'
import RightColumn from './RightColumn'
import LeftColumn from './LeftColumn'

const GameInfo = () => {
  return (
    <div className='w-[940px] mx-auto my-0'>
      <RightColumn/>
      <LeftColumn/>
      GameInfo
    </div>
  )
}

export default GameInfo;