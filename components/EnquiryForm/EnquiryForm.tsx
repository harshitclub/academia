import React from 'react'
import './style.css'
import {RiUser3Fill, RiMailFill, RiPhoneFill, RiBookReadFill, RiUserLocationFill} from 'react-icons/ri'
import {HiLocationMarker} from 'react-icons/hi'

function EnquiryForm() {
  return (
    <form>
              <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
                <div className="inputsDiv width49 flex">
                    <RiUser3Fill className='enqInputIcon'/>
                  <input placeholder='Enter Your Name'/>
                </div>
                <div className="inputsDiv width49 flex">
                    <RiMailFill className='enqInputIcon'/>
                  <input placeholder='Enter Your Email'/>
                </div>
              </div>
              <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
                <div className="inputsDiv width49 flex">
                    <RiPhoneFill className='enqInputIcon'/>
                  <input placeholder='Contact Number'/>
                </div>
                <div className="inputsDiv width49 flex">
                    <RiBookReadFill className='enqInputIcon'/>
                  <select>
                    <option>Select Course</option>
                    <option>Campus To Corporate</option>
                    <option>Behavioral Skills</option>
                    <option>Business Communication</option>
                    <option>Data Analytics Using Excel</option>
                    <option>Data Analytics Using Power Bi</option>
                    <option>Tableau</option>
                    <option>MS Office Fundamentals</option>
                  </select>
                </div>
              </div>
              <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
                <div className="inputsDiv width49 flex">
                    <HiLocationMarker className='enqInputIcon'/>
                  <input placeholder='State'/>
                </div>
                <div className="inputsDiv width49 flex">
                    <RiUserLocationFill className='enqInputIcon'/>
                  <input placeholder='City'/>
                </div>
              </div>
              <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
                <div className="width100">
                  <textarea placeholder='Enter Your Address' rows={3}/>
                </div>
              </div>
              <div className="flex alignCenter justifyCenter spaceBtw">
                <div className="width100 marginBottom05">
                  <textarea placeholder='Any Message' rows={5}/>
                </div>
              </div>
              <button>Send Enquiry</button>
            </form>
  )
}

export default EnquiryForm