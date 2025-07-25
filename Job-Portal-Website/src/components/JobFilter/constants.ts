export const filterOptions = {
  companyType: ["Startup", "Foreign MNC", "Indian MNC", "Corporate", "Others"],
  location: [
    "New York",
    "Seattle",
    "Boston",
    "Los Angeles",
    "San Francisco",
    "Austin",
    "Mumbai",
    "Bangalore",
  ],
  industryType: [
    "Financial Services",
    "Information & Technology",
    "Hardware & Networking",
    "Marketing",
  ],
  salaryType: ["$0-$60,000", "$61,000-$99,000", "$1,00,000 & More"],
  experience: ["Fresher", "1-2 years", "3-5 years", "5+ years"],
};

export const experienceRangeMap = {
  Fresher: [0, 0],
  "1-2 years": [1, 2],
  "3-5 years": [3, 5],
  "5+ years": [6, Infinity],
};

export const salaryRangeMap = {
  "$0-$60,000": [0, 60000],
  "$61,000-$99,000": [61000, 99000],
  "$1,00,000 & More": [100000, Infinity],
};
