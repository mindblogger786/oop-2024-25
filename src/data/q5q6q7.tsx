import React from "react";

export const q5Answers: React.ReactNode[] = [
  // 5a. Session Tracking in Servlets
  <div key="5a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">5a. Explain session tracking in servlets using HttpSession and cookies.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Session tracking</strong> (also called session management) is a technique used by web applications to maintain the state and identity of a user across multiple HTTP requests. Since HTTP is a <strong>stateless protocol</strong>—each request is independent and the server has no memory of previous requests—session tracking mechanisms are essential for features like user authentication, shopping carts, personalized content, and multi-step forms. Without session tracking, a user would need to re-authenticate on every page load, and a shopping cart would be empty when navigating to checkout.</p>
    <p>The two most common session tracking mechanisms in Java Servlets are <strong>Cookies</strong> and <strong>HttpSession</strong>. Cookies store small pieces of data on the client's browser and send them with every request. HttpSession stores data on the server side (in memory or database) and uses a session ID (typically stored in a cookie) to associate requests with the correct session. The Servlet API provides the <code>javax.servlet.http.HttpSession</code> interface, which offers a clean, high-level abstraction for session management, handling the complexity of session ID generation, cookie management, and session lifecycle internally.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of session tracking like a <strong>coat check at a restaurant</strong>. When you arrive (first request), the attendant gives you a numbered token (session ID stored in a cookie). Your coat (session data) is stored behind the counter (server-side in HttpSession). Every time you need something from your coat, you show your token (browser sends the cookie), and the attendant retrieves the correct coat. When you leave, you return the token (session invalidated). Without the token system, the attendant wouldn't know which coat belongs to you.</p>
    <p>The <strong>HttpSession approach</strong> is more secure and scalable than pure cookie-based tracking because: (1) Sensitive data stays on the server (not exposed to the client); (2) No 4KB size limit (cookies are limited to 4KB); (3) Session data can be any Java object (cookies only store strings); (4) The session ID is cryptographically random, making it hard to guess; (5) Sessions can be invalidated, timed out, or migrated between servers. The <strong>cookie-based approach</strong> is simpler but stores all data on the client side, making it less secure and limited in capacity.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Session Tracking Flow Diagram</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>┌─────────┐                        ┌─────────────┐</p>
      <p>│ Client   │                        │   Server     │</p>
      <p>│(Browser) │                        │ (Servlet)    │</p>
      <p>└────┬─────┘                        └──────┬──────┘</p>
      <p>     │  1. HTTP Request (login)            │</p>
      <p>     │ ──────────────────────────────────→ │</p>
      <p>     │                                    │ 2. Validate credentials</p>
      <p>     │                                    │ 3. req.getSession(true)</p>
      <p>     │                                    │ 4. Create Session object</p>
      <p>     │                                    │    Store: user, role, cart</p>
      <p>     │  5. Response + Set-Cookie:         │</p>
      <p>     │     JSESSIONID=ABC123              │</p>
      <p>     │ ←────────────────────────────────── │</p>
      <p>     │  6. Browser stores cookie           │</p>
      <p>     │                                    │</p>
      <p>     │  7. Next Request + Cookie:          │</p>
      <p>     │     JSESSIONID=ABC123              │</p>
      <p>     │ ──────────────────────────────────→ │</p>
      <p>     │                                    │ 8. Server finds session</p>
      <p>     │                                    │    by ID → retrieves data</p>
      <p>     │  9. Personalized Response          │</p>
      <p>     │ ←────────────────────────────────── │</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Method 1: HttpSession (Server-Side) =====
// LoginServlet.java - Creates a session
@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req,
                         HttpServletResponse res)
            throws ServletException, IOException {

        String username = req.getParameter("username");
        String password = req.getParameter("password");

        if (authenticate(username, password)) {
            // Step 1: Get or create session
            HttpSession session = req.getSession(true);
            // true = create new if doesn't exist

            // Step 2: Store data in session
            session.setAttribute("username", username);
            session.setAttribute("role", "student");
            session.setAttribute("loginTime", new Date());

            // Step 3: Configure session
            session.setMaxInactiveInterval(
                30 * 60);  // 30 minutes timeout

            res.sendRedirect("dashboard.jsp");
        } else {
            res.sendRedirect("login.jsp?error=1");
        }
    }
}

// DashboardServlet.java - Reads session data
@WebServlet("/dashboard")
public class DashboardServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req,
                        HttpServletResponse res)
            throws ServletException, IOException {

        // Get existing session (don't create new)
        HttpSession session = req.getSession(false);
        // false = return null if no session exists

        if (session != null &&
            session.getAttribute("username") != null) {
            String user = (String)
                session.getAttribute("username");
            String role = (String)
                session.getAttribute("role");

            // Use session data for personalized response
            req.setAttribute("message",
                "Welcome back, " + user + "!");
            req.getRequestDispatcher("/dashboard.jsp")
               .forward(req, res);
        } else {
            // No valid session → redirect to login
            res.sendRedirect("login.jsp");
        }
    }
}

// LogoutServlet.java - Invalidates session
@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req,
                        HttpServletResponse res)
            throws ServletException, IOException {

        HttpSession session = req.getSession(false);
        if (session != null) {
            session.invalidate(); // Destroy session
        }
        res.sendRedirect("login.jsp");
    }
}

