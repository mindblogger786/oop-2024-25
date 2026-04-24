import React from "react";

export const q2Answers: React.ReactNode[] = [
  // 2a. HTML Form
  <div key="2a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">2a. Write an HTML form that collects user input (Name, Email, Gender, Country) and submit it.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p>HTML forms are the primary mechanism for collecting user input on web pages. The <code>&lt;form&gt;</code> element serves as a container for various input controls—text fields, radio buttons, dropdown menus, checkboxes, and submit buttons—that allow users to enter data and submit it to a server for processing. Forms are the backbone of interactive web applications, enabling everything from login screens and registration pages to search bars and checkout processes. Every time you interact with a web application—signing up, logging in, posting a comment, or filling a survey—you are using an HTML form.</p>
    <p>The form element has two critical attributes: <code>action</code> (the URL where the form data is sent) and <code>method</code> (the HTTP method used—GET or POST). GET appends data to the URL (visible, limited length, bookmarkable), while POST sends data in the request body (hidden, no length limit, secure). For sensitive data like passwords and large datasets, POST is always preferred. Each input field must have a <code>name</code> attribute, which serves as the variable name when the data reaches the server.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of an HTML form as a <strong>physical application form at a bank</strong>. The form has labeled fields (Name, Email, Gender, Country), each with a specific type of response expected—text for names, a selection circle for gender, a dropdown for country. When you fill and submit the form, it goes to a specific department (the action URL) via a specific channel (GET or POST method). The <code>name</code> attribute is like the field label the bank uses to process your response.</p>
    <p>Form controls include: <code>&lt;input type="text"&gt;</code> (single-line text), <code>&lt;input type="email"&gt;</code> (validated email), <code>&lt;input type="radio"&gt;</code> (single selection from group), <code>&lt;select&gt;</code> (dropdown menu), <code>&lt;textarea&gt;</code> (multi-line text), <code>&lt;input type="password"&gt;</code> (hidden text), and <code>&lt;button type="submit"&gt;</code> (submit trigger). HTML5 introduced new types like <code>date</code>, <code>number</code>, <code>url</code>, <code>tel</code>, and built-in validation attributes like <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation — Production-Grade Code</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>User Registration Form</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .form-container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            width: 450px;
        }
        h2 { text-align: center; color: #333; margin-bottom: 25px; }
        .form-group { margin-bottom: 18px; }
        label {
            display: block;
            margin-bottom: 6px;
            font-weight: 600;
            color: #555;
        }
        input[type="text"], input[type="email"],
        select {
            width: 100%;
            padding: 10px 12px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
            transition: border-color 0.3s;
        }
        input:focus, select:focus {
            border-color: #667eea;
            outline: none;
        }
        .radio-group { display: flex; gap: 20px; }
        .radio-group label {
            display: inline-flex;
            align-items: center;
            font-weight: normal;
            cursor: pointer;
        }
        .radio-group input { margin-right: 6px; }
        .btn-submit {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.3s;
        }
        .btn-submit:hover { opacity: 0.9; }
        .error { color: red; font-size: 12px; margin-top: 4px; }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>📋 User Registration</h2>

        <!-- Form starts here -->
        <form action="/api/register" method="POST"
              id="registrationForm">

            <!-- Name Field -->
            <div class="form-group">
                <label for="fullName">Full Name *</label>
                <input type="text" id="fullName"
                       name="fullName"
                       placeholder="Enter your full name"
                       required minlength="2"
                       maxlength="50">
            </div>

            <!-- Email Field -->
            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email"
                       name="email"
                       placeholder="you@example.com"
                       required>
            </div>

            <!-- Gender - Radio Buttons -->
            <div class="form-group">
                <label>Gender *</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="gender"
                               value="male" required> Male
                    </label>
                    <label>
                        <input type="radio" name="gender"
                               value="female"> Female
                    </label>
                    <label>
                        <input type="radio" name="gender"
                               value="other"> Other
                    </label>
                </div>
            </div>

            <!-- Country - Dropdown -->
            <div class="form-group">
                <label for="country">Country *</label>
                <select id="country" name="country" required>
                    <option value="">-- Select Country --</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                </select>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-submit">
                Register Now
            </button>
        </form>
    </div>
</body>
</html>`}</code></pre>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Form Processing Flow</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>1. User fills the form fields (Name, Email, Gender, Country)</p>
      <p>2. Browser validates using HTML5 attributes (required, type="email")</p>
      <p>3. User clicks "Register Now" button</p>
      <p>4. Browser serializes form data: fullName=John&amp;email=john@test.com&amp;gender=male&amp;country=india</p>
      <p>5. HTTP POST request sent to /api/register with data in request body</p>
      <p>6. Server-side servlet/controller processes the data</p>
      <p>7. Server sends back response (success page or error)</p>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university admission form collects student details. The form uses POST method because it contains personal information that shouldn't appear in the URL. The <code>required</code> attribute ensures the user can't submit without filling all fields. The <code>type="email"</code> attribute provides automatic email format validation—browsers won't submit if the email format is invalid.</p>
    <p><strong>Scenario 2:</strong> A search form on Google uses GET method because search queries should be visible in the URL (shareable and bookmarkable). The form data is appended to the URL: <code>google.com/search?q=web+technology</code>. This allows users to bookmark search results, share URLs, and use the browser's back button naturally.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>Forms use <code>&lt;form action="URL" method="POST|GET"&gt;</code></li>
      <li>Every input must have a <code>name</code> attribute (acts as key for data submission)</li>
      <li><code>GET</code>: data in URL (for search, filters); <code>POST</code>: data in body (for sensitive data)</li>
      <li>Input types: text, email, password, radio, checkbox, select, textarea, number, date</li>
      <li>HTML5 validation: <code>required</code>, <code>minlength</code>, <code>maxlength</code>, <code>pattern</code></li>
      <li>Radio buttons share the same <code>name</code> for single selection</li>
    </ul>
  </div>,

  // 2b. Factorial in JavaScript
  <div key="2b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">2b. Write a JavaScript function to calculate the factorial of a number.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>factorial</strong> of a non-negative integer n, denoted as <strong>n!</strong>, is the product of all positive integers less than or equal to n. Mathematically, n! = n × (n-1) × (n-2) × ... × 2 × 1, with the base case 0! = 1. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. Factorials are fundamental in combinatorics, probability theory, algebra, and calculus. In programming, calculating factorial is a classic problem used to teach recursion, iteration, and algorithm design.</p>
    <p>In JavaScript, there are multiple approaches to compute factorial: <strong>iterative</strong> (using loops), <strong>recursive</strong> (function calling itself), and using higher-order functions like <code>reduce()</code>. Each approach has trade-offs: iterative is most efficient and safe for large numbers; recursive is elegant but risks stack overflow for very large inputs; functional approaches leverage JavaScript's array methods for concise code.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of factorial as a <strong>descending staircase</strong>. Starting from the number n, you multiply by the next lower step, and the next, until you reach 1. For 5!, you start at 5, multiply by 4 (getting 20), multiply by 3 (getting 60), multiply by 2 (getting 120), multiply by 1 (staying at 120). The staircase analogy works perfectly for understanding the recursive approach too: to compute 5!, you need 4!; to compute 4!, you need 3!; and so on until you reach 0! = 1 (the ground floor).</p>
    <p><strong>Recursive</strong> approach: A function that calls itself with a smaller input until it reaches the base case. The formula is <code>factorial(n) = n * factorial(n-1)</code>, with base case <code>factorial(0) = 1</code>. Each recursive call is placed on the call stack, and the results are computed as the stack unwinds. This is elegant but can cause stack overflow for n &gt; ~10,000. <strong>Iterative</strong> approach: Uses a loop, starting from 1 and multiplying up to n. This is more memory-efficient as it doesn't use the call stack.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Flowchart: Factorial Calculation (Iterative)</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>START</p>
      <p>  ↓</p>
      <p>INPUT: n (the number)</p>
      <p>  ↓</p>
      <p>IF n &lt; 0 → OUTPUT "Invalid" → STOP</p>
      <p>  ↓</p>
      <p>SET result = 1</p>
      <p>SET i = 1</p>
      <p>  ↓</p>
      <p>WHILE i ≤ n:</p>
      <p>  result = result × i</p>
      <p>  i = i + 1</p>
      <p>  ↓</p>
      <p>OUTPUT result</p>
      <p>  ↓</p>
      <p>STOP</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Approach 1: Iterative (Recommended) =====
function factorialIterative(n) {
    // Input validation
    if (n < 0) {
        return "Error: Factorial is not defined"
             + " for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;  // result = result * i
    }
    return result;
}

// ===== Approach 2: Recursive (Elegant) =====
function factorialRecursive(n) {
    // Input validation
    if (n < 0) {
        return "Error: Negative number";
    }
    // Base case: 0! = 1 and 1! = 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorialRecursive(n - 1);
}

// ===== Approach 3: Using reduce() (Functional) =====
function factorialFunctional(n) {
    if (n < 0) return "Error";
    if (n === 0) return 1;

    return Array.from({ length: n }, (_, i) => i + 1)
        .reduce((acc, curr) => acc * curr, 1);
}

// ===== Complete HTML Page with UI =====
// Save as factorial.html and open in browser
/*
<!DOCTYPE html>
<html>
<head><title>Factorial Calculator</title></head>
<body>
    <h2>Factorial Calculator</h2>
    <input type="number" id="numInput"
           placeholder="Enter a number" min="0">
    <button onclick="calculateFactorial()">
        Calculate
    </button>
    <p id="result"></p>

    <script>
    function calculateFactorial() {
        const n = parseInt(
            document.getElementById("numInput").value
        );
        const resultEl = document.getElementById("result");

        if (isNaN(n) || n < 0) {
            resultEl.textContent = "Please enter a valid"
                + " non-negative number!";
            resultEl.style.color = "red";
            return;
        }
        if (n > 170) {
            resultEl.textContent = "Number too large!";
            resultEl.style.color = "red";
            return;
        }

        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        resultEl.textContent = n + "! = " + result;
        resultEl.style.color = "green";
    }
    </script>
</body>
</html>
*/`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> Calculating 5! step by step (iterative): result starts at 1. Loop i=2: result=1×2=2. i=3: result=2×3=6. i=4: result=6×4=24. i=5: result=24×5=120. Output: 120. This takes exactly 4 multiplications.</p>
    <p><strong>Scenario 2:</strong> Calculating 6! using recursion: factorial(6) calls factorial(5) × 6 → factorial(4) × 5 × 6 → factorial(3) × 4 × 5 × 6 → factorial(2) × 3 × 4 × 5 × 6 → factorial(1) × 2 × 3 × 4 × 5 × 6 → 1 × 2 × 3 × 4 × 5 × 6 = 720. The call stack builds up 6 frames before unwinding.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>Factorial: n! = n × (n-1) × (n-2) × ... × 1; Base case: 0! = 1</li>
      <li><strong>Iterative</strong>: Uses loop (preferred for large numbers—no stack overflow)</li>
      <li><strong>Recursive</strong>: Function calls itself (elegant but stack overflow risk for n &gt; ~10,000)</li>
      <li>Factorial grows extremely fast: 10! = 3,628,800; 20! = 2.4 × 10¹⁸</li>
      <li>JavaScript can handle up to 170! before returning Infinity</li>
      <li>Always validate: factorial is undefined for negative numbers</li>
    </ul>
  </div>,

  // 2c. JSP vs Servlets
  <div key="2c" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">2c. Compare and contrast JSP and Servlets. Where should each be used?</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Java Servlets</strong> are Java classes that run on a server to handle client requests and generate dynamic responses. They are pure Java code that processes HTTP requests, interacts with databases, and manages business logic. Servlets were the original server-side Java technology, introduced in 1997, providing a powerful but verbose way to generate dynamic HTML content. Developers had to write <code>out.println("&lt;html&gt;...")</code> statements extensively, mixing presentation logic with business logic—a practice that made code difficult to maintain.</p>
    <p><strong>JavaServer Pages (JSP)</strong> were introduced in 1999 as a solution to the presentation complexity of servlets. JSP allows developers to write HTML with embedded Java code using special tags (<code>&lt;% %&gt;</code>, <code>&lt;%= %&gt;</code>, <code>&lt;jsp:action&gt;</code>). Behind the scenes, the JSP container automatically translates each JSP file into a servlet—so JSP is essentially a higher-level abstraction over servlets. JSP follows the principle that <strong>HTML should be the primary content, with Java embedded</strong>, whereas servlets follow the opposite: <strong>Java is the primary content, with HTML embedded in strings</strong>.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of the difference like writing a letter. <strong>Servlets are like writing a program that prints a letter</strong>—you write code that outputs each line of text (<code>out.println("Dear User,")</code>). <strong>JSP is like writing the letter directly</strong> and inserting calculated values where needed (<code>Dear &lt;%= userName %&gt;,</code>). Both produce the same output, but JSP is far more natural for presentation-heavy pages, while servlets are better for pure logic processing.</p>
    <p>In modern web development, the best practice is to use <strong>both together</strong> following the MVC (Model-View-Controller) pattern: Servlets act as the <strong>Controller</strong> (processing requests, handling business logic, interacting with databases), and JSP acts as the <strong>View</strong> (displaying results, generating HTML). The <strong>Model</strong> is represented by JavaBeans or POJOs that hold the data. This separation makes applications maintainable, testable, and scalable.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Detailed Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Parameter</th>
            <th className="border border-gray-600 p-2 text-left">Servlet</th>
            <th className="border border-gray-600 p-2 text-left">JSP</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>Definition</strong></td><td className="border border-gray-600 p-2">Java class handling requests</td><td className="border border-gray-600 p-2">HTML page with embedded Java</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Primary Content</strong></td><td className="border border-gray-600 p-2">Java code (HTML in strings)</td><td className="border border-gray-600 p-2">HTML (Java embedded via tags)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>File Extension</strong></td><td className="border border-gray-600 p-2">.java → compiles to .class</td><td className="border border-gray-600 p-2">.jsp → translated to servlet</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Compilation</strong></td><td className="border border-gray-600 p-2">Explicit compilation needed</td><td className="border border-gray-600 p-2">Auto-compiled by container on first access</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>MVC Role</strong></td><td className="border border-gray-600 p-2">Controller</td><td className="border border-gray-600 p-2">View</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Presentation Logic</strong></td><td className="border border-gray-600 p-2">Difficult (lots of out.println)</td><td className="border border-gray-600 p-2">Easy (HTML-first with JSTL tags)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Business Logic</strong></td><td className="border border-gray-600 p-2">Easy (pure Java)</td><td className="border border-gray-600 p-2">Discouraged (mixes logic in view)</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Modification</strong></td><td className="border border-gray-600 p-2">Recompile + redeploy needed</td><td className="border border-gray-600 p-2">Just modify and save (auto-recompile)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Best For</strong></td><td className="border border-gray-600 p-2">Request processing, business logic</td><td className="border border-gray-600 p-2">Displaying data, UI generation</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Servlet Approach (Controller - Logic heavy) =====
// File: StudentServlet.java
@WebServlet("/students")
public class StudentServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse res)
            throws ServletException, IOException {
        // Business logic: fetch students from database
        List<Student> students = studentDAO.getAllStudents();

        // Set data as request attribute
        req.setAttribute("studentList", students);

        // Forward to JSP for rendering
        RequestDispatcher rd =
            req.getRequestDispatcher("/WEB-INF/views/students.jsp");
        rd.forward(req, res);
    }
}

