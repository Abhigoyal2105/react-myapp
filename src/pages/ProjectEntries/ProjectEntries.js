import React from "react";
import EntriesContent from "../../components/EntriesContent/EntriesContent";
import "./ProjectEntries.css";

const entryData = [
  {
    value_1: "Client's Actual Age",
    value_2: "5 months",
    value_3: "",
  },
  {
    value_1: "Client's Perceived Age of Client (observed)",
    value_2: "54",
    value_3: "nill",
  },
  {
    value_1: "What is your height",
    value_2: "178",
    value_3: "178",
  },
  {
    value_1: "What is your height",
    value_2: "21",
    value_3: "nill",
  },
  {
    value_1: "How would you describe your gender?",
    value_2: "nill",
    value_3: null,
  },
];

function ProjectEntries() {
  return (
    <div className="projectEntries">
      {entryData?.length > 0 &&
        entryData?.map((entry, index) => (
          <EntriesContent
            key={index}
            value_1={entry?.value_1}
            value_2={entry?.value_2}
            value_3={entry?.value_3}
          />
        ))}
    </div>
  );
}

export default ProjectEntries;
