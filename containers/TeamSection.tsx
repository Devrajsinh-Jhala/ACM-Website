import React from "react";
import { FacultyCards } from "../components";
import {
  facultyMembers,
  officers,
  remainingOfficers,
  teamMembers,
} from "../constants/TeamMembers";

const TeamSection = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center my-20">
      <div className="px-24">
        <h1 className="flex items-center justify-center font-bold text-3xl">
          Meet the Minds that make it happen!
        </h1>

        {/* Section - Faculty */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          {facultyMembers.map((facultyMember) => (
            <div className="">
              <div>
                <FacultyCards
                  image={facultyMember.image}
                  name={facultyMember.name}
                  designation={facultyMember.designation}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Section - Officers */}

        <div className="flex flex-col items-center justify-center">
          <div className=" grid grid-cols-4 text-center mt-8 gap-3">
            {officers.map((officer) => (
              <div className="text-center">
                <FacultyCards
                  image={officer?.image}
                  name={officer.name}
                  designation={officer.designation}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 text-center gap-3 mt-4">
            {remainingOfficers.map((officer) => (
              <FacultyCards
                image={officer?.image}
                name={officer.name}
                designation={officer.designation}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-2xl my-5">Our Web Team</h1>
          <div className="flex items-center track space-x-6 justify-center">
            {teamMembers.map((teamMember) => (
              <div>
                <FacultyCards
                  image={teamMember?.image}
                  name={teamMember.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
