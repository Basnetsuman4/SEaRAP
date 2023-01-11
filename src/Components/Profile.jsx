import React from 'react'


const Profile =() => {
  return (
          <>
        
            <div className="header">
              <div className="greet">
                <div className="message">
                    <div className="greet_mgs">Hey, Arun!</div>
                    <div className="back">Welcome back, nice to meet you again.</div>    
                </div>
                <div className="profile-image">
                  <img id="img-profile" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j5kXSP12ylfgHx30qabxtDu0GAX1cm19TTaKZVA1hONj-t6MfsXechjGt6hyYoPBD4Y&usqp=CAU" alt="demo" rel="norefferer" />
                </div>
               </div> 
            </div>

            <div className="profile_info">
              <div className="infoContainer">
                <div className="infoTitle">
                      Personal Information:
                </div>
                <div className='dash_separator'>
                </div>                    
                <div className="informations">   
                    <div className="fullName">Full Name:</div>
                    <div className="contact">Contact:</div>
                    <div className="gender">Gender:</div>
                    <div className="dateOfBirth">Date Of Birth:</div>
                    <div className="address">Address</div>
                    <div className="bloodGroup">Blood Group:</div>    
                </div>
              </div>
            </div>
    </>
  )
}


export default Profile