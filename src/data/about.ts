export type AboutCopyBlock = {
  id: string;
  label: string;
  paragraphs: string[];
};

export const aboutSection = {
  title: "ABOUT",
  tedLabel: "TED",
  connectorLabel: "&",
  tedxLabel: "TEDx",
  copyBlocks: [
    {
      id: "ted",
      label: "TED",
      paragraphs: [
        "TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world.\n",
        "Began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues.\n",
        "TED produces original podcasts, video series, TED-Ed lessons, and TV programs, translated into more than 100 languages. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that aim to make the world more sustainable and just.",
        "TED is owned by a nonprofit, nonpartisan foundation. Our aim is to help create a future worth pursuing for all."
      ],
    },
    {
      id: "tedx",
      label: "TEDx",
      paragraphs: [
        "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection.",
        "These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).",
      ],
    },
  ] satisfies AboutCopyBlock[],
};
