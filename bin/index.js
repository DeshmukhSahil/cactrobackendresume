#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import wrap from "wrap-ansi";

// Limit output width so it looks good on most terminals
const width = Math.min(process.stdout.columns || 100, 110);

// Small helpers for consistent styling
const h1 = (t) => chalk.bold.cyan(t);
const h2 = (t) => chalk.bold.yellow(t);
const dim = chalk.gray;

// Wrap long paragraphs so they don’t overflow the box
const wrapText = (t) => wrap(t, width - 6, { hard: true });

// Central place to manage all external links
const linkMap = {
  portfolio: "https://portfolio-livid-eta-49.vercel.app",
  ottPreview: "https://ott-preview.vercel.app",
  ottWalkthroughs:
    "https://drive.google.com/drive/folders/1dGySwdA3bSbCfAUjN0FSlYGenQacGQ4_",
  ottWorklogs:
    "https://drive.google.com/drive/folders/1gDDDb7i7DSTD7an47o_mDPr7S2qGIoLA",
  notion:
    "https://adjoining-gauge-f41.notion.site/Sahil-Deshmukh-Full-Stack-Developer-28a82d41fac5809480a7c7fb40d44880",
  resumeBuilder: "https://resume-builder-react-app.vercel.app",
  bookMyShow: "https://bookmyshow-frontend-eight.vercel.app",
};

// Ensures URLs are clickable in terminals and visually distinct
function fmtUrl(url) {
  if (!url) return chalk.dim("(link not provided)");
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  return chalk.underline(url);
}