// ===== JSP Approach (View - Presentation heavy) =====
// File: students.jsp
<%@ page contentType="text/html" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"
           prefix="c" %>
<!DOCTYPE html>
<html>
<head><title>Student List</title></head>
<body>
    <h1>All Students</h1>
    <table border="1">
        <tr>
            <th>ID</th><th>Name</th><th>Marks</th>
        </tr>
        <!-- JSTL forEach loop -->
        <c:forEach items="\${studentList}" var="s">
        <tr>
            <td>\${s.id}</td>
            <td>\${s.name}</td>
            <td>\${s.marks}</td>
        </tr>
        </c:forEach>
    </table>
</body>
</html>

// ===== When to use WHAT =====
// Use Servlet when:
//   - Processing form submissions (POST handling)
//   - Interacting with database/business logic
//   - Implementing authentication/authorization
//   - Acting as REST API endpoints
//   - File upload/download handling
//
// Use JSP when:
//   - Displaying dynamic data in HTML format
//   - Creating reusable UI components
//   - Rendering lists, tables, forms
//   - Generating reports or printable views`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A login system uses both: <code>LoginServlet</code> (Servlet) receives the POST request, validates credentials against the database, creates a session, and forwards to <code>dashboard.jsp</code> (JSP) which displays the personalized welcome message, user profile, and navigation menu. The servlet handles all the security logic; the JSP handles all the visual presentation.</p>
    <p><strong>Scenario 2:</strong> An online exam system: <code>ExamServlet</code> fetches questions from the database, randomly selects 20, stores them in session, and forwards to <code>exam.jsp</code>. The JSP renders the questions as an HTML form with radio buttons. When submitted, <code>ResultServlet</code> calculates the score and forwards to <code>result.jsp</code> which displays the score with a beautiful chart.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>JSP is <strong>internally converted to a servlet</strong> by the container</li>
      <li>Servlet = <strong>Java-first</strong> (hard to write HTML); JSP = <strong>HTML-first</strong> (easy to write HTML)</li>
      <li>Best practice: Servlet as <strong>Controller</strong> + JSP as <strong>View</strong> (MVC pattern)</li>
      <li>Servlet is better for business logic; JSP is better for presentation</li>
      <li>JSP supports JSTL tags, EL expressions, and custom tags</li>
      <li>JSP modification doesn't require recompation; Servlet does</li>
    </ul>
  </div>,

  // 2d. Spring IoC
  <div key="2d" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">2d. Explain the concept of Spring Inversion of Control with an example.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Inversion of Control (IoC)</strong> is a fundamental software design principle where the control flow of a program is inverted: instead of the application code explicitly creating and managing its dependencies, an external container (framework) takes over this responsibility. In traditional programming, a class that needs another class directly creates it using the <code>new</code> keyword. With IoC, the class simply declares what it needs (typically through constructors, setters, or fields), and the <strong>IoC Container</strong> (also called the Spring Container) injects the required dependencies at runtime—a process known as <strong>Dependency Injection (DI)</strong>.</p>
    <p>The Spring Framework's IoC container is the core of the entire framework. It is represented by two main interfaces: <code>BeanFactory</code> (the basic container) and <code>ApplicationContext</code> (the advanced container with enterprise features). The container reads configuration metadata (XML, annotations, or Java config classes), instantiates the configured beans, wires their dependencies, manages their lifecycle, and makes them available to the application. This leads to <strong>loose coupling</strong>, <strong>easy testing</strong>, and <strong>modular architecture</strong>.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of IoC like ordering food at a restaurant. <strong>Without IoC</strong>: You go to the kitchen, gather ingredients, cook the food yourself, and serve it. You control everything. <strong>With IoC</strong>: You tell the waiter (container) what dish you want (dependency), and the kitchen prepares and delivers it to your table. You don't know or care how the food is prepared—you just declare what you need. The restaurant (Spring Container) is responsible for creating and delivering it.</p>
    <p>There are three types of Dependency Injection in Spring: (1) <strong>Constructor Injection</strong>—dependencies are provided through the class constructor (recommended—ensures immutability and mandatory dependencies); (2) <strong>Setter Injection</strong>—dependencies are provided through setter methods (good for optional dependencies); (3) <strong>Field Injection</strong>—dependencies are injected directly into fields using <code>@Autowired</code> (simple but not recommended—hard to test). The container resolves dependencies by type (<code>@Autowired</code>), by name (<code>@Qualifier</code>), or by bean name.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 IoC Architecture Diagram</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>┌──────────────────────────────────────────────┐</p>
      <p>│           Spring IoC Container                │</p>
      <p>│  ┌──────────────────────────────────────────┐│</p>
      <p>│  │  Configuration Metadata                   ││</p>
      <p>│  │  (XML / Annotations / Java Config)        ││</p>
      <p>│  └────────────────┬─────────────────────────┘│</p>
      <p>│                   ↓                           │</p>
      <p>│  ┌────────────────────────────────────────┐  │</p>
      <p>│  │   ApplicationContext                    │  │</p>
      <p>│  │   - Creates Bean A                      │  │</p>
      <p>│  │   - Creates Bean B                      │  │</p>
      <p>│  │   - Injects B into A (DI)               │  │</p>
      <p>│  │   - Manages Lifecycle                   │  │</p>
      <p>│  └────────────────────────────────────────┘  │</p>
      <p>│                   ↓                           │</p>
      <p>│  ┌──────────┐  depends on  ┌──────────┐     │</p>
      <p>│  │Service A │ ──────────→ │Repository│     │</p>
      <p>│  │(needs DB)│              │  (DB)    │     │</p>
      <p>│  └──────────┘              └──────────┘     │</p>
      <p>└──────────────────────────────────────────────┘</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Without IoC (Tight Coupling - BAD) =====
