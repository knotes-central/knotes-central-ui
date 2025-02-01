export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Knotes Central</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Knotes Central is a comprehensive collection of academic resources for
        RVCE. Our mission is to provide students with easy access to a wide
        range of study materials, including notes, question papers, and lab
        manuals, to help them excel in their academic pursuits.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We envision a world where every student has the resources they need to
        succeed academically. By centralizing and organizing these resources, we
        aim to make studying more efficient and effective for students at RVCE.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Our team is composed of dedicated students and educators who are
        passionate about education and technology. We work tirelessly to gather,
        organize, and update the resources available on Knotes Central to ensure
        they are accurate and up-to-date.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="text-gray-700 dark:text-gray-300">
        If you have any questions, suggestions, or feedback, please feel free to{" "}
        <a
          href="/contact"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          contact us
        </a>
        . We are always looking for ways to improve and would love to hear from
        you.
      </p>
    </div>
  );
}
