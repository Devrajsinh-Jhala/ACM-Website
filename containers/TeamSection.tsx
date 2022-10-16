import React from "react";
import { FacultyCards } from "../components";
import { facultyMembers } from "../constants/TeamMembers";

const TeamSection = () => {
  return (
    <section className="text-white my-20">
      <div className="px-24">
        <h1 className="flex items-center justify-center font-bold text-3xl">
          Meet the Minds that make it happen!
        </h1>

        {/* Grid Section - Faculty */}
        <div className="flex items-center justify-center space-x-10 mt-8">
          {facultyMembers.map((facultyMember) => (
            <div className="">
              <div>
                <FacultyCards
                  name={facultyMember.name}
                  designation={facultyMember.designation}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
