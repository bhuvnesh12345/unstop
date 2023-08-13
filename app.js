import ReactDOM from 'react-dom/client'
import { LuLayoutDashboard } from 'react-icons/lu'
import { IoPeopleSharp } from 'react-icons/io5'
import {MdOutlineLibraryAddCheck} from'react-icons/md'
import {MdOutlineAssessment} from 'react-icons/md'
import {LuStretchHorizontal} from 'react-icons/lu'
import {MdOutlineAttachment} from 'react-icons/md'
import {BsGlobe}  from 'react-icons/bs'
import {PiCalendarBlankBold} from 'react-icons/pi'
import {FiShoppingBag} from 'react-icons/fi'
import {PiDotsThreeOutlineVerticalFill} from 'react-icons/pi'
import {IoPhonePortraitSharp} from 'react-icons/io5'
import {SlCalender} from 'react-icons/sl'
import {ImAttachment} from 'react-icons/im'


//https://react-icons.github.io/react-icons/
//official website of react icons

const element=<h1>Hello d2c</h1>
console.log(element)
const AppLayout=()=>{
    return(
        <>
        <div class="app">
           
           <Menu />
           <T/>
        </div>
        

        </>
        
    )
}

const MenuAtMobile=()=>{
    return(
        <>
             <div id="mySidenav" class="sidenav">
                     <a href="javascript:void(0)" class="closebtn" onClick={()=>{
                          document.getElementById("mySidenav").style.width="0"
                     }}>&times;</a>
                     <a href="#">About</a>
                     <a href="#">Services</a>
                     <a href="#">Clients</a>
                      <a href="#">Contact</a>
             </div>
        </>
    )

}

const Menu=()=>{
    return (
        <>
        <div class="menuParent">
            <div class="menuChild">
                <center>
                <div class="D">
                    <span class="D-span"> <LuLayoutDashboard/></span>
                    <h6 class="d-h">Dashboard</h6>
                </div>

                <div class="A">
                    <div class="A-div1">
                       <span class="A-span"><MdOutlineAssessment/></span>
                       <h6 class="a-h">Assessment</h6>
                    </div>
                </div>

                <div class="M">
                    <span class="M-span"><MdOutlineLibraryAddCheck/></span>
                    <h6 class="m-h">Mylibrary</h6>
                </div>
                <br></br>
                <hr></hr>
                <div class="admin">
                     <small class="admin-small">Admin</small>
                </div>

                <div class="R">
                    <span class="R-span"><PiCalendarBlankBold/></span>
                    <h6>Round<br></br>Status</h6>
                </div>
                </center>
            </div>
        </div>
        </>
    
    )
}

