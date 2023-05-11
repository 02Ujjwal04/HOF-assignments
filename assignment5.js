//URL validation.

let url = "https://www.example.com";
let regex = /^(https?:\/\/)[\w\d\S]+(\.[\w]+)+$/i;

if (regex.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
