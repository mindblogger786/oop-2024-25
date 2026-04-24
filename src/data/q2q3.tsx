import React from "react";

export const q2Answers: React.ReactNode[] = [
  // 2a. Variables in Java
  <div key="2a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2a. Explain in detail about variables in Java.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>variable</strong> in Java is a named memory location that stores a value which can be read and modified during program execution. Java is a <strong>statically typed language</strong>, meaning every variable must be declared with a specific data type before it can be used, and the type cannot change during the variable's lifetime. Variables are the fundamental mechanism for storing data, passing information between methods, and maintaining state in objects. Java provides three categories of variables based on their scope and lifetime: <strong>local variables</strong> (declared inside methods), <strong>instance variables</strong> (declared in a class but outside any method — unique to each object), and <strong>static variables</strong> (declared with the <code>static</code> keyword — shared across all instances of the class).</p>
    <p>Java variables are also classified by their data types: <strong>primitive types</strong> (byte, short, int, long, float, double, char, boolean — storing direct values) and <strong>reference types</strong> (objects, arrays, strings — storing memory addresses pointing to heap objects). Each type of variable has specific rules regarding default values, scope, lifetime, and memory allocation. Understanding variables deeply is essential because they form the foundation of all data manipulation in Java programs.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Types of Variables</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Local Variable</th>
            <th className="border border-gray-300 p-2 text-left">Instance Variable</th>
            <th className="border border-gray-300 p-2 text-left">Static Variable</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Declared In</strong></td><td className="border border-gray-300 p-2">Methods, constructors, blocks</td><td className="border border-gray-300 p-2">Class, outside methods</td><td className="border border-gray-300 p-2">Class, with 'static' keyword</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Scope</strong></td><td className="border border-gray-300 p-2">Within that method/block</td><td className="border border-gray-300 p-2">Entire class (via object)</td><td className="border border-gray-300 p-2">Entire class (via class name)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Default Value</strong></td><td className="border border-gray-300 p-2">None (must initialize)</td><td className="border border-gray-300 p-2">0, null, false, 0.0</td><td className="border border-gray-300 p-2">0, null, false, 0.0</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Memory</strong></td><td className="border border-gray-300 p-2">Stack</td><td className="border border-gray-300 p-2">Heap (inside object)</td><td className="border border-gray-300 p-2">Method area (Class level)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Lifetime</strong></td><td className="border border-gray-300 p-2">Method execution</td><td className="border border-gray-300 p-2">Object lifetime</td><td className="border border-gray-300 p-2">Program lifetime</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Access</strong></td><td className="border border-gray-300 p-2">Only within method</td><td className="border border-gray-300 p-2">objectName.varName</td><td className="border border-gray-300 p-2">ClassName.varName</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Copies</strong></td><td className="border border-gray-300 p-2">One per method call</td><td className="border border-gray-300 p-2">One per object</td><td className="border border-gray-300 p-2">One per class (shared)</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`public class VariableDemo {
    // Instance variables (one copy per object)
    String studentName;
    int rollNo;
    double marks;

    // Static variable (one copy shared by ALL objects)
    static String university = "Delhi University";
    static int studentCount = 0;

    // Constructor
    VariableDemo(String name, int roll, double m) {
        // 'this' differentiates instance vars from parameters
        this.studentName = name;
        this.rollNo = roll;
        this.marks = m;
        studentCount++;  // Shared counter increments
    }

    void display() {
        // Local variable (exists only in this method)
        String status = (marks >= 40) ? "PASS" : "FAIL";
        System.out.println(rollNo + " | " + studentName
            + " | " + marks + " | " + status
            + " | " + university);
    }

    public static void main(String[] args) {
        // Creating objects
        VariableDemo s1 = new VariableDemo("Rahul", 101, 92.5);
        VariableDemo s2 = new VariableDemo("Priya", 102, 87.0);

        s1.display();
        s2.display();

        // Accessing static variable via class name
        System.out.println("University: " + VariableDemo.university);
        System.out.println("Total Students: " + VariableDemo.studentCount);

        // Primitive types demonstration
        byte b = 127;            // 1 byte: -128 to 127
        short s = 32000;         // 2 bytes
        int i = 100000;          // 4 bytes (default for integers)
        long l = 9999999999L;    // 8 bytes (L suffix required)
        float f = 3.14f;         // 4 bytes (f suffix required)
        double d = 3.14159265;  // 8 bytes (default for decimals)
        char c = 'A';            // 2 bytes (Unicode)
        boolean flag = true;     // 1 bit (true or false)

        // Reference type
        String name = "Java Programming"; // Object on heap
        int[] arr = {10, 20, 30};        // Array object on heap
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university enrollment system: each student's <code>name</code> and <code>rollNo</code> are instance variables (different for each student object). The <code>university</code> name is a static variable (same for all students — one shared copy). Inside the <code>calculateGPA()</code> method, <code>totalCredits</code> is a local variable that exists only during that method's execution and is destroyed when the method returns.</p>
    <p><strong>Scenario 2:</strong> A bank tracks account holders using instance variables (<code>accountNumber</code>, <code>balance</code> — unique per account). The bank's <code>bankName</code> and <code>totalAccounts</code> are static variables — shared across all account objects. When a new account is created, the static counter increments. If bankName changes, it reflects across all accounts instantly because there is only one copy.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Three types: <strong>local</strong> (method scope, stack), <strong>instance</strong> (object scope, heap), <strong>static</strong> (class scope, method area)</li>
      <li>Local variables must be initialized before use; instance/static get default values</li>
      <li>8 primitive types: byte, short, int, long, float, double, char, boolean</li>
      <li>Reference types: objects, arrays, strings — store memory addresses</li>
      <li>Static variables accessed via class name; instance via object reference</li>
      <li>Java is statically typed — type must be declared and cannot change</li>
    </ul>
  </div>,

  // 2b. Object Cloning
  <div key="2b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2b. What is object cloning in Java? Differentiate between shallow and deep copy.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Object cloning</strong> is the process of creating an exact duplicate (copy) of an existing object. Java provides the <code>clone()</code> method from the <code>Object</code> class that creates and returns a copy of the object. To make a class cloneable, it must implement the <code>Cloneable</code> marker interface — otherwise, calling <code>clone()</code> throws <code>CloneNotSupportedException</code>. The clone method creates a new object and copies all fields from the original object to the new one. Cloning is useful when you need an independent copy of an object without going through the constructor, preserving the original object's state.</p>
    <p>There are two types of cloning: <strong>shallow copy</strong> (default behavior of <code>Object.clone()</code>) copies primitive fields by value and reference fields by copying the reference — meaning both original and clone point to the same referenced objects. <strong>Deep copy</strong> creates completely independent copies of all referenced objects as well, so the clone and original share no mutable state. Deep copy requires custom implementation — you must override <code>clone()</code> to manually clone each reference field.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Shallow vs Deep Copy</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Shallow Copy</th>
            <th className="border border-gray-300 p-2 text-left">Deep Copy</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Primitive Fields</strong></td><td className="border border-gray-300 p-2">Copied by value (independent)</td><td className="border border-gray-300 p-2">Copied by value (independent)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Reference Fields</strong></td><td className="border border-gray-300 p-2">Reference copied (shared objects)</td><td className="border border-gray-300 p-2">New objects created (independent)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Default clone()</strong></td><td className="border border-gray-300 p-2">Yes (Object.clone())</td><td className="border border-gray-300 p-2">No (must override clone())</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Independence</strong></td><td className="border border-gray-300 p-2">Partial — shared references</td><td className="border border-gray-300 p-2">Complete — fully independent</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Speed</strong></td><td className="border border-gray-300 p-2">Faster</td><td className="border border-gray-300 p-2">Slower (creates more objects)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Risk</strong></td><td className="border border-gray-300 p-2">Modifying shared object affects both</td><td className="border border-gray-300 p-2">No risk — fully isolated copies</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== SHALLOW COPY DEMO =====
class Address {
    String city;
    Address(String city) { this.city = city; }
}

class Student implements Cloneable {
    String name;
    Address address;  // Reference field

    Student(String name, String city) {
        this.name = name;
        this.address = new Address(city);
    }

    // Default Object.clone() → shallow copy
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // Shallow copy!
    }
}

// Demo:
Student s1 = new Student("Rahul", "Delhi");
Student s2 = (Student) s1.clone();  // Shallow clone

// s2 has its own 'name' (primitive-like String)
// BUT s2.address points to SAME Address object as s1
s2.name = "Priya";
s2.address.city = "Mumbai";

System.out.println(s1.name);        // "Rahul" (independent)
System.out.println(s1.address.city);// "Mumbai" (AFFECTED! Shared)

// ===== DEEP COPY DEMO =====
class AddressDeep implements Cloneable {
    String city;
    AddressDeep(String city) { this.city = city; }

    @Override
    protected Object clone()
            throws CloneNotSupportedException {
        return super.clone();
    }
}

class StudentDeep implements Cloneable {
    String name;
    AddressDeep address;

    StudentDeep(String name, String city) {
        this.name = name;
        this.address = new AddressDeep(city);
    }

    @Override
    protected Object clone()
            throws CloneNotSupportedException {
        // Step 1: Shallow copy of the object
        StudentDeep copy = (StudentDeep) super.clone();
        // Step 2: Deep copy the reference field
        copy.address = (AddressDeep) address.clone();
        return copy;  // Now fully independent!
    }
}

// Demo:
StudentDeep d1 = new StudentDeep("Rahul", "Delhi");
StudentDeep d2 = (StudentDeep) d1.clone();  // Deep clone

d2.name = "Priya";
d2.address.city = "Mumbai";

System.out.println(d1.name);        // "Rahul" (independent)
System.out.println(d1.address.city);// "Delhi" (UNAFFECTED!)`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A document editor clones a "Page" object. If using shallow copy, both original and clone share the same "Image" objects. Resizing an image in the clone would also resize it in the original — an unintended side effect. Deep copy creates independent copies of all images, so modifying one page does not affect the other.</p>
    <p><strong>Scenario 2:</strong> A banking system clones a customer record for a joint account. Shallow copy means both references share the same TransactionList — adding a transaction for one customer appears in the other's statement too. Deep copy gives each customer their own independent TransactionList, preventing data corruption.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Cloning creates a copy of an object using <code>clone()</code> method</li>
      <li>Class must implement <code>Cloneable</code> interface</li>
      <li><strong>Shallow copy</strong>: references are shared (default Object.clone())</li>
      <li><strong>Deep copy</strong>: all referenced objects are also cloned (custom override)</li>
      <li>Shallow copy is fast but risky; Deep copy is safe but slower</li>
      <li>Override <code>clone()</code> and manually clone each reference field for deep copy</li>
    </ul>
  </div>,

  // 2c. File Copy Program
  <div key="2c" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2c. Write a Java program to read content from one file and copy it to another file.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>File handling</strong> in Java is accomplished through classes in the <code>java.io</code> and <code>java.nio</code> packages. Reading from one file and writing to another is a fundamental operation involving opening a source file for reading, opening a destination file for writing, transferring data byte-by-byte or chunk-by-chunk, and properly closing both files. Java provides several approaches: character-based streams (<code>FileReader</code>/<code>FileWriter</code> for text files), byte-based streams (<code>FileInputStream</code>/<code>FileOutputStream</code> for binary files), and buffered streams (<code>BufferedReader</code>/<code>BufferedWriter</code> for efficient line-by-line processing).</p>
    <p>The most efficient approach uses <strong>buffered streams</strong> that read and write data in chunks rather than one byte/character at a time, significantly reducing disk I/O operations. It is critical to close file resources using <code>try-with-resources</code> (Java 7+) to ensure files are properly closed even if exceptions occur, preventing resource leaks and locked files.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`import java.io.*;
import java.nio.file.*;

public class FileCopyProgram {

    // ===== Method 1: Using BufferedReader/Writer (Best for text) =====
    static void copyTextFile(String source, String dest) {
        // try-with-resources (auto-closes resources)
        try (BufferedReader reader = new BufferedReader(
                new FileReader(source));
             BufferedWriter writer = new BufferedWriter(
                new FileWriter(dest))) {

            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine();  // Add line separator
            }
            System.out.println("Text file copied successfully!");

        } catch (FileNotFoundException e) {
            System.out.println("Source file not found: " + source);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    // ===== Method 2: Byte Stream (Works for ALL file types) =====
    static void copyBinaryFile(String source, String dest) {
        try (FileInputStream fis = new FileInputStream(source);
             FileOutputStream fos = new FileOutputStream(dest)) {

            byte[] buffer = new byte[4096]; // 4KB buffer
            int bytesRead;

            while ((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
            }
            System.out.println("Binary file copied successfully!");

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    // ===== Method 3: Java NIO Files.copy() (Simplest) =====
    static void copyWithNIO(String source, String dest) {
        try {
            Path src = Paths.get(source);
            Path dst = Paths.get(dest);
            Files.copy(src, dst,
                StandardCopyOption.REPLACE_EXISTING);
            System.out.println("NIO copy completed!");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        String sourceFile = "input.txt";
        String destFile = "output.txt";

        // Create sample input file
        try (PrintWriter pw = new PrintWriter(sourceFile)) {
            pw.println("Hello, Java File Handling!");
            pw.println("This is line 2.");
            pw.println("File copy demonstration.");
            pw.println("Web Technology - MCA");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        System.out.println("--- Method 1: BufferedReader ---");
        copyTextFile(sourceFile, destFile);

        System.out.println("--- Method 2: Byte Stream ---");
        copyBinaryFile(sourceFile, "output_binary.txt");

        System.out.println("--- Method 3: NIO Files.copy ---");
        copyWithNIO(sourceFile, "output_nio.txt");
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A log rotation system copies the current day's log file (<code>server.log</code>) to an archive (<code>server_2025-01-15.log</code>) and then clears the original. Using buffered character streams, the copy is efficient even for multi-GB log files. The <code>try-with-resources</code> statement ensures both files are closed even if an error occurs mid-copy.</p>
    <p><strong>Scenario 2:</strong> A backup utility copies image files from a source folder to a backup drive. Using byte streams (<code>FileInputStream</code>/<code>FileOutputStream</code>) with a 4KB buffer, it handles binary data correctly — unlike character streams which would corrupt images. The buffer size balances memory usage and I/O efficiency for files ranging from KB to GB.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Use <code>BufferedReader</code>/<code>BufferedWriter</code> for text files (line-by-line)</li>
      <li>Use <code>FileInputStream</code>/<code>FileOutputStream</code> for binary files (images, videos)</li>
      <li>Always use <code>try-with-resources</code> to auto-close file handles</li>
      <li>Buffer size (e.g., 4KB) balances memory and I/O performance</li>
      <li>Java NIO: <code>Files.copy()</code> is the simplest one-line approach</li>
      <li>Never forget to close streams — resource leaks can lock files</li>
    </ul>
  </div>,

  // 2d. Daemon Threads
  <div key="2d" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2d. What are daemon threads in Java?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>daemon thread</strong> in Java is a background thread that provides services to user threads (also called non-daemon threads) but does not prevent the JVM from exiting when all user threads have finished. Daemon threads are typically used for background tasks such as <strong>garbage collection</strong>, <strong>memory management</strong>, <strong>monitoring</strong>, <strong>logging</strong>, and <strong>auto-save operations</strong>. The JVM's own Garbage Collector is the most well-known daemon thread — it runs in the background cleaning up unused memory while user threads execute the main application logic.</p>
    <p>The critical characteristic of daemon threads is that the JVM exits when all <strong>user (non-daemon) threads</strong> complete — even if daemon threads are still running. Daemon threads are abruptly terminated when the JVM shuts down, meaning their <code>finally</code> blocks may not execute. Therefore, daemon threads should not be used for critical operations like file writing or database commits, as these operations may be interrupted mid-execution. A thread's daemon status is set using <code>setDaemon(true)</code> <strong>before</strong> calling <code>start()</code> — it cannot be changed once the thread has started.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Daemon vs User Thread</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">User Thread</th>
            <th className="border border-gray-300 p-2 text-left">Daemon Thread</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Purpose</strong></td><td className="border border-gray-300 p-2">Main application logic</td><td className="border border-gray-300 p-2">Background services</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>JVM Exit</strong></td><td className="border border-gray-300 p-2">JVM waits for completion</td><td className="border border-gray-300 p-2">JVM exits regardless</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Default</strong></td><td className="border border-gray-300 p-2">All threads are user by default</td><td className="border border-gray-300 p-2">Must set with setDaemon(true)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Priority</strong></td><td className="border border-gray-300 p-2">Normal priorities</td><td className="border border-gray-300 p-2">Usually lower priority</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Examples</strong></td><td className="border border-gray-300 p-2">main(), user-created threads</td><td className="border border-gray-300 p-2">GC, finalizer, reference handler</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Daemon Thread Demo =====
class AutoSaveThread extends Thread {
    AutoSaveThread() {
        setDaemon(true);  // MUST be before start()
        setName("AutoSave-Daemon");
    }

    public void run() {
        int count = 0;
        while (true) {  // Infinite loop — OK for daemon
            try {
                Thread.sleep(2000); // Every 2 seconds
                count++;
                System.out.println("[AutoSave] "
                    + "Document auto-saved #" + count);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class DaemonDemo {
    public static void main(String[] args) {
        // Create and start daemon thread
        AutoSaveThread autoSave = new AutoSaveThread();
        autoSave.start();

        // Main thread (user thread) does some work
        System.out.println("Main thread working...");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Editing paragraph " + i);
            try { Thread.sleep(1000); }
            catch (InterruptedException e) { }
        }

        System.out.println("Main thread finished!");
        System.out.println("JVM exits now — daemon thread killed.");
        // Daemon thread is terminated automatically!
    }
}

/*
Output:
  Main thread working...
  Editing paragraph 1
  Editing paragraph 2
  [AutoSave] Document auto-saved #1
  Editing paragraph 3
  Editing paragraph 4
  [AutoSave] Document auto-saved #2
  Editing paragraph 5
  Main thread finished!
  JVM exits now — daemon thread killed.
*/`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A word processor runs an auto-save daemon thread that saves the document every 30 seconds. While the user edits (user thread), the daemon periodically saves. When the user closes the application (user thread ends), the JVM exits and the auto-save daemon is terminated — no need to manually stop it.</p>
    <p><strong>Scenario 2:</strong> A Java web server runs a monitoring daemon thread that logs CPU and memory usage every 5 seconds. As long as the server is handling requests (user threads), the monitor runs. When all request-handling threads finish (server shutdown), the JVM exits and the monitor daemon is automatically terminated.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Daemon threads are <strong>background service threads</strong></li>
      <li>JVM exits when all <strong>user threads</strong> finish — daemon threads are killed</li>
      <li>Set daemon: <code>thread.setDaemon(true)</code> — must be called before <code>start()</code></li>
      <li>Examples: Garbage Collector, auto-save, monitoring, logging</li>
      <li>Do NOT use daemon threads for critical operations (finally may not run)</li>
      <li>Check status: <code>thread.isDaemon()</code> returns boolean</li>
    </ul>
  </div>,

  // 2e. Graphics2D
  <div key="2e" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2e. Write a short note on Graphics2D.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Graphics2D</strong> is a subclass of the <code>java.awt.Graphics</code> class that provides advanced two-dimensional rendering capabilities in Java. Introduced in Java 1.2 (Java 2D API), Graphics2D extends the basic Graphics class with sophisticated features including <strong>geometric transformations</strong> (rotate, scale, translate, shear), <strong>gradient and texture fills</strong>, <strong>anti-aliasing</strong> (smooth edges), <strong>alpha compositing</strong> (transparency), <strong>stroking and filling of shapes</strong> (lines, rectangles, ellipses, arcs, polygons), and <strong>image processing</strong>. It is the primary class for high-quality 2D graphics, chart rendering, image manipulation, and game development in Java.</p>
    <p>When you override <code>paintComponent(Graphics g)</code> in a Swing component, the passed Graphics object is actually a Graphics2D instance. You can cast it (<code>Graphics2D g2d = (Graphics2D) g</code>) to access the advanced features. Graphics2D uses a <strong>rendering pipeline</strong>: you set attributes (paint, stroke, transform, composite, rendering hints), then call draw/fill operations that apply these settings. This state-based approach means settings persist until explicitly changed.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Key Features of Graphics2D</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Method / Class</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Shapes</strong></td><td className="border border-gray-300 p-2">Line2D, Rectangle2D, Ellipse2D</td><td className="border border-gray-300 p-2">Precise geometric shapes</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Fill (Paint)</strong></td><td className="border border-gray-300 p-2">Color, GradientPaint, TexturePaint</td><td className="border border-gray-300 p-2">Solid, gradient, texture fills</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Stroke</strong></td><td className="border border-gray-300 p-2">BasicStroke(width, cap, join)</td><td className="border border-gray-300 p-2">Line width, dashes, endpoints</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Transform</strong></td><td className="border border-gray-300 p-2">rotate(), scale(), translate()</td><td className="border border-gray-300 p-2">Geometric transformations</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Anti-aliasing</strong></td><td className="border border-gray-300 p-2">RenderingHints.KEY_ANTIALIASING</td><td className="border border-gray-300 p-2">Smooth edges on shapes/text</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Transparency</strong></td><td className="border border-gray-300 p-2">AlphaComposite</td><td className="border border-gray-300 p-2">Opacity / transparency control</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`import javax.swing.*;
import java.awt.*;
import java.awt.geom.*;

public class Graphics2DDemo extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;

        // 1. Enable anti-aliasing for smooth edges
        g2d.setRenderingHint(
            RenderingHints.KEY_ANTIALIASING,
            RenderingHints.VALUE_ANTIALIAS_ON);

        // 2. Gradient fill for a rectangle
        GradientPaint gradient = new GradientPaint(
            50, 50, Color.BLUE, 250, 150, Color.CYAN);
        g2d.setPaint(gradient);
        g2d.fill(new Rectangle2D.Double(50, 50, 200, 100));

        // 3. Custom stroke (thick line with rounded caps)
        g2d.setStroke(new BasicStroke(5,
            BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND));
        g2d.setPaint(Color.RED);
        g2d.draw(new Ellipse2D.Double(300, 50, 120, 120));

        // 4. Rotation transformation
        g2d.translate(200, 300);  // Move origin
        g2d.rotate(Math.PI / 4); // Rotate 45 degrees
        g2d.setPaint(new Color(0, 150, 0)); // Green
        g2d.fill(new Rectangle2D.Double(-50, -25, 100, 50));
        g2d.rotate(-Math.PI / 4); // Restore rotation
        g2d.translate(-200, -300); // Restore position

        // 5. Drawing a curved shape (Bezier curve)
        g2d.setPaint(Color.MAGENTA);
        g2d.setStroke(new BasicStroke(3));
        QuadCurve2D curve = new QuadCurve2D.Double(
            350, 200, 420, 280, 500, 200);
        g2d.draw(curve);

        // 6. Transparency (alpha compositing)
        g2d.setComposite(AlphaComposite.getInstance(
            AlphaComposite.SRC_OVER, 0.5f)); // 50% transparent
        g2d.setPaint(Color.ORANGE);
        g2d.fill(new Rectangle2D.Double(380, 60, 100, 80));
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Graphics2D Demo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 450);
        frame.add(new Graphics2DDemo());
        frame.setVisible(true);
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A data visualization dashboard uses Graphics2D to render charts: GradientPaint creates colorful bar charts, Ellipse2D draws pie chart segments with anti-aliased edges, and transformations (translate/rotate) position labels at angles. The RenderingHints ensure text and shapes look crisp on high-DPI displays.</p>
    <p><strong>Scenario 2:</strong> A simple 2D game uses Graphics2D for rendering: rotation transforms spin the player's character, alpha compositing creates fade effects when enemies are defeated, and BasicStroke with dashed patterns draws the boundary wall. The transform stack (translate → rotate → draw → restore) allows drawing objects at arbitrary positions and angles.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Graphics2D extends <code>Graphics</code> with advanced 2D rendering</li>
      <li>Cast: <code>Graphics2D g2d = (Graphics2D) g</code></li>
      <li>Key features: shapes, gradients, transforms, anti-aliasing, transparency</li>
      <li>Shape classes: <code>Rectangle2D</code>, <code>Ellipse2D</code>, <code>Line2D</code>, <code>QuadCurve2D</code></li>
      <li>Transforms: <code>rotate()</code>, <code>scale()</code>, <code>translate()</code></li>
      <li>Always enable anti-aliasing for professional-quality output</li>
    </ul>
  </div>,
];

export const q3Answers: React.ReactNode[] = [
  // 3a. Constructors and super()
  <div key="3a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">3a. What is a constructor? Explain how subclass constructor implicitly calls super class constructor in Java.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>constructor</strong> in Java is a special method that is automatically invoked when an object is created using the <code>new</code> keyword. Its purpose is to initialize the object's state — setting fields to valid initial values, allocating resources, and performing setup operations. Constructors have the same name as the class, have no return type (not even void), and can be overloaded (multiple constructors with different parameters). Every class has at least one constructor: if none is defined explicitly, Java provides a <strong>default constructor</strong> (no-argument) that initializes fields to default values (0, null, false).</p>
    <p>In inheritance, when a subclass object is created, the <strong>parent class constructor must execute first</strong> to initialize the inherited fields before the subclass constructor initializes its own fields. If the subclass constructor does not explicitly call a parent constructor using <code>super()</code>, Java automatically inserts <code>super()</code> (the no-argument parent constructor call) as the <strong>first statement</strong> of the subclass constructor. This is called <strong>constructor chaining</strong> — a chain of constructor calls from child to parent up to <code>Object</code> class (which is the root of all Java classes).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Constructor Chaining Flowchart</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>new Dog("Rex", "Labrador")</p>
      <p>  → Dog constructor called</p>
      <p>    → super("Rex") auto-inserted if not explicit</p>
      <p>      → Animal constructor called</p>
      <p>        → super() auto-inserted</p>
      <p>          → Object constructor called</p>
      <p>            → Object fields initialized</p>
      <p>          ← Object constructor completes</p>
      <p>        ← Animal fields initialized (name = "Rex")</p>
      <p>      ← Animal constructor completes</p>
      <p>    ← Dog fields initialized (breed = "Labrador")</p>
      <p>  ← Dog constructor completes</p>
      <p>← Object fully constructed and returned</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Constructor Chaining Demo =====
class Animal {
    String name;

    // Parent constructor
    Animal(String name) {
        // Implicit: super() calls Object()
        this.name = name;
        System.out.println("Animal constructor: " + name);
    }

    // Default constructor
    Animal() {
        this("Unknown"); // Calls Animal(String)
        System.out.println("Animal default constructor");
    }
}

class Dog extends Animal {
    String breed;

    // Subclass constructor
    Dog(String name, String breed) {
        super(name);  // EXPLICIT call to Animal(String)
        // Without super(), compiler inserts super() → ERROR
        // because Animal has no no-arg constructor
        this.breed = breed;
        System.out.println("Dog constructor: " + name
            + " the " + breed);
    }

    // Subclass default constructor
    Dog() {
        // Implicit: super() inserted → calls Animal()
        System.out.println("Dog default constructor");
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        System.out.println("--- Creating Dog with args ---");
        Dog d1 = new Dog("Rex", "Labrador");
        // Output:
        // Animal constructor: Rex
        // Dog constructor: Rex the Labrador

        System.out.println("--- Creating Dog default ---");
        Dog d2 = new Dog();
        // Output:
        // Animal constructor: Unknown
        // Animal default constructor
        // Dog default constructor
    }
}

// Key Rules:
// 1. super() must be the FIRST statement in constructor
// 2. If parent has no default constructor, super(args) is MANDATORY
// 3. this() calls another constructor of SAME class
// 4. super() calls parent constructor
// 5. Either this() or super() can be used, NOT both`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> In a university system, <code>Person</code> has a constructor that sets <code>name</code> and <code>age</code>. <code>Student</code> extends Person and adds <code>rollNo</code>. When <code>new Student("Rahul", 22, 101)</code> is called, Student's constructor calls <code>super("Rahul", 22)</code> to initialize name and age first, then sets rollNo to 101. Without super(), name and age would be uninitialized (null/0).</p>
    <p><strong>Scenario 2:</strong> In a GUI framework, <code>Component</code> constructor initializes width and height. <code>Button</code> extends Component and adds a label. Creating <code>new Button("Click Me")</code> implicitly calls <code>super()</code> which sets default width=100, height=30. If Button's constructor needs specific dimensions, it calls <code>super(200, 50)</code> explicitly to override defaults.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Constructor: same name as class, no return type, called with <code>new</code></li>
      <li>Java inserts <code>super()</code> automatically as the first statement if not explicit</li>
      <li>Constructor chaining: child → parent → grandparent → Object</li>
      <li><code>super(args)</code> must be the first statement in the constructor</li>
      <li>If parent has no default constructor, explicit <code>super(args)</code> is mandatory</li>
      <li><code>this()</code> calls another constructor in the same class; <code>super()</code> calls parent</li>
    </ul>
  </div>,

  // 3b. Classes and Objects
  <div key="3b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">3b. Explain the concepts of classes and objects in Java with a simple example.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>class</strong> in Java is a blueprint or template that defines the structure and behavior of objects. It encapsulates <strong>data (fields/attributes)</strong> and <strong>behavior (methods)</strong> into a single logical unit. A class does not occupy memory for its instance fields — it is merely a design specification. Think of it as an architect's blueprint for a house: it specifies the number of rooms, their dimensions, and where the doors go, but the blueprint itself is not a house. A class is declared using the <code>class</code> keyword followed by the class name and a body containing fields, constructors, and methods enclosed in curly braces.</p>
    <p>An <strong>object</strong> is a concrete instance of a class — it is created using the <code>new</code> keyword and exists in heap memory with its own copy of the instance fields. While a class is a general concept (e.g., "Car"), an object is a specific instance (e.g., "Rahul's red Honda City with plate DL-01-AB-1234"). Multiple objects can be created from the same class, each with different field values. Objects interact with each other through method calls, forming the runtime behavior of the program. The relationship between class and object is analogous to "type" and "variable" — <code>int x</code> where <code>int</code> is the type (class) and <code>x</code> is the variable (object reference).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Class vs Object Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Class</th>
            <th className="border border-gray-300 p-2 text-left">Object</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Nature</strong></td><td className="border border-gray-300 p-2">Blueprint / Template</td><td className="border border-gray-300 p-2">Instance / Real entity</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Memory</strong></td><td className="border border-gray-300 p-2">No memory for fields (only method area)</td><td className="border border-gray-300 p-2">Heap memory allocated</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Creation</strong></td><td className="border border-gray-300 p-2">Defined once using 'class' keyword</td><td className="border border-gray-300 p-2">Created with 'new' keyword</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Existence</strong></td><td className="border border-gray-300 p-2">Logical (design time)</td><td className="border border-gray-300 p-2">Physical (runtime)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Copies</strong></td><td className="border border-gray-300 p-2">One class definition</td><td className="border border-gray-300 p-2">Many objects from one class</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== CLASS DEFINITION =====
class Car {
    // FIELDS (State / Attributes)
    String brand;
    String color;
    int speed;
    double price;

    // CONSTRUCTOR (Initializes state)
    Car(String brand, String color, int speed, double price) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
        this.price = price;
    }

    // METHODS (Behavior)
    void accelerate(int increment) {
        speed += increment;
        System.out.println(brand + " accelerated to "
            + speed + " km/h");
    }

    void brake() {
        speed = 0;
        System.out.println(brand + " stopped.");
    }

    void displayInfo() {
        System.out.println("Brand: " + brand
            + " | Color: " + color
            + " | Speed: " + speed + " km/h"
            + " | Price: Rs." + price);
    }
}

