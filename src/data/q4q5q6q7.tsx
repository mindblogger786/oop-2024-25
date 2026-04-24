import React from "react";

export const q4Answers: React.ReactNode[] = [
  // 4a. Inheritance Types
  <div key="4a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">4a. Explain in detail about various types of inheritance in Java with a neat sketch.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Inheritance</strong> is one of the four pillars of Object-Oriented Programming that allows a new class (subclass/child) to acquire the properties and behaviors of an existing class (superclass/parent). In Java, inheritance is implemented using the <code>extends</code> keyword for classes and <code>implements</code> keyword for interfaces. The subclass inherits all non-private fields and methods of the parent class, promoting <strong>code reusability</strong>, <strong>method overriding</strong> (polymorphism), and <strong>hierarchical classification</strong>. Java supports single inheritance (one parent), multilevel inheritance (chain of parents), hierarchical inheritance (multiple children, one parent), and interface-based multiple inheritance.</p>
    <p>Java does <strong>NOT support multiple inheritance with classes</strong> (a class cannot extend two classes simultaneously) to avoid the <strong>diamond problem</strong> — ambiguity when two parent classes have methods with the same signature. However, Java achieves multiple inheritance through <strong>interfaces</strong> (a class can implement multiple interfaces). Understanding inheritance types is fundamental for designing clean, maintainable class hierarchies in enterprise applications.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Types of Inheritance Diagrams</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm space-y-3">
      <div>
        <p className="font-bold text-indigo-700">1. Single Inheritance</p>
        <p>  [Animal] → [Dog]</p>
        <p>  One parent, one child</p>
      </div>
      <div>
        <p className="font-bold text-indigo-700">2. Multilevel Inheritance</p>
        <p>  [Animal] → [Dog] → [Labrador]</p>
        <p>  Chain: grandparent → parent → child</p>
      </div>
      <div>
        <p className="font-bold text-indigo-700">3. Hierarchical Inheritance</p>
        <p>         [Animal]</p>
        <p>        /   |    \\</p>
        <p>    [Dog] [Cat] [Cow]</p>
        <p>  One parent, multiple children</p>
      </div>
      <div>
        <p className="font-bold text-indigo-700">4. Multiple Inheritance (via Interfaces only)</p>
        <p>  [Runnable] + [Serializable]</p>
        <p>        \\       /</p>
        <p>      [MyThread]</p>
        <p>  Multiple parents (interfaces), one child</p>
      </div>
      <div>
        <p className="font-bold text-indigo-700">5. Hybrid Inheritance (via interfaces)</p>
        <p>  Combination of two or more types above</p>
        <p>  Achieved through interfaces in Java</p>
      </div>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== 1. SINGLE INHERITANCE =====
class Animal {
    void eat() { System.out.println("Eating..."); }
}
class Dog extends Animal {
    void bark() { System.out.println("Barking..."); }
}
// Usage: Dog d = new Dog();
// d.eat();  // Inherited from Animal
// d.bark(); // Dog's own method

// ===== 2. MULTILEVEL INHERITANCE =====
class Vehicle {
    void start() { System.out.println("Vehicle started"); }
}
class Car extends Vehicle {
    void drive() { System.out.println("Car driving"); }
}
class ElectricCar extends Car {
    void charge() { System.out.println("Charging battery"); }
}
// Usage: ElectricCar ecar = new ElectricCar();
// ecar.start();  // From Vehicle (grandparent)
// ecar.drive();  // From Car (parent)
// ecar.charge(); // Own method

// ===== 3. HIERARCHICAL INHERITANCE =====
class Shape {
    double area() { return 0; }
}
class Circle extends Shape {
    double radius;
    Circle(double r) { radius = r; }
    double area() { return Math.PI * radius * radius; }
}
class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}
class Triangle extends Shape {
    double base, height;
    Triangle(double b, double h) { base = b; height = h; }
    double area() { return 0.5 * base * height; }
}

