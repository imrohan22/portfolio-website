import Image from "next/image";
import React from "react";

function Team({ ourTeamData }) {
  const loaderProp =({ src }) => {
    return src;
  }
  return (
    <>
    {/* // < !--Our Team section-- > */}
    <section className="pt-5 border-bottom our-team" id="teams">
      <div className="container px-5 my-5">
        <div className="row mb-5">
          <div className="col-lg-12 col-xl-12 text-center">
            <h2 className="fw-bolder display-2 text-uppercase">Our Team</h2>
          </div>
        </div>

        <div className="row gx-5 py-5 justify-content-center">
          {ourTeamData.map((team, index) =>
            <React.Fragment key={index}>
              <div className="col-lg-3 col-xl-3">
                <div className="card">
                  <div className="text-center">
                    <Image src={team.memberPhoto.url?team.memberPhoto.url:''} className="card-img-top team-img border-5 w-25 h-25 border-primary  rounded-circle"
                      alt="profile-pic" loader={loaderProp}/>
                  </div>
                  <div className="card-body d-flex align-items-center flex-column ">
                    <h4 className="card-text">{team.memberName}</h4>
                    <p className="card-text">{team.memberPosition}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
       
        </div>
      </div>
      <div className="section-divider height-half"></div>
    </section>
    <style jsx global>
       {
         `
         .team-img
         {
           width:130px !important;
           height:130px !important;
         }
       `
       }
     </style>
  
</>
  );
}

export default Team;