const T=()=>{
    return(
       
        <>
    <div class="t">
        <div class="t1">
        <div class="header">
            <div class="header-1">
                <div class="header-1-1">
                   <h4>Assessment</h4>
                </div>
                <div class="header-1-2">
                   <h6>MyAssessment</h6>
                </div>
            </div>
            <div class="header-2">
                <h2><IoPhonePortraitSharp/></h2>
            </div>
            
        </div>

      




    
         <div class="assess-results">
            <h5>Assessment Overview</h5>
      <div class="result-parent">
        
        <div class="result">
          <div class="g1">
            <div class="result-item1">
                <h6>Total assessment</h6>
                <div class="total">
                <div class="total-item1">
                    <span><LuStretchHorizontal/></span>
                </div>
                <div class="total-item2">
                    <b class="bold1">34</b>
                </div>
                </div>
            </div>
          </div>
            

          <div class="g2">
            <div class="result-item2">
                 <h6>Candidates</h6>
                 <div class="can">
                       <div class="can-1">
                           <span><IoPeopleSharp/></span>
                       </div>
                       <div class="can-2">
                           <div>
                                <b class="bold1">11,145 </b>
                                <b class="bold2">+89</b>
                          </div>
                          <div>
                                <small>Total Candidate</small>
                          </div>
                     </div>
                     <div class="can-3">
                          <div>
                                <b class="bold1">1,14 </b>
                                <b class="bold2">+89</b>
                          </div>
                          <div>
                                <small>Who Attempted</small>
                          </div>
                    </div>
                </div>
            </div>
          </div>


          <div class="g3">
            <div class="result-item3">
                <h6>Candidates Source</h6>
                <div class="can-s">
                     <div class="can-s-1">
                            <span><BsGlobe/></span>
                     </div>

                     <div class="can-s-2">
                         <div>
                                <b class="bold1">11,000 </b>
                                <b class="bold2">+89</b>
                          </div>
                          <div>
                                <small>Email</small>
                          </div>
                     </div>
                     <div class="can-s-3">
                          <div>
                                <b class="bold1">145 </b>
                                <b class="bold2">+89</b>
                          </div>
                          <div>
                                <small>Social Share</small>
                          </div>
                     </div>
                     <div class="can-s-4">
                         <div>
                                <b class="bold1">145 </b>
                                <b class="bold2">+89</b>
                          </div>
                          <div>
                                <small>Unique Link</small>
                          </div>
                     </div>
                </div>
            </div>
        </div>


         <div class="g4">
            <div class="result-item4">
                <h6>Total Purpose</h6>
                <div class="tot-p">

                      <div class="tot-p-1">
                           <sapn><MdOutlineAttachment/></sapn>
                      </div>

                      <div class="tot-p-2">
                           <div>
                                <b class="bold1">11</b>  
                           </div>  
                      </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    
        </div>

        <br></br>
        <br></br>

        <h5>My Assessment</h5>
         <br></br>
        <div class="make">
          <NewAssessment/>
          <AssessmentCard/>
          <AssessmentCard/>
          </div>
          
          
      </div>
 </div>
        </>
    )
}

const AssessmentCard=()=>{
   return(
    <>
    <div class="parent">
       <div class="card-d">
           <div class="line-1">
              <div class="line-1-div1">
                  <span class="line-1-span1"><FiShoppingBag /></span>
              </div>
              <div>
                  <span class="line-1-span2"><PiDotsThreeOutlineVerticalFill/></span>
              </div>
           </div>
           <div class="line-2">
                <div class="line-2-1">
                    <h5>Math Assessment</h5>
                </div>
                <div class="line-2-2">
                    <div class="line-2-2-1">
                        <b>Job</b>
                    </div>
                    <div class="line-2-2-2">
                        <div>
                            <span className='line-2-2-2-span'><SlCalender/></span>
                        </div>
                        <div class="line-2-2-2-div2">
                            <small class="line-2-2-2-small">20 Apr 2023</small>
                        </div>
                    </div>
                </div>
           </div>

           <hr></hr>

           <div class="line-3">
              <div class="item-1">
                   <div class="item-1-1">
                         <b>00</b><br></br>
                        <small>Duration</small>
                   </div>
                   <div class="item-1-2">
                         <b>00</b><br></br>
                         <small>Questions</small>
                   </div>
              </div>
              <div class="item-2">

                  <div class="item-2-div1">
                     <span class="item-2-span1"><ImAttachment/>   </span>
                     <span class="item-2-span22"> Share</span>
                  </div>

                  <div class="item-2-div2">
                    <span class="item-2-span2">LP</span>
                  </div>  
              </div>
           </div>

       </div>
    </div>   
    </>
   )
}

const NewAssessment=()=>{
    return(
        <>
          <div class="Newparent">
            <div class="Newcard">
                   <div class="new-1">
                         <center><span class="new-1-span1">+</span></center>
                   </div>
                   <div class="new-2">
                         <h5 class="new-2-h">New Assessment</h5>
                   </div>
                   <div class="new-3">
                      <center><p class="new-3-p">From here you can add multiple questions likes MCQ, Subjective (Text or paragraph) !</p></center>
                   </div>
            </div>
          </div>
        </>
    )
}




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)