// ===== 4. MULTIPLE INHERITANCE (via Interfaces) =====
interface Printable {
    void print();  // abstract by default
}
interface Showable {
    void show();
}
class Document implements Printable, Showable {
    public void print() {
        System.out.println("Printing document");
    }
    public void show() {
        System.out.println("Showing document");
    }
}
// Java does NOT allow: class A extends B, C { }
// But allows: class A implements B, C { }`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university system uses multilevel inheritance: <code>Person</code> → <code>Student</code> → <code>GraduateStudent</code>. Person has name/age, Student adds rollNo/marks, GraduateStudent adds thesis/supervisor. Each level adds specific fields while inheriting all parent features. A GraduateStudent object can call methods from all three classes.</p>
    <p><strong>Scenario 2:</strong> A GUI framework uses hierarchical inheritance: <code>Component</code> is the parent, with <code>Button</code>, <code>TextField</code>, <code>Label</code>, and <code>Checkbox</code> as children. All inherit common properties (width, height, color) and methods (setVisible, repaint), but each adds its own specialized behavior (Button adds click handling, TextField adds text input).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>Single</strong>: one parent → one child</li>
      <li><strong>Multilevel</strong>: chain of inheritance (A → B → C)</li>
      <li><strong>Hierarchical</strong>: one parent → multiple children</li>
      <li><strong>Multiple</strong>: NOT supported with classes (diamond problem)</li>
      <li>Multiple inheritance achieved via <strong>interfaces</strong> (<code>implements</code>)</li>
      <li><code>extends</code> for class inheritance; <code>implements</code> for interface inheritance</li>
    </ul>
  </div>,

  // 4b. JVM Architecture
  <div key="4b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">4b. What is JVM? Explain the internal architecture of JVM.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>Java Virtual Machine (JVM)</strong> is an abstract computing machine (specification) that provides the runtime environment in which Java bytecode is executed. JVM is the cornerstone of Java's <strong>"Write Once, Run Anywhere"</strong> (WORA) philosophy — it acts as a layer between compiled Java bytecode and the underlying operating system/hardware, allowing the same bytecode to run on Windows, Linux, macOS, or any platform with a JVM implementation. When you compile Java source code (<code>.java</code>) with <code>javac</code>, it produces bytecode (<code>.class</code>) — platform-independent instructions that the JVM interprets or compiles to native machine code at runtime.</p>
    <p>JVM is NOT platform-independent — there are different JVM implementations for different operating systems (HotSpot JVM for most platforms, OpenJ9, GraalVM). However, the bytecode IS platform-independent, and every JVM knows how to execute it regardless of the platform. The JVM manages memory (heap, stack, method area), handles garbage collection, provides security (bytecode verification, sandboxing), and performs optimization (JIT compilation). Understanding JVM architecture is essential for writing high-performance Java applications and diagnosing memory/performance issues.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 JVM Internal Architecture Diagram</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p className="text-center font-bold">JVM Architecture</p>
      <p className="text-center mt-1">┌──────────────────────────────────────────┐</p>
      <p className="text-center">│              CLASS LOADER SUBSYSTEM       │</p>
      <p className="text-center">│   Loading → Linking → Initialization      │</p>
      <p className="text-center">└──────────────────┬───────────────────────┘</p>
      <p className="text-center">                   ↓</p>
      <p className="text-center">┌──────────────────────────────────────────┐</p>
      <p className="text-center">│          RUNTIME DATA AREA                │</p>
      <p className="text-center">│  ┌────────┐ ┌───────┐ ┌────────────────┐ │</p>
      <p className="text-center">│  │ Method │ │ Heap  │ │     Stack      │ │</p>
      <p className="text-center">│  │  Area  │ │(GC)   │ │  (per thread)  │ │</p>
      <p className="text-center">│  └────────┘ └───────┘ └────────────────┘ │</p>
      <p className="text-center">│  ┌────────────────┐ ┌────────────────────┐│</p>
      <p className="text-center">│  │  PC Registers  │ │ Native Method Stack││</p>
      <p className="text-center">│  └────────────────┘ └────────────────────┘│</p>
      <p className="text-center">└──────────────────┬───────────────────────┘</p>
      <p className="text-center">                   ↓</p>
      <p className="text-center">┌──────────────────────────────────────────┐</p>
      <p className="text-center">│           EXECUTION ENGINE                │</p>
      <p className="text-center">│  Interpreter | JIT Compiler | GC          │</p>
      <p className="text-center">└──────────────────────────────────────────┘</p>
      <p className="text-center">                   ↕</p>
      <p className="text-center">         [Java Native Interface (JNI)]</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 JVM Components Detail</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Component</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Class Loader</strong></td><td className="border border-gray-300 p-2">Loads .class files: Loading → Linking (verify, prepare, resolve) → Initialization</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Method Area</strong></td><td className="border border-gray-300 p-2">Stores class metadata, static fields, method bytecode, constant pool</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Heap</strong></td><td className="border border-gray-300 p-2">Runtime memory for all objects and arrays; managed by GC</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Stack</strong></td><td className="border border-gray-300 p-2">Per-thread: stores local variables, partial results, method call frames</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>PC Register</strong></td><td className="border border-gray-300 p-2">Per-thread: address of current bytecode instruction</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>JIT Compiler</strong></td><td className="border border-gray-300 p-2">Compiles hot bytecode to native machine code for performance</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Garbage Collector</strong></td><td className="border border-gray-300 p-2">Automatically reclaims memory from unreachable objects</td></tr>
        </tbody>
      </table>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> When you run <code>java MyProgram</code>, the JVM starts: (1) Bootstrap Class Loader loads core Java classes (rt.jar), (2) Extension Class Loader loads extension libraries, (3) Application Class Loader loads your <code>MyProgram.class</code>, (4) Bytecode Verifier checks for security violations, (5) Interpreter begins executing bytecode line by line, (6) JIT compiler optimizes frequently executed code to native machine code.</p>
    <p><strong>Scenario 2:</strong> In an enterprise application, when 10,000 objects are created during a request, the JVM allocates them in the Heap's Young Generation. When the Young Generation fills up, the GC runs a minor collection, removing unreferenced objects in milliseconds. Long-lived objects are promoted to the Old Generation. Understanding this helps developers tune JVM parameters (-Xmx, -Xms) to prevent OutOfMemoryErrors.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>JVM = runtime engine that executes Java bytecode (platform-specific)</li>
      <li>Three main subsystems: Class Loader, Runtime Data Area, Execution Engine</li>
      <li>Runtime Data Areas: Method Area, Heap, Stack, PC Register, Native Method Stack</li>
      <li>JIT Compiler converts hot bytecode to native code for performance</li>
      <li>Garbage Collector automatically manages heap memory</li>
      <li>JVM enables "Write Once, Run Anywhere" — bytecode is platform-independent</li>
    </ul>
  </div>,
];

