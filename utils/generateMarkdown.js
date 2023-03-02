const licenseLink = require('./licenses');




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  data.licenseBadge = licenseLink[data.license];

  return `
  # ${data.title}
  ${data.licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credit)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Credits
  ${data.credit}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.email}
  ${data.username}
`;
}

module.exports = generateMarkdown;
