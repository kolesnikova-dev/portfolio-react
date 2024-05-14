<h2>Portfolio Website</h2>
<p>This repository contains a single-page application built with React and Vite, leveraging React Router for navigation.</p>
<p>All data is abstracted into a separate file, which helps maintain the application's codebase and facilitates future updates.</p>
<p>The <code>useState</code> Hook is utilized throughout the application to enhance functionality. For instance, in the Projects component, it enables the carousel feature, while in the Certifications section, it enables overlay functionality. Additionally, in the Contacts component, <code>useState</code> keeps track of whether an email has been copied to the clipboard, dynamically changing the 'click to copy' button to 'copied' and back.</p>
<p>In the Contacts component, external links are generated from a centralized array. The titles 'Actively updated account' and 'Original account' are rendered conditionally based on the URL being accessed.</p>
<p>The following components are designed with reusability in mind:</p>
<ul>
<li>Button: Used in the Project and Card components</li>
<li>Card: Utilized in the Certification and Skills components</li>
<li>NavBar: Also employed in the Footer component</li>
</ul>