export const q5Answers: React.ReactNode[] = [
  // 5a. Exception Handling
  <div key="5a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">5a. Explain the concept of exception handling in Java. Describe how the throwing and catching mechanism works.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Exception handling</strong> in Java is a mechanism that manages runtime errors gracefully, allowing the program to continue execution or terminate safely instead of crashing abruptly. An <strong>exception</strong> is an event that disrupts the normal flow of a program — such as dividing by zero, accessing an invalid array index, opening a non-existent file, or running out of memory. Java provides a structured, object-oriented approach to exception handling using five keywords: <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code>. All exceptions are represented as objects of classes derived from <code>java.lang.Throwable</code>.</p>
    <p>The <strong>throwing and catching mechanism</strong> works like a relay system: when an error occurs, Java creates an exception object and <strong>throws</strong> it from the point of failure. The runtime system searches the call stack for a matching <code>catch</code> block that can handle that exception type. If found, the exception is <strong>caught</strong> and handled; if not, the program terminates with an unhandled exception error. Java exceptions are categorized into <strong>checked exceptions</strong> (must be handled or declared — IOException, SQLException) and <strong>unchecked exceptions</strong> (runtime — ArithmeticException, NullPointerException) that don't require explicit handling.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Exception Hierarchy</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>Throwable</p>
      <p>├── Error (Unchecked - JVM level, cannot recover)</p>
      <p>│   ├── StackOverflowError</p>
      <p>│   ├── OutOfMemoryError</p>
      <p>│   └── VirtualMachineError</p>
      <p>└── Exception</p>
      <p>    ├── Checked (MUST handle or declare)</p>
      <p>    │   ├── IOException</p>
      <p>    │   ├── SQLException</p>
      <p>    │   └── FileNotFoundException</p>
      <p>    └── RuntimeException (Unchecked)</p>
      <p>        ├── ArithmeticException</p>
      <p>        ├── NullPointerException</p>
      <p>        ├── ArrayIndexOutOfBoundsException</p>
      <p>        └── NumberFormatException</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Complete Exception Handling Demo =====
public class ExceptionDemo {

    // Method that throws checked exception
    static int divide(int a, int b)
            throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException(
                "Division by zero is not allowed!");
        }
        return a / b;
    }

    public static void main(String[] args) {
        // ===== try-catch-finally =====
        try {
            int result = divide(10, 0);
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Finally always executes.");
        }

        // ===== Multiple catch blocks =====
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[10]); // ArrayIndexOutOfBounds
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index invalid: " + e);
        } catch (Exception e) {
            System.out.println("Generic: " + e);
        }

        // ===== Nested try-catch =====
        try {
            try {
                String s = null;
                System.out.println(s.length());
            } catch (NullPointerException e) {
                System.out.println("Inner: " + e);
                throw new RuntimeException("Re-thrown");
            }
        } catch (RuntimeException e) {
            System.out.println("Outer: " + e);
        }

        // ===== Custom Exception =====
        try {
            validateAge(15);
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }

    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException(
                "Age " + age + " is below 18!");
        }
    }
}