// ===== Method 2: Cookies (Client-Side) =====
// CookieServlet.java
@WebServlet("/setCookie")
public class CookieServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req,
                        HttpServletResponse res)
            throws ServletException, IOException {

        // Create a cookie
        Cookie userCookie = new Cookie("username",
                                        "RahulSharma");
        userCookie.setMaxAge(60 * 60 * 24 * 7); // 7 days
        userCookie.setHttpOnly(true);
        userCookie.setPath("/");
        res.addCookie(userCookie);

        // Read cookies
        Cookie[] cookies = req.getCookies();
        if (cookies != null) {
            for (Cookie c : cookies) {
                String name = c.getName();
                String value = c.getValue();
                if (name.equals("username")) {
                    // Process stored username
                }
            }
        }

        // Delete a cookie
        Cookie delCookie = new Cookie("username", "");
        delCookie.setMaxAge(0); // Expire immediately
        res.addCookie(delCookie);
    }
}`}</code></pre>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 HttpSession vs Cookies Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Feature</th>
            <th className="border border-gray-600 p-2 text-left">HttpSession</th>
            <th className="border border-gray-600 p-2 text-left">Cookies</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>Data Storage</strong></td><td className="border border-gray-600 p-2">Server-side (memory/DB)</td><td className="border border-gray-600 p-2">Client-side (browser)</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Security</strong></td><td className="border border-gray-600 p-2">High (data hidden from client)</td><td className="border border-gray-600 p-2">Low (visible to user)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Size Limit</strong></td><td className="border border-gray-600 p-2">No practical limit</td><td className="border border-gray-600 p-2">4KB per cookie</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Data Types</strong></td><td className="border border-gray-600 p-2">Any Java object</td><td className="border border-gray-600 p-2">Strings only</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Lifetime</strong></td><td className="border border-gray-600 p-2">Until timeout or invalidate</td><td className="border border-gray-600 p-2">Until expiry date set</td></tr>
        </tbody>
      </table>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> Online exam system: When a student starts an exam, the servlet creates an HttpSession storing student ID, exam ID, start time, and answers array. On each question submission, the servlet reads the session to verify the student is authorized and updates the answers. If the session times out (30 min inactive), the exam auto-submits. The session ensures the student can't access the dashboard without being logged in.</p>
    <p><strong>Scenario 2:</strong> E-commerce cart: The <code>CartServlet</code> stores the shopping cart items in HttpSession. When the user adds a "Laptop" to cart, the servlet reads the cart from session, adds the item, and stores it back. When checking out, the <code>CheckoutServlet</code> reads all cart items from the session. A "Remember Me" feature additionally uses a persistent cookie with a secure token that auto-creates a new session on the next visit.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>HTTP is <strong>stateless</strong>—session tracking adds statefulness</li>
      <li><code>req.getSession(true)</code> creates new session; <code>req.getSession(false)</code> gets existing</li>
      <li><code>session.setAttribute()</code> / <code>session.getAttribute()</code> store/retrieve data</li>
      <li><code>session.invalidate()</code> destroys the session (for logout)</li>
      <li>HttpSession stores data <strong>server-side</strong>; Cookies store data <strong>client-side</strong></li>
      <li>Session ID is typically stored in <code>JSESSIONID</code> cookie</li>
      <li><code>setMaxInactiveInterval()</code> sets session timeout</li>
    </ul>
  </div>,

  // 5b. JSP Scripting Elements
  <div key="5b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">5b. Describe the use of scripting elements in JSP with examples.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>JavaServer Pages (JSP)</strong> scripting elements are special tags that allow developers to embed Java code directly within an HTML page. These elements bridge the gap between static HTML content and dynamic server-side processing, enabling the page to execute Java logic, access server-side objects, and produce dynamic output. JSP provides three main scripting elements: <strong>Scriptlets</strong> (<code>&lt;% %&gt;</code>) for Java statements, <strong>Expressions</strong> (<code>&lt;%= %&gt;</code>) for outputting values, and <strong>Declarations</strong> (<code>&lt;%! %&gt;</code>) for defining methods and variables. Additionally, <strong>Directives</strong> (<code>&lt;%@ %&gt;</code>) provide page-level instructions.</p>
    <p>While scripting elements were the primary way to add dynamic content in early JSP development, modern best practices recommend using <strong>JSP Standard Tag Library (JSTL)</strong> tags and <strong>Expression Language (EL)</strong> instead of raw Java code in JSP. This is because scriptlets mix Java code with HTML, violating the separation of concerns principle and making pages harder to maintain. However, understanding scripting elements is essential for the exam and for maintaining legacy JSP applications.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of JSP scripting elements as <strong>different ways to embed instructions in a letter</strong>. A <strong>Scriptlet</strong> is like writing a complete instruction paragraph (multiple sentences of logic). An <strong>Expression</strong> is like filling in a blank with a calculated value. A <strong>Declaration</strong> is like defining a new term at the top of the letter that you'll reference later. Each type has a specific purpose and syntax, and they work together to create dynamic pages.</p>
    <p>When a JSP page is requested, the container translates it into a servlet Java file. Scriptlets become code inside the <code>_jspService()</code> method, expressions become <code>out.print()</code> calls, and declarations become class-level members. Understanding this translation helps you grasp scope—scriptlet variables are method-local (can't be shared between requests), while declared variables are class-level (shared across all requests to the same JSP).</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Scripting Elements Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Element</th>
            <th className="border border-gray-600 p-2 text-left">Syntax</th>
            <th className="border border-gray-600 p-2 text-left">Purpose</th>
            <th className="border border-gray-600 p-2 text-left">Translated To</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>Scriptlet</strong></td><td className="border border-gray-600 p-2"><code>&lt;% code %&gt;</code></td><td className="border border-gray-600 p-2">Execute Java statements</td><td className="border border-gray-600 p-2">Code in _jspService()</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Expression</strong></td><td className="border border-gray-600 p-2"><code>&lt;%= expr %&gt;</code></td><td className="border border-gray-600 p-2">Output a value</td><td className="border border-gray-600 p-2">out.print(expr)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Declaration</strong></td><td className="border border-gray-600 p-2"><code>&lt;%! code %&gt;</code></td><td className="border border-gray-600 p-2">Define methods/fields</td><td className="border border-gray-600 p-2">Class-level members</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Directive</strong></td><td className="border border-gray-600 p-2"><code>&lt;%@ %&gt;</code></td><td className="border border-gray-600 p-2">Page-level instructions</td><td className="border border-gray-600 p-2">Servlet configuration</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Comment</strong></td><td className="border border-gray-600 p-2"><code>&lt;%-- --%&gt;</code></td><td className="border border-gray-600 p-2">JSP comment (not sent)</td><td className="border border-gray-600 p-2">Ignored by translator</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!-- ===== File: demo.jsp ===== -->
<%@ page language="java" contentType="text/html;
         charset=UTF-8" pageEncoding="UTF-8"%>
<!-- Directive: Import Java classes -->
<%@ page import="java.util.*, com.example.model.*" %>
<!-- Directive: Include another file -->
<%@ include file="header.jsp" %>
<!-- Directive: Use custom tag library -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"
           prefix="c" %>

<!DOCTYPE html>
<html>
<head><title>JSP Scripting Demo</title></head>
<body>

<!-- ===== 1. SCRIPTLET: <% Java Code %> ===== -->
<!-- Executes Java statements (no output automatically) -->
<h2>1. Scriptlet Example</h2>
<%
    // This is a scriptlet - pure Java code
    String studentName = "Rahul Sharma";
    int marks = 85;
    String grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else {
        grade = "C";
    }

    // Loop through numbers
    out.println("<ul>");
    for (int i = 1; i <= 5; i++) {
        out.println("<li>Item " + i + "</li>");
    }
    out.println("</ul>");
%>

<!-- ===== 2. EXPRESSION: <%= Value %> ===== -->
<!-- Outputs the result of an expression -->
<!-- No semicolon at the end! -->
<h2>2. Expression Example</h2>
<p>Student Name: <%= studentName %></p>
<p>Marks: <%= marks %></p>
<p>Grade: <%= grade %></p>
<p>Current Time: <%= new java.util.Date() %></p>
<p>Sum: <%= 10 + 20 + 30 %></p>
<p>Uppercase: <%= studentName.toUpperCase() %></p>

<!-- ===== 3. DECLARATION: <%! Code %> ===== -->
<!-- Defines class-level methods and variables -->
<h2>3. Declaration Example</h2>
<%!
    // Instance variable (shared across all requests!)
    private int visitCount = 0;

    // Method definition
    public int calculateFactorial(int n) {
        if (n <= 1) return 1;
        return n * calculateFactorial(n - 1);
    }

    public String getGreeting(String name) {
        return "Welcome, " + name + "!";
    }
%>
<p><%= getGreeting(studentName) %></p>
<p>Factorial of 5: <%= calculateFactorial(5) %></p>
<% visitCount++; %>
<p>Page Visits: <%= visitCount %></p>

<!-- ===== 4. MIXED: Real-World Example ===== -->
<h2>4. Student Report (Mixed Scripting)</h2>
<%
    // Scriptlet: Prepare data
    List<String> subjects = new ArrayList<>();
    subjects.add("Web Technology");
    subjects.add("Java Programming");
    subjects.add("Database Management");
    subjects.add("Computer Networks");

    Random rand = new Random();
%>

<table border="1">
    <tr>
        <th>Subject</th>
        <th>Marks</th>
        <th>Status</th>
    </tr>
    <% for (String subject : subjects) {
        int subjectMarks = 60 + rand.nextInt(40);
        String status = subjectMarks >= 75 ? "Pass" : "Fail";
    %>
    <!-- Expression inside loop -->
    <tr>
        <td><%= subject %></td>
        <td><%= subjectMarks %></td>
        <td><%= status %></td>
    </tr>
    <% } %>
</table>

<!-- ===== 5. MODERN APPROACH: EL + JSTL ===== -->
<!-- (Preferred over scriptlets in production) -->
<h2>5. Modern: EL &amp; JSTL</h2>
<!-- Expression Language (EL): \${expression} -->
<p>Server Info: \${pageContext.servletContext.serverInfo}</p>

<!-- JSTL forEach (replaces scriptlet loops) -->
<c:forEach var="i" begin="1" end="5">
    <p>Item \${i}</p>
</c:forEach>

</body>
</html>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A result display page (<code>result.jsp</code>) uses scriptlets to fetch student data from the request attribute set by the controller servlet, loops through the subjects and marks to generate an HTML table, and uses expressions to display the calculated CGPA. The scriptlet handles the calculation logic while the HTML handles the presentation.</p>
    <p><strong>Scenario 2:</strong> A page counter using declarations stores a class-level <code>visitCount</code> variable that increments on every request. The scriptlet (<code>&lt;% visitCount++; %&gt;</code>) updates the counter, and the expression (<code>&lt;%= visitCount %&gt;</code>) displays it. Note: this works but is not thread-safe—<code>synchronized</code> blocks or <code>AtomicInteger</code> should be used in production for shared variables.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li><strong>Scriptlet</strong> <code>&lt;% %&gt;</code>: Executes Java code (becomes code in _jspService)</li>
      <li><strong>Expression</strong> <code>&lt;%= %&gt;</code>: Outputs value to HTML (no semicolon!)</li>
      <li><strong>Declaration</strong> <code>&lt;%! %&gt;</code>: Defines class-level methods/fields</li>
      <li><strong>Directive</strong> <code>&lt;%@ %&gt;</code>: Page-level instructions (import, include, taglib)</li>
      <li>Modern best practice: Use <strong>JSTL tags + EL</strong> instead of scriptlets</li>
      <li>Scriptlet variables are <strong>method-scoped</strong>; Declaration variables are <strong>class-scoped</strong></li>
    </ul>
  </div>,
];

export const q6Answers: React.ReactNode[] = [
  // 6a. AOP in Spring
  <div key="6a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">6a. Explain AOP in Spring. What are the different types of advice?</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Aspect-Oriented Programming (AOP)</strong> in Spring is a powerful paradigm that complements Object-Oriented Programming by modularizing <strong>cross-cutting concerns</strong>—aspects of a program that affect multiple modules and cannot be cleanly encapsulated in a single class. Cross-cutting concerns include logging, security, transaction management, performance monitoring, caching, and exception handling. Without AOP, these concerns would be scattered across the entire codebase (code scattering) and tangled with business logic (code tangling), making the system harder to understand, maintain, and modify.</p>
    <p>Spring AOP is implemented using <strong>dynamic proxies</strong> at runtime. When a bean is eligible for AOP, Spring creates a proxy object that wraps the target bean. The proxy intercepts method calls, executes the aspect's advice (additional behavior), and then delegates to the actual target method. Spring AOP supports only <strong>method-level join points</strong> (unlike AspectJ which also supports field access, constructor calls, etc.), which covers the vast majority of use cases in enterprise applications.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of AOP like a <strong>home security system</strong>. You install cameras and sensors (aspects) at strategic points (join points) like doors and windows. When someone enters (a method is called), the security system can: record who entered (Before advice), record when they left (After advice), check if they're authorized (Around advice), or trigger an alarm if something goes wrong (After Throwing advice). The security system operates independently of what the person does inside—the business logic remains untouched.</p>
    <p>Key AOP terminology: <strong>Aspect</strong> = a module encapsulating cross-cutting concern (e.g., LoggingAspect); <strong>Join Point</strong> = a point during execution (in Spring, always a method execution); <strong>Pointcut</strong> = a predicate/expression that matches join points (e.g., <code>execution(* com.example.service.*.*(..))</code>); <strong>Advice</strong> = the action taken by the aspect at a join point; <strong>Target Object</strong> = the object being advised; <strong>Weaving</strong> = linking aspects with target objects (done at runtime in Spring via dynamic proxies).</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Types of Advice — Detailed Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Advice Type</th>
            <th className="border border-gray-600 p-2 text-left">Annotation</th>
            <th className="border border-gray-600 p-2 text-left">When it Runs</th>
            <th className="border border-gray-600 p-2 text-left">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>Before</strong></td><td className="border border-gray-600 p-2"><code>@Before</code></td><td className="border border-gray-600 p-2">Before the target method executes</td><td className="border border-gray-600 p-2">Authentication, input validation, logging entry</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>After Returning</strong></td><td className="border border-gray-600 p-2"><code>@AfterReturning</code></td><td className="border border-gray-600 p-2">After method returns successfully</td><td className="border border-gray-600 p-2">Logging results, auditing, notifications</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>After Throwing</strong></td><td className="border border-gray-600 p-2"><code>@AfterThrowing</code></td><td className="border border-gray-600 p-2">After method throws an exception</td><td className="border border-gray-600 p-2">Error logging, sending alerts, rollback</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>After (Finally)</strong></td><td className="border border-gray-600 p-2"><code>@After</code></td><td className="border border-gray-600 p-2">After method exits (success or exception)</td><td className="border border-gray-600 p-2">Resource cleanup, releasing connections</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Around</strong></td><td className="border border-gray-600 p-2"><code>@Around</code></td><td className="border border-gray-600 p-2">Wraps the method completely (before + after)</td><td className="border border-gray-600 p-2">Performance timing, caching, transactions</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Comprehensive AOP Example =====
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.ProceedingJoinPoint;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ComprehensiveAspect {

    // Pointcut: Match all methods in service package
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void allServiceMethods() {}

    // 1. BEFORE ADVICE
    @Before("allServiceMethods()")
    public void beforeMethod() {
        System.out.println("[BEFORE] Method execution"
            + " started at: " + new java.util.Date());
    }

    // 2. AFTER RETURNING ADVICE
    @AfterReturning(pointcut = "allServiceMethods()",
                    returning = "result")
    public void afterReturning(Object result) {
        System.out.println("[AFTER RETURNING] Method"
            + " returned: " + result);
    }

    // 3. AFTER THROWING ADVICE
    @AfterThrowing(pointcut = "allServiceMethods()",
                   throwing = "ex")
    public void afterThrowing(Exception ex) {
        System.out.println("[AFTER THROWING] Exception: "
            + ex.getMessage());
        // Could send email alert or log to file
    }

    // 4. AFTER (FINALLY) ADVICE
    @After("allServiceMethods()")
    public void afterFinally() {
        System.out.println("[AFTER] Method execution"
            + " completed (regardless of outcome)");
    }

    // 5. AROUND ADVICE (Most Powerful)
    @Around("allServiceMethods()")
    public Object aroundAdvice(
            ProceedingJoinPoint pjp) throws Throwable {
        // BEFORE logic
        long startTime = System.currentTimeMillis();
        String methodName = pjp.getSignature().getName();
        System.out.println("[AROUND BEFORE] Executing: "
            + methodName);

        Object result;
        try {
            // EXECUTE the actual target method
            result = pjp.proceed();
        } catch (Exception e) {
            // Handle exception
            System.out.println("[AROUND ERROR] "
                + e.getMessage());
            throw e; // Re-throw or handle
        } finally {
            // AFTER logic
            long endTime = System.currentTimeMillis();
            System.out.println("[AROUND AFTER] "
                + methodName + " took "
                + (endTime - startTime) + "ms");
        }
        return result;
    }
}

// ===== Business Class (no cross-cutting code!) =====
@Service
public class StudentService {
    public Student getStudent(int id) {
        // Pure business logic only
        return repository.findById(id);
        // Logging, timing, error handling
        // are ALL handled by aspects automatically!
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A banking application uses <code>@Around</code> advice for transaction management. When <code>transferMoney()</code> is called, the aspect begins a database transaction before the method executes (<code>pjp.proceed()</code>), commits the transaction if the method succeeds, or rolls back if an exception is thrown. This transaction management is completely transparent to the business code—the service method contains only transfer logic.</p>
    <p><strong>Scenario 2:</strong> A REST API monitoring system uses all five advice types: <code>@Before</code> logs the incoming request parameters; <code>@Around</code> measures execution time and enforces a 5-second timeout; <code>@AfterReturning</code> logs the response status code; <code>@AfterThrowing</code> sends an email alert to the admin with the stack trace; <code>@After</code> releases any held resources. The API developer writes only business logic—monitoring is completely handled by aspects.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>AOP modularizes <strong>cross-cutting concerns</strong> (logging, security, transactions)</li>
      <li>5 types of advice: <code>@Before</code>, <code>@AfterReturning</code>, <code>@AfterThrowing</code>, <code>@After</code>, <code>@Around</code></li>
      <li><code>@Around</code> is the most powerful—it can control whether the method executes at all</li>
      <li>Key terms: Aspect, Join Point, Pointcut, Advice, Target, Weaving</li>
      <li>Spring AOP uses <strong>dynamic proxies</strong> (runtime weaving)</li>
      <li>Pointcut expressions: <code>execution(* package.*.*(..))</code></li>
    </ul>
  </div>,

  // 6b. Annotation vs XML Configuration
  <div key="6b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">6b. How is annotation-based configuration better than XML configuration in Spring?</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p>Spring Framework originally relied exclusively on <strong>XML configuration</strong> to define beans, dependencies, and application behavior. Developers had to write large XML files with <code>&lt;bean&gt;</code> elements, property injections, and various namespace configurations. While powerful, this approach led to verbose, hard-to-maintain configuration files that were disconnected from the actual Java code. As applications grew, XML files could span hundreds of lines, making it difficult to trace which classes were being configured and how dependencies were wired.</p>
    <p><strong>Annotation-based configuration</strong>, introduced in Spring 2.5 and significantly expanded in Spring 3.0+, allows developers to configure the application using annotations directly on Java classes and methods. Annotations like <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Autowired</code>, <code>@Configuration</code>, and <code>@Bean</code> replace their XML counterparts. The configuration lives <strong>alongside the code</strong> it configures, improving readability, reducing verbosity, and making it easier to understand the application structure. Modern Spring Boot applications use almost zero XML configuration.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of XML configuration like a <strong>separate rulebook in a filing cabinet</strong> that describes how each employee should work. You have to walk to the filing cabinet, find the right page, read the rules, and then apply them to the employee. Annotation-based configuration is like the employee <strong>wearing a name badge with their role written on it</strong>—you can see their role immediately without looking elsewhere. The information is co-located with the person it describes, making it instantly accessible.</p>
    <p>Annotation-based configuration offers several advantages: (1) <strong>Proximity</strong>—configuration is right next to the code it affects; (2) <strong>Type safety</strong>—the compiler catches errors at compile-time vs. XML errors that only appear at runtime; (3) <strong>Conciseness</strong>—a single annotation like <code>@Service</code> replaces 5-10 lines of XML; (4) <strong>Refactoring support</strong>—IDEs can automatically rename/move annotated classes; (5) <strong>Readability</strong>—developers can understand the component's role without switching files.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Detailed Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">Feature</th>
            <th className="border border-gray-600 p-2 text-left">XML Configuration</th>
            <th className="border border-gray-600 p-2 text-left">Annotation-Based</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>Location</strong></td><td className="border border-gray-600 p-2">Separate .xml file</td><td className="border border-gray-600 p-2">Inline with Java code</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Verbosity</strong></td><td className="border border-gray-600 p-2">Very verbose (5-10 lines per bean)</td><td className="border border-gray-600 p-2">Concise (1 annotation)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Type Safety</strong></td><td className="border border-gray-600 p-2">No (errors at runtime)</td><td className="border border-gray-600 p-2">Yes (compiler checks)</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Refactoring</strong></td><td className="border border-gray-600 p-2">Manual search and replace</td><td className="border border-gray-600 p-2">IDE auto-refactors</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Readability</strong></td><td className="border border-gray-600 p-2">Low (must switch files)</td><td className="border border-gray-600 p-2">High (co-located with code)</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Debugging</strong></td><td className="border border-gray-600 p-2">Harder (XML parsing errors)</td><td className="border border-gray-600 p-2">Easier (standard Java errors)</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>Learning Curve</strong></td><td className="border border-gray-600 p-2">Steep (XML schemas, namespaces)</td><td className="border border-gray-600 p-2">Gentle (just learn annotations)</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>Maintenance</strong></td><td className="border border-gray-600 p-2">Harder (separate files to sync)</td><td className="border border-gray-600 p-2">Easier (single file changes)</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation — Side by Side</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== XML Configuration (OLD WAY) =====
// File: applicationContext.xml
<beans xmlns="http://www.springframework.org/schema/beans">
    <bean id="studentRepository"
          class="com.example.repo.MySQLRepository"/>

    <bean id="studentService"
          class="com.example.service.StudentService">
        <property name="repository"
                  ref="studentRepository"/>
    </bean>

    <bean id="studentController"
          class="com.example.controller.StudentController">
        <property name="service"
                  ref="studentService"/>
    </bean>
</beans>
// Total: 15+ lines of XML for just 3 beans!

// ===== Annotation-Based (MODERN WAY) =====
// No XML needed! Just annotations on Java classes.

// Repository layer
@Repository  // Replaces <bean id="..." class="...">
public class MySQLRepository implements StudentRepository {
    public Student findById(int id) {
        // Database logic
    }
}

// Service layer
@Service
public class StudentService {
    private final StudentRepository repository;

    @Autowired  // Replaces <property ref="...">
    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student getStudent(int id) {
        return repository.findById(id);
    }
}

// Controller layer
@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final StudentService service;

    @Autowired
    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable int id) {
        return service.getStudent(id);
    }
}
// Total: 0 lines of XML! Just clean Java annotations.

// Java-based Configuration (alternative to XML)
@Configuration
public class AppConfig {

    @Bean
    public StudentRepository studentRepository() {
        return new MySQLRepository();
    }

    @Bean
    public StudentService studentService() {
        return new StudentService(studentRepository());
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A team adds a new <code>EmailService</code> to their application. With XML, they must edit the XML file (risk of typos in class names, wrong property references), restart the server, and potentially face runtime errors from misconfiguration. With annotations, they simply create the class with <code>@Service</code>, inject dependencies with <code>@Autowired</code>, and the compiler immediately catches any type mismatches—zero XML editing needed.</p>
    <p><strong>Scenario 2:</strong> During refactoring, the team renames <code>StudentService</code> to <code>StudentBusinessService</code> and moves it to a different package. With XML, they must manually find and update every reference in the XML file (error-prone). With annotations, the IDE's refactoring tool automatically updates everything—the <code>@Service</code> annotation stays with the class, and <code>@Autowired</code> finds the bean by type regardless of name changes.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>Annotations are <strong>concise</strong>, <strong>co-located</strong> with code, and <strong>type-safe</strong></li>
      <li>XML is <strong>verbose</strong>, <strong>separate</strong> from code, and <strong>error-prone</strong> (runtime errors only)</li>
      <li>Key annotations: <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>, <code>@Autowired</code></li>
      <li><code>@Configuration</code> + <code>@Bean</code> replaces XML bean definitions</li>
      <li>Modern Spring Boot uses <strong>almost zero XML</strong></li>
      <li>XML still useful for: third-party library config, changing config without recompiling</li>
    </ul>
  </div>,
];

export const q7Answers: React.ReactNode[] = [
  // 7a. REST APIs in Spring Boot
  <div key="7a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">7a. Explain how to build and test GET, POST, PUT, and DELETE APIs using Spring Boot.</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>REST (Representational State Transfer)</strong> is an architectural style for designing networked applications, using HTTP methods as verbs to perform CRUD (Create, Read, Update, Delete) operations on resources. A RESTful API exposes endpoints (URLs) that clients can interact with using standard HTTP methods: <strong>GET</strong> (retrieve), <strong>POST</strong> (create), <strong>PUT</strong> (update), and <strong>DELETE</strong> (remove). Spring Boot makes building REST APIs incredibly simple through its <code>@RestController</code> annotation, automatic JSON serialization (via Jackson), and embedded Tomcat server.</p>
    <p>Spring Boot provides a layered architecture for REST APIs: the <code>@RestController</code> handles HTTP requests and responses, the <code>@Service</code> layer contains business logic, and the <code>@Repository</code> (typically extending Spring Data JPA's <code>JpaRepository</code>) handles database operations. Spring Boot auto-configures the entire stack—including the dispatcher servlet, message converters, error handling, and Jackson JSON serialization—requiring minimal developer setup.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of REST APIs like a <strong>library management system</strong>. <strong>GET</strong> is browsing the catalog (read without changing anything). <strong>POST</strong> is adding a new book to the library (create a new resource). <strong>PUT</strong> is updating a book's information (modify an existing resource). <strong>DELETE</strong> is removing a book from the catalog (delete a resource). Each operation maps to a specific URL and HTTP method, following predictable patterns that any client (web, mobile, desktop) can understand.</p>
    <p>HTTP methods map to CRUD: GET = Read (safe, idempotent), POST = Create (neither safe nor idempotent), PUT = Update (idempotent—same request twice gives same result), DELETE = Delete (idempotent). Response status codes indicate outcomes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error). Spring Boot's <code>ResponseEntity</code> class allows setting both the response body and the HTTP status code.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 HTTP Methods &amp; CRUD Mapping</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-600 text-sm">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="border border-gray-600 p-2 text-left">HTTP Method</th>
            <th className="border border-gray-600 p-2 text-left">CRUD Operation</th>
            <th className="border border-gray-600 p-2 text-left">Endpoint Example</th>
            <th className="border border-gray-600 p-2 text-left">Annotation</th>
            <th className="border border-gray-600 p-2 text-left">Status Code</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-600 p-2"><strong>GET</strong></td><td className="border border-gray-600 p-2">Read</td><td className="border border-gray-600 p-2">GET /api/students</td><td className="border border-gray-600 p-2"><code>@GetMapping</code></td><td className="border border-gray-600 p-2">200 OK</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>GET</strong></td><td className="border border-gray-600 p-2">Read One</td><td className="border border-gray-600 p-2">GET /api/students/1</td><td className="border border-gray-600 p-2"><code>@GetMapping("/{'{'}id{'}'}")</code></td><td className="border border-gray-600 p-2">200 OK / 404</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>POST</strong></td><td className="border border-gray-600 p-2">Create</td><td className="border border-gray-600 p-2">POST /api/students</td><td className="border border-gray-600 p-2"><code>@PostMapping</code></td><td className="border border-gray-600 p-2">201 Created</td></tr>
          <tr className="bg-gray-800/30"><td className="border border-gray-600 p-2"><strong>PUT</strong></td><td className="border border-gray-600 p-2">Update</td><td className="border border-gray-600 p-2">PUT /api/students/1</td><td className="border border-gray-600 p-2"><code>@PutMapping</code></td><td className="border border-gray-600 p-2">200 OK</td></tr>
          <tr><td className="border border-gray-600 p-2"><strong>DELETE</strong></td><td className="border border-gray-600 p-2">Delete</td><td className="border border-gray-600 p-2">DELETE /api/students/1</td><td className="border border-gray-600 p-2"><code>@DeleteMapping</code></td><td className="border border-gray-600 p-2">204 No Content</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Entity Class =====
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String course;
    // Constructors, getters, setters...
}

// ===== Repository Interface =====
@Repository
public interface StudentRepository
        extends JpaRepository<Student, Long> {
    // CRUD methods are auto-provided by Spring Data JPA!
    // Optional: Custom queries
    List<Student> findByCourse(String course);
}

// ===== REST Controller =====
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // GET: Retrieve all students
    @GetMapping
    public ResponseEntity<List<Student>>
            getAllStudents() {
        List<Student> students =
            studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    // GET: Retrieve single student by ID
    @GetMapping("/{id}")
    public ResponseEntity<Student>
            getStudentById(@PathVariable Long id) {
        Student student =
            studentService.getStudentById(id);
        if (student != null) {
            return ResponseEntity.ok(student);
        }
        return ResponseEntity.notFound().build();
    }

    // POST: Create a new student
    @PostMapping
    public ResponseEntity<Student>
            createStudent(@RequestBody Student student) {
        Student created =
            studentService.createStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body(created);
    }

    // PUT: Update an existing student
    @PutMapping("/{id}")
    public ResponseEntity<Student>
            updateStudent(@PathVariable Long id,
                         @RequestBody Student student) {
        Student updated =
            studentService.updateStudent(id, student);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    // DELETE: Remove a student
    @DeleteMapping("/{id}")
    public ResponseEntity<Void>
            deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
}

// ===== Testing with Postman/cURL =====
// GET all:    curl http://localhost:8080/api/students
// GET one:    curl http://localhost:8080/api/students/1
// POST:       curl -X POST http://localhost:8080/api/students
//              -H "Content-Type: application/json"
//              -d '{"name":"Rahul","email":"r@test.com"}'
// PUT:        curl -X PUT http://localhost:8080/api/students/1
//              -H "Content-Type: application/json"
//              -d '{"name":"Rahul Updated","email":"r@new.com"}'
// DELETE:     curl -X DELETE http://localhost:8080/api/students/1`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A student management portal: GET <code>/api/students</code> returns a JSON array of all students. GET <code>/api/students/5</code> returns the student with ID 5. POST <code>/api/students</code> with JSON body <code>{'{'}"name":"Rahul","email":"r@univ.edu"{'}'}</code> creates a new student and returns the saved entity with generated ID. PUT <code>/api/students/5</code> with updated data modifies student 5. DELETE <code>/api/students/5</code> removes student 5. Each operation returns appropriate HTTP status codes.</p>
    <p><strong>Scenario 2:</strong> Testing with JUnit and MockMvc: <code>mockMvc.perform(get("/api/students"))</code> tests GET and asserts status 200 and JSON content. <code>mockMvc.perform(post("/api/students").contentType(JSON).content(body))</code> tests POST and asserts status 201. Spring Boot's <code>@SpringBootTest</code> and <code>AutoConfigureMockMvc</code> annotations set up a full test context with an embedded server, allowing comprehensive API testing without deploying to an external server.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li><code>@RestController</code> = <code>@Controller</code> + <code>@ResponseBody</code></li>
      <li>Annotations: <code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, <code>@DeleteMapping</code></li>
      <li><code>@PathVariable</code> extracts URL variables; <code>@RequestBody</code> maps JSON to Java object</li>
      <li><code>ResponseEntity</code> controls response body + HTTP status code</li>
      <li>Test with: cURL, Postman, or Spring MockMvc</li>
      <li>CRUD maps to HTTP: GET(Read), POST(Create), PUT(Update), DELETE(Delete)</li>
    </ul>
  </div>,

  // 7b. Logging in Spring Boot
  <div key="7b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-300 mb-2">7b. How can you configure logging in a Spring Boot application?</h3>
    <hr className="border-gray-600" />

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Logging</strong> is the practice of recording application events, errors, and diagnostic information during runtime. In production applications, logging is essential for debugging issues, monitoring application health, auditing user actions, and meeting compliance requirements. Spring Boot provides comprehensive logging support right out of the box, using <strong>SLF4J</strong> (Simple Logging Facade for Java) as the abstraction layer and <strong>Logback</strong> as the default logging implementation. No additional configuration is needed to start logging—Spring Boot auto-configures console logging with sensible defaults.</p>
    <p>Logging operates at different <strong>levels</strong> that indicate severity: <strong>TRACE</strong> (finest-grained details), <strong>DEBUG</strong> (detailed debugging info), <strong>INFO</strong> (general application flow), <strong>WARN</strong> (potential issues), and <strong>ERROR</strong> (failures requiring attention). You control which messages appear by setting the logging level—if set to INFO, all INFO, WARN, and ERROR messages appear but DEBUG and TRACE are suppressed. This hierarchy allows you to adjust verbosity without changing code—just configuration.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of logging levels like <strong>security camera sensitivity</strong>. TRACE mode records every tiny movement (exhaustive but overwhelming). DEBUG records significant movements. INFO records people entering/exiting rooms. WARN records suspicious activity. ERROR records only break-ins and serious incidents. In production, you set it to INFO or WARN (balanced). When debugging a specific issue, you temporarily increase sensitivity to DEBUG or TRACE for the problematic area, then dial it back.</p>
    <p>Spring Boot's logging architecture has three layers: (1) <strong>SLF4J</strong> (facade)—the API your code calls (<code>LoggerFactory.getLogger()</code>); (2) <strong>Logback</strong> (implementation)—processes and writes the log messages; (3) <strong>Configuration</strong>—<code>application.properties</code> or <code>logback-spring.xml</code> controls levels, formats, and destinations. You can switch from Logback to Log4j2 by simply changing the dependency—SLF4J ensures your code doesn't change.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">📊 Log Level Hierarchy</h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <p>TRACE  (Most Verbose) ← All messages logged</p>
      <p>  ↓</p>
      <p>DEBUG  (Detailed Info) ← Debugging specific issues</p>
      <p>  ↓</p>
      <p>INFO   (General Flow)  ← Normal application events</p>
      <p>  ↓</p>
      <p>WARN   (Warnings)     ← Potential problems</p>
      <p>  ↓</p>
      <p>ERROR  (Errors)       ← Failures, exceptions</p>
      <p>  ↓</p>
      <p>OFF    (No Logging)   ← All logging disabled</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== 1. Basic Logging in a Spring Boot Class =====
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    // Create a logger for this class
    private static final Logger logger =
        LoggerFactory.getLogger(StudentService.class);

    public Student getStudent(int id) {
        logger.trace("Trace: getStudent({}) called", id);
        logger.debug("Debug: Fetching student with id={}", id);

        Student student = repository.findById(id);

        if (student != null) {
            logger.info("Info: Found student: {}", student);
        } else {
            logger.warn("Warn: Student not found, id={}", id);
        }

        return student;
    }

    public Student createStudent(Student student) {
        try {
            Student saved = repository.save(student);
            logger.info("Created student: id={}, name={}",
                saved.getId(), saved.getName());
            return saved;
        } catch (Exception e) {
            logger.error("Error creating student: {}",
                e.getMessage(), e);
            throw e;
        }
    }
}

