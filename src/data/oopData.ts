export interface Answer {
  definition: string;
  coreConcepts: string;
  visualRepresentation: {
    type: 'table' | 'diagram' | 'flowchart';
    content: any;
  };
  implementation?: {
    type: 'code' | 'example' | 'algorithm';
    language?: string;
    content: string;
  };
  keyPoints: string[];
}

export interface Question {
  id: string;
  questionText: string;
  answer: Answer;
}

export interface QuestionSet {
  id: string;
  title: string;
  questions: Question[];
}

export const oopData: QuestionSet[] = [
  {
    id: "set1",
    title: "Question Set 1 (Fundamentals)",
    questions: [
      {
        id: "1a",
        questionText: "How are objects implemented in Java?",
        answer: {
          definition: "In Java, an object is a runtime entity that represents a real-world entity or an instance of a class. Objects are implemented using the class as a blueprint, which defines the state (fields) and behavior (methods) of the object. When an object is created, memory is allocated on the heap to store its attributes, and a reference to this memory is typically stored in a variable on the stack.",
          coreConcepts: "Object implementation involves three main steps: Declaration (associating a variable name with an object type), Instantiation (using the 'new' keyword to allocate memory), and Initialization (calling a constructor to set initial values). The JVM handles the memory management, ensuring that objects are accessible as long as they are referenced and garbage collected when they are not.",
          visualRepresentation: {
            type: "diagram",
            content: "Implementation Flow: [Class Definition] --(new keyword)--> [Heap Memory Allocation] --(Constructor)--> [Object Initialization] --(Reference)--> [Stack Variable]"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// Class definition (Blueprint)
class Student {
    String name; // State
    void study() { System.out.println(name + " is studying."); } // Behavior
}

public class Main {
    public static void main(String[] args) {
        // Implementation: Declaration, Instantiation, and Initialization
        Student s1 = new Student(); 
        s1.name = "Rahul";
        s1.study();
    }
}`
          },
          keyPoints: [
            "Objects are instances of classes.",
            "The 'new' keyword is mandatory for dynamic memory allocation.",
            "Constructors initialize the object state.",
            "JVM manages object memory via the Heap."
          ]
        }
      },
      {
        id: "1b",
        questionText: "Differentiate between method overloading and method overriding in Java.",
        answer: {
          definition: "Method overloading and method overriding are two fundamental concepts in Java that implement polymorphism. Overloading allows multiple methods in the same class to share the same name but with different parameter lists (static polymorphism). Overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass (dynamic polymorphism).",
          coreConcepts: "The 'Why' behind overloading is to increase readability and allow similar operations on different data types. The 'How' involves changing parameter count or types. Overriding's 'Why' is to provide specific behavior for a subclass while maintaining a common interface. The 'How' involves matching the exact signature and return type of the parent method.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Method Overloading", "Method Overriding"],
              rows: [
                ["Polymorphism Type", "Static / Compile-time", "Dynamic / Runtime"],
                ["Class", "Within the same class", "Between Superclass and Subclass"],
                ["Method Signature", "Must be different (params)", "Must be identical"],
                ["Inheritance", "Not required", "Required"],
                ["Private/Final Methods", "Can be overloaded", "Cannot be overridden"]
              ]
            }
          },
          keyPoints: [
            "Overloading = Same name, different parameters.",
            "Overriding = Same name, same parameters (inheritance).",
            "Overloading is checked by compiler; Overriding by JVM at runtime.",
            "Overriding requires @Override annotation (optional but recommended)."
          ]
        }
      },
      {
        id: "1c",
        questionText: "What is the purpose of throw and throws keywords in Java?",
        answer: {
          definition: "In Java's exception handling mechanism, 'throw' and 'throws' are used to manage the propagation of errors. The 'throw' keyword is used to explicitly raise an exception from within a method or block of code. In contrast, the 'throws' keyword is used in a method signature to declare that the method might throw one or more types of exceptions, delegating the responsibility of handling them to the caller.",
          coreConcepts: "Use 'throw' when you encounter a specific condition that violates business logic (e.g., age < 18). Use 'throws' to inform the compiler and other programmers that this method is 'dangerous' and requires a try-catch block or further delegation. 'throw' is followed by an instance, while 'throws' is followed by exception classes.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Keyword", "Purpose", "Syntax Location"],
              rows: [
                ["throw", "To explicitly throw an exception", "Inside method body"],
                ["throws", "To declare exceptions for a method", "Method signature"],
                ["Usage", "Followed by instance: throw new Exception();", "Followed by class: throws IOException"],
                ["Propagation", "Cannot throw multiple exceptions at once", "Can declare multiple exceptions"]
              ]
            }
          },
          keyPoints: [
            "throw: Action of raising an error.",
            "throws: Declaration of potential error.",
            "Checked exceptions MUST be declared with throws.",
            "throw is used to trigger custom exceptions."
          ]
        }
      },
      {
        id: "1d",
        questionText: "Explain how to change the font style and size in Java Graphics program.",
        answer: {
          definition: "Java's Abstract Window Toolkit (AWT) provides the 'Font' class within the 'java.awt' package to manage text styles in graphical applications. To change the font, you create a new Font object by specifying the font name, style (Plain, Bold, Italic), and size. This font object is then applied to the Graphics context using the 'setFont()' method before any text-drawing operations like 'drawString()' are performed.",
          coreConcepts: "The Font constructor takes three arguments: a String for the name (e.g., 'Serif', 'SansSerif'), an integer constant for the style (Font.BOLD, Font.ITALIC), and an integer for the point size. The Graphics object acts as a 'pen', and changing the font is like changing the tip of that pen for all subsequent writing.",
          visualRepresentation: {
            type: "diagram",
            content: "Logic: Create Font Object -> Graphics.setFont(fontObject) -> Graphics.drawString('Text', x, y)"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `import java.awt.*;
import javax.swing.*;

public class FontExample extends JPanel {
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        // Creating a new font: Name, Style, Size
        Font myFont = new Font("Arial", Font.BOLD | Font.ITALIC, 24);
        
        // Setting the font to the graphics context
        g.setFont(myFont);
        g.setColor(Color.BLUE);
        g.drawString("Custom Styled Text", 50, 50);
    }
}`
          },
          keyPoints: [
            "Font class resides in java.awt package.",
            "Styles can be combined using the bitwise OR operator (|).",
            "Common names: Serif, SansSerif, Monospaced, Dialog.",
            "setFont() must be called before drawString()."
          ]
        }
      },
      {
        id: "1e",
        questionText: "What is the difference between multithreading and multitasking?",
        answer: {
          definition: "Multitasking is the ability of an operating system to execute multiple tasks (processes) simultaneously, allowing a user to run several applications at once (like a browser and a code editor). Multithreading is a specialized form of multitasking where a single process is divided into multiple smaller units called 'threads' that run concurrently. While multitasking happens at the OS level, multithreading happens within an application.",
          coreConcepts: "In multitasking, each process has its own memory space, making switching between them (context switching) heavy and expensive. In multithreading, all threads share the same memory space and resources of the parent process, making communication between them faster and context switching much lighter and more efficient.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Multitasking", "Multithreading"],
              rows: [
                ["Unit of execution", "Process (Program)", "Thread (Sub-unit)"],
                ["Memory", "Each process has separate memory", "Threads share same memory"],
                ["Isolation", "Processes are isolated from each other", "Threads are not isolated"],
                ["Switching", "Heavy and slow", "Light and fast"],
                ["Example", "Running Chrome and Spotify", "Word processing and spell-check"]
              ]
            }
          },
          keyPoints: [
            "Multitasking is OS-driven; Multithreading is program-driven.",
            "Threads are 'lightweight processes'.",
            "Resource sharing is the key advantage of threads.",
            "Both aim to increase CPU utilization."
          ]
        }
      },
      {
        id: "1f",
        questionText: "What is purpose of JCheckBox?",
        answer: {
          definition: "JCheckBox is a Swing component used to create a checkbox that can be selected or deselected by the user. It is part of the 'javax.swing' package and is typically used in scenarios where a user needs to make multiple choices from a set of non-exclusive options. Unlike radio buttons, selecting one JCheckBox does not affect the state of others in the same group, unless explicitly programmed.",
          coreConcepts: "Each JCheckBox maintains its own state (Selected or Unselected). It generates an 'ItemEvent' or 'ActionEvent' whenever its state changes. Developers can check the current state using the 'isSelected()' method. It provides a visual 'check' mark when activated.",
          visualRepresentation: {
            type: "diagram",
            content: "UI Component: [v] Label Text | Logic: Click -> State Toggle -> Event Trigger -> Listener Callback"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `JCheckBox cb1 = new JCheckBox("Java");
JCheckBox cb2 = new JCheckBox("Python");

// Checking state
if(cb1.isSelected()) {
    System.out.println("Java selected");
}

// Adding listener
cb1.addActionListener(e -> {
    System.out.println("Check status changed!");
});`
          },
          keyPoints: [
            "Used for multiple-choice selections.",
            "Independent state for each checkbox.",
            "Supports text and optional icons.",
            "Belongs to the javax.swing package."
          ]
        }
      },
      {
        id: "1g",
        questionText: "Define Encapsulation and Polymorphism.",
        answer: {
          definition: "Encapsulation and Polymorphism are two pillars of Object-Oriented Programming. Encapsulation is the process of wrapping data (variables) and code (methods) together into a single unit (class) and restricting direct access to some of the object's components. Polymorphism is the ability of an object or a method to take on multiple forms, allowing the same interface to be used for a general class of actions.",
          coreConcepts: "Encapsulation achieves 'Data Hiding' using private access modifiers and provides access via public getter and setter methods. This ensures data integrity. Polymorphism allows for 'One Interface, Multiple Implementations'—for example, a 'Shape' class might have a 'draw()' method that behaves differently for 'Circle' and 'Square' subclasses.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Concept", "Primary Goal", "Key Implementation"],
              rows: [
                ["Encapsulation", "Data security / Hiding", "Private variables + Getters/Setters"],
                ["Polymorphism", "Flexibility / Reusability", "Overloading (Static) / Overriding (Dynamic)"]
              ]
            }
          },
          keyPoints: [
            "Encapsulation = 'Black Box' approach.",
            "Polymorphism = 'Many Forms'.",
            "Encapsulation protects data from accidental modification.",
            "Polymorphism allows for generic code that handles specific types."
          ]
        }
      }
    ]
  },
  {
    id: "set2",
    title: "Question Set 2 (Advanced Java)",
    questions: [
      {
        id: "2a",
        questionText: "Explain in details about variable in Java.",
        answer: {
          definition: "A variable in Java is a reserved area of memory used to store data that can be changed during program execution. Each variable has a specific data type (like int, double, or String) which determines the size and layout of the variable's memory. Java is a strongly-typed language, meaning every variable must be declared before it can be used, ensuring type safety and memory efficiency.",
          coreConcepts: "Variables are classified based on their scope and location: 1. Local Variables (inside methods/blocks), 2. Instance Variables (inside class, outside methods), and 3. Static Variables (shared across all instances). The lifecycle of a variable depends on its type; local variables die when the method returns, while static variables persist for the duration of the program.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Variable Type", "Scope", "Default Value", "Memory Location"],
              rows: [
                ["Local", "Method/Block only", "No default (must init)", "Stack"],
                ["Instance", "Class-wide (Object)", "Default (e.g., 0, null)", "Heap"],
                ["Static", "Class-wide (Global)", "Default", "Static Area / Method Area"]
              ]
            }
          },
          implementation: {
            type: "code",
            language: "java",
            content: `class Example {
    static int count = 0; // Static variable
    int id; // Instance variable

    void method() {
        int x = 10; // Local variable
    }
}`
          },
          keyPoints: [
            "Variables must be declared with a data type.",
            "Local variables must be initialized before use.",
            "Static variables are created using the 'static' keyword.",
            "Variable names should follow camelCase convention."
          ]
        }
      },
      {
        id: "2b",
        questionText: "What is object cloning in Java? Differentiate between shallow and deep copy.",
        answer: {
          definition: "Object cloning is the process of creating an exact copy of an existing object. In Java, this is achieved using the 'clone()' method of the Object class. For a class to support cloning, it must implement the 'Cloneable' marker interface. Cloning is used to create a backup or a duplicate state without manually copying each field.",
          coreConcepts: "Shallow copy creates a new object but does not clone the nested objects; instead, it copies their references (pointers). Deep copy creates a new object and recursively clones all nested objects, resulting in two completely independent object graphs. Changes in a shallow copy's nested objects will reflect in the original, whereas in a deep copy, they will not.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Shallow Copy", "Deep Copy"],
              rows: [
                ["Method", "Default 'clone()' behavior", "Must be manually implemented"],
                ["Nested Objects", "Copies references (shared)", "Copies actual values (independent)"],
                ["Complexity", "Simple and fast", "Complex and slower"],
                ["Independence", "Partially independent", "Fully independent"]
              ]
            }
          },
          keyPoints: [
            "Class must implement java.lang.Cloneable.",
            "Object.clone() throws CloneNotSupportedException.",
            "Shallow copy is the default for primitive fields.",
            "Deep copy is safer for objects with mutable members."
          ]
        }
      },
      {
        id: "2c",
        questionText: "Write a Java program to read content from one file and copy it to another file.",
        answer: {
          definition: "File copying in Java involves reading data from a source file using an input stream and writing it to a destination file using an output stream. This process is fundamental to file management applications. Java provides several ways to do this, including the classic 'FileInputStream'/'FileOutputStream' approach or the more modern 'java.nio.file.Files' utility which is more concise and efficient.",
          coreConcepts: "The logic involves opening the source file, creating a buffer (to avoid reading byte-by-byte for performance), reading data into the buffer until the end of the file is reached (-1), and simultaneously writing that buffer to the destination file. Proper closing of streams (using try-with-resources) is crucial to prevent memory leaks.",
          visualRepresentation: {
            type: "flowchart",
            content: "Start -> Open Source File -> Open Dest File -> Read Chunk -> EOF? (Yes: Close/End) -> No: Write Chunk to Dest -> Repeat."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `import java.io.*;

public class FileCopy {
    public static void main(String[] args) {
        // Try-with-resources automatically closes streams
        try (FileInputStream in = new FileInputStream("source.txt");
             FileOutputStream out = new FileOutputStream("dest.txt")) {
            
            byte[] buffer = new byte[1024];
            int length;
            // Read until end of file
            while ((length = in.read(buffer)) > 0) {
                out.write(buffer, 0, length);
            }
            System.out.println("File copied successfully!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
          },
          keyPoints: [
            "FileInputStream is for reading bytes.",
            "FileOutputStream is for writing bytes.",
            "Buffering significantly improves performance.",
            "Always handle IOException."
          ]
        }
      },
      {
        id: "2d",
        questionText: "What are daemon threads in Java?",
        answer: {
          definition: "A daemon thread in Java is a low-priority thread that performs background tasks such as garbage collection, finalization, or background monitoring. Its primary characteristic is that it does not prevent the Java Virtual Machine (JVM) from exiting. If all user threads (non-daemon threads) finish their execution, the JVM will automatically terminate all remaining daemon threads and shut down.",
          coreConcepts: "Daemon threads provide services to user threads. To create a daemon thread, you must call 'setDaemon(true)' on a Thread object before calling 'start()'. Examples include the 'Garbage Collector' (GC) thread which cleans up memory in the background while your main program runs.",
          visualRepresentation: {
            type: "diagram",
            content: "Lifecycle: [JVM Starts] -> [Main User Thread] -> [Daemon Threads (GC, etc)] -> [Main Finishes] -> [JVM Kills Daemons] -> [Shutdown]"
          },
          keyPoints: [
            "Low-priority background threads.",
            "JVM exits when no user threads are alive.",
            "setDaemon(true) must be called before thread start.",
            "Ideal for background maintenance tasks."
          ]
        }
      },
      {
        id: "2e",
        questionText: "Write short note on Graphics 2D.",
        answer: {
          definition: "Graphics2D is an extension of the basic Graphics class in Java, part of the Java 2D API. It provides more sophisticated control over geometry, coordinate transformations, color management, and text layout. It is the fundamental class for rendering 2-dimensional shapes, text, and images in modern Java graphical user interfaces and standalone desktop applications.",
          coreConcepts: "Graphics2D introduces the 'RenderingHints' for quality control (like anti-aliasing), 'Stroke' for defining line thickness and dash patterns, and 'Paint' for advanced fills like gradients and textures. It operates on a coordinate system that supports translation, rotation, and scaling.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Standard Graphics", "Graphics2D"],
              rows: [
                ["Line Thickness", "Fixed (1px)", "Adjustable (BasicStroke)"],
                ["Fills", "Solid colors", "Gradients, Textures"],
                ["Shapes", "Basic (Rect, Oval)", "Complex (Path2D, Shapes API)"],
                ["Quality", "Standard", "Anti-aliasing / Sub-pixel accuracy"]
              ]
            }
          },
          keyPoints: [
            "Extension of java.awt.Graphics.",
            "Provides the 'Stroke' and 'Paint' interfaces.",
            "Supports affine transformations (Rotate, Scale).",
            "Enabled via casting: Graphics2D g2 = (Graphics2D) g;"
          ]
        }
      }
    ]
  },
  {
    id: "set3",
    title: "Question Set 3 (Classes & Objects)",
    questions: [
      {
        id: "3a",
        questionText: "What is constructor and also explain how sub class constructor implicit calls super class constructor in Java.",
        answer: {
          definition: "A constructor is a special block of code that is called when an instance of an object is created. It has the same name as the class and no return type. Its primary purpose is to initialize the newly created object. In inheritance, Java ensures that the parent class is initialized before the child class by making an implicit call to the superclass constructor.",
          coreConcepts: "If a subclass constructor does not explicitly call a superclass constructor using 'super()', the Java compiler automatically inserts an implicit 'super()' call as the first statement in the constructor. This triggers the chain of initialization from the top of the inheritance hierarchy down to the current class. This is known as 'Constructor Chaining'.",
          visualRepresentation: {
            type: "flowchart",
            content: "New SubClass() -> SubClass Constructor -> Implicit super() -> SuperClass Constructor -> Object Init -> SubClass Init finishes."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `class Parent {
    Parent() { System.out.println("Parent Constructor"); }
}

class Child extends Parent {
    Child() {
        // super(); // Implicitly added by compiler
        System.out.println("Child Constructor");
    }
}

// Output: Parent Constructor followed by Child Constructor`
          },
          keyPoints: [
            "Constructors initialize object state.",
            "super() calls the parent constructor.",
            "Implicit call happens only for the no-arg constructor.",
            "Constructor chaining ensures complete object setup."
          ]
        }
      },
      {
        id: "3b",
        questionText: "Explain the concepts of classes and objects in Java with a simple example.",
        answer: {
          definition: "In Java, a class is a user-defined blueprint or template from which objects are created. It defines a set of variables (states) and methods (behaviors) common to all objects of that type. An object is a basic unit of Object-Oriented Programming and represents real-life entities. An object is an 'instance' of a class, meaning it has concrete values for the variables defined in the class.",
          coreConcepts: "Think of a 'Class' as a recipe for a cake, and the 'Object' as the actual cake baked using that recipe. You can bake many cakes (objects) from one recipe (class), and each cake might have different decorations (data) but they all follow the same structure.",
          visualRepresentation: {
            type: "diagram",
            content: "Class: Car [Fields: brand, color | Methods: start(), stop()] --> Objects: [Car1: Tesla, Red] [Car2: BMW, Black]"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// The Class (Blueprint)
class Car {
    String brand;
    void show() { System.out.println("Brand: " + brand); }
}

public class Main {
    public static void main(String[] args) {
        // The Object (Instance)
        Car myCar = new Car();
        myCar.brand = "Toyota";
        myCar.show();
    }
}`
          },
          keyPoints: [
            "Class = Template/Blueprint.",
            "Object = Concrete Instance.",
            "Classes are static; Objects are dynamic (in memory).",
            "A class can have multiple independent objects."
          ]
        }
      }
    ]
  },
  {
    id: "set4",
    title: "Question Set 4 (Inheritance & JVM)",
    questions: [
      {
        id: "4a",
        questionText: "Explain the detailed about various type of inheritance in Java with neat sketch.",
        answer: {
          definition: "Inheritance is a mechanism in which one class acquires the properties and behaviors of another class. It promotes code reusability and establishes a 'parent-child' or 'IS-A' relationship. In Java, classes can inherit from each other using the 'extends' keyword. Java supports several types of inheritance, although it restricts some (like multiple inheritance with classes) to avoid ambiguity.",
          coreConcepts: "1. Single: One child, one parent. 2. Multilevel: A child inherits from a class which is also a child. 3. Hierarchical: Multiple children inherit from one parent. 4. Multiple: A child inherits from multiple parents (Supported only through INTERFACES in Java). 5. Hybrid: Combination of two or more types.",
          visualRepresentation: {
            type: "diagram",
            content: "Sketch: \nSingle: A -> B \nMultilevel: A -> B -> C \nHierarchical: A -> B, A -> C \nMultiple (Interface): I1, I2 -> A"
          },
          keyPoints: [
            "Single inheritance: B extends A.",
            "Multilevel: C extends B, B extends A.",
            "Multiple inheritance of classes is NOT supported (Diamond Problem).",
            "Inheritance promotes the 'DRY' (Don't Repeat Yourself) principle."
          ]
        }
      },
      {
        id: "4b",
        questionText: "What is JVM? Explain the internal architecture of JVM.",
        answer: {
          definition: "JVM (Java Virtual Machine) is an abstract machine that provides a runtime environment in which Java bytecode can be executed. It is part of the JRE (Java Runtime Environment) and is responsible for hardware and platform independence (Write Once, Run Anywhere). The JVM architecture is sophisticated, managing everything from memory to code execution and optimization.",
          coreConcepts: "The JVM architecture consists of three main subsystems: 1. ClassLoader (loads .class files), 2. Runtime Data Areas (Memory like Heap, Stack, Method Area, PC Registers), and 3. Execution Engine (Interpreter, JIT Compiler, Garbage Collector). The JIT (Just-In-Time) compiler improves performance by compiling bytecode to native machine code at runtime.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Component", "Function"],
              rows: [
                ["ClassLoader", "Loading, Linking, and Initializing classes"],
                ["Heap Area", "Storage for all objects/instances (Shared)"],
                ["Stack Area", "Storage for local variables and partial results"],
                ["Method Area", "Storage for class structure and static fields"],
                ["Execution Engine", "Executes bytecode using Interpreter or JIT"]
              ]
            }
          },
          keyPoints: [
            "JVM is platform-dependent (implementations vary).",
            "It makes Java 'Platform Independent'.",
            "Memory management is automated (Garbage Collection).",
            "It acts as a bridge between Bytecode and Hardware."
          ]
        }
      }
    ]
  },
  {
    id: "set5",
    title: "Question Set 5 (Exceptions & Files)",
    questions: [
      {
        id: "5a",
        questionText: "Explain the concept of exception handling in Java. Describe how the throwing and catching mechanism works.",
        answer: {
          definition: "Exception handling is a powerful mechanism that allows a program to handle runtime errors (like division by zero or file not found) gracefully without crashing. It uses a structured approach involving five keywords: try, catch, finally, throw, and throws. By separating error-handling code from regular business logic, it makes programs robust and maintainable.",
          coreConcepts: "The 'Throwing' mechanism creates an exception object when an error occurs and hands it to the JVM. The 'Catching' mechanism involves the JVM searching the call stack for a 'catch' block that can handle that specific exception type. If a match is found, the block executes; if not, the program terminates.",
          visualRepresentation: {
            type: "flowchart",
            content: "Error Occurs -> Exception Object Created -> try block -> catch block? (Yes: Execute) -> No: Propagate up -> finally block (Always executes) -> End."
          },
          implementation: {
            type: "code",
            language: "java",
            content: `try {
    int data = 50 / 0; // ArithmeticException thrown
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
} finally {
    System.out.println("This block always runs.");
}`
          },
          keyPoints: [
            "Separates error code from main code.",
            "Maintains normal flow of the application.",
            "Exceptions are objects of type Throwable.",
            "finally is used for cleanup (closing files/connections)."
          ]
        }
      },
      {
        id: "5b",
        questionText: "Discuss the various type of file in Java and explain the process of file handling.",
        answer: {
          definition: "File handling in Java is the process of performing input and output operations on a file. Java treats files as streams of data. There are two primary types of streams: Byte Streams (for binary data like images, using classes like FileInputStream) and Character Streams (for text data, using classes like FileReader). This distinction allows Java to handle various file formats and character encodings (like Unicode) efficiently.",
          coreConcepts: "The process involves: 1. Creating a File object, 2. Opening a stream for reading or writing, 3. Performing the I/O operations, and 4. Closing the stream. Java's 'java.io' and 'java.nio' packages provide the necessary classes for these operations.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Stream Type", "Base Class (Input)", "Base Class (Output)", "Best for"],
              rows: [
                ["Byte Stream", "InputStream", "OutputStream", "Binary (Images/PDF)"],
                ["Character Stream", "Reader", "Writer", "Text (TXT/HTML)"]
              ]
            }
          },
          keyPoints: [
            "Everything in I/O is a 'Stream'.",
            "NIO (New I/O) is preferred for high-performance apps.",
            "Buffered streams should be used for better efficiency.",
            "Serialization allows saving objects to files."
          ]
        }
      }
    ]
  },
  {
    id: "set6",
    title: "Question Set 6 (Generics & Threads)",
    questions: [
      {
        id: "6a",
        questionText: "Explain the concept of bounded types in Java Generics.",
        answer: {
          definition: "Bounded types in Java Generics allow you to restrict the types that can be used as type arguments in a parameterized class or method. By default, a type parameter <T> can be any object. Bounded types use the 'extends' (for upper bounds) or 'super' (for lower bounds) keywords to specify that a type must be a subclass of a particular class or implement a specific interface.",
          coreConcepts: "Upper Bounded Wildcards (<T extends Number>) ensure that the type parameter is either the specified class or a subclass of it. This allows the method to call methods of the bounding class (e.g., .doubleValue() on a Number). This increases type safety and enables more specific operations on generic types.",
          visualRepresentation: {
            type: "diagram",
            content: "Constraint: [T extends Number] -> Accepts: Integer, Double, Float | Rejects: String, Boolean"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `// Generic method with bounded type
public static <T extends Number> void printDouble(T value) {
    System.out.println(value.doubleValue());
}

// Usage
printDouble(10); // Works (Integer)
printDouble(5.5); // Works (Double)
// printDouble("Hello"); // Compile-time Error!`
          },
          keyPoints: [
            "Restricts the range of types for a generic parameter.",
            "Uses 'extends' for upper bounds.",
            "Enables access to methods of the bound class.",
            "Improves compile-time type checking."
          ]
        }
      },
      {
        id: "6b",
        questionText: "Explain the life cycle of thread in Java with diagram.",
        answer: {
          definition: "The lifecycle of a thread in Java represents the various states a thread transitions through from the moment it is created until it finishes execution. Managed by the JVM and the underlying OS scheduler, understanding these states is crucial for writing efficient concurrent applications and debugging synchronization issues.",
          coreConcepts: "The 5 primary states are: 1. NEW (created but not started), 2. RUNNABLE (ready to run, waiting for CPU), 3. BLOCKED/WAITING (paused for resources or notification), 4. TIMED_WAITING (paused for a specific interval), and 5. TERMINATED (execution finished).",
          visualRepresentation: {
            type: "flowchart",
            content: "New -> (start) -> Runnable -> (scheduler) -> Running -> (sleep/wait) -> Waiting -> (notify) -> Runnable -> (finish) -> Terminated"
          },
          keyPoints: [
            "New: start() hasn't been called.",
            "Runnable: Includes both running and ready-to-run.",
            "Waiting: Thread waits indefinitely for another thread.",
            "Terminated: A dead thread cannot be restarted."
          ]
        }
      }
    ]
  },
  {
    id: "set7",
    title: "Question Set 7 (GUI & Swing)",
    questions: [
      {
        id: "7a",
        questionText: "What is event handling in Java? Explain in detail.",
        answer: {
          definition: "Event handling is the mechanism that controls the event and decides what should happen if an event occurs. In Java GUI programming (AWT/Swing), an event is an object that describes a state change in a source (like clicking a button or moving the mouse). Java uses the 'Delegation Event Model', where the source of the event delegates the handling task to a separate 'Listener' object.",
          coreConcepts: "The three main components are: 1. Event Source (the component, e.g., JButton), 2. Event Object (the description, e.g., ActionEvent), and 3. Event Listener (the interface that receives and processes the event, e.g., ActionListener). The programmer must 'register' the listener with the source.",
          visualRepresentation: {
            type: "diagram",
            content: "Flow: [User Interaction] -> [Event Source] -> (generates) -> [Event Object] -> (sent to) -> [Registered Listener] -> [Action Performed]"
          },
          implementation: {
            type: "code",
            language: "java",
            content: `JButton btn = new JButton("Click Me");

// Registering an ActionListener using an anonymous class
btn.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button Clicked!");
    }
});`
          },
          keyPoints: [
            "Delegation Event Model is standard.",
            "Listener interfaces define the 'callback' methods.",
            "Sources can have multiple listeners.",
            "Adapters are used to simplify listener implementation."
          ]
        }
      },
      {
        id: "7b",
        questionText: "What is Java Swing? How is it different from AWT? Explain in detail.",
        answer: {
          definition: "Java Swing is a GUI widget toolkit which is an extension of the Abstract Window Toolkit (AWT). It is part of the Java Foundation Classes (JFC). Swing provides a rich set of platform-independent, 'lightweight' components for building modern user interfaces. Unlike AWT, which relies on the operating system's native resources, Swing components are written entirely in Java, allowing for a consistent look and feel across different platforms.",
          coreConcepts: "The primary difference is that AWT is 'Heavyweight' (uses OS-specific peers) while Swing is 'Lightweight' (rendered by Java). Swing supports 'Pluggable Look and Feel', allowing the UI to mimic Windows, Motif, or Metal themes dynamically. Swing components also follow the Model-View-Controller (MVC) pattern more strictly.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "AWT (Abstract Window Toolkit)", "Swing"],
              rows: [
                ["Platform", "Platform-dependent", "Platform-independent"],
                ["Weight", "Heavyweight (Native)", "Lightweight (Java-based)"],
                ["Components", "Limited (Button, Label)", "Extensive (JTable, JTree)"],
                ["Look & Feel", "OS-specific", "Pluggable (Themes)"],
                ["Package", "java.awt", "javax.swing"]
              ]
            }
          },
          keyPoints: [
            "Swing components start with 'J' (e.g., JButton).",
            "Swing is more powerful and flexible.",
            "AWT is faster for very simple apps due to native speed.",
            "Swing is the industry standard for Java Desktop Apps."
          ]
        }
      }
    ]
  }
];
