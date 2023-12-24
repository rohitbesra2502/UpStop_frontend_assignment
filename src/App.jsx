import React, { useContext } from "react";
import "./App.css";
import NewAssessment from "./NewAssessment";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import NewAssessmentForm from "./NewAssessmentForm";

import { MyContext } from "./context/MyContext";

const App = () => {
  const { assessmentDatas } = useContext(MyContext);
  console.log(assessmentDatas);

  return (
    <>
      <div className="mianhero">
        <div className="d-flex justify-content-between align-items-center mobile_inliner">
          <div className="d-flex align-items-center">
            <a
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <AddCircleOutlineSharpIcon />
            </a>
            <h2>Assessment</h2>
          </div>
          <div className="">
            <AddCircleOutlineSharpIcon />
          </div>
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* hello */}

            <div className="left_part p-4">
              {/* dashboard */}
              <div className="dashboard p-3">
                <div className="dashboard_icon pb-2">
                  <DashboardOutlinedIcon style={{ color: "#4B527E" }} />
                </div>
                <h6 className="mb-0">Dashboard</h6>
              </div>

              {/* assessment */}
              <div className="assessment p-2">
                <div className="assessment_icon pb-2">
                  <NoteAltOutlinedIcon style={{ color: "#2189ff" }} />
                </div>
                <h6 className="mb-0">Assessment</h6>
              </div>

              {/* my Library */}
              <div className="Library p-3 mb-4">
                <div className="Library_icon pb-2">
                  <QuizOutlinedIcon style={{ color: "#4B527E" }} />
                </div>
                <h6 className="mb-0">My Library</h6>
              </div>
              {/* correction */}
              <div className="border-top round pb-3 w-100">
                <div className="py-3 mobile_admin_view">
                  <h6 className="mb-0 p-1 admin_btn"> Admin</h6>
                  <div className="round_status p-4">
                    <div className="round_status_icon">
                      <QuizOutlinedIcon style={{ color: "#4B527E" }} />
                    </div>

                    <h6 className="mb-0 p-1">Round Status</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* end */}
            <div className="dropdown mt-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-sm-1 ps-0 mobile_none">
            <div className="left_part p-4">
              {/* dashboard */}
              <div className="dashboard p-3">
                <div className="dashboard_icon pb-2">
                  <DashboardOutlinedIcon style={{ color: "#4B527E" }} />
                </div>
                <h6 className="mb-0">Dashboard</h6>
              </div>

              {/* assessment */}
              <div className="assessment p-2">
                <div className="assessment_icon pb-2">
                  <NoteAltOutlinedIcon style={{ color: "#2189ff" }} />
                </div>
                <h6 className="mb-0">Assessment</h6>
              </div>

              {/* my Library */}
              <div className="Library p-3 mb-4">
                <div className="Library_icon pb-2">
                  <QuizOutlinedIcon style={{ color: "#4B527E" }} />
                </div>
                <h6 className="mb-0">My Library</h6>
              </div>
              {/* correction */}
              <div className="border-top round pb-3">
                <div className="py-3 d-flex flex-column align-items-center justify-content-center">
                  <h6 className="mb-0 p-1 admin_btn"> Admin</h6>
                  <div className="round_status p-4">
                    <div>
                      <QuizOutlinedIcon style={{ color: "#4B527E" }} />
                    </div>
                    <h6 className="mb-0 p-1">Round Status</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-11">
            <div className="right_part">
              <div className="top_header">
                <header className="border-bottom inliner px-4">
                  <div className="inliner">
                    <div className="heading_page px-4">
                      <h5 className="mb-0">Assessment</h5>
                    </div>
                    <div className="p-4 my_asmt_div">
                      <h4 className="mb-0 my_asmt ">My Assessments</h4>
                    </div>
                  </div>
                  <div className="mobile_view p-2 icon_bg">
                    <StayPrimaryPortraitIcon style={{ color: "#4B527E" }} />
                  </div>
                </header>
              </div>
              {/* Assessment Overview */}
              <div className="main_heading pt-2 ">
                <div className="px-5 Overview_assessment">
                  <h6 className="mb-0 p-3 ps-0 head_overview">
                    Assessments Overview
                  </h6>
                  <div className="row mx-0 border rounded">
                    {/* Total Assessment */}
                    <div className="col-sm-2 border-end border-inliner">
                      <div className="p-3 border-right">
                        <div>
                          <h4 className="mb-0 py-2">Total Assessment</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="p-2 mb-0 icon_bg">
                            <ViewAgendaOutlinedIcon style={{ color: "blue" }} />
                          </div>
                          <h3 className="mb-0 ps-2">34</h3>
                        </div>
                      </div>
                      <div class="total-purpose total_purpose_mobile">
                        <h4 class="mb-0 py-2">Total Purpose</h4>
                        <div class="d-flex align-items-center justify-content-start">
                          <div class="p-2 mb-0">
                            <LinkOutlinedIcon style={{ color: "#2189ff" }} />
                          </div>
                          <h3 class="mb-0 ">11</h3>
                        </div>
                      </div>
                    </div>
                    {/* Candidates */}
                    <div className="col-sm-3 p-3 border-end">
                      <h4 className="py-2 mb-0">Candidates</h4>
                      <div className="row mx-0">
                        <div className="col-sm-6 px-0 border-end col-6">
                          <div className="d-flex align-items-center ">
                            {/* candidates-icon */}
                            <div className="mb-0 p-2 icon_bg">
                              <GroupOutlinedIcon style={{ color: "blue" }} />
                            </div>
                            {/* total candidates */}
                            <div className="ps-3">
                              <h3 className="d-flex mb-0 align-items-center">
                                11,145
                                <span className="cnt ps-1">+89</span>
                              </h3>
                              <h6 className="mb-0">Total Candidate</h6>
                            </div>
                          </div>
                        </div>
                        {/* who attempted */}
                        <div className="px-3 col-sm-6 col-6">
                          <h3 className=" d-flex align-items-center mb-0">
                            1,14
                            <span className="cnt ps-1">+89</span>
                          </h3>
                          <h6 className="mb-0">Who Attamped</h6>
                        </div>
                      </div>
                    </div>
                    {/* Candidates Source */}
                    <div className="col-sm-5 p-3 border-end">
                      <h4 className="py-2 mb-0">Candidates Source</h4>
                      <div className="row mx-0">
                        {/* E-mail */}
                        <div className="col-sm-4 col-4 px-0 border-end d-flex">
                          <div className="d-flex align-items-center ">
                            {/* candidates-src_icon */}
                            <div
                              className="mb-0 p-2"
                              style={{
                                backgroundColor: "#FFEFE8",
                                borderRadius: "0.5rem",
                              }}
                            >
                              <LanguageOutlinedIcon style={{ color: "red" }} />
                            </div>
                            {/* total candidates */}
                            <div className="total_candidates_box ps-3">
                              <h3 className="d-flex mb-0 align-items-center">
                                11,000
                                <span className="cnt ps-1">+89</span>
                              </h3>
                              <h6 className="mb-0">E-mail</h6>
                            </div>
                          </div>
                        </div>
                        {/* social share */}
                        <div className="col-sm-4 col-4 ps-4 border-end">
                          <h3 className="d-flex mb-0 align-items-center">
                            145
                            <span className="cnt ps-1">+89</span>
                          </h3>
                          <h6 className="mb-0">Social Share</h6>
                        </div>
                        {/* unique link */}
                        <div className="col-sm-4 col-4 ps-4">
                          <h3 className="d-flex mb-0 align-items-center">
                            145
                            <span className="cnt ps-1">+89</span>
                          </h3>
                          <h6 className="mb-0 total_candidate_p">
                            Unique Link
                          </h6>
                        </div>
                      </div>
                    </div>
                    {/* Total Purpose */}
                    <div className="col-sm-2 p-3 hidden_mobile">
                      <div className="total-purpose ">
                        <h4 className="mb-0 py-2">Total Purpose</h4>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="p-2 mb-0">
                            <LinkOutlinedIcon style={{ color: "#2189ff" }} />
                          </div>
                          <h3 className="mb-0 ">11</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Assessment */}
              <div className="row mx-0 pt-2 px-5">
                <div className="col-12">
                  <h6 className="mb-0 p-3 ps-0 head_overview">My Assessment</h6>
                </div>

                <div className="col-sm-4">
                  <div className="card dash_border">
                    <div className="card-body icon_addition">
                      <div className="add_assessement_icon p-3">
                        <AddCircleOutlineSharpIcon
                          style={{
                            backgroundColor: "#ffff",
                            width: "5rem",
                            height: "5rem",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <h4 className="mb-0 py-2">New Assesssment</h4>
                      <h6 className="mb-0 py-2">
                        From here you can add questions of multiple types like
                        MCQs, subjective (text or paragraph)!
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 ">
                  <NewAssessment />
                </div>

                <div className="col-sm-4 ">
                  <NewAssessment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