// ===== 2. Using Lombok @Slf4j (Shortcut) =====
import lombok.extern.slf4j.Slf4j;

@Slf4j   // Auto-generates: private static final Logger log = ...
@Service
public class CourseService {
    public void enroll(String student, String course) {
        log.info("Enrolling {} in {}", student, course);
        // log.debug(), log.warn(), log.error() all available
    }
}

// ===== 3. Configure in application.properties =====
# Set global logging level
logging.level.root=WARN

# Set specific package to DEBUG
logging.level.com.example.service=DEBUG

# Set specific class to TRACE
logging.level.com.example.service.StudentService=TRACE

# Log file output (in addition to console)
logging.file.name=logs/application.log
logging.file.max-size=10MB
logging.file.max-history=30

# Log pattern (custom format)
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss}
    [%thread] %-5level %logger{36} - %msg%n
logging.pattern.file=%d{ISO8601} [%thread] %level
    %logger - %msg%n

# ===== 4. Advanced: logback-spring.xml =====
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!-- Console Appender -->
    <appender name="CONSOLE"
              class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{HH:mm:ss} %highlight(%-5level)
                %cyan(%logger{20}) - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- File Appender (with rolling policy) -->
    <appender name="FILE"
              class="ch.qos.logback.core.rolling
                     .RollingFileAppender">
        <file>logs/app.log</file>
        <rollingPolicy class="ch.qos.logback.core
                          .rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/app.%d{yyyy-MM-dd}.log
            </fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{ISO8601} [%thread] %-5level
                %logger - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- Set logging levels per package -->
    <logger name="com.example" level="DEBUG"/>
    <logger name="org.springframework" level="INFO"/>

    <root level="WARN">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>
