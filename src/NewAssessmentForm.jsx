import React, { useContext, useState } from "react";
import "./SkillsContainer.css";
import { MyContext } from "./context/MyContext";

const NewAssessmentForm = () => {
  const [assessmentValue, setAssessmentValue] = useState("");
  const [purposeValue, setPurposeValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [skillName, setskillName] = useState("");
  const [skills, setSkills] = useState([]);
  const [datas, setDatas] = useState([]);
  const { assessmentDatas, setAssessmentDatas } = useContext(MyContext);

  const addSkill = () => {
    if (skillName.trim()) {
      setSkills([...skills, skillName.trim()]);
      setskillName("");
    }
  };

  const removeSkill = (indexToRemove) => {
    const updatedSkills = skills.filter((_, index) => index !== indexToRemove);
    setSkills(updatedSkills);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    // Simple validation: Check if all fields are populated
    if (
      !assessmentValue ||
      !purposeValue ||
      !descriptionValue ||
      skills.length === 0
    ) {
      alert("Please fill out all fields before submitting.");
      return; // Stop further execution if validation fails
    }
    console.log("submitted form");

    const newData = {
      assessment: assessmentValue,
      purpose: purposeValue,
      description: descriptionValue,
      duration: durationValue,
      skill: skills,
    };

    setDatas((prevDatas) => [...prevDatas, newData]);

    setAssessmentDatas((prev) => [...prev, datas]);

    // Clearing the form fields after submission
    setAssessmentValue("");
    setPurposeValue("");
    setDescriptionValue("");
    setDurationValue("");
    setskillName("");
    setSkills([]); // Clear skills if needed
    setDatas([]);
  };

  return (
    <div className="NewAssessmentForm">
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Create new assessment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* ... */}
              <form onSubmit={handleForm}>
                {/* Name of assessment */}
                <label
                  htmlFor="assessmentName"
                  className="form-label fw-semibold"
                >
                  Name of assessment
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    aria-label="AssessmentName"
                    id="assessmentName"
                    value={assessmentValue}
                    onChange={(e) => setAssessmentValue(e.target.value)}
                  />
                </div>
                {/* Purpose of the test is */}
                <label htmlFor="purpose" className="form-label fw-semibold">
                  Purpose of the test is
                </label>
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="purpose"
                    value={purposeValue}
                    onChange={(e) => setPurposeValue(e.target.value)}
                  >
                    <option selected>Select</option>
                    <option value="1">Job</option>
                    <option value="3">Internship</option>
                    <option value="2">Interview Preparation</option>
                  </select>
                </div>
                {/* Description */}
                <label htmlFor="description" className="form-label fw-semibold">
                  Description
                </label>
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="description"
                    value={descriptionValue}
                    onChange={(e) => setDescriptionValue(e.target.value)}
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                {/* Skills */}
                <label htmlFor="skills" className="form-label fw-semibold">
                  Skills
                </label>
                <div className="input-group mb-3">
                  {/* skill list */}
                  <div className="skills-container">
                    {skills.length > 0 &&
                      skills.map((skill, index) => (
                        <div key={index} className="skill">
                          {skill}
                          <span
                            className="skill-remove-btn"
                            onClick={() => removeSkill(index)}
                          >
                            ❌
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    onKeyPress={(e) => handleKeyPress(e)}
                    className="form-control"
                    placeholder="Type Here"
                    id="skills"
                    aria-label="skill"
                    value={skillName}
                    onChange={(e) => setskillName(e.target.value)}
                  />
                </div>
                {/* Duration of assessment */}
                <label htmlFor="duration" className="form-label fw-semibold">
                  Duration of assessment
                </label>
                <div className="input-group mb-3">
                  <input
                    type="time"
                    className="form-control"
                    placeholder="HH:MM:SS"
                    aria-label="duration"
                    id="duration"
                    value={durationValue}
                    onChange={(e) => setDurationValue(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary input-group mb3"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAssessmentForm;
