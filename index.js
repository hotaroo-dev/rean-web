const questions = [
  {
    question: "01. តើ web application សិក្សាពីអ្វី? មានប្រយោជន៍ធ្វើអ្វី? ហើយវាខុសគ្នាដូចម្ដេចរវាង web dynamic client and dynamic server?",
    answer: "",
  },
  {
    question: "02. ចូរនិយាយពីដំណើរការ process របស់ web dynamic server?",
    answer: "",
  },
  {
    question: "03. អ្វីទៅជា web server? មានប្រយោជន៍ធ្វើអ្វី?",
    answer: "",
  },
  {
    question: "04. អ្វីទៅជា Database server? មានប្រយោជន៍ធ្វើអ្វី?",
    answer: "",
  },
  {
    question: "05. តើ PHP ជាអ្វី? មានប្រយោជន៍ធ្វើអ្វី? ប្រាប់ពី Software ដែលអាចឲ្យ Run PHP បាន។",
    answer: "",
  },
  {
    question: "06. ឲ្យទម្រង់ទូទៅក្នុងការ develop PHP Web Application។",
    answer: "",
  },
  {
    question: "07. ចូរប្រាប់ពីលក្ខណៈពិសេសរបស់ variable ក្នុង PHP?",
    answer: "",
  },
  {
    question: "08. តើ array ក្នុង PHP មានប៉ុន្មានប្រភេទ? អ្វីខ្លះ? លើកឧទាហរណ៍បញ្ជាក់។",
    answer: "",
  },
  {
    question: "09. ចូរប្រាប់ពីរបៀបបង្កើត function ដោយលើកឧទាហរណ៍បញ្ជាក់ផង។",
    answer: "",
  },
  {
    question: "10. ចូរប្រាប់ពីរបៀបបង្កើត class ដោយលើកឧទាហរណ៍បញ្ជាក់ផង។",
    answer: "",
  },
  {
    question: "11. ប្រាប់ពីរបៀបប្រើ function 'include' and 'include once' ដោយបង្ហាញពីភាពខុសគ្នារបស់វា។",
    answer: "",
  },
  {
    question: "12. ចូរប្រាប់របៀបរក្សាទិន្នន័យនៅលើ​ web ជាមួួយ cookies, session, file IO and database។ រួចបង្ហាញពីភាពខុសគ្នារបស់វា។",
    answer: "",
  },
  {
    question: "13. អ្វីទៅដែលហៅថា upload file? លើកឧទាហរណ៍ពីការ upload file។",
    answer: "",
  },
  {
    question: "14. សន្មតថាក្នុង folder មួួយមាន file picture ចំនួន n ។ ចូរសរសេរ​ code PHP ដើម្បីរៀប​ file ទាំងនេះឲ្យវាបង្ហាញលើ screen។",
    answer: "",
  },
  {
    question: "15. ចូរសរសេរ function ក្នុង php ដើម្បីអោយគេធានាបាន​ក្នុងការ upload file បានតែជាប្រភេទ file powerpoint ដែលមានទំហំ <= 10MB។",
    answer: "",
  },
];

const detailWrapper = document.getElementById("details-wrapper");
questions.forEach((q) => {
  const details = document.createElement("details");
  details.innerHTML = getDetail(q);
  detailWrapper.appendChild(details);
});

function getDetail(q) {
  return `
    <summary>
      ${q.question}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
          fill="currentColor"
        >
          <path
            d="M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z"
          /></svg
      ></span>
    </summary>
    <p lang="km">${q.anwser || "There's no anwser yet."}</p>
  `;
}