class StudentService {
    // Service directly creates its dependency
    private MySQLRepository repository =
        new MySQLRepository(); // TIGHT COUPLING!

    public List<Student> getAllStudents() {
        return repository.findAll();
    }
    // Problem: Can't switch to Oracle DB without
    // modifying this class. Hard to unit test.
}

// ===== With IoC (Loose Coupling - GOOD) =====
// Step 1: Define an interface
public interface StudentRepository {
    List<Student> findAll();
}

// Step 2: Implement the interface
@Repository
public class MySQLRepository
        implements StudentRepository {
    @Override
    public List<Student> findAll() {
        // Database query logic here
        return jdbcTemplate.query("SELECT * FROM students",
            new StudentRowMapper());
    }
}

// Step 3: Service depends on interface, not implementation
@Service
public class StudentService {
    private final StudentRepository repository;

    // Constructor Injection (recommended)
    @Autowired  // Optional in Spring 4.3+
    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }
    // Now you can swap MySQLRepository with
    // OracleRepository without changing this class!
}

// Step 4: Application class
@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        ApplicationContext context =
            SpringApplication.run(MyApp.class, args);

        // Container provides the bean with dependencies
        StudentService service =
            context.getBean(StudentService.class);
        service.getAllStudents();
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> An e-mail service needs a notification sender. Without IoC: <code>EmailService</code> creates <code>new SMTPSender()</code> inside its constructor. To switch to a <code>TwilioSMSender</code>, you must modify the EmailService class. With IoC: <code>EmailService</code> declares a dependency on <code>MessageSender</code> interface. The Spring Container injects whichever implementation you configure. Switching from email to SMS requires zero code changes—only configuration.</p>
    <p><strong>Scenario 2:</strong> During unit testing of <code>StudentService</code>, you need to test the business logic without hitting a real database. With IoC, you can inject a <code>MockStudentRepository</code> (that returns hardcoded test data) instead of the real <code>MySQLRepository</code>. Without IoC, the service is hardcoded to use MySQL, making isolated testing impossible.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>IoC = <strong>control of object creation is inverted</strong> from the program to the container</li>
      <li>Spring IoC Container: <code>ApplicationContext</code> (and <code>BeanFactory</code>)</li>
      <li>DI types: <strong>Constructor Injection</strong> (recommended), <strong>Setter Injection</strong>, <strong>Field Injection</strong></li>
      <li>Benefits: <strong>loose coupling</strong>, easy testing, modularity, flexibility</li>
      <li>Configuration: XML, Annotations (<code>@Component</code>, <code>@Autowired</code>), Java Config (<code>@Configuration</code>)</li>
      <li>Without IoC: tight coupling; With IoC: program to interfaces, not implementations</li>
    </ul>
  </div>,

  // 2e. Spring Boot Project Structure
  <div key="2e" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">2e. Describe the structure of a Spring Boot project.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>Spring Boot project</strong> follows a standardized directory structure based on Maven or Gradle build tools, which promotes consistency, separation of concerns, and ease of navigation. This convention-based structure ensures that any developer familiar with Spring Boot can immediately understand and navigate any new project. Spring Boot projects are typically created using <strong>Spring Initializr</strong> (start.spring.io), which generates the skeleton with all necessary configurations, starter dependencies, and the correct directory layout.</p>
    <p>The project structure is organized following the <strong>Separation of Concerns (SoC)</strong> principle, where source code, test code, resources, and configuration files each have dedicated directories. The structure also follows the <strong>MVC (Model-View-Controller)</strong> or <strong>layered architecture</strong> pattern, separating the application into controller, service, repository, and model layers. This clear separation makes the codebase maintainable, testable, and team-friendly.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of a Spring Boot project structure like a <strong>well-organized office building</strong>. The lobby (main class) is the entry point. Different floors handle different functions: one floor for receiving visitors (controllers), one for processing work (services), one for storing records (repositories/models), and a basement for utilities (configuration). Each department knows its place and follows the building's organization chart.</p>
    <p>The layered architecture has four key layers: (1) <strong>Presentation Layer</strong> (Controllers)—handles HTTP requests/responses; (2) <strong>Business Layer</strong> (Services)—contains business logic; (3) <strong>Persistence Layer</strong> (Repositories)—interacts with the database; (4) <strong>Model Layer</strong> (Entities/DTOs)—represents data structures. This separation ensures that changes in one layer (e.g., switching databases) don't affect other layers.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Project Structure Diagram</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>my-springboot-project/</p>
      <p>├── pom.xml                          ← Maven build file</p>
      <p>├── src/</p>
      <p>│   ├── main/</p>
      <p>│   │   ├── java/</p>
      <p>│   │   │   └── com/example/project/</p>
      <p>│   │   │       ├── Application.java     ← @SpringBootApplication (Entry Point)</p>
      <p>│   │   │       ├── controller/</p>
      <p>│   │   │       │   ├── StudentController.java   ← REST endpoints</p>
      <p>│   │   │       │   └── CourseController.java</p>
      <p>│   │   │       ├── service/</p>
      <p>│   │   │       │   ├── StudentService.java      ← Business logic</p>
      <p>│   │   │       │   └── StudentServiceImpl.java</p>
      <p>│   │   │       ├── repository/</p>
      <p>│   │   │       │   └── StudentRepository.java   ← Database access</p>
      <p>│   │   │       ├── model/ (or entity/)</p>
      <p>│   │   │       │   └── Student.java             ← Data classes/Entities</p>
      <p>│   │   │       ├── dto/</p>
      <p>│   │   │       │   └── StudentRequest.java      ← Data Transfer Objects</p>
      <p>│   │   │       ├── config/</p>
      <p>│   │   │       │   └── SecurityConfig.java      ← Configuration classes</p>
      <p>│   │   │       └── exception/</p>
      <p>│   │   │           └── GlobalExceptionHandler.java</p>
      <p>│   │   └── resources/</p>
      <p>│   │       ├── application.properties   ← Main config file</p>
      <p>│   │       ├── application-dev.properties ← Dev profile config</p>
      <p>│   │       ├── static/                   ← CSS, JS, images</p>
      <p>│   │       ├── templates/                ← Thymeleaf views</p>
      <p>│   │       └── data.sql                  ← Initial DB data</p>
      <p>│   └── test/</p>
      <p>│       └── java/com/example/project/</p>
      <p>│           ├── ApplicationTests.java</p>
      <p>│           └── controller/</p>
      <p>│               └── StudentControllerTest.java</p>
      <p>└── target/ (or build/)              ← Compiled output</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Key Files Explained</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== pom.xml (Maven Build File) =====