// Custom Exception
class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) { super(msg); }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A banking application's transfer method catches <code>InsufficientBalanceException</code> and displays "Insufficient funds" instead of crashing. The finally block always logs the transaction attempt (successful or not). Without exception handling, a zero-balance transfer attempt would crash the entire banking system.</p>
    <p><strong>Scenario 2:</strong> A file processing system catches <code>FileNotFoundException</code> (file missing), <code>IOException</code> (disk error), and uses finally to close file resources. Multiple catch blocks handle different error types specifically — showing "File not found" for missing files, "Disk error" for I/O failures, and a generic catch-all for unexpected errors.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Exception = runtime error; handled by try-catch-finally mechanism</li>
      <li><code>try</code>: risky code; <code>catch</code>: handles exception; <code>finally</code>: always executes</li>
      <li><code>throw</code>: creates and throws exception; <code>throws</code>: declares exceptions</li>
      <li>Checked exceptions: must handle (IOException); Unchecked: optional (NullPointerException)</li>
      <li>Exception hierarchy: Throwable → Exception → checked/unchecked</li>
      <li>Custom exceptions extend <code>Exception</code> class</li>
    </ul>
  </div>,

  // 5b. File Handling
  <div key="5b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">5b. Discuss the various types of files in Java and explain the process of file handling.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>File handling</strong> in Java refers to the process of creating, reading, writing, and manipulating files stored on the file system. Java provides a rich set of classes in the <code>java.io</code> and <code>java.nio</code> packages for file operations. Files are broadly classified into two types: <strong>text files</strong> (human-readable, stored as characters — .txt, .csv, .html, .xml) and <strong>binary files</strong> (machine-readable, stored as bytes — .jpg, .mp3, .class, .pdf, .exe). Text files are processed using character streams (Reader/Writer), while binary files use byte streams (InputStream/OutputStream).</p>
    <p>The file handling process involves four key operations: <strong>Creation</strong> (creating a new file), <strong>Reading</strong> (retrieving data from a file), <strong>Writing</strong> (storing data to a file), and <strong>Deletion</strong> (removing a file). Java uses the <code>File</code> class (java.io.File) to represent file paths and perform metadata operations (exists, length, rename), while stream classes handle actual data transfer. Modern Java (7+) provides <code>java.nio.file.Path</code> and <code>Files</code> class for more powerful and reliable file operations.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 File Types and Classes</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">File Type</th>
            <th className="border border-gray-300 p-2 text-left">Stream Classes</th>
            <th className="border border-gray-300 p-2 text-left">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Text Files</strong></td><td className="border border-gray-300 p-2">FileReader, FileWriter, BufferedReader, BufferedWriter</td><td className="border border-gray-300 p-2">.txt, .csv, .html, .xml</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Binary Files</strong></td><td className="border border-gray-300 p-2">FileInputStream, FileOutputStream, BufferedInputStream, BufferedOutputStream</td><td className="border border-gray-300 p-2">.jpg, .mp3, .pdf, .class</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`import java.io.*;
import java.nio.file.*;

public class FileHandlingDemo {

    public static void main(String[] args) throws IOException {

        // ===== 1. FILE CREATION =====
        File f = new File("example.txt");
        if (f.createNewFile()) {
            System.out.println("File created: " + f.getName());
        } else {
            System.out.println("File already exists.");
        }

        // ===== 2. WRITING to a text file =====
        try (FileWriter writer = new FileWriter("example.txt")) {
            writer.write("Hello, Java File Handling!\\n");
            writer.write("Line 2: Web Technology\\n");
            writer.write("Line 3: MCA Exam Preparation");
        }

        // ===== 3. READING from a text file =====
        try (BufferedReader reader =
                new BufferedReader(new FileReader("example.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        }

        // ===== 4. BINARY FILE (image) copy =====
        try (FileInputStream fis = new FileInputStream("photo.jpg");
             FileOutputStream fos = new FileOutputStream("copy.jpg")) {
            byte[] buffer = new byte[4096];
            int bytes;
            while ((bytes = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytes);
            }
        }

        // ===== 5. FILE METADATA (File class) =====
        File file = new File("example.txt");
        System.out.println("Name: " + file.getName());
        System.out.println("Path: " + file.getPath());
        System.out.println("Size: " + file.length() + " bytes");
        System.out.println("Exists: " + file.exists());
        System.out.println("Readable: " + file.canRead());
        System.out.println("Writable: " + file.canWrite());

        // ===== 6. FILE DELETION =====
        File temp = new File("temp.txt");
        temp.createNewFile();
        if (temp.delete()) {
            System.out.println("Deleted: " + temp.getName());
        }

        // ===== 7. Modern NIO approach =====
        Path path = Paths.get("nio_example.txt");
        Files.writeString(path, "Written using Java NIO!\\nModern approach.");
        String content = Files.readString(path);
        System.out.println("NIO read: " + content);
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A student result system reads a CSV file (<code>results.csv</code>) containing roll numbers and marks using <code>BufferedReader</code>, processes each line to calculate grades, and writes the results to a new file using <code>BufferedWriter</code>. The CSV is a text file, so character streams are appropriate. The try-with-resources ensures both files are closed properly even if an error occurs during processing.</p>
    <p><strong>Scenario 2:</strong> A media player loads MP3 files using <code>FileInputStream</code> (binary stream). Unlike text files, MP3s contain binary data that would be corrupted by character streams. The file metadata (size, duration estimated from file size) is retrieved using the <code>File</code> class methods (<code>length()</code>, <code>getName()</code>).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Two file types: <strong>text</strong> (Reader/Writer) and <strong>binary</strong> (InputStream/OutputStream)</li>
      <li><code>File</code> class: metadata operations (create, delete, exists, length)</li>
      <li><code>BufferedReader</code>/<code>BufferedWriter</code>: efficient buffered text I/O</li>
      <li>Always use <code>try-with-resources</code> to auto-close file streams</li>
      <li>Modern Java NIO: <code>Path</code>, <code>Files</code> class for simpler file operations</li>
      <li>Four operations: Create, Read, Write, Delete</li>
    </ul>
  </div>,
];

export const q6Answers: React.ReactNode[] = [
  // 6a. Bounded Types in Generics
  <div key="6a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">6a. Explain the concept of bounded types in Java Generics.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Java Generics</strong> allow classes, interfaces, and methods to operate on parameterized types, enabling code reuse with type safety. <strong>Bounded types</strong> restrict the type parameter to a specific hierarchy — you can specify that a type parameter must be a subclass of a particular class or implement a specific interface. Without bounds, a type parameter <code>&lt;T&gt;</code> can be <em>any</em> type, which limits what operations you can perform on it (only Object methods). Bounded types expand these capabilities by guaranteeing that <code>T</code> has certain methods or is within a certain inheritance tree.</p>
    <p>There are three types of bounds: <strong>Upper bound</strong> (<code>&lt;T extends ClassName&gt;</code>) restricts T to ClassName or its subclasses — T "extends or implements" the bound; <strong>Multiple bounds</strong> (<code>&lt;T extends ClassA &amp; InterfaceB &amp; InterfaceC&gt;</code>) requires T to extend ClassA AND implement InterfaceB AND InterfaceC (class must come first); <strong>Lower bound</strong> (used with wildcards: <code>&lt;? super ClassName&gt;</code>) restricts to ClassName or its superclasses. Upper bounds are the most commonly used for enforcing type constraints in generic methods and classes.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Bounded Types Summary</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Bound Type</th>
            <th className="border border-gray-300 p-2 text-left">Syntax</th>
            <th className="border border-gray-300 p-2 text-left">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Upper Bound</strong></td><td className="border border-gray-300 p-2">&lt;T extends Number&gt;</td><td className="border border-gray-300 p-2">T must be Number or subclass (Integer, Double...)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Multiple Bounds</strong></td><td className="border border-gray-300 p-2">&lt;T extends Number &amp; Comparable&gt;</td><td className="border border-gray-300 p-2">T must extend Number AND implement Comparable</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Wildcard Upper</strong></td><td className="border border-gray-300 p-2">&lt;? extends Number&gt;</td><td className="border border-gray-300 p-2">Unknown type that is Number or subclass</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Wildcard Lower</strong></td><td className="border border-gray-300 p-2">&lt;? super Integer&gt;</td><td className="border border-gray-300 p-2">Unknown type that is Integer or superclass</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Upper Bounded Type =====
// T MUST extend Number (Integer, Double, Float, Long...)
class Calculator&lt;T extends Number&gt; {
    private T value;

    Calculator(T value) { this.value = value; }

    // Can call Number methods: intValue(), doubleValue()
    double square() {
        return value.doubleValue() * value.doubleValue();
    }

    T getValue() { return value; }
}

Calculator&lt;Integer&gt; intCalc = new Calculator&lt;&gt;(5);
System.out.println(intCalc.square());  // 25.0

Calculator&lt;Double&gt; dblCalc = new Calculator&lt;&gt;(3.5);
System.out.println(dblCalc.square());  // 12.25

// Calculator&lt;String&gt; s = new Calculator&lt;&gt;("hi");
// COMPILE ERROR! String does not extend Number

// ===== Upper Bounded Method =====
// Only accepts Number or its subclasses
static double sum(List&lt;? extends Number&gt; list) {
    double total = 0;
    for (Number n : list) {
        total += n.doubleValue();
    }
    return total;
}

List&lt;Integer&gt; ints = Arrays.asList(1, 2, 3);
List&lt;Double&gt; doubles = Arrays.asList(1.5, 2.5, 3.5);
System.out.println(sum(ints));    // 6.0
System.out.println(sum(doubles)); // 7.5

// ===== Multiple Bounds =====
// T must extend Number AND implement Comparable
static &lt;T extends Number &amp; Comparable&lt;T&gt;&gt;
        T findMax(T[] array) {
    T max = array[0];
    for (T item : array) {
        if (item.compareTo(max) &gt; 0) {
            max = item;
        }
    }
    return max;
}

Integer[] intArr = {3, 7, 1, 9, 4};
Double[] dblArr = {2.5, 7.1, 3.8};
System.out.println(findMax(intArr));  // 9
System.out.println(findMax(dblArr));  // 7.1

// ===== Lower Bounded Wildcard =====
// Accepts List of Integer or its supertypes
static void addIntegers(List&lt;? super Integer&gt; list) {
    list.add(1);
    list.add(2);
    list.add(3);
}

List&lt;Number&gt; nums = new ArrayList&lt;&gt;();
addIntegers(nums);  // OK — Number is superclass of Integer`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A statistics library has a method <code>&lt;T extends Number&gt; double average(List&lt;T&gt; numbers)</code>. The upper bound ensures only numeric types (Integer, Double, Float) can be passed. Without the bound, passing a <code>List&lt;String&gt;</code> would compile but fail at runtime. Bounded types catch errors at compile time, providing type safety.</p>
    <p><strong>Scenario 2:</strong> A sorting utility uses multiple bounds: <code>&lt;T extends Comparable&lt;T&gt;&gt; void sort(T[] array)</code>. The bound guarantees that <code>T</code> has a <code>compareTo()</code> method, enabling the sort algorithm to compare elements. This works for String, Integer, Double — any Comparable type — without separate implementations for each type.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Bounded types restrict type parameters to a specific hierarchy</li>
      <li>Upper bound: <code>&lt;T extends ClassName&gt;</code> — T must be ClassName or subclass</li>
      <li>Multiple bounds: <code>&lt;T extends Class &amp; Interface1 &amp; Interface2&gt;</code></li>
      <li>Lower bound (wildcards): <code>&lt;? super ClassName&gt;</code> — T must be ClassName or superclass</li>
      <li>Bounded types enable calling methods of the bound type on T</li>
      <li>Catch type errors at compile time instead of runtime</li>
    </ul>
  </div>,

  // 6b. Thread Life Cycle
  <div key="6b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">6b. Explain the life cycle of a thread in Java with a diagram.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>thread</strong> in Java is the smallest unit of execution within a process. Every Java program has at least one thread — the <code>main</code> thread. The <strong>thread life cycle</strong> defines the various states a thread goes through from its creation to its termination. A thread can be in one of several states defined by the <code>Thread.State</code> enum: <strong>NEW</strong>, <strong>RUNNABLE</strong>, <strong>BLOCKED</strong>, <strong>WAITING</strong>, <strong>TIMED_WAITING</strong>, and <strong>TERMINATED</strong>. The thread scheduler (part of the JVM) manages transitions between these states based on CPU availability, synchronization locks, and explicit method calls like <code>sleep()</code>, <code>wait()</code>, <code>notify()</code>, and <code>join()</code>.</p>
    <p>Understanding the thread life cycle is essential for writing correct multithreaded programs — it helps you reason about when threads are active, when they are paused, and what causes them to resume or terminate. Misunderstanding thread states leads to bugs like deadlocks (threads permanently waiting for each other), starvation (a thread never gets CPU time), and race conditions (threads accessing shared data inconsistently).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Thread Life Cycle Diagram</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p className="text-center font-bold">Thread Life Cycle States</p>
      <p className="text-center mt-2">    [NEW]</p>
      <p className="text-center">       │ start()</p>
      <p className="text-center">       ↓</p>
      <p className="text-center">  ┌──────────┐</p>
      <p className="text-center">  │ RUNNABLE  │ ← yield() returns here</p>
      <p className="text-center">  │(Ready/Run)│</p>
      <p className="text-center">  └──┬───┬──┬─┘</p>
      <p className="text-center">     │   │  │</p>
      <p className="text-center">     │   │  └→ sleep(ms)/join(ms)/wait(ms)</p>
      <p className="text-center">     │   │       → [TIMED_WAITING]</p>
      <p className="text-center">     │   │       ← timeout expires</p>
      <p className="text-center">     │   │</p>
      <p className="text-center">     │   └→ wait()/join()</p>
      <p className="text-center">     │       → [WAITING]</p>
      <p className="text-center">     │       ← notify()/notifyAll()</p>
      <p className="text-center">     │</p>
      <p className="text-center">     └→ lock not available</p>
      <p className="text-center">         → [BLOCKED]</p>
      <p className="text-center">         ← lock acquired</p>
      <p className="text-center">       </p>
      <p className="text-center">  [TERMINATED] ← run() completes or exception</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Thread States Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">State</th>
            <th className="border border-gray-300 p-2 text-left">Trigger</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>NEW</strong></td><td className="border border-gray-300 p-2">new Thread()</td><td className="border border-gray-300 p-2">Created but not yet started</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>RUNNABLE</strong></td><td className="border border-gray-300 p-2">start()</td><td className="border border-gray-300 p-2">Ready to run or currently executing</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>BLOCKED</strong></td><td className="border border-gray-300 p-2">synchronized lock</td><td className="border border-gray-300 p-2">Waiting for monitor lock</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>WAITING</strong></td><td className="border border-gray-300 p-2">wait() / join()</td><td className="border border-gray-300 p-2">Waiting indefinitely for another thread</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>TIMED_WAITING</strong></td><td className="border border-gray-300 p-2">sleep(ms) / wait(ms)</td><td className="border border-gray-300 p-2">Waiting for specified time</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>TERMINATED</strong></td><td className="border border-gray-300 p-2">run() completes</td><td className="border border-gray-300 p-2">Thread has finished execution</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Thread Life Cycle Demo =====
