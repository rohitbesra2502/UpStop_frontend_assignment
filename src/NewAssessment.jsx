import React from "react";
import "./NewAssessment.css";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LinkIcon from "@mui/icons-material/Link";

const NewAssessment = () => {
  return (
    //  previous dummy code
    //  <div class="card">
    //    <div class="card-body">
    //      <div className="pt-4 mob_math_assessment">
    //          <div className="mob_bag_part">
    //            <span className="p-2 icon_bg">
    //              <BusinessCenterOutlinedIcon className=".text-primary" style={{color : "blue"}}/>
    //            </span>
    //          </div>
    //          <div className="pt-3 pb-2 mob_math_assessment_part">
    //            <h3 class="card-title">Math Assessment</h3>
    //            <div className="row d-fle align-items-center justify-content-center py-2 mob_job_date_part">
    //              <h4 class="col-sm-2 card-subtitle  text-body-secondary border-end pe-0">
    //                Job
    //              </h4>
    //              <h4 class="col-sm-10 card-subtitle text-body-secondary mb-0">
    //                20 Apr 2023
    //              </h4>
    //            </div>
    //          </div>
    //      </div>
    //      <div className="border-top  py-3">
    //        <div className="row mx-0 d-flex justify-content-center align-items-center">
    //          <div className="col-sm-3">
    //            <h4 className="mb-0">00</h4>
    //            <h4 className="mb-0">Duration</h4>
    //          </div>
    //          <div className="col-sm-4">
    //            <h4 className="mb-0">00</h4>
    //            <h4 className="mb-0">Questions</h4>
    //          </div>
    //          <div className="col-sm-3 p-1 d-flex align-items-center justify-content-center">

    //            <div className="share_rounded">
    //              <LinkIcon className="rotate_shareIcon" />
    //              <h6 className="mb-0">Share</h6>
    //            </div>

    //          </div>
    //          <div className="col-sm-2 align-items-center p-2">
    //            {/* <div>LP</div> */}
    //            <span className="user_one">LP</span>
    //          </div>
    //        </div>
    //      </div>
    //    </div>
    //  </div>

    //  new code by rb
    <div className="assessment_wrapper">
      <div className="assessment-left">
        <div className="math_assessment mb-3">
          <div className="assessment_icon icon_bg">
            <BusinessCenterOutlinedIcon />
          </div>
          <div className="assessment_job_date">
            <div className="math_asses_title">
              <h3>Math Assessment</h3>
            </div>
            <div className="job_date">
              <div className="border-end pe-3">
                <h4 >Job</h4>
              </div>
              <div>
                <h4>20 Apr 23</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="three_dots">

        </div>
      </div>
      {/* duration-part */}
      <div className="border-top  py-3">
           <div className="row mx-0 d-flex justify-content-center align-items-center">
             <div className="col-sm-3">
               <h4 className="mb-0">00</h4>
               <h4 className="mb-0">Duration</h4>
             </div>
             <div className="col-sm-4">
               <h4 className="mb-0">00</h4>
               <h4 className="mb-0">Questions</h4>
             </div>
             <div className="col-sm-3 p-1 d-flex align-items-center justify-content-center">

               <div className="share_rounded">
                 <LinkIcon className="rotate_shareIcon" />
                 <h6 className="mb-0">Share</h6>
               </div>

             </div>
             <div className="col-sm-2 align-items-center p-2">
               <span className="user_one">LP</span>
             </div>
           </div>
      </div>
    </div>
  );
};

export default NewAssessment;