// Prints a label with the URL wrapped neatly below it
// Useful for very long links like Google Drive / Notion
function wrappedLink(label, url) {
  const labelText = chalk.hex("#FFE66D").bold(label + ":");

  if (!url) {
    return `${labelText}\n  ${chalk.dim("(link not provided)")}`;
  }

  if (!/^https?:\/\//i.test(url)) url = "https://" + url;

  const wrapped = wrap(chalk.underline(url), width - 8, { hard: true })
    .split("\n")
    .map((line, i) => (i === 0 ? line : "  " + line))
    .join("\n");

  return `${labelText}\n  ${wrapped}`;
}

// Header / basic info
const header = [
  h1("SAHIL DESHMUKH"),
  chalk.white("Full Stack Developer | MERN + MEAN | Java + Spring Boot | DevOps"),
  "",
  `${chalk.hex("#FFE66D").bold("Phone:")} 7020676394`,
  `${chalk.hex("#FFE66D").bold("Email:")} sahildeshmukh2898@gmail.com`,
  `${chalk.hex("#FFE66D").bold("Address:")} Khamgaon, Maharashtra`,
  `${chalk.hex("#FFE66D").bold("LinkedIn:")} ${fmtUrl(
    "https://linkedin.com/in/deshmukhsahil"
  )}`,
  `${chalk.hex("#FFE66D").bold("GitHub:")} ${fmtUrl(
    "https://github.com/DeshmukhSahil"
  )}`,
  `${chalk.hex("#FFE66D").bold("Portfolio:")} ${fmtUrl(linkMap.portfolio)}`,
].join("\n");

// Short professional summary
const summary = [
  h2("Summary"),
  wrapText(
    "Full-stack developer with 2+ years building real products across MERN, real-time systems, cloud, and AI tools. Delivered a 2,500+ users OTT platform and an OCR-powered EdTech system. Skilled in scalable APIs, AWS S3/EC2, video pipelines, and advanced React UX. Passionate about shipping clean, end-to-end solutions."
  ),
].join("\n\n");

// Work experience
const experience = [
  h2("Work Experience"),
  "",
  chalk.bold("Full-Stack Lead (Freelance) — OTT Streaming Platform"),
  dim("(Client: Independent Film Director) | Mar 2024 – Jul 2025"),
  `${chalk.hex("#FFE66D").bold("Demo:")} ${fmtUrl(linkMap.ottPreview)}`,
  "",
  "• Led end-to-end development of a full-scale OTT platform, owning architecture, backend, frontend, cloud infrastructure, and performance optimization.",
  "• Built and launched Web + PWA + Capacitor apps with artist profiles, community pages, subscriptions, purchase flows, and job portal.",
  "• Onboarded 2,500+ users during early growth phase.",
  "• Designed complete video pipeline using FFmpeg encoding, AWS S3 storage with signed URLs, and optimized HLS/DASH streaming via Shaka Player.",
  "• Implemented secure authentication using JWT, RBAC, Google OAuth, and SMTP/OTP workflows.",
  "• Developed IMDb-style artist portfolios, community posts, auditions, categories/search, CMS, Continue Watching, analytics, and admin moderation.",
  "• Built real-time chat and notifications with Socket.IO using a hybrid encryption model and moderated onboarding flow.",
  "• Improved ops and performance: Docker, NGINX + SSL, CI/CD (GitHub Actions), EC2/S3 deployments, image compression 12MB → 170KB, Lighthouse 90–100%.",
  "• Integrated Razorpay subscriptions and one-time purchases with admin analytics dashboard.",
  "",
  wrappedLink("Worklogs", linkMap.ottWorklogs),
  "",
  wrappedLink("Walkthroughs", linkMap.ottWalkthroughs),
  "",
  "Tech: React, Redux, Node.js, Express, MongoDB, FFmpeg, Socket.IO, AWS EC2/S3, Docker, NGINX, GitHub Actions, Capacitor",
  "",
  "---",
  "",
  chalk.bold("Full Stack Web Developer — Independent Edu-Tech Project"),
  dim("Startup-Driven Project | 2025 – Present"),
  "",
  "• Built full product: search-driven question discovery, timed assessments, scoring dashboards, and doubt-resolution workflow.",
  "• Custom inline math editor using contentEditable + MathLive + Slate.js.",
  "• Designed hybrid OCR pipeline combining Tesseract.js, Pix2Tex, and Mathpix.",
  "• Implemented client-side preprocessing to improve OCR confidence.",
  "• Built scalable Node/Express backend with async OCR workers.",
  "• Optimized mobile UX for low-end devices.",
  "",
  "Outcome:",
  "Working prototype with real-time formula recognition and OCR-driven assessments.",
  "",
  "Tech: React, MathLive, Slate.js, Node.js, Express, MongoDB, Tesseract.js, Pix2Tex",
].join("\n");

// Education
const education = [
  h2("Education"),
  "",
  "2016 – 2022",
  "Bachelor of Engineering (Computer Science & Engineering)",
  "P. R. Pote College of Engineering & Management, Amravati",
  "CGPA: 8.32",
  "",
  "2014 – 2016",
  "Senior Secondary School (XII)",
  "Shri A. K. National High School & Jr. College, Khamgaon",
  "Percentage: 59.08%",
].join("\n");

// Skill set
const skills = [
  h2("Skills"),
  "",
  "Frontend:",
  "React.js • Redux • Angular • JavaScript • TypeScript • HTML • CSS",
  "",
  "Backend:",
  "Node.js • Express.js • Java • Spring Boot • Spring Security • JPA • Hibernate • REST APIs • JWT • OAuth",
  "",
  "Databases:",
  "MongoDB • MySQL • SQL",
  "",
  "DevOps / Cloud:",
  "AWS (EC2, S3) • Docker • NGINX • CI/CD",
  "",
  "Streaming:",
  "FFmpeg • HLS / DASH",
  "",
  "OCR:",
  "Formula Extraction • Image Preprocessing • LaTeX",
].join("\n");

// Certifications / training
const certifications = [
  h2("Certifications"),
  "",
  "• Web Development Trainee — AlmaBetter (Jan 2023 – Jul 2023)",
  "• Independent Learning: Java + Spring Boot (Jul 2023 – Present)",
  "• Resume Builder Project — AlmaBetter (05/2023)",
  "• BookMyShow Project — AlmaBetter (06/2023)",
].join("\n");

// External links
const links = [
  h2("Links"),
  "",
  wrappedLink("Portfolio", linkMap.portfolio),
  "",
  wrappedLink("OTT Project Preview", linkMap.ottPreview),
  "",
  wrappedLink("OTT Walkthroughs", linkMap.ottWalkthroughs),
  "",
  wrappedLink("OTT Worklogs", linkMap.ottWorklogs),
  "",
  wrappedLink("Notion", linkMap.notion),
  "",
  wrappedLink("Resume Builder", linkMap.resumeBuilder),
  "",
  wrappedLink("BookMyShow", linkMap.bookMyShow),
].join("\n");

// Combine everything into one printable block
const finalText = [
  header,
  "",
  summary,
  "",
  experience,
  "",
  education,
  "",
  skills,
  "",
  certifications,
  "",
  links,
].join("\n");

// Render inside a clean terminal box
const output = boxen(finalText, {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan",
  width: Math.min(width, 110),
});

console.log(output);