class LifecycleThread extends Thread {
    public void run() {
        System.out.println(Thread.currentThread().getName()
            + " State: " + getState()); // RUNNABLE

        try {
            // TIMED_WAITING
            Thread.sleep(2000);
            System.out.println("After sleep: " + getState());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Thread finishing...");
        // After this → TERMINATED
    }
}

public class ThreadLifecycleDemo {
    public static void main(String[] args)
            throws InterruptedException {

        LifecycleThread t = new LifecycleThread();

        // State: NEW
        System.out.println("After creation: " + t.getState());

        t.start();
        // State: RUNNABLE

        Thread.sleep(500);
        // State: TIMED_WAITING (sleeping)
        System.out.println("During sleep: " + t.getState());

        t.join();  // Main thread WAITS until t finishes
        // After join: TERMINATED
        System.out.println("After completion: " + t.getState());
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A download manager creates a thread for each download. After <code>new DownloadThread()</code> it is in NEW state. <code>start()</code> moves it to RUNNABLE. While downloading, <code>Thread.sleep(1000)</code> puts it in TIMED_WAITING (updating progress bar every second). When download completes, run() returns and the thread enters TERMINATED. If a network timeout occurs, <code>wait()</code> moves it to WAITING until <code>notify()</code> signals reconnection.</p>
    <p><strong>Scenario 2:</strong> A producer-consumer system: the producer thread acquires a synchronized lock (RUNNABLE), produces data, and calls <code>wait()</code> (WAITING) when the buffer is full. The consumer thread acquires the lock (RUNNABLE), consumes data, and calls <code>notify()</code> to wake the producer. If the lock is held by the consumer, the producer enters BLOCKED until the lock is released.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Six states: NEW → RUNNABLE → BLOCKED/WAITING/TIMED_WAITING → TERMINATED</li>
      <li><code>start()</code> moves NEW → RUNNABLE (never call run() directly)</li>
      <li><code>sleep()</code>, <code>wait()</code>, <code>join()</code> pause execution temporarily</li>
      <li><code>notify()</code>/<code>notifyAll()</code> wake waiting threads</li>
      <li><code>getState()</code> returns the current Thread.State enum</li>
      <li>TERMINATED is final — a dead thread cannot be restarted</li>
    </ul>
  </div>,
];

export const q7Answers: React.ReactNode[] = [
  // 7a. Event Handling
  <div key="7a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">7a. What is event handling in Java? Explain in detail.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Event handling</strong> in Java is the mechanism by which a program responds to user actions (events) such as button clicks, mouse movements, key presses, window resizing, and menu selections. Java uses the <strong>Delegation Event Model</strong> (introduced in JDK 1.1) which consists of three components: <strong>Event Sources</strong> (GUI components that generate events, like buttons), <strong>Event Listeners</strong> (objects that receive and process events by implementing listener interfaces), and <strong>Event Objects</strong> (objects that contain information about the event, like ActionEvent, MouseEvent). When a user interacts with a component, the source creates an event object and delegates it to the registered listener for processing.</p>
    <p>The event handling process follows a <strong>publish-subscribe pattern</strong>: a component (source) maintains a list of registered listeners. When an event occurs, the source iterates through the list and calls the appropriate method on each listener. Listeners are interfaces in the <code>java.awt.event</code> package — each defines methods for specific event types. For example, <code>ActionListener</code> has <code>actionPerformed()</code>, <code>MouseListener</code> has five methods (click, press, release, enter, exit), and <code>KeyListener</code> has three methods (key press, release, type). You implement the interface and register the listener using <code>addComponentListener()</code> methods.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Event Handling Flowchart</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>1. User performs action (e.g., clicks a button)</p>
      <p>2. Event Source (button) creates Event Object (ActionEvent)</p>
      <p>3. Source calls registered Listener's method (actionPerformed)</p>
      <p>4. Listener executes handler code (programmer's logic)</p>
      <p>5. Control returns to the event dispatch thread</p>
      <p></p>
      <p>Architecture:</p>
      <p>[User Action] → [Event Source (Button)] → [Event Object] → [Event Listener (Handler)]</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Key Event Listeners</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Listener Interface</th>
            <th className="border border-gray-300 p-2 text-left">Methods</th>
            <th className="border border-gray-300 p-2 text-left">Event Class</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>ActionListener</strong></td><td className="border border-gray-300 p-2">actionPerformed()</td><td className="border border-gray-300 p-2">ActionEvent</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>MouseListener</strong></td><td className="border border-gray-300 p-2">click, press, release, enter, exit</td><td className="border border-gray-300 p-2">MouseEvent</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>KeyListener</strong></td><td className="border border-gray-300 p-2">keyPressed, keyReleased, keyTyped</td><td className="border border-gray-300 p-2">KeyEvent</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>ItemListener</strong></td><td className="border border-gray-300 p-2">itemStateChanged()</td><td className="border border-gray-300 p-2">ItemEvent</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>WindowListener</strong></td><td className="border border-gray-300 p-2">windowClosing, windowOpened, etc.</td><td className="border border-gray-300 p-2">WindowEvent</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class EventHandlingDemo extends JFrame {

    EventHandlingDemo() {
        setTitle("Event Handling Demo");
        setSize(400, 300);
        setLayout(new FlowLayout());
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // ===== Button Click Event =====
        JButton btnClick = new JButton("Click Me!");
        JLabel label = new JLabel("Press the button!");

        // Method 1: Using Anonymous Inner Class
        btnClick.addActionListener(
            new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    label.setText("Button was clicked! Time: "
                        + new java.util.Date());
                }
            }
        );

        // Method 2: Using Lambda Expression (Java 8+)
        JButton btnColor = new JButton("Change Color");
        btnColor.addActionListener(e -> {
            getContentPane().setBackground(
                new Color((int)(Math.random()*0xFFFFFF)));
        });

        // ===== Mouse Event =====
        JLabel mouseLabel = new JLabel("Move mouse here");
        mouseLabel.setPreferredSize(new Dimension(200, 80));
        mouseLabel.setBorder(
            BorderFactory.createLineBorder(Color.GRAY));
        mouseLabel.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                mouseLabel.setText("Clicked at: "
                    + e.getX() + ", " + e.getY());
            }
            public void mouseEntered(MouseEvent e) {
                mouseLabel.setText("Mouse entered!");
                mouseLabel.setForeground(Color.BLUE);
            }
            public void mouseExited(MouseEvent e) {
                mouseLabel.setText("Mouse exited!");
                mouseLabel.setForeground(Color.RED);
            }
        });