<project>
    <parent>
        <!-- Spring Boot Parent POM: manages all versions -->
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
    </parent>
    <dependencies>
        <!-- Starter for building web/REST applications -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!-- Starter for JPA/Hibernate (database) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <!-- Starter for testing -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
    </dependencies>
</project>

// ===== Application.java (Entry Point) =====
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// ===== application.properties =====
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
logging.level.org.springframework=DEBUG`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A team of 5 developers works on a student management system. The standardized project structure means the frontend developer immediately knows to look in <code>controller/</code> for API endpoints, the database expert looks in <code>repository/</code> for queries, and the business analyst reviews <code>service/</code> for logic. New team members can onboard quickly because the structure is predictable.</p>
    <p><strong>Scenario 2:</strong> Using Spring Initializr, a developer selects "Spring Web", "Spring Data JPA", "MySQL Driver", and "Lombok" dependencies. The tool generates the complete project with pom.xml containing all dependencies, the correct Java package structure, an Application.java main class, and an application.properties file. The developer just downloads, opens in their IDE, and starts coding—zero setup time.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>Standard structure: <code>src/main/java</code> (code), <code>src/main/resources</code> (config), <code>src/test</code> (tests)</li>
      <li>Entry point: <code>@SpringBootApplication</code> annotated class with <code>main()</code> method</li>
      <li>Layered architecture: <code>controller → service → repository → model</code></li>
      <li><code>application.properties</code> (or <code>.yml</code>) holds all configuration</li>
      <li><code>pom.xml</code> (Maven) or <code>build.gradle</code> manages dependencies via starters</li>
      <li><code>static/</code> for web assets; <code>templates/</code> for server-side rendering</li>
    </ul>
  </div>,
];