</configuration>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> In production, an e-commerce application logs at INFO level globally. When a payment fails, the <code>PaymentService</code> logs an ERROR with the exception stack trace and order ID. The operations team receives an alert. To debug, they temporarily change <code>logging.level.com.example.service.PaymentService=DEBUG</code> in <code>application.properties</code>, restart the service, and reproduce the issue. DEBUG logs reveal the exact API call that failed—no code changes needed.</p>
    <p><strong>Scenario 2:</strong> A university portal logs all student login attempts (INFO), failed logins (WARN), and system errors (ERROR). Logs are written to both console and a rolling file (<code>logs/app.log</code>) with daily rotation. After 30 days, old logs are auto-deleted. The admin uses <code>grep "ERROR" logs/app.log</code> to find all errors in the past day. Spring Boot Actuator's <code>/actuator/loggers</code> endpoint allows changing log levels at runtime without restarting the application.</p>

    <h4 className="text-lg font-semibold text-emerald-300 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      <li>Spring Boot uses <strong>SLF4J + Logback</strong> by default (no setup needed)</li>
      <li>Log levels (ascending severity): TRACE → DEBUG → INFO → WARN → ERROR</li>
      <li>Configure in <code>application.properties</code>: <code>logging.level.com.example=DEBUG</code></li>
      <li>Use <code>LoggerFactory.getLogger(ClassName.class)</code> or Lombok's <code>@Slf4j</code></li>
      <li>File logging: <code>logging.file.name=logs/app.log</code></li>
      <li>Advanced config: <code>logback-spring.xml</code> for rolling files, patterns, multiple appenders</li>
    </ul>
  </div>,
];
