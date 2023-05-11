//LinkedIn Profile URL Validator.

let regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function validateLinkedInURL(url) {
  if (regex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

// test cases
validateLinkedInURL("https://www.linkedin.com/in/johndoe");
validateLinkedInURL("https://www.linkedin.com/in/john_doe#");