        // ===== Key Event =====
        JTextField textField = new JTextField(15);
        textField.addKeyListener(new KeyAdapter() {
            public void keyTyped(KeyEvent e) {
                label.setText("Key typed: " + e.getKeyChar());
            }
        });

        // Add components
        add(btnClick);
        add(btnColor);
        add(label);
        add(mouseLabel);
        add(new JLabel("Type here:"));
        add(textField);

        setVisible(true);
    }

    public static void main(String[] args) {
        new EventHandlingDemo();
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A calculator application has digit buttons (0-9) and operator buttons (+, -, *, /). Each button registers an ActionListener. When the user clicks "5", an ActionEvent is generated, the listener's <code>actionPerformed()</code> appends "5" to the display. When "=" is clicked, the listener evaluates the expression and shows the result. Every button click follows the same event generation → delegation → handling cycle.</p>
    <p><strong>Scenario 2:</strong> A drawing application uses MouseListener to detect clicks (start/end drawing points), MouseMotionListener for drag events (freehand drawing), and KeyListener for shortcuts (Ctrl+Z to undo). Multiple listeners can be registered on the same canvas component, each handling a different aspect of user interaction.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Event handling uses the <strong>Delegation Event Model</strong>: Source → Event → Listener</li>
      <li>Three components: Event Source, Event Object, Event Listener</li>
      <li>Register listener: <code>component.addActionListener(listener)</code></li>
      <li>Listener interfaces: ActionListener, MouseListener, KeyListener, ItemListener</li>
      <li>Adapter classes provide empty implementations (MouseAdapter, KeyAdapter)</li>
      <li>Lambda expressions simplify listener code in Java 8+</li>
    </ul>
  </div>,

  // 7b. Java Swing vs AWT
  <div key="7b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">7b. What is Java Swing? How is it different from AWT? Explain in detail.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Java Swing</strong> is a part of Java Foundation Classes (JFC) that provides a comprehensive set of lightweight, platform-independent GUI components for building desktop applications. Swing was introduced in Java 1.2 (1998) as a replacement for the older AWT (Abstract Window Toolkit). Swing components are drawn entirely by Java code (using Java 2D API) rather than delegating to the operating system's native GUI toolkit. This makes Swing components <strong>lightweight</strong> (they don't require native screen resources), <strong>pluggable</strong> (customizable look-and-feel), and <strong>consistent</strong> across all platforms — a Swing button looks the same on Windows, macOS, and Linux.</p>
    <p><strong>AWT (Abstract Window Toolkit)</strong> was Java's original GUI toolkit (Java 1.0, 1996). AWT components are <strong>heavyweight</strong> — each AWT component creates a corresponding native operating system component (peer). For example, an AWT Button creates a Windows button on Windows, a macOS button on Mac, etc. While this gives AWT components a native look, it causes platform-specific behavior, limited component set (only common denominator across all platforms), and higher memory consumption. Swing was created to address all these limitations, providing a much richer component set (tables, trees, tabbed panes, sliders, spinners) with consistent cross-platform behavior.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Swing vs AWT Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">AWT</th>
            <th className="border border-gray-300 p-2 text-left">Swing</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Package</strong></td><td className="border border-gray-300 p-2">java.awt</td><td className="border border-gray-300 p-2">javax.swing</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Component Type</strong></td><td className="border border-gray-300 p-2">Heavyweight (native OS peers)</td><td className="border border-gray-300 p-2">Lightweight (Java-drawn)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Look &amp; Feel</strong></td><td className="border border-gray-300 p-2">Platform-dependent (native)</td><td className="border border-gray-300 p-2">Pluggable (Metal, Nimbus, system)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Components</strong></td><td className="border border-gray-300 p-2">Limited (~11 basic components)</td><td className="border border-gray-300 p-2">Rich set (~40+ components)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Memory</strong></td><td className="border border-gray-300 p-2">Higher (native resources)</td><td className="border border-gray-300 p-2">Lower (Java objects only)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Speed</strong></td><td className="border border-gray-300 p-2">Slower (OS round-trips)</td><td className="border border-gray-300 p-2">Faster (no OS calls)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>MVC Pattern</strong></td><td className="border border-gray-300 p-2">Not followed</td><td className="border border-gray-300 p-2">Follows MVC architecture</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Naming</strong></td><td className="border border-gray-300 p-2">Button, Frame, TextField</td><td className="border border-gray-300 p-2">JButton, JFrame, JTextField</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Platform</strong></td><td className="border border-gray-300 p-2">Different appearance on each OS</td><td className="border border-gray-300 p-2">Same appearance on all platforms</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Extra Features</strong></td><td className="border border-gray-300 p-2">Basic functionality</td><td className="border border-gray-300 p-2">Tables, Trees, Tabbed Panes, Sliders, Tooltips</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== AWT Example (Old Style) =====
