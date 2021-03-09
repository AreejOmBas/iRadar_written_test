import React from "react";
import { ConditionCard } from "./component/ConditionCard";
import "./App.css";

const data = [
  {
    label: "Acanthosis nigricans",
    synonyms: ["Acquired acanthosis nigricans", "Keratosis nigricans"],
  },
  {
    snippet:
      "Addison’s disease (also known as primary adrenal insufficiency or hypoadrenalism) is a rare disorder of the adrenal glands.",
    label: "Addison's disease",
    synonyms: [
      "Addison disease",
      "Primary adrenocortical insufficiency",
      "Primary hypoadrenalism",
      "Adison's disease",
      "hypocorticism",
      "adrenal cortex dysplasia",
      "Bronzed disease",
      "adrenal cortex dysfunction",
      "adrenal cortex insufficiency",
      "Melasma addisonii",
      "Adrenal storm",
      "Primary adrenal deficiency",
      "Suppression adrenal",
      "Adrenal Suppresion",
      "adrenal insufficiency",
    ],
    keywords: [
      "addisons disease",
      "hypoadrenalism",
      "primary adrenal insufficiency",
    ],
  },
  {
    snippet:
      "Alzheimer's disease is the most common cause of dementia. Dementia is a group of symptoms associated with a decline in the way your brain functions, affecting your memory and the way you behave.",
    label: "Alzheimer's disease",
    synonyms: ["AD", "Alzheimer disease", "Alzheimers disease"],
    keywords: ["Alzheimer's disease", "dementia"],
    image:
      "https://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg",
  },
  {
    label: "Sickle cell anaemia",
    synonyms: ["Sickle", "sickle cell"],
  },
  {
    snippet:
      "Anorexia nervosa is an eating disorder and mental health condition that can be life-threatening.",
    label: "Anorexia nervosa",
    synonyms: ["appetite impaired", "appetite absent"],
    keywords: ["Anorexia nervosa", "eating disorder", "anorexic"],
    image:
      "https://s3-us-west-2.amazonaws.com/staging.gutenberg-output/article_images/anorexia-nervosa-female.jpg",
  },
  {
    snippet:
      "Appendicitis is a swollen appendix that gives severe increasing tummy pain. Treatment is urgent surgery",
    label: "Appendicitis",
    synonyms: ["Inflammed appendix"],
    keywords: ["appendicitis", "appendectomy"],
    image:
      "https://assets.your.md/conditions/appendicitis/card/appendicitis-male-card.jpg",
  },
  {
    snippet:
      "Arthritis is a common condition that causes pain and inflammation within a joint.",
    label: "Arthritis",
    synonyms: [
      "Joint inflammation",
      "Inflammatory arthritis",
      "Arthritus",
      "Arthiritis",
      "arthritides",
    ],
    keywords: [
      "arthritis",
      "arthritis and children",
      "osteoarthritis",
      "rheumatoid arthritis",
    ],
  },
];

function App() {
  const conditions = data.map((condition, index) => {
    return (
      <ConditionCard
        label={condition.label}
        snippet={condition.snippet ? condition.snippet : undefined}
        image={condition.image ? condition.image : undefined}
      />
    );
  });
  return <main className='cards-container'>{conditions}</main>;
}

export default App;
