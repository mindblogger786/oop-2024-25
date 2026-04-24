import React from "react";

export const q3Answers: React.ReactNode[] = [
  // 3a. Evolution of Internet and WWW
  <div key="3a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">3a. Explain the evolution of the Internet and the World Wide Web.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The evolution of the Internet and World Wide Web represents one of humanity's most transformative technological journeys, spanning over five decades. The Internet began as a Cold War-era military research project and has evolved into a global communication infrastructure connecting over 5 billion users. The Web, which is the most popular service running on the Internet, transformed from a simple document-sharing system into a rich, interactive platform that powers modern commerce, entertainment, education, and social interaction. Understanding this evolution is crucial for web technology students as it provides context for current technologies and insight into future trends.</p>
    <p>The evolution can be divided into distinct phases, each characterized by breakthrough technologies, new protocols, and paradigm shifts in how humans interact with information. From the early days of ARPANET connecting four university nodes, through the invention of TCP/IP, the creation of the Web at CERN, the dot-com boom, the rise of Web 2.0 social media, to today's era of cloud computing and AI—each phase has built upon its predecessors while introducing revolutionary capabilities.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>The Internet's evolution can be understood through <strong>three parallel tracks</strong>: (1) <strong>Infrastructure evolution</strong>—from copper wires to fiber optics to satellite networks; (2) <strong>Protocol evolution</strong>—from NCP to TCP/IP to HTTP/3; (3) <strong>Application evolution</strong>—from email and FTP to static websites to dynamic web applications. Each track influenced the others—better infrastructure enabled more complex protocols, which enabled richer applications, which demanded even better infrastructure.</p>
    <p>The Web specifically evolved through major versions: <strong>Web 1.0</strong> (1991-2004) was the "read-only web" with static HTML pages; <strong>Web 2.0</strong> (2004-2015) was the "read-write web" with user-generated content, social media, and AJAX; <strong>Web 3.0</strong> (2015-present) is the "semantic web" with AI, blockchain, decentralized applications, and machine learning. Each version didn't replace the previous one but added new capabilities on top of existing infrastructure.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Evolution Timeline</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Era / Year</th>
            <th className="border border-gray-600 p-2 text-left">Milestone</th>
            <th className="border border-gray-600 p-2 text-left">Key Technology</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>1969</strong></td><td className="border border-gray-600 p-2">ARPANET created (first 4 nodes: UCLA, Stanford, UCSB, Utah)</td><td className="border border-gray-600 p-2">NCP protocol, packet switching</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>1971</strong></td><td className="border border-gray-600 p-2">First email sent by Ray Tomlinson</td><td className="border border-gray-600 p-2">SMTP, @ symbol</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>1974</strong></td><td className="border border-gray-600 p-2">TCP/IP proposed by Vint Cerf &amp; Bob Kahn</td><td className="border border-gray-600 p-2">TCP/IP protocol suite</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>1983</strong></td><td className="border border-gray-600 p-2">ARPANET switches to TCP/IP — "Birth of the Internet"</td><td className="border border-gray-600 p-2">TCP/IP, DNS</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>1989</strong></td><td className="border border-gray-600 p-2">Tim Berners-Lee proposes the World Wide Web at CERN</td><td className="border border-gray-600 p-2">HTML, HTTP, URLs</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>1991</strong></td><td className="border border-gray-600 p-2">First website goes live (info.cern.ch)</td><td className="border border-gray-600 p-2">HTML 1.0, first browser</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>1993</strong></td><td className="border border-gray-600 p-2">Mosaic browser released (first graphical browser)</td><td className="border border-gray-600 p-2">Graphical UI, inline images</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>1994</strong></td><td className="border border-gray-600 p-2">Netscape Navigator, Amazon, Yahoo founded</td><td className="border border-gray-600 p-2">SSL/HTTPS, JavaScript</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>1995</strong></td><td className="border border-gray-600 p-2">JavaScript, Java, Internet Explorer released</td><td className="border border-gray-600 p-2">JS, Java Applets, CSS1</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>1998</strong></td><td className="border border-gray-600 p-2">Google founded; XML and Ajax concepts emerge</td><td className="border border-gray-600 p-2">PageRank, XMLHTTPRequest</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>2004</strong></td><td className="border border-gray-600 p-2">Web 2.0 era begins — Facebook, Gmail with AJAX</td><td className="border border-gray-600 p-2">AJAX, CSS2.1, RSS</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>2007</strong></td><td className="border border-gray-600 p-2">iPhone launches — Mobile Web revolution</td><td className="border border-gray-600 p-2">Responsive design, HTML5</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>2010</strong></td><td className="border border-gray-600 p-2">HTML5 finalized, Node.js released</td><td className="border border-gray-600 p-2">HTML5, CSS3, Node.js, SPA</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>2013-15</strong></td><td className="border border-gray-600 p-2">React, Angular, Vue revolutionize frontend</td><td className="border border-gray-600 p-2">React, Angular, REST APIs</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>2020+</strong></td><td className="border border-gray-600 p-2">Web 3.0, AI, Progressive Web Apps, HTTP/3</td><td className="border border-gray-600 p-2">AI/ML, WebAssembly, QUIC</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Web Version Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Feature</th>
            <th className="border border-gray-600 p-2 text-left">Web 1.0</th>
            <th className="border border-gray-600 p-2 text-left">Web 2.0</th>
            <th className="border border-gray-600 p-2 text-left">Web 3.0</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>Period</strong></td><td className="border border-gray-600 p-2">1991-2004</td><td className="border border-gray-600 p-2">2004-2015</td><td className="border border-gray-600 p-2">2015-Present</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Nature</strong></td><td className="border border-gray-600 p-2">Read-Only</td><td className="border border-gray-600 p-2">Read-Write</td><td className="border border-gray-600 p-2">Read-Write-Execute</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Content</strong></td><td className="border border-gray-600 p-2">Static pages</td><td className="border border-gray-600 p-2">Dynamic, user-generated</td><td className="border border-gray-600 p-2">AI-driven, semantic</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Interaction</strong></td><td className="border border-gray-600 p-2">One-way (author → reader)</td><td className="border border-gray-600 p-2">Two-way (social media)</td><td className="border border-gray-600 p-2">Machine-understandable</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Examples</strong></td><td className="border border-gray-600 p-2">Static HTML sites, early Yahoo</td><td className="border border-gray-600 p-2">Facebook, YouTube, Wikipedia</td><td className="border border-gray-600 p-2">AI assistants, dApps, IoT</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Key Protocol Evolution</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// Protocol Evolution Summary:
//
// ARPANET (1969) → NCP Protocol
//    ↓
// TCP/IP (1983) → Universal networking standard
//    ↓                    ↘
// SMTP (1982) → Email    DNS (1985) → Name resolution
//    ↓
// HTTP/0.9 (1991) → Simple GET requests only
//    ↓
// HTTP/1.0 (1996) → Headers, POST, status codes
//    ↓
// HTTP/1.1 (1997) → Persistent connections, chunked transfer
//    ↓
// HTTP/2 (2015) → Multiplexing, server push, binary protocol
//    ↓
// HTTP/3 (2022) → QUIC protocol, UDP-based, faster connections
//
// HTML Evolution:
// HTML 1.0 (1993) → HTML 2.0 (1995) → HTML 3.2 (1997)
//    → HTML 4.01 (1999) → XHTML (2000) → HTML5 (2014)
//
// CSS Evolution:
// CSS1 (1996) → CSS2 (1998) → CSS2.1 (2004)
//    → CSS3 (2012) → CSS4 (ongoing modular updates)`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> In 1995, a student wanting to read about "Machine Learning" would visit a library or browse static web directories like early Yahoo (Web 1.0—read-only). By 2010, they could search Google, read Wikipedia articles collaboratively written by thousands, and watch YouTube tutorials (Web 2.0—read-write). Today, AI assistants like ChatGPT can understand their question, synthesize information from multiple sources, and provide a personalized answer (Web 3.0—intelligent, semantic).</p>
    <p><strong>Scenario 2:</strong> In Web 1.0, creating a website meant writing static HTML files by hand. In Web 2.0, platforms like WordPress and social media allowed anyone to publish content without coding. In Web 3.0, AI can generate entire websites from natural language descriptions, and decentralized platforms give users ownership of their data through blockchain technology.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li><strong>1969</strong>: ARPANET — first network (4 nodes)</li>
      <li><strong>1983</strong>: TCP/IP adopted — birth of the modern Internet</li>
      <li><strong>1989</strong>: Tim Berners-Lee proposes the WWW at CERN</li>
      <li><strong>1991</strong>: First website goes live; HTML and HTTP introduced</li>
      <li><strong>Web 1.0</strong>: Static, read-only pages; Web 2.0: Dynamic, user-generated content; Web 3.0: AI-powered, semantic web</li>
      <li>HTTP evolved from 0.9 → 1.0 → 1.1 → 2 → 3 (each improving speed and capabilities)</li>
    </ul>
  </div>,

  // 3b. ID vs Class selectors in CSS
  <div key="3b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">3b. Differentiate between ID and Class selectors in CSS with code examples.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p>In CSS, <strong>selectors</strong> are patterns used to target and select HTML elements for styling. Among the most commonly used selectors are <strong>ID selectors</strong> and <strong>Class selectors</strong>, each serving different purposes based on uniqueness and reusability. An <strong>ID selector</strong> targets an element with a specific unique identifier (the <code>id</code> attribute), using the <code>#</code> symbol in CSS. Since HTML specifications require IDs to be unique within a page, an ID selector should match exactly one element, making it ideal for styling unique components like headers, footers, or specific sections.</p>
    <p>A <strong>Class selector</strong> targets elements that share a common class name (the <code>class</code> attribute), using the <code>.</code> (dot) symbol in CSS. Multiple elements can share the same class, and a single element can have multiple classes (space-separated). This makes class selectors incredibly versatile for applying reusable styles across multiple elements. Classes are the workhorses of CSS—most professional CSS is written using classes because of their flexibility and reusability.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of IDs like your <strong>Aadhaar number</strong> (unique to you) and classes like your <strong>job title</strong> (shared by many people). An Aadhaar number identifies exactly one person, just as an ID identifies exactly one element. A job title like "Student" applies to many people, just as a class can apply to many elements. You can have multiple roles (student, athlete, musician) like an element can have multiple classes. But you only have one Aadhaar number, like an element should have only one ID.</p>
    <p><strong>Specificity</strong> is the algorithm browsers use to determine which CSS rule applies when multiple rules target the same element. The specificity hierarchy (from highest to lowest): Inline styles (1,0,0,0) → ID selectors (0,1,0,0) → Class/attribute/pseudo-class selectors (0,0,1,0) → Element/pseudo-element selectors (0,0,0,1). ID selectors have higher specificity than class selectors, meaning an ID rule will override a class rule even if the class rule appears later in the stylesheet.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Feature</th>
            <th className="border border-gray-600 p-2 text-left">ID Selector (#)</th>
            <th className="border border-gray-600 p-2 text-left">Class Selector (.)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>Syntax</strong></td><td className="border border-gray-600 p-2"><code>#myId { }</code></td><td className="border border-gray-600 p-2"><code>.myClass { }</code></td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>HTML Attribute</strong></td><td className="border border-gray-600 p-2"><code>id="uniqueName"</code></td><td className="border border-gray-600 p-2"><code>class="className"</code></td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Uniqueness</strong></td><td className="border border-gray-600 p-2">Must be unique per page (one element only)</td><td className="border border-gray-600 p-2">Can be shared by multiple elements</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Multiple Values</strong></td><td className="border border-gray-600 p-2">Only one ID per element</td><td className="border border-gray-600 p-2">Multiple classes per element (space-separated)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Specificity</strong></td><td className="border border-gray-600 p-2">Higher (0,1,0,0)</td><td className="border border-gray-600 p-2">Lower (0,0,1,0)</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Usage</strong></td><td className="border border-gray-600 p-2">Unique page sections, JavaScript targets</td><td className="border border-gray-600 p-2">Reusable styles, component styles</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>JavaScript</strong></td><td className="border border-gray-600 p-2"><code>document.getElementById()</code></td><td className="border border-gray-600 p-2"><code>document.getElementsByClassName()</code></td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Best Practice</strong></td><td className="border border-gray-600 p-2">Use sparingly, for truly unique elements</td><td className="border border-gray-600 p-2">Use as the primary styling mechanism</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!-- ===== HTML File ===== -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ID vs Class Selectors</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- ID: Unique - used only ONCE per page -->
    <header id="main-header">
        <h1>University Portal</h1>
    </header>

    <!-- Class: Reusable - used MULTIPLE times -->
    <div class="card student-card">
        <h3>Rahul Sharma</h3>
        <p>MCA - Semester 3</p>
    </div>

    <div class="card student-card">
        <h3>Priya Patel</h3>
        <p>MCA - Semester 3</p>
    </div>

    <div class="card faculty-card">
        <h3>Dr. Kumar</h3>
        <p>Professor, Computer Science</p>
    </div>

    <!-- Element with MULTIPLE classes -->
    <div class="card student-card featured">
        <h3>Amit Verma</h3>
        <p>MCA - Semester 3 (Topper)</p>
    </div>
</body>
</html>

/* ===== CSS File (styles.css) ===== */

/* ID Selector: targets #main-header (unique) */
#main-header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 24px;
}

/* Class Selector: targets .card (reusable) */
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Class: specific to students */
.student-card {
    background-color: #e8f5e9;
    border-left: 4px solid #4caf50;
}

/* Class: specific to faculty */
.faculty-card {
    background-color: #e3f2fd;
    border-left: 4px solid #2196f3;
}

/* Combined classes: .card AND .featured */
.card.featured {
    background-color: #fff3e0;
    border: 2px solid #ff9800;
    font-weight: bold;
}

/* Specificity Demo: ID beats Class */
.card {
    color: blue;       /* Specificity: 0,0,1,0 */
}
#main-header {
    color: red;        /* Specificity: 0,1,0,0 → WINS */
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> In a university website, the header (<code>#main-header</code>) appears exactly once per page—perfect for an ID. But student cards (<code>.student-card</code>) appear 50+ times on the results page—you use a class because it's reusable. If you used IDs for each card, you'd need 50 unique IDs and 50 separate CSS rules, which is unmaintainable.</p>
    <p><strong>Scenario 2:</strong> A blog site uses <code>.featured</code> class for highlighted posts. Any post can have this class added or removed dynamically via JavaScript (<code>element.classList.toggle("featured")</code>). Since classes can be combined (<code>class="post featured"</code>), you can layer styles efficiently. IDs can't be combined this way, making them less flexible for dynamic UI changes.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>ID: <code>#name</code> — unique, one per page, higher specificity</li>
      <li>Class: <code>.name</code> — reusable, multiple per page, multiple per element</li>
      <li><strong>Specificity</strong>: ID (0,1,0,0) &gt; Class (0,0,1,0) &gt; Element (0,0,0,1)</li>
      <li>Use IDs for truly unique elements; use Classes for everything else</li>
      <li>Classes are the backbone of CSS methodologies like BEM, OOCSS, and utility-first CSS</li>
      <li>JavaScript uses <code>getElementById()</code> for IDs and <code>querySelectorAll('.class')</code> for classes</li>
    </ul>
  </div>,
];

export const q4Answers: React.ReactNode[] = [
  // 4a. Objects in JavaScript
  <div key="4a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">4a. Explain the concept of objects in JavaScript. How are properties and methods defined?</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p>In JavaScript, an <strong>object</strong> is a complex data type that allows you to store collections of related data and functionality together as key-value pairs. Objects are the foundation of JavaScript—almost everything in JavaScript is an object or behaves like one. Arrays are objects, functions are objects, dates are objects, and even numbers and strings can be treated as objects. An object consists of <strong>properties</strong> (variables attached to the object that hold data) and <strong>methods</strong> (functions attached to the object that perform actions). This combination of state (data) and behavior (functions) in a single entity is the basis of Object-Oriented Programming.</p>
    <p>JavaScript uses <strong>prototype-based inheritance</strong> (not class-based like Java or C++), though ES6 introduced the <code>class</code> syntax as syntactic sugar over prototypes. Objects can be created in multiple ways: using <strong>object literals</strong> (curly braces <code>{}</code>), the <code>new Object()</code> constructor, <code>Object.create()</code>, constructor functions, or ES6 classes. Each property has a string or Symbol key and can hold any value—primitives, arrays, other objects, or functions (methods).</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of a JavaScript object as a <strong>filing cabinet</strong>. Each drawer (property) has a label (key) and contains specific documents (values). One drawer might hold a name string, another holds an array of phone numbers, and another drawer contains a set of instructions (a method). You access any drawer by its label using dot notation (<code>cabinet.name</code>) or bracket notation (<code>cabinet["name"]</code>). You can add new drawers, remove old ones, or change the contents of existing ones at any time—objects are <strong>mutable</strong>.</p>
    <p>Properties are defined as key-value pairs where the key is a string (or Symbol) and the value can be any JavaScript type. When the value is a function, it's called a <strong>method</strong>. Inside a method, the <code>this</code> keyword refers to the object itself, allowing the method to access other properties and methods of the same object. ES6 introduced shorthand property names (when key and variable name match), computed property names, and concise method syntax.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Object Structure Diagram</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>┌──────────────────────────────────┐</p>
      <p>│         student Object            │</p>
      <p>├──────────┬───────────────────────┤</p>
      <p>│   KEY    │        VALUE          │</p>
      <p>├──────────┼───────────────────────┤</p>
      <p>│  name    │  "Rahul Sharma" (str) │ ← Property</p>
      <p>│  age     │  22            (num)  │ ← Property</p>
      <p>│  courses │  ["MCA","DBMS"] (arr) │ ← Property</p>
      <p>│  address │  {'{'}city:"Delhi"{'}'} (obj) │ ← Nested Object</p>
      <p>│  greet   │  function() {'{'}...{'}'}     │ ← Method</p>
      <p>│  getAge  │  () =&gt; {'{'}...{'}'}          │ ← Method</p>
      <p>└──────────┴───────────────────────┘</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== 1. Object Literal (Most Common) =====
const student = {
    // Properties (key: value pairs)
    name: "Rahul Sharma",
    age: 22,
    courses: ["Java", "Web Tech", "DBMS"],
    address: { city: "Delhi", zip: "110001" },

    // Method (traditional)
    greet: function() {
        return "Hello, I am " + this.name;
    },

    // Method (ES6 shorthand - recommended)
    getDetails() {
        return this.name + ", Age: " + this.age;
    }
};

// Accessing properties
console.log(student.name);          // "Rahul Sharma" (dot notation)
console.log(student["age"]);        // 22 (bracket notation)
console.log(student.courses[1]);    // "Web Tech"
console.log(student.address.city);  // "Delhi"

// Calling methods
console.log(student.greet());       // "Hello, I am Rahul Sharma"
console.log(student.getDetails());  // "Rahul Sharma, Age: 22"

// ===== 2. Adding/Modifying Properties =====
student.email = "rahul@email.com";     // Add new property
student.age = 23;                       // Modify existing
student["phone"] = "9876543210";        // Add using brackets

// ===== 3. Deleting Properties =====
delete student.phone;

// ===== 4. Constructor Function (Pre-ES6) =====
function Car(make, model, year) {
    this.make = make;    // this refers to the new object
    this.model = model;
    this.year = year;
    this.getAge = function() {
        return new Date().getFullYear() - this.year;
    };
}
const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.getAge());  // 6

// ===== 5. ES6 Class Syntax =====
class Student {
    constructor(name, rollNo, marks) {
        this.name = name;        // Property
        this.rollNo = rollNo;    // Property
        this.marks = marks;      // Property
    }

    // Method
    getGrade() {
        if (this.marks >= 90) return "A+";
        if (this.marks >= 80) return "A";
        if (this.marks >= 70) return "B";
        if (this.marks >= 60) return "C";
        return "F";
    }

    // Method
    display() {
        return \`\${this.name} (Roll: \${this.rollNo})
                - Grade: \${this.getGrade()}\`;
    }
}

const s1 = new Student("Priya", 101, 85);
const s2 = new Student("Amit", 102, 72);
console.log(s1.display()); // "Priya (Roll: 101) - Grade: A"
console.log(s2.display()); // "Amit (Roll: 102) - Grade: B"

// ===== 6. Iterating over Object Properties =====
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(student));    // ["name","age",...]
console.log(Object.values(student));  // ["Rahul",22,...]
console.log(Object.entries(student)); // [["name","Rahul"],...]`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university management system uses a <code>Student</code> class with properties like <code>name</code>, <code>rollNo</code>, <code>marks</code>, and methods like <code>getGrade()</code> and <code>display()</code>. Creating 500 student objects with <code>new Student("name", rollNo, marks)</code> gives each student the same methods (via prototype) but unique property values. The <code>getGrade()</code> method uses <code>this.marks</code> to calculate the grade for that specific student.</p>
    <p><strong>Scenario 2:</strong> A shopping cart object manages items: <code>cart.items = [{'{'}name:"Laptop", price:50000{'}'}, {'{'}name:"Mouse", price:500{'}'}]</code>. It has methods: <code>cart.addItem(item)</code>, <code>cart.removeItem(index)</code>, <code>cart.getTotal()</code> which iterates through <code>this.items</code> and sums prices. The <code>this</code> keyword ensures each method operates on its own cart's data.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>Objects store <strong>key-value pairs</strong>; keys are strings/Symbols, values can be any type</li>
      <li>Properties hold data; Methods are functions stored as property values</li>
      <li>Create objects: <code>{}</code> literal (most common), <code>new Object()</code>, constructor function, ES6 <code>class</code></li>
      <li>Access: <code>obj.prop</code> (dot) or <code>obj["prop"]</code> (bracket for dynamic keys)</li>
      <li><code>this</code> inside methods refers to the object that owns the method</li>
      <li>Objects are <strong>mutable</strong>—properties can be added, modified, or deleted at runtime</li>
    </ul>
  </div>,

  // 4b. Button Click Event
  <div key="4b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">4b. Write a JavaScript code that handles a button click event and changes the text color of a paragraph.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Event handling</strong> is the mechanism by which JavaScript responds to user interactions (clicks, key presses, mouse movements, form submissions) and browser events (page load, resize, errors). JavaScript uses an <strong>event-driven programming model</strong>—instead of executing code sequentially from top to bottom, the program waits for events to occur and then executes the appropriate handler function. This makes web pages interactive and responsive to user actions. The DOM (Document Object Model) provides the <code>addEventListener()</code> method to attach event handlers to HTML elements.</p>
    <p>When a user clicks a button, the browser creates an <strong>event object</strong> containing details about the event (target element, mouse position, timestamp) and dispatches it through the DOM. The event flows through three phases: <strong>capturing</strong> (from root to target), <strong>targeting</strong> (at the clicked element), and <strong>bubbling</strong> (from target back to root). Event listeners attached with <code>addEventListener()</code> can respond during any of these phases, though bubbling (default) is most commonly used.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of event handling like a <strong>receptionist at an office</strong>. The receptionist (event listener) waits for visitors (events). When a visitor arrives, the receptionist checks who they are and directs them appropriately (executes the handler function). The receptionist doesn't need to keep checking the door—they're notified automatically when someone arrives. Similarly, <code>addEventListener("click", handler)</code> registers a function that waits for clicks and executes automatically.</p>
    <p>Three ways to attach events: (1) <strong>Inline HTML</strong>—<code>&lt;button onclick="changeColor()"&gt;</code> (NOT recommended—mixes HTML and JS); (2) <strong>DOM property</strong>—<code>btn.onclick = function(){ }</code> (better but only one handler per event); (3) <strong>addEventListener()</strong>—<code>btn.addEventListener("click", handler)</code> (BEST—allows multiple handlers, can be removed, follows separation of concerns). Always prefer <code>addEventListener()</code> for production code.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Event Flow Diagram</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>User clicks button</p>
      <p>      ↓</p>
      <p>Browser creates Event object</p>
      <p>      ↓</p>
      <p>CAPTURING PHASE: Window → Document → html → body → div</p>
      <p>      ↓</p>
      <p>TARGET PHASE: button (event reaches target element)</p>
      <p>      ↓</p>
      <p>BUBBLING PHASE: div → body → html → Document → Window</p>
      <p>      ↓</p>
      <p>Event handler executes: paragraph.style.color = "red"</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Event Handling Demo</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #1a1a2e;
            color: white;
        }
        .container {
            text-align: center;
            background: #16213e;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        #myParagraph {
            font-size: 22px;
            margin: 20px 0;
            padding: 15px;
            transition: color 0.3s ease,
                        transform 0.2s ease;
        }
        .btn-group { display: flex; gap: 10px; }
        button {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, opacity 0.2s;
        }
        button:hover { transform: scale(1.05); }
        #btnRed { background: #e74c3c; color: white; }
        #btnBlue { background: #3498db; color: white; }
        #btnGreen { background: #2ecc71; color: white; }
        #btnReset { background: #95a5a6; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <h2>🎨 Color Changer Demo</h2>

        <!-- The paragraph whose color will change -->
        <p id="myParagraph">
            This paragraph's color will change when you
            click the buttons below!
        </p>

        <!-- Buttons to trigger color changes -->
        <div class="btn-group">
            <button id="btnRed">Red</button>
            <button id="btnBlue">Blue</button>
            <button id="btnGreen">Green</button>
            <button id="btnReset">Reset</button>
        </div>
    </div>

    <script>
        // ===== Step 1: Get references to DOM elements =====
        const paragraph = document.getElementById("myParagraph");
        const btnRed = document.getElementById("btnRed");
        const btnBlue = document.getElementById("btnBlue");
        const btnGreen = document.getElementById("btnGreen");
        const btnReset = document.getElementById("btnReset");

        // ===== Step 2: Define event handler functions =====

        // Method 1: Using separate named functions
        function changeToRed() {
            paragraph.style.color = "#e74c3c";
            paragraph.textContent = "Color changed to RED!";
        }

        function changeToBlue() {
            paragraph.style.color = "#3498db";
            paragraph.textContent = "Color changed to BLUE!";
        }

        function changeToGreen() {
            paragraph.style.color = "#2ecc71";
            paragraph.textContent = "Color changed to GREEN!";
        }

        function resetColor() {
            paragraph.style.color = "white";
            paragraph.textContent = "Color has been reset!";
        }

        // ===== Step 3: Attach event listeners (BEST PRACTICE) =====
        btnRed.addEventListener("click", changeToRed);
        btnBlue.addEventListener("click", changeToBlue);
        btnGreen.addEventListener("click", changeToGreen);
        btnReset.addEventListener("click", resetColor);

        // Method 2: Using anonymous functions
        // btnRed.addEventListener("click", function() {
        //     paragraph.style.color = "red";
        // });

        // Method 3: Using arrow functions (ES6)
        // btnBlue.addEventListener("click", () => {
        //     paragraph.style.color = "blue";
        // });

        // ===== Step 4: Adding a dynamic hover effect =====
        paragraph.addEventListener("mouseenter", function() {
            paragraph.style.transform = "scale(1.05)";
        });
        paragraph.addEventListener("mouseleave", function() {
            paragraph.style.transform = "scale(1)";
        });
    </script>
</body>
</html>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A dark/light mode toggle button on a website. When clicked, the event handler changes the <code>body.style.backgroundColor</code>, updates text colors of all paragraphs, and stores the preference in localStorage. On page reload, the stored preference is read and applied. This demonstrates how a single click event can trigger multiple DOM manipulations.</p>
    <p><strong>Scenario 2:</strong> An online quiz application where clicking option buttons changes the clicked button's color to green (correct) or red (wrong), and also updates a score counter displayed in a paragraph. Multiple event listeners work together—the click handler checks the answer, updates styles, modifies the score variable, and updates the display—all in response to a single button click.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>Use <code>element.addEventListener("click", handler)</code> — the <strong>best practice</strong> for event handling</li>
      <li>Three methods: inline HTML (avoid), DOM property, <code>addEventListener()</code> (preferred)</li>
      <li>Change styles: <code>element.style.color = "red"</code></li>
      <li>Change text: <code>element.textContent = "new text"</code></li>
      <li>Event flow: Capturing → Target → Bubbling (3 phases)</li>
      <li><code>this</code> inside event handler refers to the element that triggered the event</li>
    </ul>
  </div>,
];