import java.awt.*;
import java.awt.event.*;

public class AWTExample extends Frame {
    AWTExample() {
        setTitle("AWT Example");
        setSize(300, 200);
        setLayout(new FlowLayout());

        Button btn = new Button("Click Me");  // AWT Button
        Label label = new Label("Hello AWT!");

        btn.addActionListener(e ->
            label.setText("AWT Button Clicked!"));

        add(btn);
        add(label);

        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                dispose();
            }
        });

        setVisible(true);
    }
    public static void main(String[] args) { new AWTExample(); }
}

// ===== Swing Example (Modern Style) =====
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SwingExample extends JFrame {
    SwingExample() {
        setTitle("Swing Example");
        setSize(400, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        // Swing components start with 'J'
        JButton btn = new JButton("Click Me");
        JLabel label = new JLabel("Hello Swing!");
        JTextField text = new JTextField(15);

        // Swing supports icons, tooltips, HTML in labels
        btn.setToolTipText("Click to see the magic!");
        label.setText("&lt;html&gt;&lt;b&gt;Bold&lt;/b&gt; text&lt;/html&gt;");

        btn.addActionListener(e -> {
            String name = text.getText();
            label.setText("Hello, " + name + "!");
        });

        add(btn);
        add(text);
        add(label);

        // Set Look and Feel (Swing-specific feature)
        try {
            UIManager.setLookAndFeel(
                UIManager.getSystemLookAndFeelClassName());
            SwingUtilities.updateComponentTreeUI(this);
        } catch (Exception e) { }

        setVisible(true);
    }
    public static void main(String[] args) { new SwingExample(); }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A library management system uses Swing for its GUI: <code>JTable</code> displays the book catalog, <code>JTabbedPane</code> organizes features into tabs (Search, Issue, Return), <code>JComboBox</code> provides dropdown selections, and <code>JOptionPane</code> shows confirmation dialogs. AWT simply doesn't have these rich components — it would require extensive custom drawing to replicate them.</p>
    <p><strong>Scenario 2:</strong> A cross-platform application needs to look identical on Windows, macOS, and Linux. With AWT, a Button looks different on each OS (Windows button vs. macOS button). With Swing's pluggable look-and-feel, you choose one consistent appearance (Metal, Nimbus, or system-native) that stays the same across all platforms, simplifying testing and user training.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Swing = lightweight, Java-drawn components (javax.swing package)</li>
      <li>AWT = heavyweight, OS-native components (java.awt package)</li>
      <li>Swing follows MVC pattern; AWT does not</li>
      <li>Swing provides 40+ rich components (JTable, JTree, JTabbedPane)</li>
      <li>Swing supports <strong>pluggable look-and-feel</strong> (Metal, Nimbus, system)</li>
      <li>Swing components are prefixed with 'J' (JButton, JFrame, JTextField)</li>
      <li>Swing is platform-independent; AWT is platform-dependent</li>
    </ul>
  </div>,
];
