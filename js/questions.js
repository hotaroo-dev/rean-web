const questions = [
  {
    question:
      "01. តើ Web Application សិក្សាពីអ្វី? មានប្រយោជន៍ធ្វើអ្វី? ហើយវាខុសគ្នាដូចម្ដេចរវាង Web Dynamic Client and Dynamic Server?",
    answer: [],
  },
  {
    question: "02. ចូរនិយាយពីដំណើរការ process របស់ Web Dynamic Server?",
    answer: [],
  },
  {
    question: "03. អ្វីទៅជា Web Server? មានប្រយោជន៍ធ្វើអ្វី?",
    answer: [],
  },
  {
    question: "04. អ្វីទៅជា Database Server? មានប្រយោជន៍ធ្វើអ្វី?",
    answer: [],
  },
  {
    question:
      "05. តើ PHP ជាអ្វី? មានប្រយោជន៍ធ្វើអ្វី? ប្រាប់ពី Software ដែលអាចឲ្យ run PHP បាន។",
    answer: [],
  },
  {
    question: "06. ឲ្យទម្រង់ទូទៅក្នុងការ Develop PHP Web Application។",
    answer: [],
  },
  {
    question: "07. ចូរប្រាប់ពីលក្ខណៈពិសេសរបស់ Variable ក្នុង PHP?",
    answer: [],
  },
  {
    question:
      "08. តើ Array ក្នុង PHP មានប៉ុន្មានប្រភេទ? អ្វីខ្លះ? លើកឧទាហរណ៍បញ្ជាក់។",
    answer: [
      "Array មាន 3 ប្រភេទគឺ ៖",
      "Indexed or Numeric Arrays : An array with a numeric index where values are stored linearly.",
      "Associative Arrays : An array with a string index where instead of linear storage, each value can be assigned a specific key.",
      "Multidimensional Arrays : An array which contains single or multiple array within it and can be accessed via multiple indices.",
    ],
    code: `$a = array(); // declaration
$cars = array(&quot;Volvo&quot;, &quot;BMW&quot;, &quot;Toyota&quot;); // initialization,

// Associative Array
// Using the short array syntax
$array = [
    &quot;foo&quot; =&gt &quot;bar&quot;,
    &quot;bar&quot; =&gt &quot;foo&quot;,
];

// Multidimensional Arrays 
$array = array(
    array(0, 1, 2),
    array(3, 4, 5),
);`,
  },
  {
    question: "09. ចូរប្រាប់ពីរបៀបបង្កើត Function ដោយលើកឧទាហរណ៍បញ្ជាក់ផង។",
    answer: [],
    code: `// Defining function
function sum($num1, $num2){
  $total = $num1 + $num2;
  return $total;
}

// Printing returned value
echo sum(5, 10); // Outputs: 15`,
  },
  {
    question: "10. ចូរប្រាប់ពីរបៀបបង្កើត Class ដោយលើកឧទាហរណ៍បញ្ជាក់ផង។",
    answer: [],
    code: `// user.php
class User {
  private $name;
  private $age;

  function __construct( $name, $age ) {
    $this-&gt;name = $name;
    $this-&gt;age = $age;
  }

  function getName() {
    return $this-&gt;name;
  }

  function isAdult() {
    return $this-&gt;age &gt;= 18 ? &quot;an Adult&quot; : &quot;Not an Adult&quot;;
  }
}

&lt;?php
require &quot;user.php&quot;;

$user = new User(&quot;Akira&quot;, 18);
echo &quot;Hello, &quot; . $user-&gt;getName(). &quot;! You are &quot;. $user-&gt;isAdult();
?&gt;`,
  },
  {
    question:
      "11. ប្រាប់ពីរបៀបប្រើ Function 'include' and 'include once' ដោយបង្ហាញពីភាពខុសគ្នារបស់វា។",
    answer: [],
  },
  {
    question:
      "12. ចូរប្រាប់របៀបរក្សាទិន្នន័យនៅលើ​ Web ជាមួួយ Cookies, Session, File IO and Database។ រួចបង្ហាញពីភាពខុសគ្នារបស់វា។",
    answer: [],
  },
  {
    question: "13. អ្វីទៅដែលហៅថា Upload File? លើកឧទាហរណ៍ពីការ Upload File។",
    answer: [],
  },
  {
    question:
      "14. សន្មតថាក្នុង Folder មួួយមាន File រូបភាពចំនួន N។ ចូរសរសេរ​ Code PHP ដើម្បីរៀប​ File ទាំងនេះឲ្យវាបង្ហាញលើ screen។",
    answer: [
      "scandir - List files and directories inside the specified path.",
      "is_dir - Tells whether the filename is a directory.",
      "array_filter - Iterates over each value in the array passing them to the allback function. If the callback function returns true, the current value from array is returned into the result array. Array keys are preserved.",
    ],
    code: `&lt;?php
$path = &quot;./images&quot;;

$files = array_filter(scandir($path), function ($file) use ($path) {
  return !is_dir($path . '/' . $file);
});

$images = &quot;&quot;;
foreach ($files as $file) {
  $altText = explode('.', $file)[0];
  $images .= &quot;&lt;img src=$path/$file alt=$altText /&gt;&quot;;
}
?&gt;

&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;images-wrapper&quot;&gt;
      &lt;?= $images ?&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;`,
  },
  {
    question:
      "15. ចូរសរសេរ Function ក្នុង PHP ដើម្បីអោយគេធានាបាន​ក្នុងការ Upload File បានតែជាប្រភេទ File PowerPoint ដែលមានទំហំ &lt;= 10MB។",
    answer: [""],
    code: `// upload.php
&lt;?php
$uploadDirectory = &quot;./uploads/&quot;;

$errors = [];

$fileExtensionAllowed = 'pptx';

$fileName = $_FILES['file']['name'];
$fileTmpName  = $_FILES['file']['tmp_name'];
$fileSize = $_FILES['file']['size'];
$fileExtension = strtolower(end(explode('.', $fileName)));

$uploadPath = $uploadDirectory . basename($fileName);

if ($_SERVER[&quot;REQUEST_METHOD&quot;] == &quot;POST&quot;) {
  if (empty($fileName)) {
    die(&quot;No file is uploaded&quot;);
  }

  if ($fileSize &gt; 10000000) {
    $errors[] = &quot;File exceeds maximum size (10MB)&quot;;
  }

  if ($fileExtension != $fileExtensionAllowed) {
    $errors[] = &quot;This file extension is not allowed. Please upload a PPTX file&quot;;
  }

  if (!empty($errors)) {
    echo &quot;These are the errors: &lt;br&gt;&quot;;
    foreach ($errors as $error) {
      echo $error;
    }
    die();
  }

  if (move_uploaded_file($fileTmpName, $uploadPath)) {
    echo &quot;File is successfully uploaded.&quot;;
  } else {
    echo &quot;An error occurred.&quot;;
  }
}

// index.html
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;form action=&quot;upload.php&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;
      Upload a File:
      &lt;input type=&quot;file&quot; name=&quot;file&quot; /&gt;
      &lt;button&gt;Upload&lt;/button&gt;
    &lt;/form&gt;
  &lt;/body&gt;
&lt;/html&gt;
`,
  },
];
