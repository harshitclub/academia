import React from 'react'
import './style.css'
import { RiArrowRightLine, RiAwardFill, RiBarChart2Fill, RiLightbulbFlashFill, RiMedal2Fill } from 'react-icons/ri'

function LearnSection() {
  return (
    <section className="LearnSection flex width100 alignStart justifyCenter">
        <div className="LearnSContainer width95 maxWidth flex alignCenter justifyCenter spaceBtw">
            <div className="learnBox">
              <RiLightbulbFlashFill className='learnIcons'/>
              <h4>Discover</h4>
            </div>
            <div className="learnBox">
              <RiArrowRightLine className='learnIcons'/>
            </div>
            <div className="learnBox">
              <RiBarChart2Fill className='learnIcons'/>
              <h4>Transform</h4>
            </div>
            <div className="learnBox">
              <RiArrowRightLine className='learnIcons'/>
            </div>
            <div className="learnBox">
              <RiAwardFill className='learnIcons'/>
              <h4>Succeed</h4>
            </div>
            <div className="learnBox">
              <RiArrowRightLine className='learnIcons'/>
            </div>
            <div className='learnBox'>
              <RiMedal2Fill className='learnIcons'/>
              <h4>Inspire</h4>
            </div>
        </div>
    </section>
  )
}

export default LearnSection