// ===== CREATING AND USING OBJECTS =====
public class ClassObjectDemo {
    public static void main(String[] args) {
        // Create objects (instances) of Car class
        Car car1 = new Car("Honda City", "Red", 0, 1500000);
        Car car2 = new Car("Toyota Camry", "White", 0, 2500000);
        Car car3 = new Car("Tata Nexon", "Blue", 0, 1200000);

        // Each object has INDEPENDENT state
        car1.accelerate(80);  // Honda City accelerated to 80 km/h
        car2.accelerate(120); // Toyota Camry accelerated to 120 km/h
        car3.accelerate(60);  // Tata Nexon accelerated to 60 km/h

        // Each object's methods operate on its own data
        car1.displayInfo();
        // Brand: Honda City | Color: Red | Speed: 80 km/h | Price: Rs.1500000

        car2.brake();         // Toyota Camry stopped.
        car2.displayInfo();
        // Brand: Toyota Camry | Color: White | Speed: 0 km/h | ...

        car3.displayInfo();
        // Brand: Tata Nexon | Color: Blue | Speed: 60 km/h | ...

        // car1, car2, car3 are independent — changing one
        // does NOT affect the others
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A banking application defines a <code>BankAccount</code> class with fields (accountNumber, balance, holderName) and methods (deposit, withdraw, checkBalance). Creating <code>new BankAccount("Rahul", 10000)</code> creates one object, and <code>new BankAccount("Priya", 25000)</code> creates another. Each account has independent balance — withdrawing from Rahul's account does not affect Priya's.</p>
    <p><strong>Scenario 2:</strong> A library system has a <code>Book</code> class with fields (title, author, isbn, isAvailable) and methods (borrow, return, display). Each physical book in the library is represented as an object. <code>new Book("Java Complete", "Herbert", "978-123")</code> creates a Book object. When <code>book1.borrow()</code> is called, only that specific book's <code>isAvailable</code> changes to false, not all Book objects.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Class = blueprint (fields + methods); Object = instance (created with <code>new</code>)</li>
      <li>Objects have independent copies of instance fields</li>
      <li>Methods are shared (one copy per class) but operate on individual object state</li>
      <li><code>this</code> keyword refers to the current object inside methods</li>
      <li>Constructor initializes object state when <code>new</code> is called</li>
      <li>Multiple objects from one class = same structure, different data</li>
    </ul>
  </div>,
];
