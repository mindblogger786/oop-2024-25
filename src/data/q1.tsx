import React from "react";

export const q1Answers: React.ReactNode[] = [
  // 1a. Objects in Java
  <div key="1a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1a. How are objects implemented in Java?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>In Java, an <strong>object</strong> is a real-world entity that combines state (data/fields) and behavior (methods). Objects are the fundamental building blocks of any Java program — they are instances of classes, which serve as blueprints defining their structure and capabilities. Every object in Java is allocated memory on the <strong>heap</strong>, and all object variables are <strong>reference types</strong> that point to this heap memory. Unlike C++, Java does not support stack-allocated objects or manual memory deallocation; instead, the <strong>Garbage Collector</strong> automatically reclaims memory when objects are no longer referenced, eliminating memory leaks and dangling pointer problems.</p>
    <p>Objects are implemented internally through a combination of class metadata, instance fields, and a method dispatch mechanism. When the JVM creates an object using the <code>new</code> keyword, it allocates heap memory for all instance fields, initializes them to default values, invokes the appropriate constructor, and returns a reference to the newly created object. Every object also carries a hidden header containing a reference to its <strong>Class object</strong> (enabling runtime type identification and virtual method dispatch) and a <strong>hash code</strong> used by the garbage collector and hash-based collections. This design ensures type safety, automatic memory management, and secure runtime behavior.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of a class as a <strong>blueprint for a house</strong>, and an object as the <strong>actual house built from that blueprint</strong>. The blueprint defines the structure (number of rooms, dimensions — these are fields) and capabilities (electrical wiring, plumbing — these are methods). You can build many houses (objects) from the same blueprint (class), each with its own paint color and furniture (field values), but all sharing the same structure. When you call a method on an object, it is like turning on a specific light switch in a specific house — the action applies to that particular object's state.</p>
    <p>The JVM implements objects with the following internal mechanism: each object has a pointer to its <strong>vtable</strong> (virtual method table) stored in the class metadata. When a method is called, the JVM looks up the correct method implementation in this table, enabling <strong>dynamic dispatch</strong> (polymorphism). Instance fields are stored directly in the object's heap memory, while static fields are stored in the Class object itself, shared across all instances.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Object Creation Flowchart</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>Step 1: Class loader loads the class bytecode into JVM method area</p>
      <p>Step 2: JVM verifies class format and resolves symbolic references</p>
      <p>Step 3: 'new' keyword triggers memory allocation on the heap</p>
      <p>Step 4: Instance fields initialized to default values (0, null, false)</p>
      <p>Step 5: Explicit field initializers and instance blocks execute</p>
      <p>Step 6: Constructor executes (may chain to super constructor)</p>
      <p>Step 7: Reference to the object returned to the caller variable</p>
      <p>Step 8: Object is ready for use via its reference variable</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== How Objects Are Implemented in Java =====

// Step 1: Define a Class (Blueprint)
class Student {
    // Instance fields (stored in each object's heap memory)
    private String name;
    private int rollNo;
    private double marks;

    // Static field (shared across all objects, stored in Class object)
    static String university = "Delhi University";

    // Constructor (initializes object state)
    Student(String name, int rollNo, double marks) {
        this.name = name;        // 'this' refers to current object
        this.rollNo = rollNo;
        this.marks = marks;
    }

    // Methods (behavior — stored once in class, shared by all objects)
    String getGrade() {
        if (marks >= 90) return "A+";
        if (marks >= 80) return "A";
        if (marks >= 70) return "B";
        return "C";
    }

    void display() {
        System.out.println(name + " | Roll: " + rollNo
            + " | Grade: " + getGrade()
            + " | Univ: " + university);
    }
}

// Step 2: Create Objects (Instances)
public class ObjectDemo {
    public static void main(String[] args) {
        // Each 'new' creates a separate object on the heap
        Student s1 = new Student("Rahul", 101, 92.5);
        Student s2 = new Student("Priya", 102, 87.0);

        // s1 and s2 are REFERENCES pointing to heap objects
        // They have INDEPENDENT copies of instance fields
        s1.display();  // Rahul | Roll: 101 | Grade: A+ | Univ: Delhi University
        s2.display();  // Priya | Roll: 102 | Grade: A  | Univ: Delhi University

        // Demonstrating reference semantics
        Student s3 = s1;  // s3 points to SAME object as s1
        s3.display();     // Same output as s1 — NOT a copy!

        // Memory: s1 and s3 → same heap object
        //          s2 → different heap object

        // Comparing objects
        System.out.println(s1 == s3);  // true (same reference)
        System.out.println(s1 == s2);  // false (different objects)
        System.out.println(s1.equals(s2)); // false (default equals)

        // Garbage Collection: when no reference points to an object
        s3 = null;  // Object originally referenced by s1/s3
                    // is NOT garbage collected (s1 still refers)
        s1 = null;  // NOW the object has no references → eligible for GC
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> In a banking application, each customer is represented as a <code>Customer</code> object. When <code>new Customer("Rahul", 1001)</code> is called, the JVM allocates heap memory for <code>name</code> and <code>accountId</code> fields, initializes them via the constructor, and returns a reference. Creating 1000 customers means 1000 independent heap objects, each with its own name and balance. The <code>withdraw()</code> method on one object only affects that specific customer's balance.</p>
    <p><strong>Scenario 2:</strong> In a university system, <code>Student s1 = new Student("Amit")</code> creates an object. If we do <code>Student s2 = s1</code>, both references point to the <strong>same object</strong>. Changing <code>s2.setName("Ravi")</code> also changes <code>s1.getName()</code> to "Ravi". To create an independent copy, we need <code>clone()</code> or a copy constructor — this distinction between reference copying and object copying is fundamental to Java's object model.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Objects are created using <code>new ClassName()</code> — memory allocated on the <strong>heap</strong></li>
      <li>Variables store <strong>references</strong> (memory addresses), not the objects themselves</li>
      <li>Each object has its own copy of <strong>instance fields</strong>; methods are shared via class metadata</li>
      <li><code>this</code> keyword refers to the current object inside methods and constructors</li>
      <li>Objects are garbage collected when no live reference points to them</li>
      <li>Assignment (<code>s2 = s1</code>) copies the reference, NOT the object</li>
    </ul>
  </div>,

  // 1b. Method Overloading vs Overriding
  <div key="1b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1b. Differentiate between method overloading and method overriding in Java.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Method Overloading</strong> (compile-time polymorphism) occurs when multiple methods in the same class share the same name but have different parameter lists — different number of parameters, different types of parameters, or different order of parameter types. The compiler determines which method to call based on the method signature at compile time, which is why it is called <strong>static polymorphism</strong> or <strong>early binding</strong>. Overloading allows methods to perform similar operations with different types of input, improving code readability and providing a consistent naming convention. Java's <code>println()</code> method is a classic example — it has over 10 overloaded versions accepting int, String, double, boolean, and so on.</p>
    <p><strong>Method Overriding</strong> (runtime polymorphism) occurs when a subclass provides its own specific implementation of a method already defined in its parent class. The method in the subclass must have the exact same signature (name, return type, and parameters) as the one in the parent class. The JVM determines which version to call based on the <strong>actual object type at runtime</strong>, not the reference type, which is why it is called <strong>dynamic polymorphism</strong> or <strong>late binding</strong>. Overriding is the foundation of Java's polymorphic behavior and is essential for frameworks, design patterns, and abstraction.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of <strong>overloading</strong> as a <strong>Swiss Army knife</strong> — one tool name with multiple blades for different situations. When you say "cut," the right blade is chosen based on what you are cutting (rope vs. paper vs. wire). Think of <strong>overriding</strong> as a <strong>company policy overridden by a branch office</strong> — headquarters defines a general "greet customer" policy, but each branch (London, Tokyo, Mumbai) customizes the greeting to their local culture. The parent defines the interface; the child provides the specific behavior.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Overloading</th>
            <th className="border border-gray-300 p-2 text-left">Overriding</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Definition</strong></td><td className="border border-gray-300 p-2">Same name, different parameters</td><td className="border border-gray-300 p-2">Same name &amp; signature in subclass</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Polymorphism</strong></td><td className="border border-gray-300 p-2">Compile-time (static)</td><td className="border border-gray-300 p-2">Runtime (dynamic)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Where</strong></td><td className="border border-gray-300 p-2">Same class (or subclass)</td><td className="border border-gray-300 p-2">Parent-child classes (inheritance)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Parameters</strong></td><td className="border border-gray-300 p-2">Must differ (number/type/order)</td><td className="border border-gray-300 p-2">Must be exactly the same</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Return Type</strong></td><td className="border border-gray-300 p-2">Can differ</td><td className="border border-gray-300 p-2">Must be same (or covariant)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Binding</strong></td><td className="border border-gray-300 p-2">Early (compile time)</td><td className="border border-gray-300 p-2">Late (runtime)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Access Modifier</strong></td><td className="border border-gray-300 p-2">Can differ</td><td className="border border-gray-300 p-2">Cannot be more restrictive</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Annotation</strong></td><td className="border border-gray-300 p-2">Not required</td><td className="border border-gray-300 p-2">@Override recommended</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Example</strong></td><td className="border border-gray-300 p-2">println(int), println(String)</td><td className="border border-gray-300 p-2">toString() in subclass</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== METHOD OVERLOADING =====
class Calculator {
    // Same method name, different parameters
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    String add(String a, String b) {
        return a + b;  // Concatenation
    }
}

// Usage:
Calculator calc = new Calculator();
calc.add(5, 10);          // calls add(int, int) → 15
calc.add(3.5, 2.5);       // calls add(double, double) → 6.0
calc.add(1, 2, 3);        // calls add(int, int, int) → 6
calc.add("Hello", "Java");// calls add(String, String)

// ===== METHOD OVERRIDING =====
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override  // Annotation ensures correct overriding
    void makeSound() {
        System.out.println("Bark! Bark!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

// Runtime Polymorphism Demo:
public class OverrideDemo {
    public static void main(String[] args) {
        // Reference type: Animal, Object type: Dog/Cat
        Animal a1 = new Dog();  // Upcasting
        Animal a2 = new Cat();
        Animal a3 = new Animal();

        a1.makeSound();  // "Bark! Bark!"  (Dog's version)
        a2.makeSound();  // "Meow!"        (Cat's version)
        a3.makeSound();  // "Some generic" (Animal's version)

        // JVM decides at RUNTIME which version to call
        // based on the actual object type, not reference type
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A <code>Printer</code> class overloads <code>print()</code>: <code>print(String doc)</code>, <code>print(int page)</code>, <code>print(String doc, int copies)</code>. The compiler resolves which method to call based on arguments. This is overloading — same class, same name, different parameters. It provides flexibility without inventing new method names.</p>
    <p><strong>Scenario 2:</strong> A <code>BankAccount</code> class has <code>calculateInterest()</code>. Subclasses <code>SavingsAccount</code> and <code>CurrentAccount</code> override it with different interest formulas. When looping through <code>BankAccount[] accounts</code>, calling <code>accounts[i].calculateInterest()</code> invokes the correct version at runtime based on each account's actual type — demonstrating runtime polymorphism through overriding.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>Overloading</strong>: same name, different parameters — compile-time resolution</li>
      <li><strong>Overriding</strong>: same name and signature in subclass — runtime resolution</li>
      <li>Overloading = static polymorphism; Overriding = dynamic polymorphism</li>
      <li><code>@Override</code> annotation helps catch overriding mistakes at compile time</li>
      <li>Overriding requires inheritance; overloading works within the same class</li>
      <li>Overridden method cannot have more restrictive access modifier</li>
    </ul>
  </div>,

  // 1c. throw and throws
  <div key="1c" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1c. What is the purpose of throw and throws keywords in Java?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>throw</strong> keyword in Java is used to explicitly throw an exception object from a method or block of code. When the JVM encounters a <code>throw</code> statement, it immediately stops normal execution and transfers control to the nearest enclosing <code>catch</code> block that can handle that exception type. You can throw any object that is a subclass of <code>java.lang.Throwable</code>, including built-in exceptions (like <code>IllegalArgumentException</code>) and custom exceptions. The throw keyword is typically used when your code detects an error condition that cannot be handled locally and must be propagated to the caller.</p>
    <p>The <strong>throws</strong> keyword is used in a method signature to declare the list of checked exceptions that the method might throw but does not handle internally. It serves as a <strong>contract</strong> with the caller — warning them that they must either handle these exceptions with try-catch or declare them further with their own throws clause. The Java compiler enforces this: if a method throws a checked exception without catching it, the code will not compile unless the exception is declared in the throws clause. Unchecked exceptions (subclasses of RuntimeException) do not require throws declaration.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">throw</th>
            <th className="border border-gray-300 p-2 text-left">throws</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Purpose</strong></td><td className="border border-gray-300 p-2">Explicitly throw an exception</td><td className="border border-gray-300 p-2">Declare exceptions a method may throw</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Placement</strong></td><td className="border border-gray-300 p-2">Inside method body</td><td className="border border-gray-300 p-2">In method signature</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Followed by</strong></td><td className="border border-gray-300 p-2">One exception object</td><td className="border border-gray-300 p-2">Exception class name(s)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Multiple</strong></td><td className="border border-gray-300 p-2">One at a time</td><td className="border border-gray-300 p-2">Can declare multiple (comma-separated)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Syntax</strong></td><td className="border border-gray-300 p-2">throw new Exception()</td><td className="border border-gray-300 p-2">void m() throws Exception</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Enforced by</strong></td><td className="border border-gray-300 p-2">Programmer's decision</td><td className="border border-gray-300 p-2">Compiler (for checked exceptions)</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== throw keyword =====
class AgeValidator {
    static void validate(int age) {
        if (age < 0 || age > 150) {
            // Explicitly throwing an exception
            throw new IllegalArgumentException(
                "Invalid age: " + age
                + ". Must be between 0 and 150.");
        }
        System.out.println("Valid age: " + age);
    }
}

// Usage:
AgeValidator.validate(25);   // Valid age: 25
AgeValidator.validate(-5);   // Throws IllegalArgumentException

// ===== throws keyword =====
import java.io.*;

class FileProcessor {
    // Declares checked exceptions that might be thrown
    static String readFile(String path)
            throws FileNotFoundException, IOException {
        FileReader fr = new FileReader(path); // may throw
        BufferedReader br = new BufferedReader(fr);
        String content = br.readLine();       // may throw
        br.close();
        return content;
    }
}

// Caller MUST handle or re-declare
public class ThrowsDemo {
    public static void main(String[] args) {
        try {
            String data = FileProcessor.readFile("data.txt");
            System.out.println(data);
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        }
    }
}

// ===== Custom Exception with throw/throws =====
class InsufficientBalanceException extends Exception {
    InsufficientBalanceException(String msg) {
        super(msg);
    }
}

class BankAccount {
    private double balance;

    BankAccount(double balance) {
        this.balance = balance;
    }

    // throws declares the checked exception
    void withdraw(double amount)
            throws InsufficientBalanceException {
        if (amount > balance) {
            // throw actually creates and throws it
            throw new InsufficientBalanceException(
                "Cannot withdraw " + amount
                + ". Balance: " + balance);
        }
        balance -= amount;
        System.out.println("Withdrawn: " + amount);
    }
}

// Caller handles the declared exception
BankAccount acc = new BankAccount(1000);
try {
    acc.withdraw(5000);  // Will throw
} catch (InsufficientBalanceException e) {
    System.out.println(e.getMessage());
    // Output: Cannot withdraw 5000.0. Balance: 1000.0
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> An ATM withdrawal system: the <code>withdraw()</code> method checks if the amount exceeds the balance. If so, <code>throw new InsufficientBalanceException("Balance too low")</code> immediately stops the method and signals the error. The method declares <code>throws InsufficientBalanceException</code> so the calling code (ATM screen) must handle it — displaying "Insufficient funds" to the user.</p>
    <p><strong>Scenario 2:</strong> A file processing utility declares <code>throws IOException, FileNotFoundException</code> because reading files can fail for many reasons (file missing, disk error, permission denied). The caller wraps the call in try-catch, providing user-friendly error messages. Without the throws declaration, the code would not compile — Java's compiler enforces exception handling for checked exceptions.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>throw</strong>: creates and throws an exception object (inside method body)</li>
      <li><strong>throws</strong>: declares which exceptions a method may throw (in method signature)</li>
      <li>throw is followed by an <strong>object</strong>; throws is followed by <strong>class names</strong></li>
      <li>throws is mandatory for <strong>checked exceptions</strong> not caught within the method</li>
      <li>throw immediately transfers control to nearest matching catch block</li>
      <li>Custom exceptions extend <code>Exception</code> class and are thrown with throw keyword</li>
    </ul>
  </div>,

  // 1d. Font Style and Size in Java Graphics
  <div key="1d" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1d. Explain how to change the font style and size in a Java graphics program.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>In Java's AWT (Abstract Window Toolkit) and Swing graphics programming, text appearance is controlled through the <code>java.awt.Font</code> class. A Font object encapsulates three properties: the <strong>font name</strong> (e.g., "Serif", "SansSerif", "Monospaced", "Dialog", or specific system fonts like "Arial"), the <strong>font style</strong> (Font.PLAIN, Font.BOLD, Font.ITALIC, or Font.BOLD + Font.ITALIC), and the <strong>font size</strong> in points (e.g., 12, 18, 24). To change the font used for drawing text, you create a Font object with the desired properties and apply it to the graphics context using the <code>Graphics.setFont()</code> method.</p>
    <p>The <code>Graphics</code> class (and its enhanced subclass <code>Graphics2D</code>) is the primary drawing surface in Java GUI programming. When you override the <code>paint()</code> or <code>paintComponent()</code> method in a component (like <code>Applet</code>, <code>Frame</code>, or <code>JPanel</code>), you receive a Graphics object that represents the drawing context. By calling <code>g.setFont(myFont)</code> before <code>g.drawString()</code>, you control exactly how the text appears. Multiple fonts can be used in a single paint cycle — just call <code>setFont()</code> again before each <code>drawString()</code> call.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Font Class Properties</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Property</th>
            <th className="border border-gray-300 p-2 text-left">Values / Constants</th>
            <th className="border border-gray-300 p-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Name</strong></td><td className="border border-gray-300 p-2">Serif, SansSerif, Monospaced, Dialog, system fonts</td><td className="border border-gray-300 p-2">"Arial", "Times New Roman"</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Style</strong></td><td className="border border-gray-300 p-2">PLAIN(0), BOLD(1), ITALIC(2), BOLD+ITALIC(3)</td><td className="border border-gray-300 p-2">Font.BOLD, Font.ITALIC</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Size</strong></td><td className="border border-gray-300 p-2">Integer (points)</td><td className="border border-gray-300 p-2">12, 18, 24, 36</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`import java.awt.*;
import javax.swing.*;

public class FontDemo extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        setBackground(Color.WHITE);

        // ===== Creating Font Objects =====

        // Font(name, style, size)
        Font plainFont = new Font("Serif", Font.PLAIN, 16);
        Font boldFont = new Font("Serif", Font.BOLD, 20);
        Font italicFont = new Font("SansSerif", Font.ITALIC, 18);
        Font boldItalicFont = new Font("Monospaced",
            Font.BOLD + Font.ITALIC, 22);

        // ===== Drawing text with different fonts =====
        int y = 40;

        g.setFont(plainFont);
        g.setColor(Color.BLACK);
        g.drawString("Plain Serif - Size 16", 30, y);
        y += 35;

        g.setFont(boldFont);
        g.setColor(Color.BLUE);
        g.drawString("Bold Serif - Size 20", 30, y);
        y += 35;

        g.setFont(italicFont);
        g.setColor(Color.RED);
        g.drawString("Italic SansSerif - Size 18", 30, y);
        y += 35;

        g.setFont(boldItalicFont);
        g.setColor(new Color(0, 128, 0)); // Dark green
        g.drawString("Bold+Italic Monospaced - Size 22", 30, y);
        y += 45;

        // ===== Using deriveFont() to modify existing font =====
        Font baseFont = new Font("Arial", Font.PLAIN, 12);

        // Change size only
        Font bigger = baseFont.deriveFont(24.0f);
        g.setFont(bigger);
        g.drawString("Derived: Arial size 24", 30, y);
        y += 35;

        // Change style only
        Font boldBase = baseFont.deriveFont(Font.BOLD);
        g.setFont(boldBase);
        g.drawString("Derived: Arial BOLD size 12", 30, y);

        // ===== Graphics2D advanced font rendering =====
        Graphics2D g2d = (Graphics2D) g;
        g2d.setRenderingHint(
            RenderingHints.KEY_TEXT_ANTIALIASING,
            RenderingHints.VALUE_TEXT_ANTIALIAS_ON);

        Font fancyFont = new Font("Dialog", Font.BOLD, 28);
        g2d.setFont(fancyFont);
        g2d.setColor(new Color(102, 0, 153)); // Purple
        g2d.drawString("Anti-aliased smooth text!", 30, y + 50);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Font Demo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 400);
        frame.add(new FontDemo());
        frame.setVisible(true);
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A certificate generation program uses different fonts for each section: a large bold serif font (Font.BOLD, size 36) for the title "Certificate of Achievement", an italic font for the recipient's name, and a small plain font for the date. Each section is drawn by setting the appropriate font before calling <code>drawString()</code>, creating a visually appealing document.</p>
    <p><strong>Scenario 2:</strong> A chart drawing application uses <code>deriveFont()</code> to create font variations from a base font. The title uses the base font at size 24 bold, axis labels use it at size 14 plain, and legend text uses it at size 12 italic. This approach ensures consistent font family across the chart while varying size and style as needed.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Create fonts: <code>new Font("name", style, size)</code></li>
      <li>Style constants: <code>Font.PLAIN</code>, <code>Font.BOLD</code>, <code>Font.ITALIC</code>, <code>Font.BOLD + Font.ITALIC</code></li>
      <li>Apply font: <code>g.setFont(myFont)</code> before <code>g.drawString()</code></li>
      <li>Modify existing font: <code>font.deriveFont(size)</code> or <code>font.deriveFont(style)</code></li>
      <li>Font names: logical (Serif, SansSerif, Monospaced) or physical ("Arial", "Courier New")</li>
      <li>Graphics2D provides anti-aliasing for smoother text rendering</li>
    </ul>
  </div>,

  // 1e. Multithreading vs Multitasking
  <div key="1e" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1e. What is the difference between multithreading and multitasking?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Multitasking</strong> is the ability of an operating system to execute multiple tasks (programs/processes) simultaneously. In multitasking, each task runs in its own independent memory space (process), with complete isolation from other tasks. The operating system rapidly switches between tasks using a technique called <strong>context switching</strong>, giving each process a time slice (quantum) of CPU time. This creates the illusion of simultaneous execution on a single-core processor, while multi-core processors can execute multiple processes truly in parallel. Multitasking is heavyweight because switching between processes requires saving and loading entire memory maps, register sets, and kernel resources.</p>
    <p><strong>Multithreading</strong> is the ability of a single process to execute multiple threads concurrently. A <strong>thread</strong> is the smallest unit of execution within a process — all threads of a process share the same memory space (heap, code segment, data segment), file handles, and other resources, but each thread has its own <strong>stack</strong>, <strong>program counter</strong>, and <strong>registers</strong>. Because threads share memory, context switching between threads is much faster than between processes — no memory map changes are needed. Java provides built-in multithreading support through the <code>Thread</code> class and <code>Runnable</code> interface, making it one of the most threading-friendly programming languages.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Multitasking</th>
            <th className="border border-gray-300 p-2 text-left">Multithreading</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Unit</strong></td><td className="border border-gray-300 p-2">Process (heavyweight)</td><td className="border border-gray-300 p-2">Thread (lightweight)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Memory</strong></td><td className="border border-gray-300 p-2">Separate memory space per process</td><td className="border border-gray-300 p-2">Shared memory within a process</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Context Switch</strong></td><td className="border border-gray-300 p-2">Slow (saves entire process state)</td><td className="border border-gray-300 p-2">Fast (only saves stack &amp; registers)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Communication</strong></td><td className="border border-gray-300 p-2">IPC (pipes, sockets, shared memory)</td><td className="border border-gray-300 p-2">Direct via shared variables</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Overhead</strong></td><td className="border border-gray-300 p-2">High (separate address space)</td><td className="border border-gray-300 p-2">Low (shared address space)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Failure Impact</strong></td><td className="border border-gray-300 p-2">One process crash does not affect others</td><td className="border border-gray-300 p-2">One thread crash can crash entire process</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Creation</strong></td><td className="border border-gray-300 p-2">OS-level (fork, exec)</td><td className="border border-gray-300 p-2">Java: new Thread(), implements Runnable</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Example</strong></td><td className="border border-gray-300 p-2">Running Chrome + VS Code + Music player</td><td className="border border-gray-300 p-2">Multiple tabs in Chrome, game engine threads</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Multithreading in Java =====

// Method 1: Extending Thread class
class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + " - Count: " + i);
            try { Thread.sleep(500); }
            catch (InterruptedException e) { }
        }
    }
}

// Method 2: Implementing Runnable (preferred)
class MyRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(
                Thread.currentThread().getName()
                + " - Count: " + i);
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        // Creating threads
        MyThread t1 = new MyThread();
        t1.setName("Thread-A");

        Thread t2 = new Thread(new MyRunnable(), "Thread-B");

        t1.start();  // Starts thread (calls run() internally)
        t2.start();  // Both run concurrently!

        // main thread continues executing
        for (int i = 1; i <= 5; i++) {
            System.out.println("Main - Count: " + i);
        }
    }
}
// Output shows interleaved execution of 3 threads`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> Running a web browser (Chrome) while listening to music (Spotify) and editing code (VS Code) — this is <strong>multitasking</strong>. Each application is a separate process with its own memory. If Chrome crashes, Spotify continues playing. The OS manages CPU time between these independent processes.</p>
    <p><strong>Scenario 2:</strong> Inside a single Chrome browser, one thread renders the webpage, another downloads images, another runs JavaScript, and another handles user input — this is <strong>multithreading</strong>. All threads share Chrome's memory space, communicate efficiently, and work together. If the rendering thread crashes, the entire Chrome process crashes (unlike multitasking).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Multitasking = multiple <strong>processes</strong> (heavyweight, separate memory)</li>
      <li>Multithreading = multiple <strong>threads</strong> within one process (lightweight, shared memory)</li>
      <li>Thread context switching is 10-100x faster than process context switching</li>
      <li>Threads share heap memory; each has its own stack and program counter</li>
      <li>Java supports multithreading via <code>Thread</code> class and <code>Runnable</code> interface</li>
      <li>Multithreading risks: race conditions, deadlocks (need synchronization)</li>
    </ul>
  </div>,

  // 1f. JCheckBox
  <div key="1f" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1f. What is the purpose of JCheckBox?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>JCheckBox</strong> is a Swing GUI component in Java that represents a checkbox — a small box that can be either selected (checked) or unselected (unchecked). It allows users to make <strong>independent binary choices</strong> (yes/no, true/false) from a set of options. Unlike radio buttons (where only one option can be selected in a group), multiple JCheckBoxes can be selected simultaneously, making them ideal for situations where the user needs to choose zero, one, or several options from a list. JCheckBox inherits from <code>JToggleButton</code> and is part of the <code>javax.swing</code> package.</p>
    <p>The JCheckBox component generates an <strong>ActionEvent</strong> and an <strong>ItemEvent</strong> when its state changes. You can attach event listeners to respond to user selections — for example, updating a price total when toppings are selected on a pizza order form. The checkbox displays a text label next to the box and supports icons, keyboard mnemonics, and customizable appearance. It can also be used in a selected/pressed state programmatically using the <code>setSelected(boolean)</code> method.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 JCheckBox Constructors &amp; Methods</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Constructor / Method</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><code>JCheckBox()</code></td><td className="border border-gray-300 p-2">Creates unselected checkbox with no text</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><code>JCheckBox(String text)</code></td><td className="border border-gray-300 p-2">Creates checkbox with text label</td></tr>
          <tr><td className="border border-gray-300 p-2"><code>JCheckBox(String text, boolean selected)</code></td><td className="border border-gray-300 p-2">Creates with text and initial state</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><code>isSelected()</code></td><td className="border border-gray-300 p-2">Returns true if checkbox is checked</td></tr>
          <tr><td className="border border-gray-300 p-2"><code>setSelected(boolean)</code></td><td className="border border-gray-300 p-2">Programmatically check/uncheck</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><code>setText(String)</code></td><td className="border border-gray-300 p-2">Set the label text</td></tr>
          <tr><td className="border border-gray-300 p-2"><code>addItemListener()</code></td><td className="border border-gray-300 p-2">Listen for selection changes</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class CheckBoxDemo extends JFrame
        implements ItemListener {

    // Declare checkboxes
    JCheckBox cbJava, cbPython, cbCpp, cbDBMS;
    JLabel resultLabel;

    CheckBoxDemo() {
        setTitle("Course Selection");
        setSize(400, 300);
        setLayout(new FlowLayout());
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Create checkboxes
        cbJava = new JCheckBox("Java Programming");
        cbPython = new JCheckBox("Python");
        cbCpp = new JCheckBox("C++");
        cbDBMS = new JCheckBox("Database Management");

        // Add item listeners
        cbJava.addItemListener(this);
        cbPython.addItemListener(this);
        cbCpp.addItemListener(this);
        cbDBMS.addItemListener(this);

        // Result label
        resultLabel = new JLabel(
            "Select your courses above.");
        resultLabel.setFont(
            new Font("Arial", Font.BOLD, 14));

        // Add components
        add(new JLabel("Select Courses:"));
        add(cbJava);
        add(cbPython);
        add(cbCpp);
        add(cbDBMS);
        add(resultLabel);

        setVisible(true);
    }

    // Called whenever a checkbox state changes
    public void itemStateChanged(ItemEvent e) {
        StringBuilder selected = new StringBuilder(
            "Selected: ");
        double total = 0;

        if (cbJava.isSelected()) {
            selected.append("Java ");
            total += 5000;
        }
        if (cbPython.isSelected()) {
            selected.append("Python ");
            total += 4500;
        }
        if (cbCpp.isSelected()) {
            selected.append("C++ ");
            total += 4000;
        }
        if (cbDBMS.isSelected()) {
            selected.append("DBMS ");
            total += 3500;
        }

        if (total > 0) {
            selected.append("| Total Fee: Rs." + total);
        } else {
            selected.append("None");
        }

        resultLabel.setText(selected.toString());
    }

    public static void main(String[] args) {
        new CheckBoxDemo();
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A pizza ordering application uses JCheckBoxes for toppings: Mushroom, Olive, Jalapeno, Extra Cheese. The customer can select any combination (Mushroom + Extra Cheese, or all four, or none). Each selection updates the total price in real time using ItemListener. This demonstrates independent multi-selection, which radio buttons cannot achieve.</p>
    <p><strong>Scenario 2:</strong> A software installer uses JCheckBoxes for optional components: "Documentation", "Sample Code", "Desktop Shortcut". The user selects which optional features to install. By default, "Documentation" is pre-checked using <code>new JCheckBox("Documentation", true)</code>. The <code>isSelected()</code> method is called during installation to determine which components to copy.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>JCheckBox = Swing component for <strong>independent binary selections</strong></li>
      <li>Multiple checkboxes can be selected simultaneously (unlike radio buttons)</li>
      <li>Key methods: <code>isSelected()</code>, <code>setSelected()</code>, <code>addItemListener()</code></li>
      <li>Events: ItemEvent (state change), ActionEvent (click)</li>
      <li>Part of <code>javax.swing</code> package</li>
      <li>Use for: preferences, feature selection, multi-choice options</li>
    </ul>
  </div>,

  // 1g. Encapsulation and Polymorphism
  <div key="1g" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1g. Define Encapsulation and Polymorphism.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Encapsulation</strong> is the OOP principle of <strong>bundling data (fields) and methods that operate on that data into a single unit (class)</strong>, while restricting direct access to the internal state by marking fields as <code>private</code> and exposing controlled access through <code>public</code> getter and setter methods. Encapsulation provides <strong>data hiding</strong> — the internal representation of an object is hidden from the outside world, and access is only permitted through a well-defined interface. This protects data from corruption, enforces validation rules, and allows the internal implementation to change without affecting external code that uses the class.</p>
    <p><strong>Polymorphism</strong> (Greek for "many forms") is the OOP principle that allows a single interface to represent different underlying forms (data types or behaviors). In Java, polymorphism manifests in two ways: <strong>compile-time polymorphism</strong> (method overloading — same method name, different parameters) and <strong>runtime polymorphism</strong> (method overriding — subclass redefines a parent method, and the JVM selects the correct version based on the actual object type at runtime). Polymorphism enables writing flexible, extensible code where a single reference type can refer to objects of many different subtypes, and the correct behavior is automatically selected.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Encapsulation</th>
            <th className="border border-gray-300 p-2 text-left">Polymorphism</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Definition</strong></td><td className="border border-gray-300 p-2">Bundling data + methods, hiding internal state</td><td className="border border-gray-300 p-2">One interface, many implementations</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Mechanism</strong></td><td className="border border-gray-300 p-2">private fields + public getters/setters</td><td className="border border-gray-300 p-2">Overloading + Overriding</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Benefit</strong></td><td className="border border-gray-300 p-2">Data protection, validation, flexibility</td><td className="border border-gray-300 p-2">Code reusability, extensibility</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Keyword</strong></td><td className="border border-gray-300 p-2">private, protected, public</td><td className="border border-gray-300 p-2">@Override, overloading</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Binding Time</strong></td><td className="border border-gray-300 p-2">Design time</td><td className="border border-gray-300 p-2">Compile time (overload) or runtime (override)</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== ENCAPSULATION =====
class BankAccount {
    private String accountHolder;  // PRIVATE fields
    private double balance;        // Hidden from outside

    // Public constructor
    BankAccount(String holder, double initialBalance) {
        this.accountHolder = holder;
        setBalance(initialBalance); // Use setter for validation
    }

    // Public GETTER (read access)
    public String getAccountHolder() {
        return accountHolder;
    }

    // Public GETTER for balance
    public double getBalance() {
        return balance;
    }

    // Public SETTER with VALIDATION (controlled write)
    public void setBalance(double amount) {
        if (amount >= 0) {  // Validation logic
            this.balance = amount;
        } else {
            System.out.println("Balance cannot be negative!");
        }
    }

    // Public method using encapsulated data
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;  // Cannot directly modify balance
    }
}

// External code CANNOT access balance directly
BankAccount acc = new BankAccount("Rahul", 10000);
acc.deposit(5000);              // OK - controlled access
// acc.balance = -100;          // ERROR! private field
System.out.println(acc.getBalance());  // OK - via getter

// ===== POLYMORPHISM =====
class Shape {
    double area() { return 0; }  // Will be overridden
}

class Circle extends Shape {
    double radius;
    Circle(double r) { radius = r; }

    @Override
    double area() { return Math.PI * radius * radius; }
}

class Rectangle extends Shape {
    double width, height;
    Rectangle(double w, double h) { width = w; height = h; }

    @Override
    double area() { return width * height; }
}

// Polymorphic usage:
Shape[] shapes = {
    new Circle(5),
    new Rectangle(4, 6),
    new Circle(3)
};

for (Shape s : shapes) {
    // JVM calls the CORRECT area() based on actual type
    System.out.println("Area: " + s.area());
}
// Output: Area: 78.54 (Circle)
//         Area: 24.0   (Rectangle)
//         Area: 28.27  (Circle)`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1 (Encapsulation):</strong> A <code>Student</code> class has <code>private int marks</code> with a setter <code>setMarks(int m)</code> that validates 0 ≤ m ≤ 100. Without encapsulation, external code could set <code>student.marks = -500</code>, corrupting data. With encapsulation, the setter rejects invalid values, ensuring data integrity. The internal implementation (array, database, or calculation) can change without affecting external code.</p>
    <p><strong>Scenario 2 (Polymorphism):</strong> A payroll system has an array of <code>Employee[]</code> containing <code>FullTimeEmployee</code>, <code>PartTimeEmployee</code>, and <code>Contractor</code> objects. Each overrides <code>calculateSalary()</code> differently. A single loop calls <code>employees[i].calculateSalary()</code> and the JVM automatically invokes the correct calculation for each type — no <code>instanceof</code> checks or conditional logic needed.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>Encapsulation</strong>: private fields + public getters/setters = data hiding + validation</li>
      <li><strong>Polymorphism</strong>: one interface, many forms — overloading (compile-time) and overriding (runtime)</li>
      <li>Encapsulation protects data integrity; Polymorphism enables code flexibility</li>
      <li>Encapsulation uses access modifiers: private, protected, public</li>
      <li>Runtime polymorphism requires inheritance + method overriding + upcasting</li>
      <li>Together with Abstraction and Inheritance, they form the 4 pillars of OOP</li>
    </ul>
  </div>,
];
